// VELOCITY X - Highway Traffic Engine & Near-Miss Multiplier System
import * as THREE from 'three';
import { RoadManager } from './RoadManager';

export type TrafficType = 'van' | 'sedan' | 'suv' | 'truck';

export interface TrafficVehicle {
  mesh: THREE.Group;
  type: TrafficType;
  speedKmh: number;
  targetSpeedKmh: number;
  laneIndex: number;
  targetLaneIndex: number;
  isChangingLane: boolean;
  laneChangeProgress: number;
  startX: number;
  targetX: number;
  laneChangeCooldown: number;
  bounds: THREE.Box3;
  size: THREE.Vector3;
  active: boolean;
  nearMissed: boolean;
}

export class TrafficManager {
  private scene: THREE.Scene;
  private poolSize = 16;
  public vehicles: TrafficVehicle[] = [];

  // Multi-color Fleet Materials for Rich Highway Variety
  private vanMaterials: THREE.MeshStandardMaterial[] = [];
  private sedanMaterials: THREE.MeshStandardMaterial[] = [];
  private suvMaterials: THREE.MeshStandardMaterial[] = [];
  private truckCabMaterials: THREE.MeshStandardMaterial[] = [];

  private truckBoxMaterial: THREE.MeshStandardMaterial;
  private trimMaterial: THREE.MeshStandardMaterial;
  private chromeMaterial: THREE.MeshStandardMaterial;
  private glassMaterial: THREE.MeshPhysicalMaterial;
  private tireMaterial: THREE.MeshStandardMaterial;
  private rimMaterial: THREE.MeshStandardMaterial;
  private headlightMaterial: THREE.MeshBasicMaterial;
  private taillightMaterial: THREE.MeshBasicMaterial;

