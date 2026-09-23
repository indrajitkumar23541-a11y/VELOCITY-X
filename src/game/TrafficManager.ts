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

  // Scratch vector for zero-GC bounding box updates
  private scratchBoundsCenter = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Initialize shared materials
    // High-Visibility Vehicle Materials with Distinct Highway Contrast
    this.taxiMaterial = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 0.5, roughness: 0.35 });
    this.sedanMaterial = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.85, roughness: 0.25 }); // Pearl white/silver
    this.suvMaterial = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.7, roughness: 0.3 }); // Vibrant Royal Blue
    this.truckCabMaterial = new THREE.MeshStandardMaterial({ color: 0xe11d48, metalness: 0.6, roughness: 0.35 }); // Safety Crimson
    this.truckTankMaterial = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.15 }); // chrome tanker
    this.glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.9, opacity: 0.85, transparent: true });
    this.tireMaterial = new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.8, metalness: 0.1 });
    
    // Ultra-bright Glowing Red LED Taillights (Visible from 150m away)
    this.taillightMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff0033,
    });

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
      size = new THREE.Vector3(2.5, 3.2, 9.6);
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

      // TRUCK REAR TAILLIGHTS (High-Visibility Safety Clusters at z = -4.9)
      const truckTLGeom = new THREE.BoxGeometry(0.35, 0.22, 0.1);
      const tlLeft = new THREE.Mesh(truckTLGeom, this.taillightMaterial);
      tlLeft.position.set(-0.95, 0.65, -4.9);
      group.add(tlLeft);

      const tlRight = new THREE.Mesh(truckTLGeom, this.taillightMaterial);
      tlRight.position.set(0.95, 0.65, -4.9);
      group.add(tlRight);

      // Truck Top Clearance Markers
      const markerGeom = new THREE.BoxGeometry(0.2, 0.12, 0.08);
      const markerLeft = new THREE.Mesh(markerGeom, this.taillightMaterial);
      markerLeft.position.set(-0.9, 2.7, -4.75);
      group.add(markerLeft);

      const markerRight = new THREE.Mesh(markerGeom, this.taillightMaterial);
      markerRight.position.set(0.9, 2.7, -4.75);
      group.add(markerRight);
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

      // Ultra-Visible Glowing LED Taillights (Wider & Bolder at z = -2.2)
      const tlGeom = new THREE.BoxGeometry(0.55, 0.16, 0.1);
      const leftTL = new THREE.Mesh(tlGeom, this.taillightMaterial);
      leftTL.position.set(-0.65, 0.35 + chassisHeight * 0.7, -2.2);
      group.add(leftTL);

      const rightTL = new THREE.Mesh(tlGeom, this.taillightMaterial);
      rightTL.position.set(0.65, 0.35 + chassisHeight * 0.7, -2.2);
      group.add(rightTL);

      // Rear Red Lightbar Stripe
      const barGeom = new THREE.BoxGeometry(1.2, 0.05, 0.08);
      const rearBar = new THREE.Mesh(barGeom, this.taillightMaterial);
      rearBar.position.set(0, 0.35 + chassisHeight * 0.7, -2.2);
      group.add(rearBar);
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
      v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : 85 + Math.random() * 25;
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
    v.speedKmh = v.type === 'truck' ? 70 + Math.random() * 15 : 85 + Math.random() * 25;
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
    this.taxiMaterial.dispose();
    this.sedanMaterial.dispose();
    this.suvMaterial.dispose();
    this.truckCabMaterial.dispose();
    this.truckTankMaterial.dispose();
    this.glassMaterial.dispose();
    this.tireMaterial.dispose();
    this.taillightMaterial.dispose();
  }
}
