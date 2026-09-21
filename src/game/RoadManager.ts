// VELOCITY X - Infinite 8K Cyber Highway & Night City Metropolis Engine
import * as THREE from 'three';

export class RoadManager {
  private scene: THREE.Scene;
  private roadSegments: THREE.Group[] = [];
  private segmentLength = 140;
  private totalSegments = 6;
  public static readonly LANE_WIDTH = 3.6;
  public static readonly LANES = [-5.4, -1.8, 1.8, 5.4]; // 4 distinct lanes

  private asphaltMaterial: THREE.MeshStandardMaterial;
  private lineMaterial: THREE.MeshStandardMaterial;
  private yellowLineMaterial: THREE.MeshStandardMaterial;
  private barrierMaterial: THREE.MeshStandardMaterial;
  private buildingMaterial: THREE.MeshStandardMaterial;
  private neonSignMaterials: THREE.MeshBasicMaterial[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. High-Res Reflective Wet Asphalt Texture
    const asphaltTex = this.createAsphaltTexture();
    asphaltTex.wrapS = THREE.RepeatWrapping;
    asphaltTex.wrapT = THREE.RepeatWrapping;
    asphaltTex.repeat.set(4, 35);

    this.asphaltMaterial = new THREE.MeshStandardMaterial({
      color: 0x222630,
      map: asphaltTex,
      roughness: 0.22, // sleek wet tarmac specular sheen
      metalness: 0.25,
    });

    // Glowing Lane Markings
    this.lineMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x88ccff,
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });

    this.yellowLineMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff8800,
      emissiveIntensity: 0.7,
      roughness: 0.2,
    });

    // Metallic Highway Guardrails with reflective sheen
    this.barrierMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a6a85,
      metalness: 0.85,
      roughness: 0.25,
    });

    // 2. Procedural Glowing Skyscraper Window Texture
    const buildingTex = this.createBuildingTexture();
    buildingTex.wrapS = THREE.RepeatWrapping;
    buildingTex.wrapT = THREE.RepeatWrapping;
    buildingTex.repeat.set(1, 1);

    this.buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0x121726,
      roughness: 0.35,
      metalness: 0.6,
      map: buildingTex,
      emissiveMap: buildingTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.85,
    });

    // 3. Cyberpunk Neon Billboard Materials
    this.createNeonSignMaterials();

    // 4. Build Highway & Infinite Night Skyline
    this.buildHighwaySegments();
  }

  private createAsphaltTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base asphalt tone
    ctx.fillStyle = '#1e222a';
    ctx.fillRect(0, 0, 512, 512);

    // Fine mineral grain
    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 32;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise + 2));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise + 6));
    }
    ctx.putImageData(imgData, 0, 0);

    // Dynamic wet gloss puddles that reflect streetlights
    ctx.fillStyle = 'rgba(10, 20, 35, 0.45)';
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 512,
        Math.random() * 512,
        50 + Math.random() * 80,
        15 + Math.random() * 30,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createBuildingTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Dark architectural facade
    ctx.fillStyle = '#060a14';
    ctx.fillRect(0, 0, 512, 512);

    // Structural columns / mullions
    ctx.fillStyle = '#0b1220';
    for (let c = 0; c < 512; c += 32) {
      ctx.fillRect(c, 0, 4, 512);
    }

    // Grid of illuminated windows
    const colors = [
      '#ffd580', // Warm golden penthouse
      '#00f3ff', // Cyber cyan tech office
      '#ff007f', // Neon magenta studio
      '#a0c4ff', // Cool white fluorescent
      '#ffe066', // Amber warm light
    ];

    for (let y = 16; y < 500; y += 18) {
      for (let x = 6; x < 500; x += 32) {
        // 55% chance window is lit
        if (Math.random() < 0.55) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 22, 10);

          // Subtle window blind / divider
          if (Math.random() < 0.3) {
            ctx.fillStyle = 'rgba(0,0,0,0.4)';
            ctx.fillRect(x, y + 4, 22, 2);
          }
        }
      }
    }

    // Rooftop neon crown strip
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, '#00f3ff');
    grad.addColorStop(0.5, '#ff007f');
    grad.addColorStop(1, '#00f3ff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 12);

    return new THREE.CanvasTexture(canvas);
  }

  private createNeonSignMaterials(): void {
    const signs = [
      { text: 'NEO TOKYO', color: '#00f3ff', border: '#ff007f' },
      { text: 'CYBER SHUTO', color: '#ff007f', border: '#00f3ff' },
      { text: 'VELOCITY X', color: '#ffd700', border: '#00f3ff' },
      { text: 'MIDTOWN 2077', color: '#00ff88', border: '#ffd700' },
      { text: 'KOWLOON EXPRESS', color: '#ff3366', border: '#00f3ff' },
    ];

    signs.forEach((s) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;

      // Glass dark backing
      ctx.fillStyle = '#060912';
      ctx.fillRect(0, 0, 512, 128);

      // Glowing border
      ctx.strokeStyle = s.border;
      ctx.lineWidth = 6;
      ctx.strokeRect(6, 6, 500, 116);

      // Neon glowing typography
      ctx.font = 'bold 42px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Neon outer glow
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 18;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(s.text, 256, 64);

      ctx.fillStyle = s.color;
      ctx.fillText(s.text, 256, 64);

      const tex = new THREE.CanvasTexture(canvas);
      this.neonSignMaterials.push(
        new THREE.MeshBasicMaterial({ map: tex, transparent: false })
      );
    });
  }

  private buildHighwaySegments(): void {
    const roadWidth = 17.5; // 4 full lanes + wide safety shoulders
    const roadGeom = new THREE.PlaneGeometry(roadWidth, this.segmentLength);
    roadGeom.rotateX(-Math.PI / 2);

    // Dashed lane lines
    const dashGeom = new THREE.PlaneGeometry(0.24, 4.5);
    dashGeom.rotateX(-Math.PI / 2);

    // Solid outer shoulder lines
    const solidLineGeom = new THREE.PlaneGeometry(0.3, this.segmentLength);
    solidLineGeom.rotateX(-Math.PI / 2);

    // Concrete highway guardrails with top safety reflector lip
    const barrierGeom = new THREE.BoxGeometry(0.55, 1.0, this.segmentLength);

    // Cat-eye road studs geometry
    const catEyeGeom = new THREE.BoxGeometry(0.2, 0.08, 0.4);
    const catEyeAmberMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const catEyeCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    for (let i = 0; i < this.totalSegments; i++) {
      const segment = new THREE.Group();
      const zPos = i * this.segmentLength - 40;
      segment.position.set(0, 0, zPos);

      // 1. Reflective Asphalt Deck
      const roadMesh = new THREE.Mesh(roadGeom, this.asphaltMaterial);
      roadMesh.receiveShadow = true;
      segment.add(roadMesh);

      // 2. Outer Shoulder Lines (Yellow on left, White on right)
      const leftSolid = new THREE.Mesh(solidLineGeom, this.yellowLineMaterial);
      leftSolid.position.set(-7.8, 0.015, 0);
      segment.add(leftSolid);

      const rightSolid = new THREE.Mesh(solidLineGeom, this.lineMaterial);
      rightSolid.position.set(7.8, 0.015, 0);
      segment.add(rightSolid);

      // 3. 3 Inter-lane Dashed Lines (-3.6, 0, +3.6)
      const interLanes = [-3.6, 0, 3.6];
      const dashesPerSegment = Math.floor(this.segmentLength / 9);

      for (const laneX of interLanes) {
        for (let d = 0; d < dashesPerSegment; d++) {
          const dash = new THREE.Mesh(dashGeom, this.lineMaterial);
          const zD = -this.segmentLength / 2 + d * 9 + 3;
          dash.position.set(laneX, 0.015, zD);
          segment.add(dash);

          // Reflective cat-eye studs every other dash
          if (d % 2 === 0) {
            const catEye = new THREE.Mesh(catEyeGeom, laneX === 0 ? catEyeCyanMat : catEyeAmberMat);
            catEye.position.set(laneX, 0.04, zD + 2.5);
            segment.add(catEye);
          }
        }
      }

      // 4. Heavy Concrete Guardrails with Cat-Eye Reflectors
      const leftBarrier = new THREE.Mesh(barrierGeom, this.barrierMaterial);
      leftBarrier.position.set(-8.8, 0.5, 0);
      segment.add(leftBarrier);

      const rightBarrier = new THREE.Mesh(barrierGeom, this.barrierMaterial);
      rightBarrier.position.set(8.8, 0.5, 0);
      segment.add(rightBarrier);

      // 5. Modern High-Mast LED Streetlamps every 35m
      for (let lp = 0; lp < 4; lp++) {
        const lampZ = -this.segmentLength / 2 + lp * 35 + 15;
        const leftLamp = this.createStreetLamp(false);
        leftLamp.position.set(-9.4, 0, lampZ);
        segment.add(leftLamp);

        const rightLamp = this.createStreetLamp(true);
        rightLamp.position.set(9.4, 0, lampZ);
        segment.add(rightLamp);
      }

      // 6. Overhead Highway Route Gantry (Expressway Signboards spanning across highway)
      if (i % 2 === 0) {
        const gantry = this.createOverheadGantry(i);
        gantry.position.set(0, 0, 0);
        segment.add(gantry);
      }

      // 7. Flanking Cyber Skyscrapers with Lit Windows & Neon Billboards
      this.attachCityBuildingsToSegment(segment, i);

      this.scene.add(segment);
      this.roadSegments.push(segment);
    }
  }

  private createStreetLamp(flipped = false): THREE.Group {
    const lamp = new THREE.Group();

    // Metallic pole
    const poleGeom = new THREE.CylinderGeometry(0.12, 0.18, 8.5, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a455a, metalness: 0.85, roughness: 0.25 });
    const pole = new THREE.Mesh(poleGeom, poleMat);
    pole.position.y = 4.25;
    lamp.add(pole);

    // Overhanging curved arm
    const armGeom = new THREE.CylinderGeometry(0.08, 0.12, 3.2, 8);
    armGeom.rotateZ(flipped ? -Math.PI / 3.5 : Math.PI / 3.5);
    const arm = new THREE.Mesh(armGeom, poleMat);
    arm.position.set(flipped ? -1.2 : 1.2, 8.2, 0);
    lamp.add(arm);

    // Glowing LED Luminaire head
    const bulbGeom = new THREE.BoxGeometry(1.0, 0.2, 0.5);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff }); // Vivid Cyber Cyan
    const bulb = new THREE.Mesh(bulbGeom, bulbMat);
    bulb.position.set(flipped ? -2.3 : 2.3, 8.8, 0);
    lamp.add(bulb);

    // Soft asphalt ground light pool
    const poolGeom = new THREE.PlaneGeometry(6, 6);
    poolGeom.rotateX(-Math.PI / 2);
    const poolMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const pool = new THREE.Mesh(poolGeom, poolMat);
    pool.position.set(flipped ? -2.3 : 2.3, 0.02, 0);
    lamp.add(pool);

    return lamp;
  }

  private createOverheadGantry(index: number): THREE.Group {
    const gantry = new THREE.Group();

    // Steel truss beam spanning across the 18m highway
    const beamGeom = new THREE.BoxGeometry(20, 0.6, 0.6);
    const trussMat = new THREE.MeshStandardMaterial({ color: 0x2d3748, metalness: 0.8, roughness: 0.4 });
    const beam = new THREE.Mesh(beamGeom, trussMat);
    beam.position.set(0, 6.5, 0);
    gantry.add(beam);

    // Left and Right support pillars
    const pillarGeom = new THREE.BoxGeometry(0.6, 6.5, 0.6);
    const leftPillar = new THREE.Mesh(pillarGeom, trussMat);
    leftPillar.position.set(-9.8, 3.25, 0);
    gantry.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeom, trussMat);
    rightPillar.position.set(9.8, 3.25, 0);
    gantry.add(rightPillar);

    // Illuminated Overhead Highway Signboards
    const signGeom = new THREE.BoxGeometry(6.5, 2.2, 0.25);
    const signMat = this.neonSignMaterials[index % this.neonSignMaterials.length];
    const signMesh = new THREE.Mesh(signGeom, signMat);
    signMesh.position.set(0, 6.8, 0.25);
    gantry.add(signMesh);

    return gantry;
  }

  private attachCityBuildingsToSegment(segment: THREE.Group, segmentIndex: number): void {
    const buildingsPerSide = 4;
    const buildingGeom = new THREE.BoxGeometry(1, 1, 1);

    // Rooftop antenna beacon materials
    const beaconMatRed = new THREE.MeshBasicMaterial({ color: 0xff0055 });
    const beaconMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const beaconGeom = new THREE.CylinderGeometry(0.1, 0.2, 6, 6);

    for (let side = -1; side <= 1; side += 2) {
      for (let b = 0; b < buildingsPerSide; b++) {
        const height = 45 + ((b * 19 + segmentIndex * 13) % 75);
        const width = 16 + (b % 3) * 8;
        const depth = 16 + ((b + segmentIndex) % 3) * 8;
        const xDist = side * (24 + (b % 2) * 20 + Math.random() * 8);
        const zDist = -this.segmentLength / 2 + b * 32 + 16;

        // Skyscraper body with glowing windows
        const tower = new THREE.Mesh(buildingGeom, this.buildingMaterial);
        tower.scale.set(width, height, depth);
        tower.position.set(xDist, height / 2 - 2, zDist);
        segment.add(tower);

        // Rooftop antenna with red warning flash
        const beacon = new THREE.Mesh(beaconGeom, b % 2 === 0 ? beaconMatRed : beaconMatCyan);
        beacon.position.set(xDist, height + 1, zDist);
        segment.add(beacon);

        // Neon Billboard mounted to facade on buildings facing highway
        if (b % 2 === 1 && this.neonSignMaterials.length > 0) {
          const signMat = this.neonSignMaterials[(b + segmentIndex) % this.neonSignMaterials.length];
          const billboardGeom = new THREE.BoxGeometry(14, 4.5, 0.5);
          const billboard = new THREE.Mesh(billboardGeom, signMat);
          billboard.position.set(
            side < 0 ? xDist + width / 2 + 0.3 : xDist - width / 2 - 0.3,
            24 + (b % 2) * 8,
            zDist
          );
          billboard.rotateY(side < 0 ? Math.PI / 2 : -Math.PI / 2);
          segment.add(billboard);
        }
      }
    }
  }

  public update(playerZ: number): void {
    // Seamlessly recycle road segments ahead as player drives along +Z
    for (const segment of this.roadSegments) {
      if (segment.position.z < playerZ - 80) {
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

  public setWetness(isWet: boolean): void {
    if (isWet) {
      this.asphaltMaterial.roughness = 0.08; // mirror slick puddles with city reflections
      this.asphaltMaterial.metalness = 0.45;
    } else {
      this.asphaltMaterial.roughness = 0.22;
      this.asphaltMaterial.metalness = 0.25;
    }
  }
}
