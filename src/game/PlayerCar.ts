// VELOCITY X - Photorealistic PBR Player Supercar & Driving Physics
import * as THREE from 'three';
import { CarConfig } from './Storage';
import { RoadManager } from './RoadManager';

export interface PlayerControls {
  steerLeft: boolean;
  steerRight: boolean;
  throttle: boolean;
  brake: boolean;
  nitro: boolean;
  steerAxis?: number; // Analog steering: -1.0 (full left) to +1.0 (full right)
}

export class PlayerCar {
  public mesh: THREE.Group;
  public config: CarConfig;

  // Physics State
  public speedKmh: number = 0;
  public targetSpeedKmh: number = 0;
  public accelerationRate: number = 28; // km/h per second
  public maxSpeedKmh: number = 240;
  public nitroMaxSpeedKmh: number = 295;
  public currentLaneX: number = 1.8; // start in lane 2
  public lateralVelocity: number = 0;
  public steeringInertia: number = 0;
  public currentRPM: number = 800;
  public currentGear: number = 1;
  public nitroReserve: number = 100; // 0..100%
  public isNitroActive: boolean = false;
  public isBraking: boolean = false;
  public isCrashed: boolean = false;

  // Visual sub-meshes for animation
  private carPaintMaterial: THREE.MeshPhysicalMaterial;
  private underglowMesh: THREE.Mesh;
  private underglowLight: THREE.PointLight;
  private frontWheels: THREE.Group[] = [];
  private allWheels: THREE.Group[] = [];
  private brakeLightMaterial: THREE.MeshBasicMaterial;
  private headlightCones: THREE.Mesh[] = [];

  // Dual Exhaust Positions for Particle Flames
  public leftExhaustPos = new THREE.Vector3();
  public rightExhaustPos = new THREE.Vector3();

  // Collision & Near-Miss Bounding Box
  public bounds = new THREE.Box3();
  private carSize = new THREE.Vector3(2.1, 1.2, 4.6);

