// VELOCITY X - 4K Photorealistic PBR Supercars (Pagani Huayra, Bugatti Chiron, Cyber Muscle) & Physics
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

  // Visual sub-meshes for animation & destruction
  private carRoot: THREE.Group | null = null;
  private carPaintMaterial: THREE.MeshPhysicalMaterial;
  private carbonMat: THREE.MeshStandardMaterial;
  private glassMat: THREE.MeshPhysicalMaterial;
  private chromeMat: THREE.MeshStandardMaterial;
  private brakeLightMaterial: THREE.MeshBasicMaterial;
  private underglowMesh: THREE.Mesh;
  private underglowLight: THREE.PointLight;
  private frontWheels: THREE.Group[] = [];
  private allWheels: THREE.Group[] = [];
  private headlightCones: THREE.Mesh[] = [];

  // Active Aero flaps for Pagani
  private activeAeroFlaps: THREE.Mesh[] = [];

  // Dual Exhaust Positions for Particle Flames
  public leftExhaustPos = new THREE.Vector3();
  public rightExhaustPos = new THREE.Vector3();
  private leftExhaustLocal = new THREE.Vector3(-0.45, 0.26, -2.25);
  private rightExhaustLocal = new THREE.Vector3(0.45, 0.26, -2.25);

  // Collision & Near-Miss Bounding Box
  public bounds = new THREE.Box3();
  private carSize = new THREE.Vector3(2.1, 1.2, 4.6);

  constructor(scene: THREE.Scene, config: CarConfig) {
    this.config = config;
    this.maxSpeedKmh = config.topSpeedKmh;
    this.nitroMaxSpeedKmh = config.topSpeedKmh * 1.22;
    this.mesh = new THREE.Group();

    // 4K High-End Automotive Metallic Flake Paint with Clearcoat
    this.carPaintMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(config.color),
      metalness: 0.9,
      roughness: 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0,
      envMapIntensity: 2.4, // Rich neon city reflections
    });

    // Weave Carbon Fiber Component Material
    this.carbonMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.5,
      roughness: 0.42,
    });

    // Dark Tinted Cockpit Canopy Glass
    this.glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x04060a,
      metalness: 0.95,
      roughness: 0.05,
      clearcoat: 1.0,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
      envMapIntensity: 2.5,
    });

    // Titanium / Polished Chrome Accent Material
    this.chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdde5ed,
      metalness: 0.98,
      roughness: 0.1,
      envMapIntensity: 2.0,
    });

    // Taillight Brake Material
    this.brakeLightMaterial = new THREE.MeshBasicMaterial({
      color: 0x660000,
    });

    // Neon Underglow Ground Decal & Light
    const underglowGeom = new THREE.PlaneGeometry(2.7, 5.2);
    underglowGeom.rotateX(-Math.PI / 2);
    const underglowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(config.underglowColor),
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.underglowMesh = new THREE.Mesh(underglowGeom, underglowMat);
    this.underglowMesh.position.y = 0.04;
    this.mesh.add(this.underglowMesh);

    this.underglowLight = new THREE.PointLight(new THREE.Color(config.underglowColor), 2.0, 5.0);
    this.underglowLight.position.set(0, 0.25, 0);
    this.mesh.add(this.underglowLight);

    // Build the initial 4K supercar 3D mesh
    this.buildSupercarModel();
    scene.add(this.mesh);

    // Initial position on highway
    this.mesh.position.set(this.currentLaneX, 0, 0);
    this.updateBounds();
  }

  public setCarConfig(config: CarConfig): void {
    const typeChanged = this.config.type !== config.type;
    this.config = config;
    this.maxSpeedKmh = config.topSpeedKmh;
    this.nitroMaxSpeedKmh = config.topSpeedKmh * 1.22;
    this.setCustomization(config.color, config.underglowColor);
    if (typeChanged) {
      this.buildSupercarModel();
    }
  }

  public setCustomization(color: string, underglowColor: string): void {
    this.carPaintMaterial.color.set(color);
    (this.underglowMesh.material as THREE.MeshBasicMaterial).color.set(underglowColor);
    this.underglowLight.color.set(underglowColor);
  }

  public buildSupercarModel(): void {
    if (this.carRoot) {
      this.mesh.remove(this.carRoot);
      // Clean up child meshes
      this.carRoot.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          child.geometry.dispose();
        }
      });
    }

    this.carRoot = new THREE.Group();
    this.frontWheels = [];
    this.allWheels = [];
    this.headlightCones = [];
    this.activeAeroFlaps = [];

    // Dispatch to distinct supercar architecture
    switch (this.config.type) {
      case 'roadster':
        this.buildPaganiRoadster(this.carRoot);
        break;
      case 'gt':
        this.buildBugattiGT(this.carRoot);
        break;
      case 'muscle':
        this.buildTitanMuscle(this.carRoot);
        break;
      default:
        this.buildBugattiGT(this.carRoot);
        break;
    }

    this.mesh.add(this.carRoot);
  }

  // =========================================================================
  // MODEL 1: APEX ROADSTER — Pagani Huayra / Zonda Exotic Italian Hypercar
  // =========================================================================
  private buildPaganiRoadster(root: THREE.Group): void {
    // 1. Curved Aerodynamic Lower Monocoque Chassis
    const monocoqueGeom = new THREE.BoxGeometry(2.02, 0.36, 4.5);
    const monocoque = new THREE.Mesh(monocoqueGeom, this.carPaintMaterial);
    monocoque.position.y = 0.34;
    monocoque.castShadow = true;
    root.add(monocoque);

    // 2. Sculpted Slanted Nose with Dual Intake Vents
    const noseGeom = new THREE.BoxGeometry(1.9, 0.24, 1.6);
    noseGeom.rotateX(-0.14);
    const nose = new THREE.Mesh(noseGeom, this.carPaintMaterial);
    nose.position.set(0, 0.42, 1.45);
    nose.castShadow = true;
    root.add(nose);

    // Front carbon splitter with dual aerodynamic winglets
    const splitterGeom = new THREE.BoxGeometry(2.12, 0.06, 0.8);
    const splitter = new THREE.Mesh(splitterGeom, this.carbonMat);
    splitter.position.set(0, 0.16, 2.25);
    root.add(splitter);

    // Side aero dive planes
    const wingletL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.35), this.carbonMat);
    wingletL.position.set(-1.08, 0.22, 2.2);
    wingletL.rotation.y = 0.2;
    root.add(wingletL);
    const wingletR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.35), this.carbonMat);
    wingletR.position.set(1.08, 0.22, 2.2);
    wingletR.rotation.y = -0.2;
    root.add(wingletR);

    // 3. Teardrop Fighter-Jet Cockpit Canopy
    const canopyGeom = new THREE.SphereGeometry(0.92, 16, 12);
    canopyGeom.scale(0.85, 0.55, 1.6);
    const canopy = new THREE.Mesh(canopyGeom, this.glassMat);
    canopy.position.set(0, 0.72, -0.15);
    canopy.castShadow = true;
    root.add(canopy);

    // Carbon roof snorkel / intake scoop
    const scoopGeom = new THREE.BoxGeometry(0.32, 0.14, 0.8);
    const scoop = new THREE.Mesh(scoopGeom, this.carbonMat);
    scoop.position.set(0, 0.98, -0.35);
    root.add(scoop);

    // Sculpted stalk side-view mirrors (Leaf shape)
    const mirrorL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.12), this.carPaintMaterial);
    mirrorL.position.set(-1.05, 0.68, 0.6);
    mirrorL.rotation.y = 0.3;
    root.add(mirrorL);
    const mirrorR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.12), this.carPaintMaterial);
    mirrorR.position.set(1.05, 0.68, 0.6);
    mirrorR.rotation.y = -0.3;
    root.add(mirrorR);

    // 4. Rear Engine Deck & Aerodynamic Cowls
    const rearDeckGeom = new THREE.BoxGeometry(1.98, 0.36, 1.4);
    const rearDeck = new THREE.Mesh(rearDeckGeom, this.carPaintMaterial);
    rearDeck.position.set(0, 0.5, -1.55);
    rearDeck.castShadow = true;
    root.add(rearDeck);

    // Glass engine cover exposing titanium V12 manifold
    const engineGlass = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.8), this.glassMat);
    engineGlass.position.set(0, 0.66, -1.35);
    root.add(engineGlass);
    const v12Manifold = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.7, 8), this.chromeMat);
    v12Manifold.rotateZ(Math.PI / 2);
    v12Manifold.position.set(0, 0.62, -1.35);
    root.add(v12Manifold);

    // 5. Pagani Twin Active-Aero Rear Flap Wings (Left & Right)
    const flapGeom = new THREE.BoxGeometry(0.65, 0.05, 0.35);
    const flapL = new THREE.Mesh(flapGeom, this.carbonMat);
    flapL.position.set(-0.55, 0.68, -2.15);
    root.add(flapL);
    this.activeAeroFlaps.push(flapL);

    const flapR = new THREE.Mesh(flapGeom, this.carbonMat);
    flapR.position.set(0.55, 0.68, -2.15);
    root.add(flapR);
    this.activeAeroFlaps.push(flapR);

    // Massive curved carbon rear diffuser
    const diffuserGeom = new THREE.BoxGeometry(1.92, 0.22, 0.6);
    const diffuser = new THREE.Mesh(diffuserGeom, this.carbonMat);
    diffuser.position.set(0, 0.22, -2.25);
    root.add(diffuser);

    // Vertical diffuser aero fins
    for (let f = -0.7; f <= 0.7; f += 0.35) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.5), this.carbonMat);
      fin.position.set(f, 0.22, -2.25);
      root.add(fin);
    }

    // 6. Iconic Pagani QUAD Circular Exhaust Cluster (2x2 Titanium Circle)
    const clusterRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.24, 0.1, 16),
      this.carbonMat
    );
    clusterRing.rotateX(Math.PI / 2);
    clusterRing.position.set(0, 0.62, -2.26);
    root.add(clusterRing);

    const pipeGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.18, 12);
    pipeGeom.rotateX(Math.PI / 2);
    const pipeOffsets = [
      { x: -0.08, y: 0.69 },
      { x: 0.08, y: 0.69 },
      { x: -0.08, y: 0.55 },
      { x: 0.08, y: 0.55 },
    ];
    for (const po of pipeOffsets) {
      const pipe = new THREE.Mesh(pipeGeom, this.chromeMat);
      pipe.position.set(po.x, po.y, -2.28);
      root.add(pipe);
    }

    this.leftExhaustLocal.set(-0.08, 0.62, -2.28);
    this.rightExhaustLocal.set(0.08, 0.62, -2.28);

    // 7. Pagani Quad Circular LED Taillights (2 on left, 2 on right)
    const tailOffsets = [
      { x: -0.75, y: 0.58 },
      { x: -0.62, y: 0.58 },
      { x: 0.62, y: 0.58 },
      { x: 0.75, y: 0.58 },
    ];
    const tailRingGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 12);
    tailRingGeom.rotateX(Math.PI / 2);
    for (const to of tailOffsets) {
      const tailLight = new THREE.Mesh(tailRingGeom, this.brakeLightMaterial);
      tailLight.position.set(to.x, to.y, -2.26);
      root.add(tailLight);
    }

    // 8. Dual Twin-Pod Teardrop Halo Headlights
    const headOffsets = [-0.74, 0.74];
    for (const hx of headOffsets) {
      const pod1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      pod1.position.set(hx - 0.06, 0.44, 2.22);
      root.add(pod1);
      const pod2 = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshBasicMaterial({ color: 0x99ddff }));
      pod2.position.set(hx + 0.06, 0.42, 2.25);
      root.add(pod2);

      this.createVolumetricBeam(root, hx, 0.44, 2.26);
    }

    // 9. Detailed Wheels with Pagani Multi-Spoke Alloys
    this.installWheels(root, 0xd0d8e2, false);
  }

  // =========================================================================
  // MODEL 2: VELOCE GT — Bugatti Chiron / Bolide W16 French Hypercar
  // =========================================================================
  private buildBugattiGT(root: THREE.Group): void {
    // 1. Muscular Monocoque Chassis
    const chassisGeom = new THREE.BoxGeometry(2.12, 0.4, 4.6);
    const chassis = new THREE.Mesh(chassisGeom, this.carPaintMaterial);
    chassis.position.y = 0.36;
    chassis.castShadow = true;
    root.add(chassis);

    // 2. Front Hood & Iconic Illuminated Horseshoe Grille
    const hoodGeom = new THREE.BoxGeometry(2.0, 0.3, 1.7);
    hoodGeom.rotateX(-0.11);
    const hood = new THREE.Mesh(hoodGeom, this.carPaintMaterial);
    hood.position.set(0, 0.48, 1.4);
    hood.castShadow = true;
    root.add(hood);

    // Bugatti Illuminated Horseshoe Grille Arch
    const grilleArchGeom = new THREE.TorusGeometry(0.32, 0.04, 12, 24, Math.PI);
    const cyanGlowMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const horseshoe = new THREE.Mesh(grilleArchGeom, cyanGlowMat);
    horseshoe.rotateZ(Math.PI);
    horseshoe.position.set(0, 0.38, 2.32);
    root.add(horseshoe);

    const grilleMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.04, 16, 1, false, 0, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x080a10, metalness: 0.9, roughness: 0.3 })
    );
    grilleMesh.rotateX(Math.PI / 2);
    grilleMesh.position.set(0, 0.38, 2.31);
    root.add(grilleMesh);

    // Carbon fiber front splitter
    const splitterGeom = new THREE.BoxGeometry(2.18, 0.07, 0.75);
    const splitter = new THREE.Mesh(splitterGeom, this.carbonMat);
    splitter.position.set(0, 0.16, 2.28);
    root.add(splitter);

    // 3. Sweeping Bugatti "C-Line" Aerodynamic Side Bars (Left & Right)
    const cCurveMat = this.chromeMat;
    const cBarGeom = new THREE.BoxGeometry(0.06, 0.08, 2.4);

    // Left C-bar along roof/window
    const cBarTopL = new THREE.Mesh(cBarGeom, cCurveMat);
    cBarTopL.position.set(-0.95, 0.88, -0.2);
    cBarTopL.rotation.y = 0.05;
    root.add(cBarTopL);
    // Right C-bar along roof/window
    const cBarTopR = new THREE.Mesh(cBarGeom, cCurveMat);
    cBarTopR.position.set(0.95, 0.88, -0.2);
    cBarTopR.rotation.y = -0.05;
    root.add(cBarTopR);

    // 4. Cabin & Tinted Aerodynamic Greenhouse
    const cabinGeom = new THREE.BoxGeometry(1.7, 0.54, 2.3);
    cabinGeom.rotateX(0.07);
    const cabin = new THREE.Mesh(cabinGeom, this.glassMat);
    cabin.position.set(0, 0.78, -0.2);
    cabin.castShadow = true;
    root.add(cabin);

    // Center dorsal spine aero fin running from roof to spoiler
    const dorsalFin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 2.0), this.carbonMat);
    dorsalFin.position.set(0, 0.92, -0.9);
    root.add(dorsalFin);

    // 5. Rear Engine Deck with W16 Air Scoops
    const rearDeckGeom = new THREE.BoxGeometry(2.05, 0.42, 1.3);
    const rearDeck = new THREE.Mesh(rearDeckGeom, this.carPaintMaterial);
    rearDeck.position.set(0, 0.56, -1.6);
    rearDeck.castShadow = true;
    root.add(rearDeck);

    // Dual W16 silver induction scoops
    const scoopL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12), this.chromeMat);
    scoopL.rotateX(Math.PI / 2);
    scoopL.position.set(-0.48, 0.76, -1.1);
    root.add(scoopL);
    const scoopR = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12), this.chromeMat);
    scoopR.rotateX(Math.PI / 2);
    scoopR.position.set(0.48, 0.76, -1.1);
    root.add(scoopR);

    // 6. Bugatti Hydraulic Active GT Rear Wing
    const wingGeom = new THREE.BoxGeometry(2.18, 0.07, 0.5);
    const wing = new THREE.Mesh(wingGeom, this.carbonMat);
    wing.position.set(0, 1.08, -2.18);
    root.add(wing);

    const leftStrut = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.38, 0.14), this.carbonMat);
    leftStrut.position.set(-0.68, 0.88, -2.15);
    root.add(leftStrut);
    const rightStrut = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.38, 0.14), this.carbonMat);
    rightStrut.position.set(0.68, 0.88, -2.15);
    root.add(rightStrut);

    // 7. Full-Width Laser-Blade Red LED Taillight Bar
    const taillightGeom = new THREE.BoxGeometry(1.98, 0.07, 0.08);
    const taillight = new THREE.Mesh(taillightGeom, this.brakeLightMaterial);
    taillight.position.set(0, 0.62, -2.28);
    root.add(taillight);

    // Center dual rectangular titanium exhaust outlets
    const exhaustL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.25), this.chromeMat);
    exhaustL.position.set(-0.2, 0.28, -2.26);
    root.add(exhaustL);
    const exhaustR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.25), this.chromeMat);
    exhaustR.position.set(0.2, 0.28, -2.26);
    root.add(exhaustR);

    this.leftExhaustLocal.set(-0.2, 0.28, -2.28);
    this.rightExhaustLocal.set(0.2, 0.28, -2.28);

    // Bugatti 8-Eye Quad-Matrix LED Headlights (4 projector ice cubes per side)
    for (const hx of [-0.78, 0.78]) {
      for (let i = 0; i < 4; i++) {
        const offset = (i - 1.5) * 0.09;
        const cube = new THREE.Mesh(
          new THREE.BoxGeometry(0.07, 0.07, 0.06),
          new THREE.MeshBasicMaterial({ color: 0xe6f7ff })
        );
        cube.position.set(hx + offset * 0.6, 0.46, 2.24 + offset * 0.2);
        root.add(cube);
      }
      this.createVolumetricBeam(root, hx, 0.46, 2.26);
    }

    // Wheels
    this.installWheels(root, 0x111620, false);
  }

  // =========================================================================
  // MODEL 3: TITAN V8 — Cyberpunk Supercharged Widebody Muscle Car
  // =========================================================================
  private buildTitanMuscle(root: THREE.Group): void {
    // 1. Heavy Boxy Widebody Muscle Chassis
    const chassisGeom = new THREE.BoxGeometry(2.18, 0.44, 4.5);
    const chassis = new THREE.Mesh(chassisGeom, this.carPaintMaterial);
    chassis.position.y = 0.38;
    chassis.castShadow = true;
    root.add(chassis);

    // 2. Dominant Hood with Supercharger Cutout
    const hoodGeom = new THREE.BoxGeometry(2.08, 0.32, 1.7);
    const hood = new THREE.Mesh(hoodGeom, this.carPaintMaterial);
    hood.position.set(0, 0.52, 1.4);
    hood.castShadow = true;
    root.add(hood);

    // Massive Polished Chrome Blower Scoop Protruding Through Hood!
    const blowerCase = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.36, 0.7), this.chromeMat);
    blowerCase.position.set(0, 0.82, 1.35);
    root.add(blowerCase);

    // 3 Red Butterfly Valve Throttle Plates
    const valveGeom = new THREE.CylinderGeometry(0.07, 0.07, 0.03, 12);
    valveGeom.rotateX(Math.PI / 2);
    const redValveMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
    for (let v = -0.16; v <= 0.16; v += 0.16) {
      const valve = new THREE.Mesh(valveGeom, redValveMat);
      valve.position.set(v, 0.84, 1.71);
      root.add(valve);
    }

    // Heavy-duty front bumper splitter with steel tie-rods
    const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.08, 0.7), this.carbonMat);
    splitter.position.set(0, 0.16, 2.25);
    root.add(splitter);

    // 3. Fastback Muscle Roof & Louvers
    const cabinGeom = new THREE.BoxGeometry(1.8, 0.56, 2.1);
    cabinGeom.rotateX(0.04);
    const cabin = new THREE.Mesh(cabinGeom, this.glassMat);
    cabin.position.set(0, 0.8, -0.15);
    cabin.castShadow = true;
    root.add(cabin);

    // Rear window black heat louvers
    for (let l = 0; l < 4; l++) {
      const louver = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.04, 0.12), this.carbonMat);
      louver.position.set(0, 0.94 - l * 0.08, -0.85 - l * 0.18);
      root.add(louver);
    }

    // 4. Rear Trunk Deck & High-Kick Ducktail Spoiler
    const rearDeckGeom = new THREE.BoxGeometry(2.1, 0.44, 1.2);
    const rearDeck = new THREE.Mesh(rearDeckGeom, this.carPaintMaterial);
    rearDeck.position.set(0, 0.58, -1.6);
    rearDeck.castShadow = true;
    root.add(rearDeck);

    const ducktail = new THREE.Mesh(new THREE.BoxGeometry(2.12, 0.16, 0.28), this.carbonMat);
    ducktail.position.set(0, 0.86, -2.18);
    ducktail.rotation.x = 0.35;
    root.add(ducktail);

    // 5. Triple-Segment Vertical Sequential LED Taillights
    for (const tx of [-0.7, 0.7]) {
      for (let s = -0.14; s <= 0.14; s += 0.14) {
        const seg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.06), this.brakeLightMaterial);
        seg.position.set(tx + s, 0.56, -2.26);
        root.add(seg);
      }
    }

    // Dual Fat Dual-Exit Exhaust Tips
    const leftEx = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.25, 12), this.chromeMat);
    leftEx.rotateX(Math.PI / 2);
    leftEx.position.set(-0.55, 0.26, -2.25);
    root.add(leftEx);

    const rightEx = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.25, 12), this.chromeMat);
    rightEx.rotateX(Math.PI / 2);
    rightEx.position.set(0.55, 0.26, -2.25);
    root.add(rightEx);

    this.leftExhaustLocal.set(-0.55, 0.26, -2.25);
    this.rightExhaustLocal.set(0.55, 0.26, -2.25);

    // Dual Rectangular Retro-Cyber Headlights + Twin Amber Rally Foglights
    for (const hx of [-0.75, 0.75]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.08), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      head.position.set(hx, 0.46, 2.24);
      root.add(head);

      const fog = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.06, 12), new THREE.MeshBasicMaterial({ color: 0xffaa00 }));
      fog.rotateX(Math.PI / 2);
      fog.position.set(hx * 0.45, 0.34, 2.26);
      root.add(fog);

      this.createVolumetricBeam(root, hx, 0.46, 2.26);
    }

    // Wheels: Fat Rear Drag Radials
    this.installWheels(root, 0x222222, true);
  }

  // =========================================================================
  // HIGH-DETAIL WHEELS (Rubber, Drilled Rotors, Brembo Red Calipers, Alloys)
  // =========================================================================
  private installWheels(root: THREE.Group, rimColor: number, isMuscleRear: boolean): void {
    const wheelPositions = [
      { x: -1.02, y: 0.34, z: 1.35, isFront: true, isRearMuscle: false },
      { x: 1.02, y: 0.34, z: 1.35, isFront: true, isRearMuscle: false },
      { x: -1.04, y: 0.36, z: -1.35, isFront: false, isRearMuscle: isMuscleRear },
      { x: 1.04, y: 0.36, z: -1.35, isFront: false, isRearMuscle: isMuscleRear },
    ];

    for (const wp of wheelPositions) {
      const wheelGroup = this.createDetailedWheel(wp.isFront, wp.isRearMuscle, rimColor);
      wheelGroup.position.set(wp.x, wp.y, wp.z);
      root.add(wheelGroup);
      this.allWheels.push(wheelGroup);
      if (wp.isFront) {
        this.frontWheels.push(wheelGroup);
      }
    }
  }

  private createDetailedWheel(isFront: boolean, isRearMuscle: boolean, rimColor: number): THREE.Group {
    const wheel = new THREE.Group();

    const radius = isRearMuscle ? 0.38 : (isFront ? 0.34 : 0.36);
    const width = isRearMuscle ? 0.42 : (isFront ? 0.28 : 0.34);

    // 1. High-Grip Rubber Tire with Tread Edge
    const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 24);
    tireGeom.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x121417,
      roughness: 0.8,
      metalness: 0.08,
    });
    const tire = new THREE.Mesh(tireGeom, tireMat);
    tire.castShadow = true;
    wheel.add(tire);

    // 2. Cross-Drilled Carbon Ceramic Brake Rotor
    const rotorGeom = new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, width * 0.4, 16);
    rotorGeom.rotateZ(Math.PI / 2);
    const rotorMat = new THREE.MeshStandardMaterial({
      color: 0x30353d,
      metalness: 0.9,
      roughness: 0.25,
    });
    const rotor = new THREE.Mesh(rotorGeom, rotorMat);
    wheel.add(rotor);

    // 3. Glowing Racing Red Brembo Brake Caliper
    const caliperGeom = new THREE.BoxGeometry(width * 0.6, 0.16, 0.14);
    const caliperMat = new THREE.MeshStandardMaterial({
      color: 0xff0028,
      metalness: 0.85,
      roughness: 0.15,
    });
    const caliper = new THREE.Mesh(caliperGeom, caliperMat);
    caliper.position.set(0, radius * 0.38, 0);
    wheel.add(caliper);

    // 4. Forged Alloy Multi-Spoke Rim
    const rimGeom = new THREE.CylinderGeometry(radius * 0.68, radius * 0.68, width + 0.02, 16);
    rimGeom.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: rimColor,
      metalness: 0.92,
      roughness: 0.14,
      envMapIntensity: 2.2,
    });
    const rim = new THREE.Mesh(rimGeom, rimMat);
    wheel.add(rim);

    // Center Wheel Hub Cap
    const hubGeom = new THREE.CylinderGeometry(radius * 0.22, radius * 0.22, width + 0.03, 12);
    hubGeom.rotateZ(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeom, this.chromeMat);
    wheel.add(hub);

    return wheel;
  }

  private createVolumetricBeam(parent: THREE.Group, x: number, y: number, z: number): void {
    const beamLength = 26;
    const beamGeom = new THREE.ConeGeometry(2.8, beamLength, 16, 1, true);
    beamGeom.rotateX(Math.PI / 2);
    beamGeom.translate(0, 0, beamLength / 2);

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x99ddff,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const beam = new THREE.Mesh(beamGeom, beamMat);
    beam.position.set(x, y, z);
    parent.add(beam);
    this.headlightCones.push(beam);
  }

  public update(delta: number, controls: PlayerControls): void {
    if (this.isCrashed) {
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
      // Regenerate NOS slowly while cruising above 100 km/h
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
      targetSteer = 1; // Left steering moves to screen Left (+X)
    } else if (controls.steerRight) {
      targetSteer = -1; // Right steering moves to screen Right (-X)
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

    // 3. Chassis Roll, Pitch, Wheel Turn & Active Aero
    const rollAngle = this.steeringInertia * 0.08;
    const pitchAngle = controls.brake ? 0.04 : (this.isNitroActive ? -0.05 : 0);

    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, rollAngle, delta * 10);
    this.mesh.rotation.x = THREE.MathUtils.lerp(this.mesh.rotation.x, pitchAngle, delta * 8);
    this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, this.steeringInertia * 0.06, delta * 10);

    // Rotate front wheels with steering
    const steerAngle = this.steeringInertia * 0.35;
    for (const fw of this.frontWheels) {
      fw.rotation.y = steerAngle;
    }

    // Spin wheels with forward speed
    const wheelSpin = forwardMetersPerSec * delta * 4;
    for (const w of this.allWheels) {
      w.rotation.x += wheelSpin;
    }

    // Pagani Active Aero Air-Braking Flaps
    if (this.activeAeroFlaps.length > 0) {
      const flapPitch = controls.brake ? 0.45 : (Math.abs(this.steeringInertia) * 0.2);
      for (const flap of this.activeAeroFlaps) {
        flap.rotation.x = THREE.MathUtils.lerp(flap.rotation.x, -flapPitch, delta * 8);
      }
    }

    // 4. Update Taillight & Brake Glow
    if (controls.brake) {
      this.brakeLightMaterial.color.setHex(0xff0011);
    } else {
      this.brakeLightMaterial.color.setHex(0x550000);
    }

    // 5. RPM & Transmission Gear
    this.calculateGearAndRPM();

    // 6. Dynamic Exhaust World Positions for Nitro Particles
    this.leftExhaustPos.copy(this.leftExhaustLocal).applyMatrix4(this.mesh.matrixWorld);
    this.rightExhaustPos.copy(this.rightExhaustLocal).applyMatrix4(this.mesh.matrixWorld);

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
