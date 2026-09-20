// VELOCITY X - Infinite 4-Lane Cyber Highway Engine
import * as THREE from 'three';

export class RoadManager {
  private scene: THREE.Scene;
  private roadSegments: THREE.Group[] = [];
  private segmentLength = 120;
  private totalSegments = 6;
  public static readonly LANE_WIDTH = 3.6;
  public static readonly LANES = [-5.4, -1.8, 1.8, 5.4]; // 4 distinct lanes

  private asphaltMaterial: THREE.MeshStandardMaterial;
  private lineMaterial: THREE.MeshBasicMaterial;
  private yellowLineMaterial: THREE.MeshBasicMaterial;
  private barrierMaterial: THREE.MeshStandardMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Create procedural high-res asphalt texture (dark tarmac with subtle grain and wet reflection)
    const asphaltTex = this.createAsphaltTexture();
    asphaltTex.wrapS = THREE.RepeatWrapping;
    asphaltTex.wrapT = THREE.RepeatWrapping;
    asphaltTex.repeat.set(4, 30);

    this.asphaltMaterial = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      map: asphaltTex,
      roughness: 0.35, // sleek wet tarmac specular sheen
      metalness: 0.15,
    });

    this.lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.yellowLineMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    this.barrierMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a5568,
      metalness: 0.8,
      roughness: 0.3,
    });

    this.buildHighwaySegments();
    this.buildCitySkyline();
  }

  private createAsphaltTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base dark asphalt
    ctx.fillStyle = '#1a1d24';
    ctx.fillRect(0, 0, 512, 512);

    // Micro grain noise
    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 24;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // Subtle wet streaks / puddles
    ctx.fillStyle = 'rgba(10, 15, 25, 0.4)';
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * 512, Math.random() * 512, 60 + Math.random() * 80, 20 + Math.random() * 30, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private buildHighwaySegments(): void {
    const roadWidth = 16.5; // 4 full lanes + shoulders
    const roadGeom = new THREE.PlaneGeometry(roadWidth, this.segmentLength);
    roadGeom.rotateX(-Math.PI / 2);

    // Dashed lane lines
    const dashGeom = new THREE.PlaneGeometry(0.2, 4);
    dashGeom.rotateX(-Math.PI / 2);

    // Solid outer shoulder lines
    const solidLineGeom = new THREE.PlaneGeometry(0.25, this.segmentLength);
    solidLineGeom.rotateX(-Math.PI / 2);

    // Concrete roadside guardrails
    const barrierGeom = new THREE.BoxGeometry(0.5, 0.9, this.segmentLength);

    for (let i = 0; i < this.totalSegments; i++) {
      const segment = new THREE.Group();
      const zPos = i * this.segmentLength - 40; // start slightly behind player
      segment.position.set(0, 0, zPos);

      // 1. Asphalt Deck
      const roadMesh = new THREE.Mesh(roadGeom, this.asphaltMaterial);
      roadMesh.receiveShadow = true;
      segment.add(roadMesh);

      // 2. Outer Shoulder Lines (Yellow / White)
      const leftSolid = new THREE.Mesh(solidLineGeom, this.yellowLineMaterial);
      leftSolid.position.set(-7.4, 0.01, 0);
      segment.add(leftSolid);

      const rightSolid = new THREE.Mesh(solidLineGeom, this.lineMaterial);
      rightSolid.position.set(7.4, 0.01, 0);
      segment.add(rightSolid);

      // 3. 3 Inter-lane Dashed Lines (-3.6, 0, +3.6)
      const interLanes = [-3.6, 0, 3.6];
      const dashesPerSegment = Math.floor(this.segmentLength / 8);

      for (const laneX of interLanes) {
        for (let d = 0; d < dashesPerSegment; d++) {
          const dash = new THREE.Mesh(dashGeom, this.lineMaterial);
          dash.position.set(laneX, 0.01, -this.segmentLength / 2 + d * 8 + 2);
          segment.add(dash);
        }
      }

      // 4. Guardrails with roadside cat-eye reflectors
      const leftBarrier = new THREE.Mesh(barrierGeom, this.barrierMaterial);
      leftBarrier.position.set(-8.3, 0.45, 0);
      segment.add(leftBarrier);

      const rightBarrier = new THREE.Mesh(barrierGeom, this.barrierMaterial);
      rightBarrier.position.set(8.3, 0.45, 0);
      segment.add(rightBarrier);

      // 5. Street Lamp posts every 40m
      for (let lp = 0; lp < 3; lp++) {
        const lampZ = -this.segmentLength / 2 + lp * 40 + 20;
        const lampPole = this.createStreetLamp();
        lampPole.position.set(-8.8, 0, lampZ);
        segment.add(lampPole);

        const rightLamp = this.createStreetLamp(true);
        rightLamp.position.set(8.8, 0, lampZ);
        segment.add(rightLamp);
      }

      this.scene.add(segment);
      this.roadSegments.push(segment);
    }
  }

  private createStreetLamp(flipped = false): THREE.Group {
    const lamp = new THREE.Group();

    // Metallic pole
    const poleGeom = new THREE.CylinderGeometry(0.12, 0.16, 7.5, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x333b4d, metalness: 0.8, roughness: 0.3 });
    const pole = new THREE.Mesh(poleGeom, poleMat);
    pole.position.y = 3.75;
    lamp.add(pole);

    // Overhanging arm
    const armGeom = new THREE.CylinderGeometry(0.08, 0.1, 2.5, 8);
    armGeom.rotateZ(flipped ? -Math.PI / 4 : Math.PI / 4);
    const arm = new THREE.Mesh(armGeom, poleMat);
    arm.position.set(flipped ? -0.8 : 0.8, 7.2, 0);
    lamp.add(arm);

    // Glowing LED Luminaire
    const bulbGeom = new THREE.BoxGeometry(0.6, 0.15, 0.4);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0x88eeff }); // cool cyber cyan-white
    const bulb = new THREE.Mesh(bulbGeom, bulbMat);
    bulb.position.set(flipped ? -1.6 : 1.6, 7.6, 0);
    lamp.add(bulb);

    return lamp;
  }

  private buildCitySkyline(): void {
    // Instanced distant cyberpunk skyscrapers for high-speed parallax depth
    const buildingCount = 60;
    const buildingGeom = new THREE.BoxGeometry(1, 1, 1);
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e18,
      roughness: 0.6,
      metalness: 0.2,
    });

    const instancedMesh = new THREE.InstancedMesh(buildingGeom, buildingMat, buildingCount);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < buildingCount; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (45 + Math.random() * 80);
      const z = (i / buildingCount) * 800 - 100;
      const height = 40 + Math.random() * 90;
      const width = 15 + Math.random() * 25;
      const depth = 15 + Math.random() * 25;

      dummy.position.set(x, height / 2 - 5, z);
      dummy.scale.set(width, height, depth);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(instancedMesh);
  }

  public update(playerZ: number): void {
    // Recycle road segments ahead as player drives forward along +Z
    for (const segment of this.roadSegments) {
      if (segment.position.z < playerZ - 60) {
        // Find furthest segment Z
        let maxZ = -Infinity;
        for (const s of this.roadSegments) {
          if (s.position.z > maxZ) maxZ = s.position.z;
        }
        segment.position.z = maxZ + this.segmentLength;
      }
    }
  }

  public getLaneX(laneIndex: number): number {
    const idx = Math.max(0, Math.min(3, laneIndex));
    return RoadManager.LANES[idx];
  }
}