  constructor(scene: THREE.Scene, config: CarConfig) {
    this.config = config;
    this.maxSpeedKmh = config.topSpeedKmh;
    this.nitroMaxSpeedKmh = config.topSpeedKmh * 1.22;
    this.mesh = new THREE.Group();

    // High-end automotive paint with metallic flake & clearcoat
    this.carPaintMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(config.color),
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.9,
    });

    this.brakeLightMaterial = new THREE.MeshBasicMaterial({
      color: 0x550000,
    });

    // Neon Underglow Ground Decal & Light
    const underglowGeom = new THREE.PlaneGeometry(2.6, 5.0);
    underglowGeom.rotateX(-Math.PI / 2);
    const underglowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(config.underglowColor),
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.underglowMesh = new THREE.Mesh(underglowGeom, underglowMat);
    this.underglowMesh.position.y = 0.05;
    this.mesh.add(this.underglowMesh);

    this.underglowLight = new THREE.PointLight(new THREE.Color(config.underglowColor), 1.5, 4.5);
    this.underglowLight.position.set(0, 0.2, 0);
    this.mesh.add(this.underglowLight);

    this.buildSupercarModel();
    scene.add(this.mesh);

    // Initial position on the highway
    this.mesh.position.set(this.currentLaneX, 0, 0);
    this.updateBounds();
  }

  private buildSupercarModel(): void {
    const carRoot = new THREE.Group();

    // 1. Aerodynamic Lower Chassis
    const chassisGeom = new THREE.BoxGeometry(2.05, 0.42, 4.5);
    const chassis = new THREE.Mesh(chassisGeom, this.carPaintMaterial);
    chassis.position.y = 0.38;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    carRoot.add(chassis);

    // 2. Front Slanted Wedge Hood & Splitter
    const hoodGeom = new THREE.BoxGeometry(1.95, 0.28, 1.6);
    hoodGeom.rotateX(-0.1);
    const hood = new THREE.Mesh(hoodGeom, this.carPaintMaterial);
    hood.position.set(0, 0.46, 1.4);
    hood.castShadow = true;
    carRoot.add(hood);

    // Carbon fiber front splitter
    const splitterGeom = new THREE.BoxGeometry(2.1, 0.08, 0.7);
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x111115, metalness: 0.4, roughness: 0.5 });
    const splitter = new THREE.Mesh(splitterGeom, carbonMat);
    splitter.position.set(0, 0.18, 2.25);
    carRoot.add(splitter);

    // 3. Cabin & Tinted Aerodynamic Greenhouse
    const cabinGeom = new THREE.BoxGeometry(1.65, 0.52, 2.2);
    cabinGeom.rotateX(0.08);
    const cabinMat = new THREE.MeshPhysicalMaterial({
      color: 0x05070a,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      transmission: 0.3,
      transparent: true,
      opacity: 0.92,
    });
    const cabin = new THREE.Mesh(cabinGeom, cabinMat);
    cabin.position.set(0, 0.76, -0.2);
    cabin.castShadow = true;
    carRoot.add(cabin);

    // Windshield frame & roof
    const roofGeom = new THREE.BoxGeometry(1.4, 0.08, 1.3);
    const roof = new THREE.Mesh(roofGeom, this.carPaintMaterial);
    roof.position.set(0, 1.02, -0.3);
    carRoot.add(roof);

    // 4. Rear Engine Deck & Diffuser
    const rearDeckGeom = new THREE.BoxGeometry(1.95, 0.38, 1.2);
    const rearDeck = new THREE.Mesh(rearDeckGeom, this.carPaintMaterial);
    rearDeck.position.set(0, 0.54, -1.6);
    carRoot.add(rearDeck);

    // Carbon Rear Diffuser
    const diffuserGeom = new THREE.BoxGeometry(1.9, 0.22, 0.6);
    const diffuser = new THREE.Mesh(diffuserGeom, carbonMat);
    diffuser.position.set(0, 0.24, -2.2);
    carRoot.add(diffuser);

    // 5. High-Downforce GT Rear Wing / Spoiler
    const wingGeom = new THREE.BoxGeometry(2.1, 0.06, 0.45);
    const wing = new THREE.Mesh(wingGeom, carbonMat);
    wing.position.set(0, 1.05, -2.15);
    carRoot.add(wing);

    // Spoiler Struts
    const strutGeom = new THREE.BoxGeometry(0.06, 0.35, 0.15);
    const leftStrut = new THREE.Mesh(strutGeom, carbonMat);
    leftStrut.position.set(-0.65, 0.85, -2.12);
    carRoot.add(leftStrut);
    const rightStrut = new THREE.Mesh(strutGeom, carbonMat);
    rightStrut.position.set(0.65, 0.85, -2.12);
    carRoot.add(rightStrut);

    // 6. Projector Twin Headlights & Volumetric Beams
    const headlightGeom = new THREE.BoxGeometry(0.35, 0.12, 0.1);
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leftHeadlight = new THREE.Mesh(headlightGeom, headlightMat);
    leftHeadlight.position.set(-0.75, 0.45, 2.22);
    carRoot.add(leftHeadlight);
    const rightHeadlight = new THREE.Mesh(headlightGeom, headlightMat);
    rightHeadlight.position.set(0.75, 0.45, 2.22);
    carRoot.add(rightHeadlight);

    // Volumetric Headlight Beams (Additive Blending)
    this.createVolumetricBeam(carRoot, -0.75, 0.45, 2.25);
    this.createVolumetricBeam(carRoot, 0.75, 0.45, 2.25);

    // 7. Full-Width Glowing LED Taillight Bar
    const taillightGeom = new THREE.BoxGeometry(1.85, 0.08, 0.08);
    const taillight = new THREE.Mesh(taillightGeom, this.brakeLightMaterial);
    taillight.position.set(0, 0.58, -2.26);
    carRoot.add(taillight);

    // 8. Dual Titanium Exhaust Tips
    const exhaustGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.25, 12);
    exhaustGeom.rotateX(Math.PI / 2);
    const exhaustMat = new THREE.MeshStandardMaterial({ color: 0x222228, metalness: 0.95, roughness: 0.2 });
    const leftExhaust = new THREE.Mesh(exhaustGeom, exhaustMat);
    leftExhaust.position.set(-0.45, 0.26, -2.25);
    carRoot.add(leftExhaust);
    const rightExhaust = new THREE.Mesh(exhaustGeom, exhaustMat);
    rightExhaust.position.set(0.45, 0.26, -2.25);
    carRoot.add(rightExhaust);

    // 9. 4 Detailed Wheels (Rubber tires + Alloy spoke rims + Red calipers)
    const wheelPositions = [
      { x: -0.98, y: 0.34, z: 1.35, isFront: true },
      { x: 0.98, y: 0.34, z: 1.35, isFront: true },
      { x: -0.98, y: 0.36, z: -1.35, isFront: false },
      { x: 0.98, y: 0.36, z: -1.35, isFront: false },
    ];

    for (const wp of wheelPositions) {
      const wheelGroup = this.createDetailedWheel(wp.isFront);
      wheelGroup.position.set(wp.x, wp.y, wp.z);
      carRoot.add(wheelGroup);
      this.allWheels.push(wheelGroup);
      if (wp.isFront) {
        this.frontWheels.push(wheelGroup);
      }
    }

    this.mesh.add(carRoot);
  }

  private createDetailedWheel(isFront: boolean): THREE.Group {
    const wheel = new THREE.Group();

    // Tire Rubber
    const radius = isFront ? 0.34 : 0.36;
    const width = isFront ? 0.26 : 0.32;
    const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 20);
    tireGeom.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x141417,
      roughness: 0.75,
      metalness: 0.1,
    });
    const tire = new THREE.Mesh(tireGeom, tireMat);
    tire.castShadow = true;
    wheel.add(tire);

    // Alloy Rim
    const rimGeom = new THREE.CylinderGeometry(radius * 0.7, radius * 0.7, width + 0.01, 12);
    rimGeom.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x99aabb,
      metalness: 0.92,
      roughness: 0.15,
    });
    const rim = new THREE.Mesh(rimGeom, rimMat);
    wheel.add(rim);

    // Glowing Red Brake Caliper
    const caliperGeom = new THREE.BoxGeometry(0.08, 0.14, 0.12);
    const caliperMat = new THREE.MeshStandardMaterial({
      color: 0xff0033,
      metalness: 0.8,
      roughness: 0.2,
    });
    const caliper = new THREE.Mesh(caliperGeom, caliperMat);
    caliper.position.set(0, radius * 0.35, 0);
    wheel.add(caliper);

    return wheel;
  }

  private createVolumetricBeam(parent: THREE.Group, x: number, y: number, z: number): void {
    const beamLength = 22;
    const beamGeom = new THREE.ConeGeometry(2.5, beamLength, 16, 1, true);
    beamGeom.rotateX(Math.PI / 2);
    beamGeom.translate(0, 0, beamLength / 2);

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xaaddff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const beam = new THREE.Mesh(beamGeom, beamMat);
    beam.position.set(x, y, z);
    parent.add(beam);
    this.headlightCones.push(beam);
  }

  public setCustomization(color: string, underglowColor: string): void {
    this.carPaintMaterial.color.set(color);
    (this.underglowMesh.material as THREE.MeshBasicMaterial).color.set(underglowColor);
    this.underglowLight.color.set(underglowColor);
  }

  public update(delta: number, controls: PlayerControls): void {
    if (this.isCrashed) {
      // Rapid deceleration on crash
      this.speedKmh = Math.max(0, this.speedKmh - 180 * delta);
      this.mesh.position.z += (this.speedKmh / 3.6) * delta;
      this.updateBounds();
      return;
    }

    // 1. Throttle, Nitrous & Braking Dynamics
    this.isBraking = controls.brake;
    let targetSpeed = 0;

    if (controls.nitro && this.nitroReserve > 0 && controls.throttle) {
      this.isNitroActive = true;
      this.nitroReserve = Math.max(0, this.nitroReserve - 22 * delta);
      targetSpeed = this.nitroMaxSpeedKmh;
      this.accelerationRate = 65; // aggressive rocket surge
    } else {
      this.isNitroActive = false;
      // Regenerate NOS slowly while cruising
      if (this.speedKmh > 100) {
        this.nitroReserve = Math.min(100, this.nitroReserve + 4.5 * delta);
      }

      if (controls.throttle) {
        targetSpeed = this.maxSpeedKmh;
        this.accelerationRate = 32;
      } else if (controls.brake) {
        targetSpeed = 0;
        this.accelerationRate = 95; // strong brake calipers
      } else {
        targetSpeed = 40; // natural engine coasting
        this.accelerationRate = 18;
      }
    }

    // Interpolate speed
    if (this.speedKmh < targetSpeed) {
      this.speedKmh = Math.min(targetSpeed, this.speedKmh + this.accelerationRate * delta);
    } else {
      this.speedKmh = Math.max(targetSpeed, this.speedKmh - this.accelerationRate * 1.6 * delta);
    }

    // 2. Responsive Mobile Steering & Lane Swerve
    const speedFactor = Math.min(1, Math.max(0.2, this.speedKmh / 140));
    const steerSensitivity = 14.5 * speedFactor;

    let targetSteer = 0;
    if (controls.steerAxis !== undefined && Math.abs(controls.steerAxis) > 0.01) {
      targetSteer = THREE.MathUtils.clamp(controls.steerAxis, -1, 1);
    } else if (controls.steerLeft) {
      targetSteer = -1;
    } else if (controls.steerRight) {
      targetSteer = 1;
    }

    this.steeringInertia = THREE.MathUtils.lerp(
      this.steeringInertia,
      targetSteer,
      delta * (targetSteer !== 0 ? 12 : 10)
    );

    this.lateralVelocity = this.steeringInertia * steerSensitivity;
    this.mesh.position.x += this.lateralVelocity * delta;

    // Highway boundaries clamp (-7.0 to +7.0)
    if (this.mesh.position.x < -7.1) {
      this.mesh.position.x = -7.1;
      this.steeringInertia = 0;
    } else if (this.mesh.position.x > 7.1) {
      this.mesh.position.x = 7.1;
      this.steeringInertia = 0;
    }

    // Forward drive along +Z
    const forwardMetersPerSec = this.speedKmh / 3.6;
    this.mesh.position.z += forwardMetersPerSec * delta;

    // 3. Chassis Roll, Pitch, & Wheel Rotation
    const rollAngle = -this.steeringInertia * 0.08; // dynamic body roll in turns
    const pitchAngle = controls.brake ? 0.04 : (this.isNitroActive ? -0.05 : 0); // dive/squat

    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, rollAngle, delta * 10);
    this.mesh.rotation.x = THREE.MathUtils.lerp(this.mesh.rotation.x, pitchAngle, delta * 8);
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, -this.steeringInertia * 0.06, delta * 10);

    // Rotate front wheels with steering angle
    const steerAngle = this.steeringInertia * 0.35;
    for (const fw of this.frontWheels) {
      fw.rotation.y = steerAngle;
    }

    // Spin wheels according to speed
    const wheelSpin = forwardMetersPerSec * delta * 4;
    for (const w of this.allWheels) {
      w.rotation.x += wheelSpin;
    }

    // 4. Update Taillight & Brake glow
    if (controls.brake) {
      this.brakeLightMaterial.color.setHex(0xff0011);
    } else {
      this.brakeLightMaterial.color.setHex(0x550000);
    }

    // 5. Calculate Simulated RPM & Gear
    this.calculateGearAndRPM();

    // 6. Update Exhaust World Positions for Particles
    this.leftExhaustPos.set(-0.45, 0.26, -2.25).applyMatrix4(this.mesh.matrixWorld);
    this.rightExhaustPos.set(0.45, 0.26, -2.25).applyMatrix4(this.mesh.matrixWorld);

    this.updateBounds();
  }

  private calculateGearAndRPM(): void {
    const s = this.speedKmh;
    if (s < 45) {
      this.currentGear = 1;
      this.currentRPM = 900 + (s / 45) * 6000;
    } else if (s < 90) {
      this.currentGear = 2;
      this.currentRPM = 3500 + ((s - 45) / 45) * 4500;
    } else if (s < 140) {
      this.currentGear = 3;
      this.currentRPM = 4000 + ((s - 90) / 50) * 4400;
    } else if (s < 195) {
      this.currentGear = 4;
      this.currentRPM = 4500 + ((s - 140) / 55) * 4200;
    } else if (s < 245) {
      this.currentGear = 5;
      this.currentRPM = 4800 + ((s - 195) / 50) * 3800;
    } else {
      this.currentGear = 6;
      this.currentRPM = 5200 + Math.min(3200, ((s - 245) / 60) * 3200);
    }
  }

  public updateBounds(): void {
    this.bounds.setFromCenterAndSize(
      new THREE.Vector3(this.mesh.position.x, this.mesh.position.y + 0.6, this.mesh.position.z),
      this.carSize
    );
  }

  public reset(startLaneIndex = 1): void {
    this.mesh.position.set(RoadManager.LANES[startLaneIndex], 0, 0);
    this.mesh.rotation.set(0, 0, 0);
    this.speedKmh = 0;
    this.steeringInertia = 0;
    this.lateralVelocity = 0;
    this.nitroReserve = 100;
    this.isCrashed = false;
    this.isNitroActive = false;
    this.updateBounds();
  }
}
