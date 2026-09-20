// VELOCITY X - Highway Traffic Engine & Near-Miss Multiplier System
import * as THREE from 'three';
import { RoadManager } from './RoadManager';

export type TrafficType = 'taxi' | 'sedan' | 'suv' | 'truck';

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

  // Reusable materials & geometries for draw call minimization
  private taxiMaterial: THREE.MeshStandardMaterial;
  private sedanMaterial: THREE.MeshStandardMaterial;
  private suvMaterial: THREE.MeshStandardMaterial;
  private truckCabMaterial: THREE.MeshStandardMaterial;
  private truckTankMaterial: THREE.MeshStandardMaterial;
  private glassMaterial: THREE.MeshPhysicalMaterial;
  private tireMaterial: THREE.MeshStandardMaterial;
  private taillightMaterial: THREE.MeshBasicMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Initialize shared materials
    this.taxiMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc00, metalness: 0.6, roughness: 0.3 });
    this.sedanMaterial = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.25 });
    this.suvMaterial = new THREE.MeshStandardMaterial({ color: 0x1a202c, metalness: 0.7, roughness: 0.35 });
    this.truckCabMaterial = new THREE.MeshStandardMaterial({ color: 0x3182ce, metalness: 0.5, roughness: 0.4 });
    this.truckTankMaterial = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 }); // chrome tanker
    this.glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.9, opacity: 0.85, transparent: true });
    this.tireMaterial = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.8, metalness: 0.1 });
    this.taillightMaterial = new THREE.MeshBasicMaterial({ color: 0xbb1111 });

    this.initPool();
  }

  private initPool(): void {
    const types: TrafficType[] = ['taxi', 'sedan', 'suv', 'truck'];

    for (let i = 0; i < this.poolSize; i++) {
      const type = types[i % types.length];
      const vehicle = this.createVehicleModel(type);
      vehicle.mesh.position.set(0, -999, 0);
      this.scene.add(vehicle.mesh);
      this.vehicles.push(vehicle);
    }
  }

  private createVehicleModel(type: TrafficType): TrafficVehicle {
    const group = new THREE.Group();
    let size = new THREE.Vector3(2.0, 1.4, 4.4);

    if (type === 'truck') {
      size = new THREE.Vector3(2.5, 3.2, 9.2);
      // Heavy Tanker Cab
      const cabGeom = new THREE.BoxGeometry(2.4, 2.8, 2.8);
      const cab = new THREE.Mesh(cabGeom, this.truckCabMaterial);
      cab.position.set(0, 1.6, 2.6);
      cab.castShadow = true;
      group.add(cab);

      // Chrome Cylindrical Tank Trailer
      const tankGeom = new THREE.CylinderGeometry(1.25, 1.25, 5.8, 16);
      tankGeom.rotateX(Math.PI / 2);
      const tank = new THREE.Mesh(tankGeom, this.truckTankMaterial);
      tank.position.set(0, 1.8, -1.8);
      tank.castShadow = true;
      group.add(tank);

      // Tanker trailer chassis
      const trailerChassis = new THREE.BoxGeometry(2.3, 0.4, 6.2);
      const tChassis = new THREE.Mesh(trailerChassis, this.tireMaterial);
      tChassis.position.set(0, 0.5, -1.8);
      group.add(tChassis);

      // 6 pairs of heavy wheels
      const wheelGeom = new THREE.CylinderGeometry(0.48, 0.48, 0.35, 16);
      wheelGeom.rotateZ(Math.PI / 2);
      const zWheels = [3.2, 1.8, -1.0, -2.4, -3.8];
      for (const zw of zWheels) {
        const leftW = new THREE.Mesh(wheelGeom, this.tireMaterial);
        leftW.position.set(-1.15, 0.48, zw);
        group.add(leftW);
        const rightW = new THREE.Mesh(wheelGeom, this.tireMaterial);
        rightW.position.set(1.15, 0.48, zw);
        group.add(rightW);
      }
    } else {
      // Civilian Passenger Cars (Sedan, SUV, Taxi)
      const isSUV = type === 'suv';
      const isTaxi = type === 'taxi';
      const chassisHeight = isSUV ? 0.65 : 0.45;
      const cabinHeight = isSUV ? 0.75 : 0.5;
      size = new THREE.Vector3(2.0, isSUV ? 1.65 : 1.35, 4.4);

      const carMat = isTaxi ? this.taxiMaterial : (isSUV ? this.suvMaterial : this.sedanMaterial);

      // Lower Body
      const bodyGeom = new THREE.BoxGeometry(2.0, chassisHeight, 4.4);
      const body = new THREE.Mesh(bodyGeom, carMat);
      body.position.y = 0.35 + chassisHeight / 2;
      body.castShadow = true;
      group.add(body);

      // Cabin Glass
      const cabinGeom = new THREE.BoxGeometry(1.7, cabinHeight, 2.2);
      const cabin = new THREE.Mesh(cabinGeom, this.glassMaterial);
      cabin.position.set(0, 0.35 + chassisHeight + cabinHeight / 2 - 0.05, -0.2);
      group.add(cabin);

      // Taxi Roof Sign
      if (isTaxi) {
        const signGeom = new THREE.BoxGeometry(0.6, 0.16, 0.25);
        const signMat = new THREE.MeshBasicMaterial({ color: 0xfff0aa });
        const sign = new THREE.Mesh(signGeom, signMat);
        sign.position.set(0, 0.35 + chassisHeight + cabinHeight + 0.08, -0.2);
        group.add(sign);
      }

      // 4 Wheels
      const wheelGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 16);
      wheelGeom.rotateZ(Math.PI / 2);
      const wheelPositions = [
        [-0.95, 0.32, 1.3],
        [0.95, 0.32, 1.3],
        [-0.95, 0.32, -1.3],
        [0.95, 0.32, -1.3],
      ];
      for (const [wx, wy, wz] of wheelPositions) {
        const w = new THREE.Mesh(wheelGeom, this.tireMaterial);
        w.position.set(wx, wy, wz);
        group.add(w);
      }

      // Taillights
      const tlGeom = new THREE.BoxGeometry(0.4, 0.12, 0.08);
      const leftTL = new THREE.Mesh(tlGeom, this.taillightMaterial);
      leftTL.position.set(-0.65, 0.35 + chassisHeight * 0.7, -2.2);
      group.add(leftTL);

      const rightTL = new THREE.Mesh(tlGeom, this.taillightMaterial);
      rightTL.position.set(0.65, 0.35 + chassisHeight * 0.7, -2.2);
      group.add(rightTL);
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
      const lane = Math.floor(Math.random() * 4);
      const laneX = RoadManager.LANES[lane];

      v.active = true;
      v.laneIndex = lane;
      v.nearMissed = false;
      v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : 85 + Math.random() * 25;
      v.mesh.position.set(laneX, 0, spawnZ);
      this.updateVehicleBounds(v);

      spawnZ += 28 + Math.random() * 32;
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
      // Player must be going > 115 km/h, lateral distance < 1.95m, overlapping Z
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

      // 3. Recycle vehicles that fall far behind player (or too far ahead)
      if (v.mesh.position.z < playerZ - 35) {
        // Find furthest active vehicle ahead
        let maxZ = playerZ + 50;
        for (const other of this.vehicles) {
          if (other.active && other.mesh.position.z > maxZ) {
            maxZ = other.mesh.position.z;
          }
        }
        // Reposition ahead in random lane
        const newLane = Math.floor(Math.random() * 4);
        v.laneIndex = newLane;
        v.mesh.position.set(RoadManager.LANES[newLane], 0, maxZ + 25 + Math.random() * 30);
        v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : 85 + Math.random() * 25;
        v.nearMissed = false;
        this.updateVehicleBounds(v);
      }
    }
  }

  private updateVehicleBounds(v: TrafficVehicle): void {
    v.bounds.setFromCenterAndSize(
      new THREE.Vector3(v.mesh.position.x, v.mesh.position.y + v.size.y / 2, v.mesh.position.z),
      v.size
    );
  }
}
