// VELOCITY X - High-Speed Police Chase AI, Tactical Flanking & Anti-Camera Occlusion
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { audioManager } from './AudioManager';
import { HapticsManager } from './HapticsManager';
import { PlayerCar } from './PlayerCar';

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
  grilleRedMesh: THREE.Mesh;
  grilleBlueMesh: THREE.Mesh;
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
    // Preload authentic 3D supercar interceptor model for instant pursuit rendering
    PlayerCar.preloadModel('./models/supercar_1.glb').catch(() => {});
    this.initCruisers();
  }

  private initCruisers(): void {
    // 2 police cruisers
    for (let i = 0; i < 2; i++) {
      const cruiser = this.buildPoliceCruiserModel();
      cruiser.mesh.position.set(i === 0 ? -2.2 : 2.2, 0, -999);
      this.scene.add(cruiser.mesh);
      this.cruisers.push(cruiser);
    }
  }

  private buildPoliceCruiserModel(): PoliceCruiser {
    const group = new THREE.Group();
    const size = new THREE.Vector3(2.1, 1.45, 4.75);

    // Strobe Materials for High-Intensity Bloom
    const redMat = new THREE.MeshStandardMaterial({
      color: 0xff002b,
      emissive: new THREE.Color(0xff002b),
      emissiveIntensity: 5.5,
      roughness: 0.0,
    });
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x0055ff,
      emissive: new THREE.Color(0x0055ff),
      emissiveIntensity: 5.5,
      roughness: 0.0,
    });

    // 1. Ultra-Low Profile Rooftop Emergency LED Lightbar
    const barGroup = new THREE.Group();
    barGroup.position.set(0, 1.25, -0.2);

    const barBaseGeom = new THREE.BoxGeometry(1.15, 0.04, 0.16);
    const barBaseMat = new THREE.MeshStandardMaterial({ color: 0x111318, metalness: 0.9, roughness: 0.2 });
    const barBase = new THREE.Mesh(barBaseGeom, barBaseMat);
    barGroup.add(barBase);

    // Rooftop Flashing Strobe Caps
    const strobeGeom = new THREE.BoxGeometry(0.44, 0.08, 0.14);
    const redMesh = new THREE.Mesh(strobeGeom, redMat);
    redMesh.position.set(-0.32, 0.05, 0);
    barGroup.add(redMesh);

    const blueMesh = new THREE.Mesh(strobeGeom, blueMat);
    blueMesh.position.set(0.32, 0.05, 0);
    barGroup.add(blueMesh);

    // Center Takedown Light
    const takedownGeom = new THREE.BoxGeometry(0.14, 0.08, 0.14);
    const takedownMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 3.5,
    });
    const takedownMesh = new THREE.Mesh(takedownGeom, takedownMat);
    takedownMesh.position.set(0, 0.05, 0);
    barGroup.add(takedownMesh);

    group.add(barGroup);

    // 2. Front Grille Wig-Wag Strobes
    const wigWagGeom = new THREE.BoxGeometry(0.24, 0.09, 0.06);
    const grilleRedMesh = new THREE.Mesh(wigWagGeom, redMat);
    grilleRedMesh.position.set(-0.58, 0.42, 2.36);
    group.add(grilleRedMesh);

    const grilleBlueMesh = new THREE.Mesh(wigWagGeom, blueMat);
    grilleBlueMesh.position.set(0.58, 0.42, 2.36);
    group.add(grilleBlueMesh);

    // 3. Heavy Steel Push Bumper (Tactical Bullbar) with Ramming Posts
    const bullbarMat = new THREE.MeshStandardMaterial({
      color: 0x181c24,
      metalness: 0.92,
      roughness: 0.25,
    });
    const bullbarCrossGeom = new THREE.BoxGeometry(1.78, 0.28, 0.14);
    const bullbarCross = new THREE.Mesh(bullbarCrossGeom, bullbarMat);
    bullbarCross.position.set(0, 0.38, 2.38);
    group.add(bullbarCross);

    const postGeom = new THREE.BoxGeometry(0.12, 0.44, 0.18);
    const postLeft = new THREE.Mesh(postGeom, bullbarMat);
    postLeft.position.set(-0.48, 0.42, 2.4);
    group.add(postLeft);

    const postRight = new THREE.Mesh(postGeom, bullbarMat);
    postRight.position.set(0.48, 0.42, 2.4);
    group.add(postRight);

    // 4. High-Intensity Dynamic PointLights
    const redLight = new THREE.PointLight(0xff002b, 4.5, 22);
    redLight.position.set(-0.32, 1.35, -0.2);
    group.add(redLight);

    const blueLight = new THREE.PointLight(0x0055ff, 4.5, 22);
    blueLight.position.set(0.32, 1.35, -0.2);
    group.add(blueLight);

    // 5. Authentic 3D GLB Supercar Interceptor Body
    const modelPath = './models/supercar_1.glb';
    const rotY = Math.PI; // faces +Z forward
    const targetLength = 4.75;

    const carBodyHolder = new THREE.Group();
    group.add(carBodyHolder);

    if (PlayerCar.cachedGLTFs.has(modelPath)) {
      const gltf = PlayerCar.cachedGLTFs.get(modelPath);
      this.applySupercarPoliceScene(carBodyHolder, gltf, rotY, targetLength);
    } else {
      PlayerCar.preloadModel(modelPath).then((gltf) => {
        while (carBodyHolder.children.length > 0) {
          const c = carBodyHolder.children[0];
          carBodyHolder.remove(c);
          c.traverse?.((child: any) => {
            if (child.isMesh && child.geometry) child.geometry.dispose();
          });
        }
        this.applySupercarPoliceScene(carBodyHolder, gltf, rotY, targetLength);
      }).catch((err) => {
        console.warn(`[PoliceChase] Failed to load GLB for police cruiser:`, err);
      });
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
      grilleRedMesh,
      grilleBlueMesh,
      active: false,
    };
  }

  /**
   * Applies authentic 3D GLB supercar geometry with Highway Patrol Interceptor livery
   */
  private applySupercarPoliceScene(
    targetGroup: THREE.Group,
    gltf: any,
    rotY: number,
    targetLength: number
  ): void {
    const scene = SkeletonUtils.clone(gltf.scene) as THREE.Group;

    // Align front with +Z
    scene.rotation.y = rotY;
    scene.updateMatrixWorld(true);

    // Normalize scale to realistic supercar length in meters
    const initialBbox = new THREE.Box3().setFromObject(scene);
    const initialSize = new THREE.Vector3();
    initialBbox.getSize(initialSize);

    const currentLength = initialSize.z > 0.1 ? initialSize.z : Math.max(initialSize.x, initialSize.y);
    const scaleFactor = targetLength / currentLength;
    scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
    scene.updateMatrixWorld(true);

    // Ground tires flush with asphalt (y = 0) and center on X & Z
    const finalBbox = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    finalBbox.getCenter(center);

    scene.position.x = -center.x;
    scene.position.z = -center.z;
    scene.position.y = -finalBbox.min.y;
    scene.updateMatrixWorld(true);

    // High-Gloss Highway Patrol Obsidian Black Paint
    const policeBlackMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x090b10,
      metalness: 0.9,
      roughness: 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const name = (child.name || '').toLowerCase();
        const matName = child.material && 'name' in child.material ? ((child.material as THREE.Material).name || '').toLowerCase() : '';

        const isBodyPaint =
          name.includes('body') ||
          name.includes('carrosserie') ||
          name.includes('paint') ||
          matName.includes('body') ||
          matName.includes('paint') ||
          matName === 'mt_body' ||
          matName === 'body_color';

        if (isBodyPaint) {
          child.material = policeBlackMaterial;
        } else if (child.material instanceof THREE.MeshStandardMaterial || child.material instanceof THREE.MeshPhysicalMaterial) {
          child.material.envMapIntensity = 0.85;
          child.material.roughness = Math.min(child.material.roughness, 0.35);
        }
      }
    });

    // Highway Patrol High-Contrast Pure White Door Decals
    const doorDecalGeom = new THREE.BoxGeometry(2.14, 0.42, 1.4);
    const doorDecalMat = new THREE.MeshStandardMaterial({
      color: 0xf5f7fb,
      metalness: 0.3,
      roughness: 0.28,
    });
    const doorDecal = new THREE.Mesh(doorDecalGeom, doorDecalMat);
    doorDecal.position.set(0, 0.48, 0.15);
    scene.add(doorDecal);

    // Highway Patrol White Hood Decal Stripe
    const hoodDecalGeom = new THREE.BoxGeometry(1.2, 0.04, 1.2);
    const hoodDecal = new THREE.Mesh(hoodDecalGeom, doorDecalMat);
    hoodDecal.position.set(0, 0.72, 1.45);
    scene.add(hoodDecal);

    targetGroup.add(scene);
  }

  public triggerPursuit(playerZ: number, playerLaneX: number): void {
    if (this.state === 'PURSUIT') return;

    this.state = 'PURSUIT';
    this.timeInPursuit = 0;
    this.evasionTimer = 0;
    this.ramCooldown = 1.8;

    // Spawn cruisers behind player (-Z) in flanking lanes
    const flankSide = playerLaneX >= 0 ? -1 : 1;
    const lane0 = THREE.MathUtils.clamp(playerLaneX + flankSide * 2.8, -4.2, 4.2);
    const lane1 = THREE.MathUtils.clamp(playerLaneX - flankSide * 2.8, -4.2, 4.2);
    const offsets = [-20, -34];
    const lanes = [lane0, lane1];

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

    // 1. High-Frequency Strobe Animation (8 Hz alternating flashing)
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

    // Calculate dynamic flanking corridors based on current player position
    const flankSide = playerX >= 0 ? -1 : 1;
    const flankLane0 = THREE.MathUtils.clamp(playerX + flankSide * 2.8, -4.2, 4.2);
    const flankLane1 = THREE.MathUtils.clamp(playerX - flankSide * 2.8, -4.2, 4.2);

    // 2. Cruiser AI Behaviors (Anti-Camera-Blocking & Tactical Flanking)
    for (let i = 0; i < this.cruisers.length; i++) {
      const c = this.cruisers[i];
      if (!c.active) continue;

      // Strobe emissive toggle for bloom effect
      const redEmissive = redOn ? 5.5 : 0.05;
      const blueEmissive = blueOn ? 5.5 : 0.05;
      c.redLight.intensity = redOn ? 4.5 : 0.1;
      c.blueLight.intensity = blueOn ? 4.5 : 0.1;
      (c.redMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = redEmissive;
      (c.blueMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = blueEmissive;
      (c.grilleRedMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = redEmissive;
      (c.grilleBlueMesh.material as THREE.MeshStandardMaterial).emissiveIntensity = blueEmissive;

      // Cruiser distance along Z relative to player
      const dz = c.mesh.position.z - playerZ;
      const absDz = Math.abs(dz);
      if (absDz < closestDist) {
        closestDist = absDz;
        avgPanX = c.mesh.position.x - playerX;
      }

      const lateralDiff = Math.abs(c.mesh.position.x - playerX);

      if (i === 0) {
        // ── Cruiser 0: Lead Interceptor ("The Hunter") ──────────────────────
        // Tries to pull alongside player on primary flank (dz ≈ 0 to +1.5)
        c.targetLaneX = flankLane0;

        // Tactical PIT Maneuver: Only trigger when pulled alongside
        if (Math.abs(dz) < 2.0 && lateralDiff < 3.2 && this.ramCooldown <= 0) {
          // Ram into player quarter-panel from the side!
          c.targetLaneX = playerX;
          this.ramCooldown = 2.8;
          HapticsManager.policeImpact();
        }

        // Speed regulation to match player side-by-side
        if (dz < -2.0) {
          // Behind player: accelerate to pull alongside
          c.speedKmh = Math.max(playerSpeedKmh + 26, 260);
        } else if (dz > 2.5) {
          // Overshot ahead: decelerate to stay alongside
          c.speedKmh = Math.max(70, playerSpeedKmh - 12);
        } else {
          // Running alongside: match speed
          c.speedKmh = playerSpeedKmh + 3;
        }
      } else {
        // ── Cruiser 1: Support Flanker / Standoff ("The Enforcer") ──────────
        // Primary rule: Flank opposite side. NEVER sit between camera and player!
        c.targetLaneX = flankLane1;

        // ANTI-CAMERA-OCCLUSION STANDOFF LAW:
        // If Cruiser 1 is in the same lateral lane as the player (within 1.7m),
        // it MUST maintain a standoff distance of at least 7.5m behind the player.
        // This prevents it from ever entering the chase camera view frustum!
        if (lateralDiff < 1.7 && dz > -7.5) {
          // Apply emergency brakes and steer hard to the flank!
          c.speedKmh = Math.min(c.speedKmh, playerSpeedKmh - 30);
          c.targetLaneX = flankLane1;
        } else if (lateralDiff >= 2.0) {
          // Safely on the flank: match pace slightly behind Cruiser 0 (dz ≈ -3.5m)
          if (dz < -4.5) {
            c.speedKmh = Math.max(playerSpeedKmh + 22, 250);
          } else if (dz > -2.0) {
            c.speedKmh = Math.max(70, playerSpeedKmh - 10);
          } else {
            c.speedKmh = playerSpeedKmh;
          }
        } else {
          // Trailing safely in rear standoff
          c.speedKmh = Math.min(playerSpeedKmh, c.speedKmh);
        }
      }

      // Smooth lateral movement towards target
      c.mesh.position.x = THREE.MathUtils.lerp(c.mesh.position.x, c.targetLaneX, delta * 4.2);

      // Forward motion
      c.mesh.position.z += (c.speedKmh / 3.6) * delta;
      this.updateCruiserBounds(c);

      // Ramming / Collision with player - apply real physical impulse
      if (playerBounds.intersectsBox(c.bounds)) {
        HapticsManager.policeImpact();
        const pushDir = c.mesh.position.x < playerX ? 1 : -1;
        onPoliceRam?.(pushDir * 4.5 * delta);
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
