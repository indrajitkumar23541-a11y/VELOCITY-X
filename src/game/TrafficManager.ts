// VELOCITY X - Highway Traffic Engine & Near-Miss Multiplier System
import * as THREE from 'three';
import { RoadManager } from './RoadManager';

export type TrafficType = 'van' | 'sedan' | 'suv' | 'truck';

export interface TrafficVehicle {
  mesh: THREE.Group;
  type: TrafficType;
  speedKmh: number;
  laneIndex: number;
  bounds: THREE.Box3;
  size: THREE.Vector3;
  active: boolean;
  nearMissed: boolean;
}

export class TrafficManager {
  private scene: THREE.Scene;
  private poolSize = 14;
  public vehicles: TrafficVehicle[] = [];

  // High-Visibility Shared Materials (Draw-call optimized)
  private vanMaterial: THREE.MeshStandardMaterial;
  private sedanMaterial: THREE.MeshStandardMaterial;
  private suvMaterial: THREE.MeshStandardMaterial;
  private truckCabMaterial: THREE.MeshStandardMaterial;
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

    // Authentic automotive & commercial fleet materials
    this.vanMaterial = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.45, roughness: 0.38 }); // Crisp Polar Fleet White
    this.sedanMaterial = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 }); // Metallic Slate Silver
    this.suvMaterial = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, metalness: 0.78, roughness: 0.28 }); // Deep Royal Sapphire
    this.truckCabMaterial = new THREE.MeshStandardMaterial({ color: 0xb91c1c, metalness: 0.65, roughness: 0.32 }); // Highway Crimson Red
    this.truckBoxMaterial = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, metalness: 0.35, roughness: 0.55 }); // Commercial Freight Alloy Box
    this.trimMaterial = new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.2, roughness: 0.85 }); // Matte dark composite trim
    this.chromeMaterial = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.96, roughness: 0.14 }); // Polished chrome accents
    this.glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.08, metalness: 0.85, opacity: 0.88, transparent: true });
    this.tireMaterial = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.85, metalness: 0.08 });
    this.rimMaterial = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.9, roughness: 0.22 });
    
    // Safety & Navigation Lights
    this.headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Bright White LED Headlights
    this.taillightMaterial = new THREE.MeshBasicMaterial({ color: 0xff002b }); // Vivid Glowing Red LED Taillights

    this.initPool();
  }

  private initPool(): void {
    const types: TrafficType[] = ['van', 'sedan', 'suv', 'truck'];

    for (let i = 0; i < this.poolSize; i++) {
      const type = types[i % types.length];
      const vehicle = this.createVehicleModel(type);
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
   * Constructs authentic, highly recognizable vehicle models
   */
  private createVehicleModel(type: TrafficType): TrafficVehicle {
    const group = new THREE.Group();
    let size: THREE.Vector3;

    if (type === 'van') {
      // ── COMMERCIAL CARGO DELIVERY VAN (Sprinter / Transit Style) ──
      size = new THREE.Vector3(2.1, 2.3, 5.2);

      // 1. Lower chassis frame & underbody trim
      const lowerTrimGeom = new THREE.BoxGeometry(2.06, 0.28, 5.0);
      const lowerTrim = new THREE.Mesh(lowerTrimGeom, this.trimMaterial);
      lowerTrim.position.set(0, 0.32, 0);
      group.add(lowerTrim);

      // 2. Main Cargo Box Body
      const cargoBodyGeom = new THREE.BoxGeometry(2.02, 1.48, 3.4);
      const cargoBody = new THREE.Mesh(cargoBodyGeom, this.vanMaterial);
      cargoBody.position.set(0, 1.18, -0.7);
      cargoBody.castShadow = true;
      group.add(cargoBody);

      // 3. Cabin & Sloped Hood Front
      const cabinGeom = new THREE.BoxGeometry(1.98, 1.25, 1.4);
      const cabin = new THREE.Mesh(cabinGeom, this.vanMaterial);
      cabin.position.set(0, 1.05, 1.5);
      cabin.castShadow = true;
      group.add(cabin);

      // Front aerodynamic nose slope
      const noseGeom = new THREE.BoxGeometry(1.94, 0.42, 0.75);
      const nose = new THREE.Mesh(noseGeom, this.vanMaterial);
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

      // 1. Lower Sculpted Body & Rocker Panels
      const bodyGeom = new THREE.BoxGeometry(2.1, 0.58, 4.5);
      const body = new THREE.Mesh(bodyGeom, this.suvMaterial);
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
      const roof = new THREE.Mesh(roofGeom, this.suvMaterial);
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
      const hood = new THREE.Mesh(hoodGeom, this.suvMaterial);
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
      const spoiler = new THREE.Mesh(spoilerGeom, this.suvMaterial);
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

      // 1. Aerodynamic Lower Body
      const bodyGeom = new THREE.BoxGeometry(2.0, 0.44, 4.5);
      const body = new THREE.Mesh(bodyGeom, this.sedanMaterial);
      body.position.set(0, 0.48, 0);
      body.castShadow = true;
      group.add(body);

      // 2. Sculpted Engine Hood & Trunk Deck
      const hoodGeom = new THREE.BoxGeometry(1.9, 0.18, 1.4);
      const hood = new THREE.Mesh(hoodGeom, this.sedanMaterial);
      hood.position.set(0, 0.68, 1.4);
      hood.castShadow = true;
      group.add(hood);

      const trunkGeom = new THREE.BoxGeometry(1.85, 0.22, 0.9);
      const trunk = new THREE.Mesh(trunkGeom, this.sedanMaterial);
      trunk.position.set(0, 0.7, -1.75);
      trunk.castShadow = true;
      group.add(trunk);

      // 3. Greenhouse Glass & Curved Roof
      const glassGeom = new THREE.BoxGeometry(1.68, 0.52, 2.2);
      const glass = new THREE.Mesh(glassGeom, this.glassMaterial);
      glass.position.set(0, 0.95, -0.2);
      group.add(glass);

      const roofGeom = new THREE.BoxGeometry(1.62, 0.06, 1.8);
      const roof = new THREE.Mesh(roofGeom, this.sedanMaterial);
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

      // 1. Tractor Sleeper Cab & Sloped Deflector
      const cabGeom = new THREE.BoxGeometry(2.38, 2.0, 2.6);
      const cab = new THREE.Mesh(cabGeom, this.truckCabMaterial);
      cab.position.set(0, 1.6, 3.2);
      cab.castShadow = true;
      group.add(cab);

      const hoodGeom = new THREE.BoxGeometry(2.18, 1.15, 1.3);
      const hood = new THREE.Mesh(hoodGeom, this.truckCabMaterial);
      hood.position.set(0, 1.1, 4.8);
      hood.castShadow = true;
      group.add(hood);

      // Roof Air Fairing Deflector Wedge
      const deflectorGeom = new THREE.BoxGeometry(2.2, 0.6, 1.6);
      const deflector = new THREE.Mesh(deflectorGeom, this.truckCabMaterial);
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
      speedKmh: 80 + Math.random() * 30,
      laneIndex: 0,
      bounds: new THREE.Box3(),
      size,
      active: false,
      nearMissed: false,
    };
  }

  public reset(playerZ: number): void {
    let spawnZ = playerZ + 45;
    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      const lane = i % 4;
      const laneX = RoadManager.LANES[lane];

      v.active = true;
      v.laneIndex = lane;
      v.nearMissed = false;
      v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : (v.type === 'van' ? 80 + Math.random() * 20 : 85 + Math.random() * 25);
      v.mesh.position.set(laneX, 0, spawnZ);
      this.updateVehicleBounds(v);

      spawnZ += 20 + Math.random() * 25;
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
    for (const v of this.vehicles) {
      if (!v.active) continue;

      // Move civilian vehicle forward at its cruising speed
      const metersPerSec = v.speedKmh / 3.6;
      v.mesh.position.z += metersPerSec * delta;
      this.updateVehicleBounds(v);

      // 1. Collision Check with Player
      if (playerBounds.intersectsBox(v.bounds)) {
        onCrash();
        return;
      }

      // 2. High-Speed Near-Miss Check
      // Player must be going > 115 km/h, lateral distance < 2.1m, overlapping Z
      if (!v.nearMissed && playerSpeedKmh > 115) {
        const dx = Math.abs(playerX - v.mesh.position.x);
        const dz = Math.abs(playerZ - v.mesh.position.z);
        const nearMissDistanceX = (v.size.x / 2 + 1.05) + 0.65; // ~2.1m clearance
        const overlapZ = (v.size.z / 2 + 2.3);

        if (dx < nearMissDistanceX && dz < overlapZ && dx > (v.size.x / 2 + 0.95)) {
          v.nearMissed = true;
          onNearMiss(150);
        }
      }

      // 3. Bidirectional Traffic Recycling (prevents empty highway when player slows or stops)
      if (v.mesh.position.z < playerZ - 35 || v.mesh.position.z > playerZ + 210) {
        this.recycleVehicle(playerZ, v);
      }
    }
  }

  private recycleVehicle(playerZ: number, v: TrafficVehicle): void {
    // Find a safe spawn position ahead of player that doesn't overlap other vehicles
    let bestLane = Math.floor(Math.random() * 4);
    let bestZ = playerZ + 55 + Math.random() * 90;

    for (let attempts = 0; attempts < 6; attempts++) {
      const candidateLane = (bestLane + attempts) % 4;
      const candidateZ = playerZ + 50 + Math.random() * 95;

      const laneBlocked = this.vehicles.some(
        other => other !== v && other.active && other.laneIndex === candidateLane && Math.abs(other.mesh.position.z - candidateZ) < 24
      );

      if (!laneBlocked) {
        bestLane = candidateLane;
        bestZ = candidateZ;
        break;
      }
    }

    v.laneIndex = bestLane;
    v.mesh.position.set(RoadManager.LANES[bestLane], 0, bestZ);
    v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : (v.type === 'van' ? 80 + Math.random() * 20 : 85 + Math.random() * 25);
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
    this.vanMaterial.dispose();
    this.sedanMaterial.dispose();
    this.suvMaterial.dispose();
    this.truckCabMaterial.dispose();
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
