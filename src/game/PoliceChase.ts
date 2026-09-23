// VELOCITY X - High-Speed Police Chase AI, Red-Blue Strobes & PIT Maneuvers
import * as THREE from 'three';
import { audioManager } from './AudioManager';
import { HapticsManager } from './HapticsManager';

export type ChaseState = 'IDLE' | 'WARNING' | 'PURSUIT' | 'EVADED' | 'BUSTED';

export interface PoliceCruiser {
  mesh: THREE.Group;
  speedKmh: number;
  targetLaneX: number;
  lateralVel: number;
  bounds: THREE.Box3;
  size: THREE.Vector3;
  redLight: THREE.PointLight;
  blueLight: THREE.PointLight;
  redMesh: THREE.Mesh;
  blueMesh: THREE.Mesh;
  active: boolean;
}

export class PoliceChase {
  private scene: THREE.Scene;
  public state: ChaseState = 'IDLE';
  public cruisers: PoliceCruiser[] = [];

  // Timers & Triggers
  public pursuitScore = 0;
  private timeInPursuit = 0;
  private evasionTimer = 0;
  private strobeTimer = 0;
  private strobePhase = false;
  private ramCooldown = 0;

  // Visual Alert State for HUD/Post-processing
  public redBlueFlashIntensity = 0; // 0..1 for screen-edge vignetting
  public distanceToClosest = 999;
  private scratchBoundsCenter = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initCruisers();
  }

  private initCruisers(): void {
    // 2 police cruisers
    for (let i = 0; i < 2; i++) {
      const cruiser = this.buildPoliceCruiserModel();
      cruiser.mesh.position.set(i === 0 ? -1.8 : 1.8, 0, -999);
      this.scene.add(cruiser.mesh);
      this.cruisers.push(cruiser);
    }
  }

  private buildPoliceCruiserModel(): PoliceCruiser {
    const group = new THREE.Group();
    const size = new THREE.Vector3(2.1, 1.45, 4.6);

    // Black & White Police Interceptor Body
    const bodyGeom = new THREE.BoxGeometry(2.1, 0.48, 4.6);
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x090a0f, metalness: 0.8, roughness: 0.2 });
    const body = new THREE.Mesh(bodyGeom, blackMat);
    body.position.y = 0.4;
    body.castShadow = true;
    group.add(body);

    // White Center Doors / Livery
    const doorLiveryGeom = new THREE.BoxGeometry(2.12, 0.44, 1.8);
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf0f4f8, metalness: 0.4, roughness: 0.3 });
    const doorLivery = new THREE.Mesh(doorLiveryGeom, whiteMat);
    doorLivery.position.set(0, 0.4, 0);
    group.add(doorLivery);

    // Dark Tinted Cabin
    const cabinGeom = new THREE.BoxGeometry(1.7, 0.52, 2.3);
    const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x06090e, roughness: 0.1, metalness: 0.9, opacity: 0.9, transparent: true });
    const cabin = new THREE.Mesh(cabinGeom, glassMat);
    cabin.position.set(0, 0.82, -0.15);
    group.add(cabin);

    // Heavy Steel Push Bumper (Bullbar)
    const bullbarGeom = new THREE.BoxGeometry(1.9, 0.35, 0.2);
    const bullbarMat = new THREE.MeshStandardMaterial({ color: 0x22262e, metalness: 0.9, roughness: 0.3 });
    const bullbar = new THREE.Mesh(bullbarGeom, bullbarMat);
    bullbar.position.set(0, 0.38, 2.35);
    group.add(bullbar);

    // Roof Lightbar (Dual Red & Blue Strobes)
    const barBaseGeom = new THREE.BoxGeometry(1.2, 0.08, 0.2);
    const barBase = new THREE.Mesh(barBaseGeom, bullbarMat);
    barBase.position.set(0, 1.12, -0.2);
    group.add(barBase);

    // Flashing Strobe Caps — emissive materials for bloom glow
    const strobeGeom = new THREE.BoxGeometry(0.45, 0.12, 0.18);
    // MeshStandardMaterial + emissive = UnrealBloomPass pick karega
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xff0022,
      emissive: new THREE.Color(0xff0022),
      emissiveIntensity: 5.0, // bloom threshold se upar
      roughness: 0.0,
    });
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x0055ff,
      emissive: new THREE.Color(0x0055ff),
      emissiveIntensity: 5.0,
      roughness: 0.0,
    });

    const redMesh = new THREE.Mesh(strobeGeom, redMat);
    redMesh.position.set(-0.35, 1.18, -0.2);
    group.add(redMesh);

    const blueMesh = new THREE.Mesh(strobeGeom, blueMat);
    blueMesh.position.set(0.35, 1.18, -0.2);
    group.add(blueMesh);

    // High-Intensity PointLights — wider range for dramatic road illumination
    const redLight = new THREE.PointLight(0xff0022, 4.5, 20);
    redLight.position.set(-0.35, 1.3, -0.2);
    group.add(redLight);

    const blueLight = new THREE.PointLight(0x0066ff, 4.5, 20);
    blueLight.position.set(0.35, 1.3, -0.2);
    group.add(blueLight);

    // 4 Wheels
    const wheelGeom = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 16);
    wheelGeom.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.8 });
    const wheelPositions = [
      [-0.98, 0.34, 1.35],
      [0.98, 0.34, 1.35],
      [-0.98, 0.34, -1.35],
      [0.98, 0.34, -1.35],
    ];
    for (const [wx, wy, wz] of wheelPositions) {
      const w = new THREE.Mesh(wheelGeom, tireMat);
      w.position.set(wx, wy, wz);
      group.add(w);
    }

    return {
      mesh: group,
      speedKmh: 200,
      targetLaneX: 0,
      lateralVel: 0,
      bounds: new THREE.Box3(),
      size,
      redLight,
      blueLight,
      redMesh,
      blueMesh,
      active: false,
    };
  }

  public triggerPursuit(playerZ: number, playerLaneX: number): void {
    if (this.state === 'PURSUIT') return;

    this.state = 'PURSUIT';
    this.timeInPursuit = 0;
    this.evasionTimer = 0;
    this.ramCooldown = 1.5;

    // Spawn cruisers behind player (-Z)
    const offsets = [-18, -32];
    const lanes = [playerLaneX > 0 ? -1.8 : 1.8, playerLaneX];

    this.cruisers.forEach((c, idx) => {
      c.active = true;
      c.speedKmh = 270;
      c.targetLaneX = lanes[idx];
      c.mesh.position.set(lanes[idx], 0, playerZ + offsets[idx]);
      this.updateCruiserBounds(c);
    });

    audioManager.updateSiren(true, 0.3, 0);
  }

  public update(
    delta: number,
    playerZ: number,
    playerX: number,
    playerSpeedKmh: number,
    playerBounds: THREE.Box3,
    onBusted: () => void,
    onEvaded: (bonus: number) => void,
    onPoliceRam?: (pushForceX: number) => void
  ): void {
    if (this.state !== 'PURSUIT') {
      this.redBlueFlashIntensity = 0;
      audioManager.updateSiren(false, 1, 0);
      return;
    }

    this.timeInPursuit += delta;
    this.ramCooldown -= delta;

    // 1. High-Frequency Strobe Animation (8 Hz flashing)
    this.strobeTimer += delta * 16;
    if (this.strobeTimer > 1) {
      this.strobeTimer = 0;
      this.strobePhase = !this.strobePhase;
    }

    const redOn = this.strobePhase;
    const blueOn = !this.strobePhase;

    this.redBlueFlashIntensity = 0.45 + (this.strobePhase ? 0.35 : -0.2);

    let closestDist = 999;
    let avgPanX = 0;

    // 2. Cruiser AI Behaviors
    for (let i = 0; i < this.cruisers.length; i++) {
      const c = this.cruisers[i];
      if (!c.active) continue;

      // Strobe update: emissiveIntensity toggle for bloom effect
      const redEmissive = redOn ? 5.0 : 0.05;
      const blueEmissive = blueOn ? 5.0 : 0.05;
      c.redLight.intensity = redOn ? 4.5 : 0.1;
      c.blueLight.intensity = blueOn ? 4.5 : 0.1;
      (c.redMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = redEmissive;
      (c.blueMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = blueEmissive;

      // Cruiser distance along Z relative to player
      const dz = c.mesh.position.z - playerZ;
      const absDz = Math.abs(dz);
      if (absDz < closestDist) {
        closestDist = absDz;
        avgPanX = c.mesh.position.x - playerX;
      }

      // Cruiser Speed Modulation: Matches player speed + aggressive catchup
      if (dz < -4) {
        // Behind player: accelerate aggressively to catch up
        c.speedKmh = Math.max(playerSpeedKmh + 28, 260);
      } else if (dz > 6) {
        // Ahead of player: slow down to box in
        c.speedKmh = Math.max(60, playerSpeedKmh - 15);
      } else {
        // Alongside player: match speed closely
        c.speedKmh = playerSpeedKmh + (i === 0 ? 4 : -3);
      }

      // Forward motion
      c.mesh.position.z += (c.speedKmh / 3.6) * delta;

      // Lateral AI: Flanking and PIT Ramming
      if (i === 0) {
        // Lead Interceptor: tries to pull alongside player and execute PIT maneuver
        if (Math.abs(dz) < 3.5 && this.ramCooldown <= 0) {
          // Ram into player quarter-panel!
          c.targetLaneX = playerX;
          this.ramCooldown = 2.2;
          HapticsManager.policeImpact();
        } else {
          // Flank adjacent lane
          c.targetLaneX = playerX > 0 ? playerX - 3.2 : playerX + 3.2;
        }
      } else {
        // Support Cruiser: tails behind directly to pressure
        c.targetLaneX = playerX;
      }

      // Smooth lateral movement towards target
      c.mesh.position.x = THREE.MathUtils.lerp(c.mesh.position.x, c.targetLaneX, delta * 3.8);
      this.updateCruiserBounds(c);

      // Ramming / Collision with player - apply real physical impulse
      if (playerBounds.intersectsBox(c.bounds)) {
        HapticsManager.policeImpact();
        const pushDir = c.mesh.position.x < playerX ? 1 : -1;
        onPoliceRam?.(pushDir * 4.2 * delta);
      }
    }

    this.distanceToClosest = closestDist;

    // Update Siren Audio Volume & Pan based on closest cruiser
    const distanceFactor = Math.min(1, closestDist / 60);
    audioManager.updateSiren(true, distanceFactor, avgPanX);

    // 3. Evasion Check: If player is > 75 meters ahead of police for > 4.5 seconds
    if (closestDist > 75 && playerSpeedKmh > 180) {
      this.evasionTimer += delta;
      if (this.evasionTimer > 4.5) {
        this.state = 'EVADED';
        this.cruisers.forEach(c => (c.active = false));
        audioManager.updateSiren(false, 1, 0);
        onEvaded(1000); // +1000 coins!
      }
    } else {
      this.evasionTimer = Math.max(0, this.evasionTimer - delta * 0.8);
    }

    // 4. Busted Check: If player is trapped (speed < 25 km/h while cruisers are touching/close)
    if (closestDist < 5.5 && playerSpeedKmh < 22 && this.timeInPursuit > 2) {
      this.state = 'BUSTED';
      audioManager.updateSiren(false, 1, 0);
      onBusted();
    }
  }

  private updateCruiserBounds(c: PoliceCruiser): void {
    this.scratchBoundsCenter.set(
      c.mesh.position.x,
      c.mesh.position.y + c.size.y / 2,
      c.mesh.position.z
    );
    c.bounds.setFromCenterAndSize(this.scratchBoundsCenter, c.size);
  }

  public reset(): void {
    this.state = 'IDLE';
    this.timeInPursuit = 0;
    this.evasionTimer = 0;
    this.redBlueFlashIntensity = 0;
    this.cruisers.forEach(c => {
      c.active = false;
      c.mesh.position.set(0, -999, 0);
    });
    audioManager.updateSiren(false, 1, 0);
  }

  public dispose(): void {
    for (const c of this.cruisers) {
      this.scene.remove(c.mesh);
      c.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else if (child.material) {
            child.material.dispose();
          }
        }
      });
      c.redLight.dispose();
      c.blueLight.dispose();
    }
  }
}
