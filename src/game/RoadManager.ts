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

  // 1,000m Founder Hoarding Structure (Indrajit Kumar)
  private founderGantry: THREE.Group;
  private founderBillboardMat: THREE.MeshStandardMaterial;
  private nextFounderZ: number = 1000;
  private lastAnnouncedKm: number = 0;
  public onFounderMilestone?: (milestoneMeters: number) => void;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. High-Res Reflective Wet Asphalt Texture
    const asphaltTex = this.createAsphaltTexture();
    asphaltTex.wrapS = THREE.RepeatWrapping;
    asphaltTex.wrapT = THREE.RepeatWrapping;
    asphaltTex.repeat.set(4, 35);

    this.asphaltMaterial = new THREE.MeshStandardMaterial({
      color: 0x161a24,
      map: asphaltTex,
      roughness: 0.14, // sleek wet tarmac specular sheen
      metalness: 0.45,
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
      color: 0x0c101d,
      roughness: 0.35,
      metalness: 0.6,
      map: buildingTex,
      emissiveMap: buildingTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.9,
    });

    // 3. Cyberpunk Neon Billboard Materials
    this.createNeonSignMaterials();

    // 4. Create Founder Billboard Material & 1,000m Gantry Arch
    const founderTex = this.createFounderBillboardTexture();
    this.founderBillboardMat = new THREE.MeshStandardMaterial({
      map: founderTex,
      emissiveMap: founderTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.95,
      roughness: 0.25,
      metalness: 0.4,
    });

    this.founderGantry = this.createFounderGantry();
    this.founderGantry.position.set(0, 0, this.nextFounderZ);
    this.scene.add(this.founderGantry);

    // 5. Build Highway & Infinite Night Skyline
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

    // Dark sleek architectural glass facade
    ctx.fillStyle = '#060a14';
    ctx.fillRect(0, 0, 512, 512);

    // Vertical structural mullions
    ctx.fillStyle = '#0d1526';
    for (let c = 0; c < 512; c += 24) {
      ctx.fillRect(c, 0, 3, 512);
    }

    // Horizontal concrete floor spandrels
    ctx.fillStyle = '#080e1a';
    for (let r = 0; r < 512; r += 36) {
      ctx.fillRect(0, r, 512, 6);
    }

    // Modern architectural interior lighting: warm amber executive, crisp cool white, cyan corporate
    const windowColors = [
      '#ffd580', // Warm executive suite
      '#ffeaa7', // Golden penthouse
      '#eef4fc', // Modern architectural white
      '#88d8ff', // Cool corporate blue
      '#ffd700', // Amber boardroom
    ];

    for (let y = 8; y < 500; y += 36) {
      for (let x = 4; x < 500; x += 24) {
        if (Math.random() < 0.65) {
          const color = windowColors[Math.floor(Math.random() * windowColors.length)];
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 17, 24);

          // Subtle horizontal blind / office silhouette
          if (Math.random() < 0.35) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
            ctx.fillRect(x, y + 10, 17, 4);
          }
        }
      }
    }

    // Sleek rooftop architectural crown glow
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, '#00f3ff');
    grad.addColorStop(0.5, '#ffd700');
    grad.addColorStop(1, '#00f3ff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 10);

    return new THREE.CanvasTexture(canvas);
  }

  // =========================================================================
  // HIGHWAY FOUNDER HOARDING GRAPHIC (Indrajit Kumar - 100% Face Accuracy)
  // =========================================================================
  private createFounderBillboardTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 540;
    const ctx = canvas.getContext('2d')!;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const render = (founderImg?: HTMLImageElement) => {
      // 1. Dark Cyber Backing & Grid Pattern
      const bgGrad = ctx.createLinearGradient(0, 0, 1200, 540);
      bgGrad.addColorStop(0, '#060a14');
      bgGrad.addColorStop(0.5, '#0d1322');
      bgGrad.addColorStop(1, '#080d18');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1200, 540);

      // Cyber Grid Lines
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 1200; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 540);
        ctx.stroke();
      }
      for (let y = 0; y < 540; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1200, y);
        ctx.stroke();
      }

      // Outer Glowing Double Frame
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, 1180, 520);
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.strokeRect(18, 18, 1164, 504);

      // 2. Left Column: Authentic Portrait Card of Indrajit Kumar
      const pX = 40, pY = 40, pW = 380, pH = 460;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(pX, pY, pW, pH, 16);
      ctx.clip();

      if (founderImg && founderImg.complete && founderImg.naturalWidth > 0) {
        // Draw the authentic photo proportionally (no distortion, 100% facial accuracy)
        const imgAspect = founderImg.naturalWidth / founderImg.naturalHeight;
        const cardAspect = pW / pH;
        let sW = founderImg.naturalWidth;
        let sH = founderImg.naturalHeight;
        let sX = 0;
        let sY = 0;
        if (imgAspect > cardAspect) {
          sW = founderImg.naturalHeight * cardAspect;
          sX = (founderImg.naturalWidth - sW) / 2;
        } else {
          sH = founderImg.naturalWidth / cardAspect;
          sY = 0; // Focus on head/face at top
        }
        ctx.drawImage(founderImg, sX, sY, sW, sH, pX, pY, pW, pH);

        // Subtle gradient overlay at base of portrait for title badge
        const grad = ctx.createLinearGradient(0, pY + pH - 120, 0, pY + pH);
        grad.addColorStop(0, 'rgba(6, 10, 20, 0)');
        grad.addColorStop(1, 'rgba(6, 10, 20, 0.94)');
        ctx.fillStyle = grad;
        ctx.fillRect(pX, pY + pH - 120, pW, 120);
      } else {
        // Fallback placeholder card while photo loads
        ctx.fillStyle = '#151d30';
        ctx.fillRect(pX, pY, pW, pH);
        ctx.fillStyle = '#00f3ff';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('INDRAJIT KUMAR', pX + pW / 2, pY + pH / 2);
      }
      ctx.restore();

      // Portrait neon border
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 4;
      ctx.strokeRect(pX, pY, pW, pH);

      // Gold badge at bottom of portrait
      ctx.fillStyle = '#ffd700';
      ctx.fillRect(pX + 20, pY + pH - 44, pW - 40, 32);
      ctx.fillStyle = '#0a0d16';
      ctx.font = '900 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OFFICIAL FOUNDER & ARCHITECT', pX + pW / 2, pY + pH - 23);

      // 3. Right Column: Grand Typography & Contact
      const textX = 460;

      // VIP Crown Tag
      ctx.fillStyle = 'rgba(0, 243, 255, 0.15)';
      ctx.fillRect(textX, 48, 440, 38);
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(textX, 48, 440, 38);

      ctx.fillStyle = '#00f3ff';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('★  VELOCITY X • HIGHWAY MILESTONE GANTRY  ★', textX + 16, 73);

      // Main Big Name: INDRAJIT KUMAR
      ctx.font = '900 58px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 15;
      ctx.fillText('INDRAJIT KUMAR', textX, 155);
      ctx.shadowBlur = 0;

      // Subtitle
      ctx.font = 'bold 24px sans-serif';
      ctx.fillStyle = '#ffd700';
      ctx.fillText('CREATOR & LEAD ARCHITECT — VELOCITY X', textX, 195);

      // Cyber Divider
      const divGrad = ctx.createLinearGradient(textX, 0, textX + 680, 0);
      divGrad.addColorStop(0, '#00f3ff');
      divGrad.addColorStop(0.5, '#ffd700');
      divGrad.addColorStop(1, 'rgba(0, 243, 255, 0)');
      ctx.fillStyle = divGrad;
      ctx.fillRect(textX, 215, 680, 3);

      // Contact Item 1: Email ID (User exact requirement)
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('EMAIL ADDRESS:', textX, 258);

      // Email pill
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(textX, 272, 680, 52);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(textX, 272, 680, 52);

      ctx.font = 'bold 26px monospace';
      ctx.fillStyle = '#00f3ff';
      ctx.fillText('✉  indrakitkumar23541@gmail.com', textX + 20, 307);

      // Contact Item 2: Instagram Handle (User exact requirement)
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('OFFICIAL INSTAGRAM:', textX, 362);

      // Instagram gradient pill
      ctx.fillStyle = 'rgba(255, 0, 127, 0.12)';
      ctx.fillRect(textX, 376, 680, 52);
      ctx.strokeStyle = '#ff007f';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(textX, 376, 680, 52);

      ctx.font = '900 28px sans-serif';
      ctx.fillStyle = '#ff3388';
      ctx.fillText('📸  tech_arcane.wizard', textX + 20, 412);

      // Bottom Milestone Banner
      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('⚡ 1,000M HIGHWAY PURSUIT MILESTONE REACHED • SPEED ZONE ACTIVATED', textX, 480);
    };

    // Render initial placeholder
    render();

    // Load authentic photo from public/images/founder.jpg
    const img = new Image();
    img.src = './images/founder.jpg';
    img.onload = () => {
      render(img);
      texture.needsUpdate = true;
    };

    return texture;
  }

  // =========================================================================
  // HIGHWAY FOUNDER ARCH GANTRY BRIDGE (Spans All 4 Lanes at 1,000m Intervals)
  // =========================================================================
  private createFounderGantry(): THREE.Group {
    const gantry = new THREE.Group();

    // Heavy steel truss arch spanning 22m across highway
    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x1e2638,
      metalness: 0.9,
      roughness: 0.28
    });

    // Main top beam across highway
    const beam = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 1.2), trussMat);
    beam.position.set(0, 10.2, 0);
    gantry.add(beam);

    // Twin support towers on left and right shoulders
    for (const x of [-10.5, 10.5]) {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.4, 11, 1.4), trussMat);
      tower.position.set(x, 5.5, 0);
      gantry.add(tower);

      // Red flashing aviation warning beacon on top of each tower
      const beacon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.6, 12),
        new THREE.MeshBasicMaterial({ color: 0xff0033 })
      );
      beacon.position.set(x, 11.3, 0);
      gantry.add(beacon);
    }

    // Double-sided Grand Billboard Panel (width 16m, height 7.2m)
    const boardGeom = new THREE.BoxGeometry(16, 7.2, 0.5);
    const billboard = new THREE.Mesh(boardGeom, this.founderBillboardMat);
    billboard.position.set(0, 6.2, 0);
    gantry.add(billboard);

    // 4 High-Powered LED Downward Spotlights mounted along top beam
    const spotFixtureMat = new THREE.MeshStandardMaterial({ color: 0x111620, metalness: 0.9 });
    const spotGlowMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    for (let s = -6; s <= 6; s += 4) {
      const fixture = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.6), spotFixtureMat);
      fixture.position.set(s, 10.2, 0.6);
      gantry.add(fixture);

      const glow = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.1, 0.5), spotGlowMat);
      glow.position.set(s, 10.0, 0.6);
      gantry.add(glow);
    }

    return gantry;
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

  public reset(startZ: number = 0): void {
    for (let i = 0; i < this.roadSegments.length; i++) {
      const zPos = startZ + (i * this.segmentLength - 40);
      this.roadSegments[i].position.set(0, 0, zPos);
    }

    // Realign Founder Hoarding to the first 1,000m milestone ahead
    this.nextFounderZ = Math.floor(startZ / 1000) * 1000 + 1000;
    this.founderGantry.position.set(0, 0, this.nextFounderZ);
    this.lastAnnouncedKm = Math.floor(startZ / 1000);
  }

  public update(playerZ: number): void {
    // Continuous seamless wrapping: segments behind the player wrap forward
    const totalRoadSpan = this.totalSegments * this.segmentLength;
    for (const segment of this.roadSegments) {
      while (segment.position.z < playerZ - this.segmentLength * 1.5) {
        segment.position.z += totalRoadSpan;
      }
    }

    // Wrap Founder Hoarding to the next 1,000m mark ahead
    if (playerZ > this.nextFounderZ + 50) {
      this.nextFounderZ += 1000;
      this.founderGantry.position.set(0, 0, this.nextFounderZ);
    }

    // Milestone notification when the player approaches and passes under the hoarding
    const currentKm = Math.floor(playerZ / 1000);
    if (currentKm > this.lastAnnouncedKm && playerZ >= currentKm * 1000 - 15) {
      this.lastAnnouncedKm = currentKm;
      this.onFounderMilestone?.(currentKm * 1000);
    }
  }

  public setTrackEnvironment(mode: 'NIGHT' | 'DAY'): void {
    if (mode === 'NIGHT') {
      this.asphaltMaterial.color.setHex(0x161a22);
      this.asphaltMaterial.roughness = 0.12; // sleek wet asphalt with night city reflections
      this.asphaltMaterial.metalness = 0.45;
      this.buildingMaterial.emissiveIntensity = 0.95;
      this.lineMaterial.emissiveIntensity = 0.7;
      this.yellowLineMaterial.emissiveIntensity = 0.75;
    } else {
      this.asphaltMaterial.color.setHex(0x383e4a);
      this.asphaltMaterial.roughness = 0.45; // bright daylight highway tarmac
      this.asphaltMaterial.metalness = 0.15;
      this.buildingMaterial.emissiveIntensity = 0.15;
      this.lineMaterial.emissiveIntensity = 0.2;
      this.yellowLineMaterial.emissiveIntensity = 0.25;
    }
  }

  public getLaneX(laneIndex: number): number {
    const idx = Math.max(0, Math.min(3, laneIndex));
    return RoadManager.LANES[idx];
  }

  public setWetness(isWet: boolean): void {
    if (isWet) {
      this.asphaltMaterial.roughness = 0.06; // mirror slick puddles with city reflections
      this.asphaltMaterial.metalness = 0.55;
    } else {
      this.asphaltMaterial.roughness = 0.14;
      this.asphaltMaterial.metalness = 0.35;
    }
  }
}