  // Scratch vector for zero-GC bounding box updates
  private scratchBoundsCenter = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. Diverse Delivery Van Fleet Materials (Real Highway Logistics Diversity)
    this.vanMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.45, roughness: 0.38 }), // Polar Fleet White
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.52, roughness: 0.35 }), // Express Courier Amber/Yellow
      new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.62, roughness: 0.32 }), // Deep Logistics Navy Blue
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.82, roughness: 0.26 }), // Executive Metallic Silver Van
    ];

    // 2. Sedan Color Variants
    this.sedanMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 }), // Metallic Slate Silver
      new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.9, roughness: 0.2 }),   // Obsidian Midnight Black
      new THREE.MeshStandardMaterial({ color: 0xdc2626, metalness: 0.82, roughness: 0.25 }), // Crimson Sport Red
      new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.88, roughness: 0.22 }), // Pearl White
    ];

    // 3. SUV Color Variants
    this.suvMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.78, roughness: 0.28 }), // Royal Blue
      new THREE.MeshStandardMaterial({ color: 0x065f46, metalness: 0.72, roughness: 0.3 }),  // Forest Emerald
      new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.26 }),  // Charcoal Graphite
    ];

    // 4. Truck Cab Materials
    this.truckCabMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xb91c1c, metalness: 0.65, roughness: 0.32 }), // Highway Crimson Red
      new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.65, roughness: 0.32 }), // Freight Navy Blue
    ];

    // Shared Components
    this.truckBoxMaterial = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, metalness: 0.35, roughness: 0.55 });
    this.trimMaterial = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.2, roughness: 0.85 });
    this.chromeMaterial = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.96, roughness: 0.14 });
    this.glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.08, metalness: 0.85, opacity: 0.88, transparent: true });
    this.tireMaterial = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.85, metalness: 0.08 });
    this.rimMaterial = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.9, roughness: 0.22 });
    
    // Safety & Navigation Lights
    this.headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.taillightMaterial = new THREE.MeshBasicMaterial({ color: 0xff002b });

    this.initPool();
  }

  private initPool(): void {
    // 16 vehicles: 6 vans, 4 sedans, 3 suvs, 3 trucks with varying liveries
    const plan: { type: TrafficType; variant: number }[] = [
      { type: 'van', variant: 0 },    // Polar White Fleet Van
      { type: 'sedan', variant: 0 },  // Slate Silver Sedan
      { type: 'suv', variant: 0 },    // Royal Blue SUV
      { type: 'van', variant: 1 },    // Express Courier Yellow Van (DHL style)
      { type: 'truck', variant: 0 },  // Crimson Semi Truck
      { type: 'sedan', variant: 1 },  // Obsidian Black Sedan
      { type: 'van', variant: 2 },    // Logistics Navy Blue Van (Prime style)
      { type: 'suv', variant: 1 },    // Emerald Green SUV
      { type: 'sedan', variant: 2 },  // Crimson Red Sedan
      { type: 'van', variant: 3 },    // Executive Metallic Silver Van
      { type: 'truck', variant: 1 },  // Navy Semi Truck
      { type: 'suv', variant: 2 },    // Charcoal Pearl SUV
      { type: 'van', variant: 0 },    // Polar White Fleet Van
      { type: 'sedan', variant: 3 },  // Pearl White Sedan
      { type: 'van', variant: 1 },    // Express Courier Yellow Van
      { type: 'truck', variant: 0 },  // Crimson Semi Truck
    ];

    for (let i = 0; i < this.poolSize; i++) {
      const item = plan[i];
      const vehicle = this.createVehicleModel(item.type, item.variant);
      vehicle.mesh.position.set(0, -999, 0);
      this.scene.add(vehicle.mesh);
      this.vehicles.push(vehicle);
    }
  }

  /**
   * Builds an alloy wheel with rubber tire and metallic rim
   */
  private createWheelMesh(radius: number, width: number, rimRadius: number): THREE.Group {
    const wheelGroup = new THREE.Group();
    const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 16);
    tireGeom.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeom, this.tireMaterial);
    tire.castShadow = true;
    wheelGroup.add(tire);

    const rimGeom = new THREE.CylinderGeometry(rimRadius, rimRadius, width + 0.02, 12);
    rimGeom.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeom, this.rimMaterial);
    wheelGroup.add(rim);

    return wheelGroup;
  }

  /**
   * Constructs authentic, highly recognizable vehicle models with variant liveries
   */
  private createVehicleModel(type: TrafficType, variant: number = 0): TrafficVehicle {
    const group = new THREE.Group();
    let size: THREE.Vector3;

    if (type === 'van') {
      // ── COMMERCIAL CARGO DELIVERY VAN (Sprinter / Transit Style) ──
      size = new THREE.Vector3(2.1, 2.3, 5.2);
      const vanMat = this.vanMaterials[variant % this.vanMaterials.length];

      // 1. Lower chassis frame & underbody trim
      const lowerTrimGeom = new THREE.BoxGeometry(2.06, 0.28, 5.0);
      const lowerTrim = new THREE.Mesh(lowerTrimGeom, this.trimMaterial);
      lowerTrim.position.set(0, 0.32, 0);
      group.add(lowerTrim);

      // 2. Main Cargo Box Body
      const cargoBodyGeom = new THREE.BoxGeometry(2.02, 1.48, 3.4);
      const cargoBody = new THREE.Mesh(cargoBodyGeom, vanMat);
      cargoBody.position.set(0, 1.18, -0.7);
      cargoBody.castShadow = true;
      group.add(cargoBody);

      // 3. Cabin & Sloped Hood Front
      const cabinGeom = new THREE.BoxGeometry(1.98, 1.25, 1.4);
      const cabin = new THREE.Mesh(cabinGeom, vanMat);
      cabin.position.set(0, 1.05, 1.5);
      cabin.castShadow = true;
      group.add(cabin);

      // Front aerodynamic nose slope
      const noseGeom = new THREE.BoxGeometry(1.94, 0.42, 0.75);
      const nose = new THREE.Mesh(noseGeom, vanMat);
      nose.position.set(0, 0.72, 2.15);
      nose.castShadow = true;
      group.add(nose);

      // 4. Glass Windshield & Cabin Side Windows
      const windshieldGeom = new THREE.BoxGeometry(1.88, 0.65, 0.45);
      const windshield = new THREE.Mesh(windshieldGeom, this.glassMaterial);
      windshield.position.set(0, 1.35, 1.6);
      windshield.rotation.x = -0.22;
      group.add(windshield);

      const sideWindowsGeom = new THREE.BoxGeometry(2.04, 0.52, 1.1);
      const sideWindows = new THREE.Mesh(sideWindowsGeom, this.glassMaterial);
      sideWindows.position.set(0, 1.32, 1.1);
      group.add(sideWindows);

      // 5. Commercial Front Grille & Heavy Bumper
      const grilleGeom = new THREE.BoxGeometry(1.4, 0.34, 0.1);
      const grille = new THREE.Mesh(grilleGeom, this.trimMaterial);
      grille.position.set(0, 0.65, 2.52);
      group.add(grille);

      const bumperGeom = new THREE.BoxGeometry(2.05, 0.36, 0.22);
      const bumper = new THREE.Mesh(bumperGeom, this.trimMaterial);
      bumper.position.set(0, 0.35, 2.48);
      group.add(bumper);

      // 6. Front Headlights
      const hlGeom = new THREE.BoxGeometry(0.36, 0.16, 0.08);
      const hlLeft = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlLeft.position.set(-0.76, 0.72, 2.52);
      group.add(hlLeft);

      const hlRight = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlRight.position.set(0.76, 0.72, 2.52);
      group.add(hlRight);

      // 7. Side Protective Sliding Door Trim
      const rubStripGeom = new THREE.BoxGeometry(2.08, 0.08, 3.2);
      const rubStrip = new THREE.Mesh(rubStripGeom, this.trimMaterial);
      rubStrip.position.set(0, 0.85, -0.6);
      group.add(rubStrip);

      // 8. Rear Dual Cargo Doors & Step Bumper
      const doorSeamGeom = new THREE.BoxGeometry(0.04, 1.45, 0.04);
      const doorSeam = new THREE.Mesh(doorSeamGeom, this.trimMaterial);
      doorSeam.position.set(0, 1.18, -2.42);
      group.add(doorSeam);

      const rearStepGeom = new THREE.BoxGeometry(1.92, 0.22, 0.18);
      const rearStep = new THREE.Mesh(rearStepGeom, this.trimMaterial);
      rearStep.position.set(0, 0.34, -2.44);
      group.add(rearStep);

      // 9. Iconic Sprinter Vertical Tall LED Taillights (Full height corner strips)
      const tallTLGeom = new THREE.BoxGeometry(0.14, 0.95, 0.08);
      const tlLeft = new THREE.Mesh(tallTLGeom, this.taillightMaterial);
      tlLeft.position.set(-0.92, 1.35, -2.42);
      group.add(tlLeft);

      const tlRight = new THREE.Mesh(tallTLGeom, this.taillightMaterial);
      tlRight.position.set(0.92, 1.35, -2.42);
      group.add(tlRight);

      // Top High-Mount Brake Light
      const topBrakeGeom = new THREE.BoxGeometry(0.36, 0.06, 0.06);
      const topBrake = new THREE.Mesh(topBrakeGeom, this.taillightMaterial);
      topBrake.position.set(0, 1.88, -2.42);
      group.add(topBrake);

      // 10. Wheels
      const vanWheels = [
        [-0.98, 0.36, 1.5],
        [0.98, 0.36, 1.5],
        [-0.98, 0.36, -1.4],
        [0.98, 0.36, -1.4],
      ];
      for (const [wx, wy, wz] of vanWheels) {
        const w = this.createWheelMesh(0.36, 0.26, 0.22);
        w.position.set(wx, wy, wz);
        group.add(w);
      }

    } else if (type === 'suv') {
      // ── LUXURY MODERN SPORT SUV (Range Rover / Cayenne Style) ──
      size = new THREE.Vector3(2.15, 1.75, 4.7);
      const suvMat = this.suvMaterials[variant % this.suvMaterials.length];

      // 1. Lower Sculpted Body & Rocker Panels
      const bodyGeom = new THREE.BoxGeometry(2.1, 0.58, 4.5);
      const body = new THREE.Mesh(bodyGeom, suvMat);
      body.position.set(0, 0.65, 0);
      body.castShadow = true;
      group.add(body);

      const lowerCladdingGeom = new THREE.BoxGeometry(2.14, 0.24, 4.4);
      const lowerCladding = new THREE.Mesh(lowerCladdingGeom, this.trimMaterial);
      lowerCladding.position.set(0, 0.38, 0);
      group.add(lowerCladding);

      // 2. Greenhouse Cabin & Roof
      const cabinGlassGeom = new THREE.BoxGeometry(1.82, 0.65, 2.5);
      const cabinGlass = new THREE.Mesh(cabinGlassGeom, this.glassMaterial);
      cabinGlass.position.set(0, 1.25, -0.3);
      group.add(cabinGlass);

      const roofGeom = new THREE.BoxGeometry(1.78, 0.08, 2.55);
      const roof = new THREE.Mesh(roofGeom, suvMat);
      roof.position.set(0, 1.6, -0.3);
      roof.castShadow = true;
      group.add(roof);

      // Roof Rails
      const railGeom = new THREE.BoxGeometry(0.05, 0.06, 2.1);
      const railLeft = new THREE.Mesh(railGeom, this.chromeMaterial);
      railLeft.position.set(-0.76, 1.66, -0.3);
      group.add(railLeft);

      const railRight = new THREE.Mesh(railGeom, this.chromeMaterial);
      railRight.position.set(0.76, 1.66, -0.3);
      group.add(railRight);

      // 3. Front Hood, Chrome Grille & Skid Plate
      const hoodGeom = new THREE.BoxGeometry(1.98, 0.25, 1.4);
      const hood = new THREE.Mesh(hoodGeom, suvMat);
      hood.position.set(0, 0.88, 1.55);
      hood.castShadow = true;
      group.add(hood);

      const grilleGeom = new THREE.BoxGeometry(1.4, 0.3, 0.08);
      const grille = new THREE.Mesh(grilleGeom, this.chromeMaterial);
      grille.position.set(0, 0.72, 2.28);
      group.add(grille);

      const skidGeom = new THREE.BoxGeometry(1.2, 0.16, 0.1);
      const skid = new THREE.Mesh(skidGeom, this.chromeMaterial);
      skid.position.set(0, 0.38, 2.28);
      group.add(skid);

      // Front Headlights
      const hlGeom = new THREE.BoxGeometry(0.42, 0.14, 0.08);
      const hlLeft = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlLeft.position.set(-0.78, 0.78, 2.28);
      group.add(hlLeft);

      const hlRight = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlRight.position.set(0.78, 0.78, 2.28);
      group.add(hlRight);

      // 4. Rear Full-Width Modern Lightbar & Diffuser
      const rearBarGeom = new THREE.BoxGeometry(1.85, 0.08, 0.06);
      const rearBar = new THREE.Mesh(rearBarGeom, this.taillightMaterial);
      rearBar.position.set(0, 0.95, -2.28);
      group.add(rearBar);

      const tlGeom = new THREE.BoxGeometry(0.4, 0.18, 0.08);
      const tlLeft = new THREE.Mesh(tlGeom, this.taillightMaterial);
      tlLeft.position.set(-0.78, 0.95, -2.28);
      group.add(tlLeft);

      const tlRight = new THREE.Mesh(tlGeom, this.taillightMaterial);
      tlRight.position.set(0.78, 0.95, -2.28);
      group.add(tlRight);

      // Rear Spoiler & Dual Chrome Exhausts
      const spoilerGeom = new THREE.BoxGeometry(1.6, 0.08, 0.3);
      const spoiler = new THREE.Mesh(spoilerGeom, suvMat);
      spoiler.position.set(0, 1.62, -1.65);
      group.add(spoiler);

      const exhaustGeom = new THREE.BoxGeometry(0.18, 0.08, 0.1);
      const exLeft = new THREE.Mesh(exhaustGeom, this.chromeMaterial);
      exLeft.position.set(-0.72, 0.34, -2.28);
      group.add(exLeft);

      const exRight = new THREE.Mesh(exhaustGeom, this.chromeMaterial);
      exRight.position.set(0.72, 0.34, -2.28);
      group.add(exRight);

      // 5. Wheels
      const suvWheels = [
        [-1.0, 0.38, 1.4],
        [1.0, 0.38, 1.4],
        [-1.0, 0.38, -1.4],
        [1.0, 0.38, -1.4],
      ];
      for (const [wx, wy, wz] of suvWheels) {
        const w = this.createWheelMesh(0.38, 0.28, 0.24);
        w.position.set(wx, wy, wz);
        group.add(w);
      }

    } else if (type === 'sedan') {
      // ── EXECUTIVE HIGHWAY SPORTS SEDAN (BMW / Audi Style) ──
      size = new THREE.Vector3(2.05, 1.4, 4.6);
      const sedanMat = this.sedanMaterials[variant % this.sedanMaterials.length];

      // 1. Aerodynamic Lower Body
      const bodyGeom = new THREE.BoxGeometry(2.0, 0.44, 4.5);
      const body = new THREE.Mesh(bodyGeom, sedanMat);
      body.position.set(0, 0.48, 0);
      body.castShadow = true;
      group.add(body);

      // 2. Sculpted Engine Hood & Trunk Deck
      const hoodGeom = new THREE.BoxGeometry(1.9, 0.18, 1.4);
      const hood = new THREE.Mesh(hoodGeom, sedanMat);
      hood.position.set(0, 0.68, 1.4);
      hood.castShadow = true;
      group.add(hood);

      const trunkGeom = new THREE.BoxGeometry(1.85, 0.22, 0.9);
      const trunk = new THREE.Mesh(trunkGeom, sedanMat);
      trunk.position.set(0, 0.7, -1.75);
      trunk.castShadow = true;
      group.add(trunk);

      // 3. Greenhouse Glass & Curved Roof
      const glassGeom = new THREE.BoxGeometry(1.68, 0.52, 2.2);
      const glass = new THREE.Mesh(glassGeom, this.glassMaterial);
      glass.position.set(0, 0.95, -0.2);
      group.add(glass);

      const roofGeom = new THREE.BoxGeometry(1.62, 0.06, 1.8);
      const roof = new THREE.Mesh(roofGeom, sedanMat);
      roof.position.set(0, 1.22, -0.25);
      roof.castShadow = true;
      group.add(roof);

      // 4. Front Radiator Grille & Splitter
      const grilleGeom = new THREE.BoxGeometry(1.1, 0.22, 0.08);
      const grille = new THREE.Mesh(grilleGeom, this.trimMaterial);
      grille.position.set(0, 0.52, 2.26);
      group.add(grille);

      const splitterGeom = new THREE.BoxGeometry(1.92, 0.08, 0.18);
      const splitter = new THREE.Mesh(splitterGeom, this.trimMaterial);
      splitter.position.set(0, 0.24, 2.22);
      group.add(splitter);

      // Front Headlights
      const hlGeom = new THREE.BoxGeometry(0.4, 0.12, 0.08);
      const hlLeft = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlLeft.position.set(-0.72, 0.56, 2.26);
      group.add(hlLeft);

      const hlRight = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlRight.position.set(0.72, 0.56, 2.26);
      group.add(hlRight);

      // 5. Rear L-Shaped LED Taillights & Dual Exhaust
      const tlGeom = new THREE.BoxGeometry(0.48, 0.14, 0.08);
      const tlLeft = new THREE.Mesh(tlGeom, this.taillightMaterial);
      tlLeft.position.set(-0.68, 0.68, -2.26);
      group.add(tlLeft);

      const tlRight = new THREE.Mesh(tlGeom, this.taillightMaterial);
      tlRight.position.set(0.68, 0.68, -2.26);
      group.add(tlRight);

      const barGeom = new THREE.BoxGeometry(1.1, 0.04, 0.06);
      const bar = new THREE.Mesh(barGeom, this.taillightMaterial);
      bar.position.set(0, 0.68, -2.26);
      group.add(bar);

      const exGeom = new THREE.BoxGeometry(0.14, 0.08, 0.1);
      const exLeft = new THREE.Mesh(exGeom, this.chromeMaterial);
      exLeft.position.set(-0.62, 0.28, -2.26);
      group.add(exLeft);

      const exRight = new THREE.Mesh(exGeom, this.chromeMaterial);
      exRight.position.set(0.62, 0.28, -2.26);
      group.add(exRight);

      // 6. Wheels
      const sedanWheels = [
        [-0.96, 0.33, 1.35],
        [0.96, 0.33, 1.35],
        [-0.96, 0.33, -1.35],
        [0.96, 0.33, -1.35],
      ];
      for (const [wx, wy, wz] of sedanWheels) {
        const w = this.createWheelMesh(0.33, 0.24, 0.22);
        w.position.set(wx, wy, wz);
        group.add(w);
      }

    } else {
      // ── COMMERCIAL FREIGHT BOX TRUCK (Heavy Highway Semi) ──
      size = new THREE.Vector3(2.5, 3.4, 10.0);
      const cabMat = this.truckCabMaterials[variant % this.truckCabMaterials.length];

      // 1. Tractor Sleeper Cab & Sloped Deflector
      const cabGeom = new THREE.BoxGeometry(2.38, 2.0, 2.6);
      const cab = new THREE.Mesh(cabGeom, cabMat);
      cab.position.set(0, 1.6, 3.2);
      cab.castShadow = true;
      group.add(cab);

      const hoodGeom = new THREE.BoxGeometry(2.18, 1.15, 1.3);
      const hood = new THREE.Mesh(hoodGeom, cabMat);
      hood.position.set(0, 1.1, 4.8);
      hood.castShadow = true;
      group.add(hood);

      // Roof Air Fairing Deflector Wedge
      const deflectorGeom = new THREE.BoxGeometry(2.2, 0.6, 1.6);
      const deflector = new THREE.Mesh(deflectorGeom, cabMat);
      deflector.position.set(0, 2.8, 2.8);
      group.add(deflector);

      // Cab Windshield & Glass
      const cabGlassGeom = new THREE.BoxGeometry(2.24, 0.72, 1.1);
      const cabGlass = new THREE.Mesh(cabGlassGeom, this.glassMaterial);
      cabGlass.position.set(0, 1.95, 3.6);
      group.add(cabGlass);

      // Heavy Front Radiator Grille & Steel Bumper
      const grilleGeom = new THREE.BoxGeometry(1.5, 0.9, 0.1);
      const grille = new THREE.Mesh(grilleGeom, this.chromeMaterial);
      grille.position.set(0, 1.05, 5.46);
      group.add(grille);

      const bumperGeom = new THREE.BoxGeometry(2.45, 0.45, 0.25);
      const bumper = new THREE.Mesh(bumperGeom, this.trimMaterial);
      bumper.position.set(0, 0.5, 5.42);
      group.add(bumper);

      // Front Headlights
      const hlGeom = new THREE.BoxGeometry(0.38, 0.18, 0.08);
      const hlLeft = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlLeft.position.set(-0.95, 0.55, 5.5);
      group.add(hlLeft);

      const hlRight = new THREE.Mesh(hlGeom, this.headlightMaterial);
      hlRight.position.set(0.95, 0.55, 5.5);
      group.add(hlRight);

      // Twin Vertical Chrome Exhaust Stacks
      const stackGeom = new THREE.CylinderGeometry(0.08, 0.08, 2.4, 8);
      const stackLeft = new THREE.Mesh(stackGeom, this.chromeMaterial);
      stackLeft.position.set(-1.18, 2.4, 1.8);
      group.add(stackLeft);

      const stackRight = new THREE.Mesh(stackGeom, this.chromeMaterial);
      stackRight.position.set(1.18, 2.4, 1.8);
      group.add(stackRight);

      // 2. Freight Cargo Container Box
      const boxGeom = new THREE.BoxGeometry(2.48, 2.4, 6.8);
      const box = new THREE.Mesh(boxGeom, this.truckBoxMaterial);
      box.position.set(0, 2.1, -1.6);
      box.castShadow = true;
      group.add(box);

      // Container Frame & Chassis
      const frameGeom = new THREE.BoxGeometry(2.52, 0.15, 6.84);
      const frame = new THREE.Mesh(frameGeom, this.trimMaterial);
      frame.position.set(0, 3.28, -1.6);
      group.add(frame);

      const chassisGeom = new THREE.BoxGeometry(2.2, 0.4, 7.2);
      const chassis = new THREE.Mesh(chassisGeom, this.trimMaterial);
      chassis.position.set(0, 0.7, -1.6);
      group.add(chassis);

      // 3. Rear Cargo Swing Doors & Steel Underride Crash Bar
      const doorSeamGeom = new THREE.BoxGeometry(0.04, 2.2, 0.04);
      const doorSeam = new THREE.Mesh(doorSeamGeom, this.trimMaterial);
      doorSeam.position.set(0, 2.1, -5.02);
      group.add(doorSeam);

      const crashBarGeom = new THREE.BoxGeometry(2.3, 0.18, 0.15);
      const crashBar = new THREE.Mesh(crashBarGeom, this.trimMaterial);
      crashBar.position.set(0, 0.55, -5.02);
      group.add(crashBar);

      // High-Visibility Rear LED Taillights (Visible from 150m)
      const truckTLGeom = new THREE.BoxGeometry(0.42, 0.22, 0.08);
      const tlLeft = new THREE.Mesh(truckTLGeom, this.taillightMaterial);
      tlLeft.position.set(-0.92, 0.65, -5.04);
      group.add(tlLeft);

      const tlRight = new THREE.Mesh(truckTLGeom, this.taillightMaterial);
      tlRight.position.set(0.92, 0.65, -5.04);
      group.add(tlRight);

      // Top Roof Clearance Markers
      const markerGeom = new THREE.BoxGeometry(0.2, 0.1, 0.06);
      const mLeft = new THREE.Mesh(markerGeom, this.taillightMaterial);
      mLeft.position.set(-1.05, 3.22, -5.02);
      group.add(mLeft);

      const mRight = new THREE.Mesh(markerGeom, this.taillightMaterial);
      mRight.position.set(1.05, 3.22, -5.02);
      group.add(mRight);

      // 4. Heavy Commercial Wheels (10 wheels: steer + drive tandem + trailer tandem)
      const truckWheels = [
        [-1.18, 0.48, 4.4],
        [1.18, 0.48, 4.4],
        [-1.18, 0.48, 2.2],
        [1.18, 0.48, 2.2],
        [-1.18, 0.48, 1.0],
        [1.18, 0.48, 1.0],
        [-1.18, 0.48, -3.2],
        [1.18, 0.48, -3.2],
        [-1.18, 0.48, -4.4],
        [1.18, 0.48, -4.4],
      ];
      for (const [wx, wy, wz] of truckWheels) {
        const w = this.createWheelMesh(0.48, 0.35, 0.28);
        w.position.set(wx, wy, wz);
        group.add(w);
      }
    }

    return {
      mesh: group,
      type,
      speedKmh: 85,
      targetSpeedKmh: 85,
      laneIndex: 0,
      targetLaneIndex: 0,
      isChangingLane: false,
      laneChangeProgress: 0,
      startX: 0,
      targetX: 0,
      laneChangeCooldown: 5 + Math.random() * 8,
      bounds: new THREE.Box3(),
      size,
      active: false,
      nearMissed: false,
    };
  }

  /**
   * Returns a realistic cruising speed adhering to strict lane hierarchy.
   * Ensures natural speed deltas between lanes so cars never pace side-by-side.
   */
  private calculateLaneSpeed(lane: number, type: TrafficType): number {
    switch (lane) {
      case 0: { // Slowest Freight / Truck Lane (Far Left)
        const base = type === 'truck' ? 74 : 78;
        return base + (Math.random() * 4 - 2);
      }
      case 1: { // Medium Cruising Lane (Middle Left)
        const base = type === 'truck' ? 84 : (type === 'van' ? 88 : 94);
        return base + (Math.random() * 4 - 2);
      }
      case 2: { // Fast Cruising Lane (Middle Right)
        const base = type === 'truck' ? 95 : 108;
        return base + (Math.random() * 5 - 2.5);
      }
      case 3: // Express Passing Lane (Far Right)
      default: {
        const base = 124;
        return base + (Math.random() * 6 - 3);
      }
    }
  }

  /**
   * Initializes highway traffic in staggered, balanced slalom waves across 500m.
   * Guarantees at least 2 open escape corridors at all times for cuts and overtaking.
   */
  public reset(playerZ: number): void {
    // 16 vehicles arranged across staggered slalom waves spread over 520 meters
    // Each wave leaves at least 2 adjacent or diagonal corridors 100% open
    const initialConfig: { lane: number; zOffset: number }[] = [
      { lane: 0, zOffset: 75 },   // Wave 1: Heavy freight on far-left (Lanes 1,2,3 completely clear)
      { lane: 2, zOffset: 110 },  // Wave 2: Mid-fast cruiser in Lane 2 (Cut through Lane 1 or 3)
      { lane: 1, zOffset: 155 },  // Wave 3: Delivery van in Lane 1 (Lanes 0,2,3 open)
      { lane: 3, zOffset: 195 },  // Wave 4: Express car in Lane 3 (Lanes 0,1,2 open)
      { lane: 0, zOffset: 240 },  // Wave 5: Slow freight
      { lane: 2, zOffset: 265 },  // Wave 5 staggered: Lane 2 (Lanes 1 and 3 open for zigzag weave)
      { lane: 1, zOffset: 310 },  // Wave 6: Lane 1
      { lane: 3, zOffset: 350 },  // Wave 7: Lane 3
      { lane: 0, zOffset: 395 },  // Wave 8: Lane 0
      { lane: 2, zOffset: 420 },  // Wave 8 staggered: Lane 2
      { lane: 1, zOffset: 460 },  // Wave 9: Lane 1
      { lane: 3, zOffset: 500 },  // Wave 10: Lane 3
      { lane: 0, zOffset: 540 },  // Wave 11: Lane 0
      { lane: 2, zOffset: 575 },  // Wave 12: Lane 2
      { lane: 1, zOffset: 615 },  // Wave 13: Lane 1
      { lane: 3, zOffset: 655 },  // Wave 14: Lane 3
    ];

    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      const cfg = initialConfig[i % initialConfig.length];
      const lane = cfg.lane;
      const laneX = RoadManager.LANES[lane];
      const spawnZ = playerZ + cfg.zOffset;

      const cruiseSpeed = this.calculateLaneSpeed(lane, v.type);

      v.active = true;
      v.laneIndex = lane;
      v.targetLaneIndex = lane;
      v.isChangingLane = false;
      v.laneChangeProgress = 0;
      v.laneChangeCooldown = 10 + Math.random() * 10;
      v.nearMissed = false;
      v.speedKmh = cruiseSpeed;
      v.targetSpeedKmh = cruiseSpeed;
      v.mesh.rotation.y = 0;
      v.mesh.position.set(laneX, 0, spawnZ);
      this.updateVehicleBounds(v);
    }
  }

  public update(
    delta: number,
    playerZ: number,
    playerX: number,
    playerSpeedKmh: number,
    playerBounds: THREE.Box3,
    onNearMiss: (pts: number) => void,
    onCrash: () => void
  ): void {
    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      if (!v.active) continue;

      // ── 1. ANTI-CLIPPING SAFE DISTANCE PACING ──
      // Find the closest vehicle ahead in the same lane or target lane
      let minLeaderDist = 999;
      let leaderSpeed = v.targetSpeedKmh;

      for (let j = 0; j < this.vehicles.length; j++) {
        if (i === j) continue;
        const other = this.vehicles[j];
        if (!other.active) continue;

        const sameLane = other.laneIndex === v.laneIndex || (v.isChangingLane && other.laneIndex === v.targetLaneIndex);
        if (sameLane) {
          const dz = other.mesh.position.z - v.mesh.position.z;
          if (dz > 0 && dz < minLeaderDist) {
            minLeaderDist = dz;
            leaderSpeed = other.speedKmh;
          }
        }
      }

      // Smoothly pace behind leader without forming an artificial traffic jam
      if (minLeaderDist < 28) {
        if (minLeaderDist < 14) {
          // Urgent gentle brake buffer (never drop more than 3 km/h below leader)
          v.speedKmh = THREE.MathUtils.lerp(v.speedKmh, Math.min(v.speedKmh, leaderSpeed - 3), delta * 3.5);
        } else {
          // Match leader speed smoothly (prevents clipping through without bunching)
          v.speedKmh = THREE.MathUtils.lerp(v.speedKmh, leaderSpeed, delta * 2.0);
        }
      } else {
        // Free road ahead: cruise smoothly toward designated lane speed
        v.speedKmh = THREE.MathUtils.lerp(v.speedKmh, v.targetSpeedKmh, delta * 1.2);
      }

      // ── 2. AUTONOMOUS CIVILIAN LANE CHANGING AI (PLAYER-AWARE) ──
      v.laneChangeCooldown -= delta;

      // CRITICAL OVERTAKE COURTESY:
      // If the player is within 70m behind and speeding (>105 km/h), civilian cars MUST HOLD THEIR LANE!
      // This allows the player to spot gaps, plan cuts, and weave cleanly without AI abruptly cutting them off.
      const dzToPlayer = v.mesh.position.z - playerZ;
      const playerApproaching = dzToPlayer > -10 && dzToPlayer < 75 && playerSpeedKmh > 105;

      if (!v.isChangingLane && v.laneChangeCooldown <= 0 && !playerApproaching) {
        const stuckBehindSlower = minLeaderDist < 24 && leaderSpeed < (v.targetSpeedKmh - 5);
        if (stuckBehindSlower) {
          const candidateLanes: number[] = [];
          if (v.laneIndex > 0) candidateLanes.push(v.laneIndex - 1);
          if (v.laneIndex < 3 && v.type !== 'truck') candidateLanes.push(v.laneIndex + 1);

          for (const candLane of candidateLanes) {
            // Ensure candidate lane has at least 34m clearance ahead and behind
            const laneBlocked = this.vehicles.some(
              other => other !== v && other.active &&
              (other.laneIndex === candLane || (other.isChangingLane && other.targetLaneIndex === candLane)) &&
              Math.abs(other.mesh.position.z - v.mesh.position.z) < 34
            );

            // Never cut directly in front of the player's lateral trajectory
            const playerTooClose = Math.abs(playerZ - v.mesh.position.z) < 55 &&
              Math.abs(playerX - RoadManager.LANES[candLane]) < 2.5;

            if (!laneBlocked && !playerTooClose) {
              v.isChangingLane = true;
              v.laneChangeProgress = 0;
              v.startX = v.mesh.position.x;
              v.targetLaneIndex = candLane;
              v.targetX = RoadManager.LANES[candLane];
              // Update target speed to match the new lane's hierarchy
              v.targetSpeedKmh = this.calculateLaneSpeed(candLane, v.type);
              v.laneChangeCooldown = 12 + Math.random() * 10;
              break;
            }
          }
        }
      }

      // Smooth Lane Transition Interpolation with Body Steering Yaw
      if (v.isChangingLane) {
        v.laneChangeProgress += delta / 1.6; // 1.6s smooth lane transition
        if (v.laneChangeProgress >= 1) {
          v.laneChangeProgress = 1;
          v.isChangingLane = false;
          v.laneIndex = v.targetLaneIndex;
          v.mesh.position.x = v.targetX;
          v.mesh.rotation.y = 0;
        } else {
          const t = v.laneChangeProgress;
          const smoothT = t * t * (3 - 2 * t);
          v.mesh.position.x = THREE.MathUtils.lerp(v.startX, v.targetX, smoothT);
          const steerSign = v.targetX > v.startX ? 1 : -1;
          v.mesh.rotation.y = Math.sin(t * Math.PI) * 0.05 * steerSign;
        }
      }

      // Move vehicle forward along Z axis
      const metersPerSec = v.speedKmh / 3.6;
      v.mesh.position.z += metersPerSec * delta;
      this.updateVehicleBounds(v);

      // ── 3. COLLISION CHECK WITH PLAYER ──
      if (playerBounds.intersectsBox(v.bounds)) {
        onCrash();
        return;
      }

      // ── 4. HIGH-SPEED NEAR-MISS DETECTION ──
      if (!v.nearMissed && playerSpeedKmh > 115) {
        const dx = Math.abs(playerX - v.mesh.position.x);
        const dz = Math.abs(playerZ - v.mesh.position.z);
        const nearMissDistanceX = (v.size.x / 2 + 1.05) + 0.65;
        const overlapZ = (v.size.z / 2 + 2.3);

        if (dx < nearMissDistanceX && dz < overlapZ && dx > (v.size.x / 2 + 0.95)) {
          v.nearMissed = true;
          onNearMiss(150);
        }
      }

      // ── 5. BIDIRECTIONAL TRAFFIC RECYCLING ──
      // Recycle if vehicle falls safely behind the player (-35m) or drifts too far ahead (+520m)
      if (v.mesh.position.z < playerZ - 35 || v.mesh.position.z > playerZ + 520) {
        this.recycleVehicle(playerZ, v);
      }
    }
  }

  /**
   * Intelligently respawns vehicles ahead of player with guaranteed escape corridors.
   * Never forms a 3-lane or 4-lane wall across the highway.
   * Distributes traffic smoothly across an extended runway from +85m to +420m.
   */
  private recycleVehicle(playerZ: number, v: TrafficVehicle): void {
    // Target vehicle type to realistic lane categories
    let preferredLanes: number[];
    if (v.type === 'truck') {
      preferredLanes = [0, 1]; // Trucks belong strictly in slow/commercial freight lanes
    } else if (v.type === 'van') {
      preferredLanes = [0, 1, 2];
    } else {
      preferredLanes = [1, 2, 3]; // Sedans and sports SUVs in cruising and passing lanes
    }

    // Try candidate distance gates spread across the highway runway
    const candidateDistances = [
      85 + Math.random() * 30,
      130 + Math.random() * 35,
      180 + Math.random() * 35,
      230 + Math.random() * 40,
      285 + Math.random() * 40,
      340 + Math.random() * 45,
      395 + Math.random() * 45,
    ];

    let bestLane = preferredLanes[Math.floor(Math.random() * preferredLanes.length)];
    let bestSpawnZ = playerZ + 150 + Math.random() * 200;
    let bestScore = -9999;

    for (const dist of candidateDistances) {
      const testZ = playerZ + dist;

      // Check how many lanes are currently occupied in this 44m Z-window [testZ - 22, testZ + 22]
      const occupiedLanes = new Set<number>();
      for (const other of this.vehicles) {
        if (other === v || !other.active) continue;
        if (Math.abs(other.mesh.position.z - testZ) < 22) {
          occupiedLanes.add(other.laneIndex);
          if (other.isChangingLane) occupiedLanes.add(other.targetLaneIndex);
        }
      }

      // GUARANTEED ESCAPE CORRIDOR RULE:
      // Never spawn in a window where 2 or more lanes are already occupied!
      // This guarantees at least 2 lanes are ALWAYS 100% open for overtaking & cutting.
      if (occupiedLanes.size >= 2) {
        continue;
      }

      // Evaluate candidate lanes for this window
      for (const lane of preferredLanes) {
        if (occupiedLanes.has(lane)) continue;

        // Calculate clearance to nearest vehicle in this specific lane
        let minDzInLane = 999;
        for (const other of this.vehicles) {
          if (other === v || !other.active) continue;
          if (other.laneIndex === lane || (other.isChangingLane && other.targetLaneIndex === lane)) {
            const dz = Math.abs(other.mesh.position.z - testZ);
            if (dz < minDzInLane) minDzInLane = dz;
          }
        }

        // Must have at least 28m longitudinal clearance in this lane
        if (minDzInLane >= 28) {
          const score = minDzInLane + (4 - occupiedLanes.size) * 20;
          if (score > bestScore) {
            bestScore = score;
            bestLane = lane;
            bestSpawnZ = testZ;
          }
        }
      }
    }

    // Fallback if highway is exceptionally dense: pick the lane with the absolute biggest clearance
    if (bestScore === -9999) {
      let maxClearance = -1;
      const fallbackZ = playerZ + 160 + Math.random() * 180;
      for (const lane of preferredLanes) {
        let minDz = 999;
        for (const other of this.vehicles) {
          if (other === v || !other.active) continue;
          if (other.laneIndex === lane) {
            const dz = Math.abs(other.mesh.position.z - fallbackZ);
            if (dz < minDz) minDz = dz;
          }
        }
        if (minDz > maxClearance) {
          maxClearance = minDz;
          bestLane = lane;
          bestSpawnZ = fallbackZ;
        }
      }
    }

    // Configure the recycled vehicle adhering to strict lane hierarchy
    const speed = this.calculateLaneSpeed(bestLane, v.type);

    v.active = true;
    v.laneIndex = bestLane;
    v.targetLaneIndex = bestLane;
    v.isChangingLane = false;
    v.laneChangeProgress = 0;
    v.laneChangeCooldown = 10 + Math.random() * 10;
    v.mesh.rotation.y = 0;
    v.mesh.position.set(RoadManager.LANES[bestLane], 0, bestSpawnZ);
    v.speedKmh = speed;
    v.targetSpeedKmh = speed;
    v.nearMissed = false;
    this.updateVehicleBounds(v);
  }

  private updateVehicleBounds(v: TrafficVehicle): void {
    this.scratchBoundsCenter.set(
      v.mesh.position.x,
      v.mesh.position.y + v.size.y / 2,
      v.mesh.position.z
    );
    v.bounds.setFromCenterAndSize(this.scratchBoundsCenter, v.size);
  }

  /**
   * Real-time Danger Proximity Detection for Early Left/Right Steer Warnings
   */
  public getProximityWarning(playerZ: number, playerX: number): { distance: number; lane: 'SAME' | 'LEFT' | 'RIGHT' } | null {
    let closestDist = 999;
    let closestLane: 'SAME' | 'LEFT' | 'RIGHT' = 'SAME';

    for (const v of this.vehicles) {
      if (!v.active) continue;
      const dz = v.mesh.position.z - playerZ;
      // Danger zone: ahead within 4m to 40m
      if (dz > 3.5 && dz < 40) {
        const dx = v.mesh.position.x - playerX;
        if (Math.abs(dx) < 3.2 && dz < closestDist) {
          closestDist = dz;
          if (Math.abs(dx) < 1.1) {
            closestLane = 'SAME';
          } else if (dx < 0) {
            closestLane = 'LEFT';
          } else {
            closestLane = 'RIGHT';
          }
        }
      }
    }

    if (closestDist <= 38) {
      return { distance: Math.round(closestDist), lane: closestLane };
    }
    return null;
  }

  public dispose(): void {
    for (const v of this.vehicles) {
      this.scene.remove(v.mesh);
      v.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
        }
      });
    }

    for (const m of this.vanMaterials) m.dispose();
    for (const m of this.sedanMaterials) m.dispose();
    for (const m of this.suvMaterials) m.dispose();
    for (const m of this.truckCabMaterials) m.dispose();

    this.truckBoxMaterial.dispose();
    this.trimMaterial.dispose();
    this.chromeMaterial.dispose();
    this.glassMaterial.dispose();
    this.tireMaterial.dispose();
    this.rimMaterial.dispose();
    this.headlightMaterial.dispose();
    this.taillightMaterial.dispose();
  }
}
