// VELOCITY X - Photorealistic PBR Highway & Night City Metropolis Engine
import * as THREE from 'three';

export class RoadManager {
  private scene: THREE.Scene;
  private roadSegments: THREE.Group[] = [];
  private segmentLength = 140;
  private totalSegments = 6;
  public static readonly LANE_WIDTH = 3.6;
  public static readonly LANES = [-5.4, -1.8, 1.8, 5.4]; // 4 distinct highway lanes

  // PBR Road Materials
  private asphaltMaterial: THREE.MeshStandardMaterial;
  private asphaltBumpTexture: THREE.CanvasTexture;
  private asphaltRoughnessTexture: THREE.CanvasTexture;
  private lineMaterial: THREE.MeshStandardMaterial;
  private yellowLineMaterial: THREE.MeshStandardMaterial;
  private curbMaterial: THREE.MeshStandardMaterial;
  private grateMaterial: THREE.MeshStandardMaterial;
  private barrierMaterial: THREE.MeshStandardMaterial;
  private barrierPostMaterial: THREE.MeshStandardMaterial;

  // City Architecture Materials
  private buildingMaterial: THREE.MeshStandardMaterial;
  private podiumMaterial: THREE.MeshStandardMaterial;
  private concreteMaterial: THREE.MeshStandardMaterial;
  private helipadMaterial: THREE.MeshBasicMaterial;
  private neonSignMaterials: THREE.MeshBasicMaterial[] = [];
  private vmsSignMaterials: THREE.MeshBasicMaterial[] = [];

  // 1,000m Founder Hoarding Structure (Indrajit Kumar)
  private founderGantry: THREE.Group;
  private founderBillboardMat: THREE.MeshStandardMaterial;
  private nextFounderZ: number = 1000;
  private lastAnnouncedKm: number = 0;
  public onFounderMilestone?: (milestoneMeters: number) => void;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. High-Res Multi-Layer PBR Asphalt Textures (Diffuse, Bump, Roughness)
    const asphaltDiffuse = this.createAsphaltDiffuseTexture();
    asphaltDiffuse.wrapS = THREE.RepeatWrapping;
    asphaltDiffuse.wrapT = THREE.RepeatWrapping;
    asphaltDiffuse.repeat.set(4, 28);

    this.asphaltBumpTexture = this.createAsphaltBumpTexture();
    this.asphaltBumpTexture.wrapS = THREE.RepeatWrapping;
    this.asphaltBumpTexture.wrapT = THREE.RepeatWrapping;
    this.asphaltBumpTexture.repeat.set(4, 28);

    this.asphaltRoughnessTexture = this.createAsphaltRoughnessTexture();
    this.asphaltRoughnessTexture.wrapS = THREE.RepeatWrapping;
    this.asphaltRoughnessTexture.wrapT = THREE.RepeatWrapping;
    this.asphaltRoughnessTexture.repeat.set(4, 28);

    this.asphaltMaterial = new THREE.MeshStandardMaterial({
      color: 0x161a24,
      map: asphaltDiffuse,
      bumpMap: this.asphaltBumpTexture,
      bumpScale: 0.045, // realistic asphalt aggregate micro-relief
      roughnessMap: this.asphaltRoughnessTexture,
      roughness: 0.16, // sleek wet tarmac specular sheen
      metalness: 0.38,
      envMapIntensity: 1.9,
    });

    // Retro-Reflective Thermoplastic Lane Markings
    this.lineMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x88ccff,
      emissiveIntensity: 0.65,
      roughness: 0.18,
      metalness: 0.2,
    });

    this.yellowLineMaterial = new THREE.MeshStandardMaterial({
      color: 0xffa000,
      emissive: 0xff7700,
      emissiveIntensity: 0.75,
      roughness: 0.18,
      metalness: 0.2,
    });

    // Highway Shoulder Red & White Rumble Strip Curb
    const curbTex = this.createCurbTexture();
    curbTex.wrapS = THREE.RepeatWrapping;
    curbTex.wrapT = THREE.RepeatWrapping;
    curbTex.repeat.set(1, 40);
    this.curbMaterial = new THREE.MeshStandardMaterial({
      map: curbTex,
      roughness: 0.45,
      metalness: 0.15,
    });

    // Cast-Iron Highway Drainage Grates
    this.grateMaterial = new THREE.MeshStandardMaterial({
      color: 0x22262d,
      roughness: 0.7,
      metalness: 0.85,
    });

    // Galvanized Corrugated Steel Guardrails (Armco W-Beam)
    this.barrierMaterial = new THREE.MeshStandardMaterial({
      color: 0x73839c,
      metalness: 0.92,
      roughness: 0.22,
      envMapIntensity: 2.2,
    });

    this.barrierPostMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c333e,
      metalness: 0.8,
      roughness: 0.45,
    });

    // Structural Concrete (Flyovers, Piers, Retaining Walls)
    this.concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a212c,
      roughness: 0.65,
      metalness: 0.2,
    });

    // 2. High-Resolution Architectural Skyscraper Window Texture
    const buildingTex = this.createBuildingTexture();
    buildingTex.wrapS = THREE.RepeatWrapping;
    buildingTex.wrapT = THREE.RepeatWrapping;
    buildingTex.repeat.set(1, 1);

    this.buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0x080e1a,
      roughness: 0.28,
      metalness: 0.72,
      map: buildingTex,
      emissiveMap: buildingTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.95,
      envMapIntensity: 2.5,
    });

    // Podium Base Material (Glass + Metal Louvers)
    this.podiumMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c121e,
      roughness: 0.35,
      metalness: 0.6,
      map: buildingTex,
      emissiveMap: buildingTex,
      emissive: 0xffffff,
      emissiveIntensity: 0.6,
    });

    // Rooftop Illuminated Helipad Material
    const helipadTex = this.createHelipadTexture();
    this.helipadMaterial = new THREE.MeshBasicMaterial({
      map: helipadTex,
      transparent: true,
    });

    // 3. Dynamic Overhead Highway Matrix VMS Signs
    this.createVMSMaterials();

    // 4. Cyberpunk Neon Billboard Materials
    this.createNeonSignMaterials();

    // 5. Create Founder Billboard Material & 1,000m Gantry Arch
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

    // 6. Build Highway Segments & Realistic City Skyline
    this.buildHighwaySegments();
  }

  // =========================================================================
  // HIGH-RESOLUTION PROCEDURAL TEXTURES (PBR ASPHALT DIFFUSE, BUMP, ROUGHNESS)
  // =========================================================================
  private createAsphaltDiffuseTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Deep bituminous asphalt base
    ctx.fillStyle = '#141822';
    ctx.fillRect(0, 0, 1024, 1024);

    // Crushed stone aggregates (basalt, slate, and quartzite mineral flecks)
    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 36;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise + 2));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise + 5));
    }
    ctx.putImageData(imgData, 0, 0);

    // Polished tire wear paths (dark rubber deposit bands in each of 4 lanes)
    ctx.fillStyle = 'rgba(8, 10, 15, 0.42)';
    const laneWidthPx = 1024 / 4;
    for (let l = 0; l < 4; l++) {
      const laneCenter = l * laneWidthPx + laneWidthPx / 2;
      // Left wheel path
      ctx.fillRect(laneCenter - 54, 0, 36, 1024);
      // Right wheel path
      ctx.fillRect(laneCenter + 18, 0, 36, 1024);
    }

    // Lane center oil drip trails (longitudinal speckled drips where vehicles cruise)
    ctx.fillStyle = 'rgba(6, 8, 12, 0.55)';
    for (let l = 0; l < 4; l++) {
      const laneCenter = l * laneWidthPx + laneWidthPx / 2;
      for (let d = 0; d < 35; d++) {
        const y = Math.random() * 1024;
        const xOffset = (Math.random() - 0.5) * 22;
        ctx.beginPath();
        ctx.ellipse(laneCenter + xOffset, y, 4 + Math.random() * 6, 8 + Math.random() * 16, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Asphalt hairline surface cracks with tar sealant
    ctx.strokeStyle = 'rgba(10, 12, 18, 0.7)';
    ctx.lineWidth = 1.5;
    for (let c = 0; c < 8; c++) {
      let cx = Math.random() * 1024;
      let cy = Math.random() * 1024;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      for (let s = 0; s < 5; s++) {
        cx += (Math.random() - 0.5) * 60;
        cy += (Math.random() - 0.5) * 60;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    // Reflective wet puddles (subtle sheen patches)
    ctx.fillStyle = 'rgba(10, 22, 38, 0.5)';
    for (let i = 0; i < 16; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 1024,
        Math.random() * 1024,
        60 + Math.random() * 110,
        22 + Math.random() * 45,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createAsphaltBumpTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Mid-gray height base
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    // High-frequency aggregate bumps (stone relief)
    const imgData = ctx.getImageData(0, 0, 512, 512);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const bump = (Math.random() - 0.5) * 55;
      const val = Math.min(255, Math.max(0, 128 + bump));
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
    }
    ctx.putImageData(imgData, 0, 0);

    // Recessed cracks (dark in height map)
    ctx.strokeStyle = '#303030';
    ctx.lineWidth = 2;
    for (let c = 0; c < 6; c++) {
      let cx = Math.random() * 512;
      let cy = Math.random() * 512;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      for (let s = 0; s < 4; s++) {
        cx += (Math.random() - 0.5) * 50;
        cy += (Math.random() - 0.5) * 50;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createAsphaltRoughnessTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base rough asphalt (high roughness value = matte)
    ctx.fillStyle = '#656565';
    ctx.fillRect(0, 0, 512, 512);

    // Polished tire paths (dark in roughness map = low roughness = glossy specular)
    ctx.fillStyle = '#222222';
    const laneWidthPx = 512 / 4;
    for (let l = 0; l < 4; l++) {
      const laneCenter = l * laneWidthPx + laneWidthPx / 2;
      ctx.fillRect(laneCenter - 26, 0, 18, 512);
      ctx.fillRect(laneCenter + 8, 0, 18, 512);
    }

    // Mirror wet puddles (very low roughness ~#080808)
    ctx.fillStyle = '#080808';
    for (let i = 0; i < 14; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 512,
        Math.random() * 512,
        35 + Math.random() * 60,
        12 + Math.random() * 25,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createCurbTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Alternating angled red and white reflective rumble blocks
    ctx.fillStyle = '#e8253b'; // vibrant safety red
    ctx.fillRect(0, 0, 128, 256);

    ctx.fillStyle = '#f0f3f8'; // crisp reflective white
    for (let y = 0; y < 256; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(128, y + 28);
      ctx.lineTo(128, y + 60);
      ctx.lineTo(0, y + 32);
      ctx.closePath();
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }

  private createHelipadTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#101622';
    ctx.fillRect(0, 0, 256, 256);

    // Glowing green perimeter circle
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(128, 128, 110, 0, Math.PI * 2);
    ctx.stroke();

    // Bold 'H' Marking in center
    ctx.fillStyle = '#00ff88';
    ctx.font = '900 130px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('H', 128, 130);

    return new THREE.CanvasTexture(canvas);
  }

  // =========================================================================
  // HIGH-RESOLUTION ARCHITECTURAL SKYSCRAPER WINDOW & FACADE TEXTURE
  // =========================================================================
  private createBuildingTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Dark sleek structural architectural glass facade
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, 1024, 1024);

    // Vertical structural mullions (steel vertical beams)
    ctx.fillStyle = '#0a101d';
    for (let c = 0; c < 1024; c += 32) {
      ctx.fillRect(c, 0, 4, 1024);
    }

    // Horizontal concrete floor spandrels every 48px
    ctx.fillStyle = '#070b14';
    for (let r = 0; r < 1024; r += 48) {
      ctx.fillRect(0, r, 1024, 8);
    }

    // Realistic office lighting: warm amber executive, crisp cool white, cyan corporate, dark unlit
    const windowColors = [
      '#ffe2a0', // Warm amber executive suite
      '#ffeec2', // Golden penthouse
      '#edf5ff', // Modern architectural daylight
      '#78d0ff', // High-tech corporate cyan
      '#ffd166', // Boardroom lighting
    ];

    for (let y = 10; y < 1010; y += 48) {
      for (let x = 6; x < 1010; x += 32) {
        // 60% of windows lit for realistic night contrast
        if (Math.random() < 0.62) {
          const color = windowColors[Math.floor(Math.random() * windowColors.length)];
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 22, 34);

          // Horizontal office blinds / desk silhouette
          if (Math.random() < 0.45) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.48)';
            ctx.fillRect(x, y + 14, 22, 6);
          }
        }
      }
    }

    // Architectural crown glowing LED strip
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    grad.addColorStop(0, '#00f3ff');
    grad.addColorStop(0.3, '#ff007f');
    grad.addColorStop(0.7, '#ffd700');
    grad.addColorStop(1, '#00f3ff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 16);

    return new THREE.CanvasTexture(canvas);
  }

  // =========================================================================
  // DYNAMIC OVERHEAD HIGHWAY VMS (VARIABLE MESSAGE SIGNS) & ROUTE BOARDS
  // =========================================================================
  private createVMSMaterials(): void {
    const messages = [
      {
        line1: '★ METROPOLIS EXPRESSWAY 01 ★',
        line2: 'SPEED ENFORCED BY RADAR • 120 KM/H',
        color: '#ffaa00',
        route: 'SECTOR 07'
      },
      {
        line1: 'HIGHWAY PURSUIT INTERCEPTORS ACTIVE',
        line2: 'CAUTION: HEAVY CYBER PATROL EN ROUTE',
        color: '#ff3366',
        route: 'DOWNTOWN'
      },
      {
        line1: 'VELOCITY X HIGH SPEED CORRIDOR',
        line2: 'ALL LANES OPEN • DRY REFLECTIVE TARMAC',
        color: '#00f3ff',
        route: 'SKYPORT EXPY'
      }
    ];

    messages.forEach((msg) => {
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 180;
      const ctx = canvas.getContext('2d')!;

      // Dark LED Matrix Display Box
      ctx.fillStyle = '#060a12';
      ctx.fillRect(0, 0, 640, 180);

      // Amber LED Border
      ctx.strokeStyle = msg.color;
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, 628, 168);

      // Left Route Shield Badge
      ctx.fillStyle = '#0e243a';
      ctx.fillRect(16, 16, 120, 148);
      ctx.strokeStyle = '#00f3ff';
      ctx.lineWidth = 2;
      ctx.strokeRect(16, 16, 120, 148);

      ctx.font = '900 16px sans-serif';
      ctx.fillStyle = '#00f3ff';
      ctx.textAlign = 'center';
      ctx.fillText('ROUTE', 76, 50);

      ctx.font = '900 32px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('101', 76, 92);

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#ffd700';
      ctx.fillText(msg.route, 76, 130);

      // Right LED Dot-Matrix Text
      ctx.textAlign = 'left';
      ctx.fillStyle = msg.color;
      ctx.font = 'bold 24px monospace';
      ctx.shadowColor = msg.color;
      ctx.shadowBlur = 12;
      ctx.fillText(msg.line1, 156, 68);

      ctx.font = 'bold 22px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 8;
      ctx.fillText(msg.line2, 156, 124);

      const tex = new THREE.CanvasTexture(canvas);
      this.vmsSignMaterials.push(
        new THREE.MeshBasicMaterial({ map: tex })
      );
    });
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
          sY = 0;
        }
        ctx.drawImage(founderImg, sX, sY, sW, sH, pX, pY, pW, pH);

        const grad = ctx.createLinearGradient(0, pY + pH - 120, 0, pY + pH);
        grad.addColorStop(0, 'rgba(6, 10, 20, 0)');
        grad.addColorStop(1, 'rgba(6, 10, 20, 0.94)');
        ctx.fillStyle = grad;
        ctx.fillRect(pX, pY + pH - 120, pW, 120);
      } else {
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

      // Contact Item 1: Email ID
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('EMAIL ADDRESS:', textX, 258);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(textX, 272, 680, 52);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(textX, 272, 680, 52);

      ctx.font = 'bold 26px monospace';
      ctx.fillStyle = '#00f3ff';
      ctx.fillText('✉  indrakitkumar23541@gmail.com', textX + 20, 307);

      // Contact Item 2: Instagram Handle
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('OFFICIAL INSTAGRAM:', textX, 362);

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

    render();

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

    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x1e2638,
      metalness: 0.9,
      roughness: 0.28
    });

    const beam = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 1.2), trussMat);
    beam.position.set(0, 10.2, 0);
    gantry.add(beam);

    for (const x of [-10.5, 10.5]) {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.4, 11, 1.4), trussMat);
      tower.position.set(x, 5.5, 0);
      gantry.add(tower);

      const beacon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.6, 12),
        new THREE.MeshBasicMaterial({ color: 0xff0033 })
      );
      beacon.position.set(x, 11.3, 0);
      gantry.add(beacon);
    }

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

      ctx.fillStyle = '#060912';
      ctx.fillRect(0, 0, 512, 128);

      ctx.strokeStyle = s.border;
      ctx.lineWidth = 6;
      ctx.strokeRect(6, 6, 500, 116);

      ctx.font = 'bold 42px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

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

  // =========================================================================
  // BUILD HIGHWAY SEGMENTS WITH FULL PBR ROAD INFRASTRUCTURE
  // =========================================================================
  private buildHighwaySegments(): void {
    const roadWidth = 18.0; // 4 full 3.6m lanes + 1.8m safety shoulders
    const roadGeom = new THREE.PlaneGeometry(roadWidth, this.segmentLength);
    roadGeom.rotateX(-Math.PI / 2);

    // Dashed lane lines
    const dashGeom = new THREE.PlaneGeometry(0.24, 4.8);
    dashGeom.rotateX(-Math.PI / 2);

    // Solid outer shoulder lines
    const solidLineGeom = new THREE.PlaneGeometry(0.3, this.segmentLength);
    solidLineGeom.rotateX(-Math.PI / 2);

    // Rumble Strip Curbs (left and right edges)
    const curbGeom = new THREE.BoxGeometry(0.7, 0.16, this.segmentLength);

    // Armco W-Beam Corrugated Guardrail Profile
    const railUpperGeom = new THREE.BoxGeometry(0.12, 0.28, this.segmentLength);
    const railLowerGeom = new THREE.BoxGeometry(0.12, 0.28, this.segmentLength);
    const postGeom = new THREE.BoxGeometry(0.18, 0.95, 0.18);

    // 3D Optical Cat-Eye Road Stud Geometry (Trapezoidal with angled reflective face)
    const catEyeGeom = new THREE.BoxGeometry(0.24, 0.08, 0.42);
    const catEyeAmberMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const catEyeCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    // Drainage Grate Geometry
    const grateGeom = new THREE.BoxGeometry(0.8, 0.05, 1.4);

    for (let i = 0; i < this.totalSegments; i++) {
      const segment = new THREE.Group();
      const zPos = i * this.segmentLength - 40;
      segment.position.set(0, 0, zPos);

      // 1. Reflective PBR Asphalt Highway Deck with Bump & Roughness Maps
      const roadMesh = new THREE.Mesh(roadGeom, this.asphaltMaterial);
      roadMesh.receiveShadow = true;
      segment.add(roadMesh);

      // 2. Highway Shoulder Rumble Strips (Red/White Curbs)
      const leftCurb = new THREE.Mesh(curbGeom, this.curbMaterial);
      leftCurb.position.set(-8.75, 0.08, 0);
      segment.add(leftCurb);

      const rightCurb = new THREE.Mesh(curbGeom, this.curbMaterial);
      rightCurb.position.set(8.75, 0.08, 0);
      segment.add(rightCurb);

      // 3. Recessed Cast-Iron Drainage Grates along Curbs
      const grateZOffsets = [-50, -15, 20, 55];
      for (const gz of grateZOffsets) {
        const leftGrate = new THREE.Mesh(grateGeom, this.grateMaterial);
        leftGrate.position.set(-8.1, 0.02, gz);
        segment.add(leftGrate);

        const rightGrate = new THREE.Mesh(grateGeom, this.grateMaterial);
        rightGrate.position.set(8.1, 0.02, gz);
        segment.add(rightGrate);
      }

      // 4. Outer Shoulder Lines (Yellow Solid on left, White Solid on right)
      const leftSolid = new THREE.Mesh(solidLineGeom, this.yellowLineMaterial);
      leftSolid.position.set(-7.5, 0.015, 0);
      segment.add(leftSolid);

      const rightSolid = new THREE.Mesh(solidLineGeom, this.lineMaterial);
      rightSolid.position.set(7.5, 0.015, 0);
      segment.add(rightSolid);

      // 5. 3 Inter-lane Dashed Markings (-3.6, 0, +3.6) with 3D Cat-Eye Studs
      const interLanes = [-3.6, 0, 3.6];
      const dashesPerSegment = Math.floor(this.segmentLength / 9.5);

      for (const laneX of interLanes) {
        for (let d = 0; d < dashesPerSegment; d++) {
          const dash = new THREE.Mesh(dashGeom, this.lineMaterial);
          const zD = -this.segmentLength / 2 + d * 9.5 + 3;
          dash.position.set(laneX, 0.015, zD);
          segment.add(dash);

          // Reflective cat-eye studs every other dash mark
          if (d % 2 === 0) {
            const catEye = new THREE.Mesh(catEyeGeom, laneX === 0 ? catEyeCyanMat : catEyeAmberMat);
            catEye.position.set(laneX, 0.04, zD + 2.8);
            segment.add(catEye);
          }
        }
      }

      // 6. Realistic Galvanized Armco W-Beam Highway Guardrails
      // Upper and Lower Rail Beams
      const leftRailUp = new THREE.Mesh(railUpperGeom, this.barrierMaterial);
      leftRailUp.position.set(-9.2, 0.65, 0);
      segment.add(leftRailUp);

      const leftRailLow = new THREE.Mesh(railLowerGeom, this.barrierMaterial);
      leftRailLow.position.set(-9.2, 0.35, 0);
      segment.add(leftRailLow);

      const rightRailUp = new THREE.Mesh(railUpperGeom, this.barrierMaterial);
      rightRailUp.position.set(9.2, 0.65, 0);
      segment.add(rightRailUp);

      const rightRailLow = new THREE.Mesh(railLowerGeom, this.barrierMaterial);
      rightRailLow.position.set(9.2, 0.35, 0);
      segment.add(rightRailLow);

      // Vertical Steel I-Posts every 5 meters
      for (let pZ = -this.segmentLength / 2; pZ <= this.segmentLength / 2; pZ += 5.0) {
        const leftPost = new THREE.Mesh(postGeom, this.barrierPostMaterial);
        leftPost.position.set(-9.26, 0.48, pZ);
        segment.add(leftPost);

        const rightPost = new THREE.Mesh(postGeom, this.barrierPostMaterial);
        rightPost.position.set(9.26, 0.48, pZ);
        segment.add(rightPost);

        // Angled reflector bracket on posts
        if (Math.abs(pZ % 15) < 0.1) {
          const refLeft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.08), catEyeAmberMat);
          refLeft.position.set(-9.1, 0.72, pZ);
          segment.add(refLeft);

          const refRight = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.08), catEyeCyanMat);
          refRight.position.set(9.1, 0.72, pZ);
          segment.add(refRight);
        }
      }

      // 7. Modern Aerodynamic Motorway LED Streetlamps (every 35m)
      for (let lp = 0; lp < 4; lp++) {
        const lampZ = -this.segmentLength / 2 + lp * 35 + 15;
        const leftLamp = this.createModernStreetLamp(false);
        leftLamp.position.set(-9.9, 0, lampZ);
        segment.add(leftLamp);

        const rightLamp = this.createModernStreetLamp(true);
        rightLamp.position.set(9.9, 0, lampZ);
        segment.add(rightLamp);
      }

      // 8. Overhead Electronic Dynamic VMS Gantries (every 2 segments)
      if (i % 2 === 0) {
        const gantry = this.createOverheadVMSGantry(i);
        gantry.position.set(0, 0, 0);
        segment.add(gantry);
      }

      // 9. Elevated City Highway Flyover Crossing in High Distance (Segments 1 & 4)
      if (i === 1 || i === 4) {
        const flyover = this.createDistantHighwayFlyover();
        flyover.position.set(0, 0, -25);
        segment.add(flyover);
      }

      // 10. Multi-Tiered Realistic Architectural Skyscrapers & Helipads
      this.attachCityBuildingsToSegment(segment, i);

      this.scene.add(segment);
      this.roadSegments.push(segment);
    }
  }

  // =========================================================================
  // AERODYNAMIC MOTORWAY LED LUMINAIRES WITH CONICAL GROUND LIGHT SPREAD
  // =========================================================================
  private createModernStreetLamp(flipped = false): THREE.Group {
    const lamp = new THREE.Group();

    const mastMat = new THREE.MeshStandardMaterial({
      color: 0x303947,
      metalness: 0.88,
      roughness: 0.25,
    });

    // Tapered Octagonal Steel Mast
    const mastGeom = new THREE.CylinderGeometry(0.14, 0.22, 9.2, 8);
    const mast = new THREE.Mesh(mastGeom, mastMat);
    mast.position.y = 4.6;
    lamp.add(mast);

    // Overhanging Cantilever Curved Arm
    const armGeom = new THREE.CylinderGeometry(0.09, 0.14, 3.8, 8);
    armGeom.rotateZ(flipped ? -Math.PI / 3.4 : Math.PI / 3.4);
    const arm = new THREE.Mesh(armGeom, mastMat);
    arm.position.set(flipped ? -1.4 : 1.4, 9.0, 0);
    lamp.add(arm);

    // Dual Aerodynamic LED Luminaire Head
    const headGeom = new THREE.BoxGeometry(1.2, 0.18, 0.55);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x181f2b, metalness: 0.9 });
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.set(flipped ? -2.6 : 2.6, 9.7, 0);
    lamp.add(head);

    // Glowing LED Lens Array
    const lensGeom = new THREE.BoxGeometry(1.0, 0.08, 0.45);
    const lensMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const lens = new THREE.Mesh(lensGeom, lensMat);
    lens.position.set(flipped ? -2.6 : 2.6, 9.6, 0);
    lamp.add(lens);

    // Soft Oval Ground Light Pool Decal on Asphalt
    const poolGeom = new THREE.PlaneGeometry(8.5, 9.5);
    poolGeom.rotateX(-Math.PI / 2);
    const poolMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pool = new THREE.Mesh(poolGeom, poolMat);
    pool.position.set(flipped ? -3.0 : 3.0, 0.02, 0);
    lamp.add(pool);

    return lamp;
  }

  // =========================================================================
  // OVERHEAD VARIABLE MESSAGE ELECTRONIC GANTRIES (VMS) & SPEED RADAR
  // =========================================================================
  private createOverheadVMSGantry(index: number): THREE.Group {
    const gantry = new THREE.Group();

    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x242d3c,
      metalness: 0.85,
      roughness: 0.35,
    });

    // Space-frame cross beam spanning 21m across the highway
    const beam = new THREE.Mesh(new THREE.BoxGeometry(21, 0.7, 0.7), trussMat);
    beam.position.set(0, 6.8, 0);
    gantry.add(beam);

    // Twin Steel Support Columns outside highway shoulders
    for (const x of [-10.2, 10.2]) {
      const column = new THREE.Mesh(new THREE.BoxGeometry(0.7, 7.2, 0.7), trussMat);
      column.position.set(x, 3.6, 0);
      gantry.add(column);

      // Warning hazard stripes on column base
      const base = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.9), this.curbMaterial);
      base.position.set(x, 0.6, 0);
      gantry.add(base);
    }

    // Dynamic LED Matrix Message Display Signboard
    const signGeom = new THREE.BoxGeometry(8.5, 2.4, 0.3);
    const signMat = this.vmsSignMaterials[index % this.vmsSignMaterials.length];
    const signMesh = new THREE.Mesh(signGeom, signMat);
    signMesh.position.set(0, 7.2, 0.3);
    gantry.add(signMesh);

    // Overhead Radar Speed Camera Sensor Enclosures
    const cameraMat = new THREE.MeshStandardMaterial({ color: 0x111620, metalness: 0.9 });
    const lensGlow = new THREE.MeshBasicMaterial({ color: 0xff0044 });
    for (const cx of [-4.5, 4.5]) {
      const cam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.5), cameraMat);
      cam.position.set(cx, 6.1, 0.4);
      gantry.add(cam);

      const lens = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), lensGlow);
      lens.position.set(cx, 6.1, 0.68);
      gantry.add(lens);
    }

    return gantry;
  }

  // =========================================================================
  // ELEVATED HIGHWAY FLYOVER CROSSING HIGH ABOVE IN THE DISTANCE
  // =========================================================================
  private createDistantHighwayFlyover(): THREE.Group {
    const flyover = new THREE.Group();

    // Massive elevated concrete flyover bridge (height = 20m)
    const bridgeGeom = new THREE.BoxGeometry(60, 1.6, 8.0);
    const bridge = new THREE.Mesh(bridgeGeom, this.concreteMaterial);
    bridge.position.set(0, 20.0, 0);
    flyover.add(bridge);

    // Concrete Support Piers
    const pierGeom = new THREE.CylinderGeometry(1.2, 1.5, 20.0, 8);
    for (const px of [-18, 18]) {
      const pier = new THREE.Mesh(pierGeom, this.concreteMaterial);
      pier.position.set(px, 10.0, 0);
      flyover.add(pier);
    }

    // Streaming City Vehicle Traffic Light Streaks on Flyover
    // White Headlight Streaks (Eastbound)
    const headStreakMat = new THREE.MeshBasicMaterial({ color: 0xffeedd });
    for (let h = 0; h < 4; h++) {
      const streak = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.25, 0.15), headStreakMat);
      streak.position.set(-20 + h * 12, 21.0, 2.0);
      flyover.add(streak);
    }

    // Red Taillight Streaks (Westbound)
    const tailStreakMat = new THREE.MeshBasicMaterial({ color: 0xff0033 });
    for (let t = 0; t < 4; t++) {
      const streak = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.25, 0.15), tailStreakMat);
      streak.position.set(-15 + t * 12, 21.0, -2.0);
      flyover.add(streak);
    }

    return flyover;
  }

  // =========================================================================
  // MULTI-TIERED REALISTIC ARCHITECTURAL SKYSCRAPERS & HELIPADS
  // =========================================================================
  private attachCityBuildingsToSegment(segment: THREE.Group, segmentIndex: number): void {
    const buildingsPerSide = 4;
    const boxGeom = new THREE.BoxGeometry(1, 1, 1);
    const cylGeom = new THREE.CylinderGeometry(0.12, 0.25, 12, 6);

    const beaconMatRed = new THREE.MeshBasicMaterial({ color: 0xff0033 });
    const beaconMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    for (let side = -1; side <= 1; side += 2) {
      for (let b = 0; b < buildingsPerSide; b++) {
        // Architecture dimensions
        const totalHeight = 55 + ((b * 23 + segmentIndex * 17) % 85);
        const podiumHeight = 14;
        const towerHeight = totalHeight - podiumHeight;
        const towerWidth = 20 + (b % 3) * 6;
        const towerDepth = 20 + ((b + segmentIndex) % 3) * 6;
        const podiumWidth = towerWidth + 8;
        const podiumDepth = towerDepth + 8;

        const xDist = side * (26 + (b % 2) * 22 + ((b * 7) % 10));
        const zDist = -this.segmentLength / 2 + b * 34 + 17;

        const complex = new THREE.Group();
        complex.position.set(xDist, 0, zDist);

        // 1. Structural Ground Podium (Entrance, Retail, Parking deck)
        const podium = new THREE.Mesh(boxGeom, this.podiumMaterial);
        podium.scale.set(podiumWidth, podiumHeight, podiumDepth);
        podium.position.y = podiumHeight / 2;
        complex.add(podium);

        // 2. Main Tower Shaft with Setback
        const tower = new THREE.Mesh(boxGeom, this.buildingMaterial);
        tower.scale.set(towerWidth, towerHeight, towerDepth);
        tower.position.y = podiumHeight + towerHeight / 2;
        complex.add(tower);

        // 3. Penthouse / Architectural Crown
        const crownHeight = 8 + (b % 3) * 4;
        const crownWidth = towerWidth * 0.72;
        const crownDepth = towerDepth * 0.72;
        const crown = new THREE.Mesh(boxGeom, this.podiumMaterial);
        crown.scale.set(crownWidth, crownHeight, crownDepth);
        crown.position.y = totalHeight + crownHeight / 2;
        complex.add(crown);

        // 4. Rooftop Helipad on every other building
        if (b % 2 === 0) {
          const helipad = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), this.helipadMaterial);
          helipad.rotateX(-Math.PI / 2);
          helipad.position.set(0, totalHeight + crownHeight + 0.05, 0);
          complex.add(helipad);
        }

        // 5. Rooftop HVAC Chiller machinery units
        const hvac = new THREE.Mesh(boxGeom, this.concreteMaterial);
        hvac.scale.set(crownWidth * 0.4, 3, crownDepth * 0.4);
        hvac.position.set(crownWidth * 0.25, totalHeight + crownHeight + 1.5, 0);
        complex.add(hvac);

        // 6. Communications Antenna Spire with FAA Aviation Red Warning Flasher
        const spire = new THREE.Mesh(cylGeom, this.barrierPostMaterial);
        spire.position.set(-crownWidth * 0.25, totalHeight + crownHeight + 6, 0);
        complex.add(spire);

        const beacon = new THREE.Mesh(
          new THREE.SphereGeometry(0.4, 8, 8),
          b % 2 === 0 ? beaconMatRed : beaconMatCyan
        );
        beacon.position.set(-crownWidth * 0.25, totalHeight + crownHeight + 12, 0);
        complex.add(beacon);

        // 7. Architectural Neon Brand Billboards facing highway
        if (b % 2 === 1 && this.neonSignMaterials.length > 0) {
          const signMat = this.neonSignMaterials[(b + segmentIndex) % this.neonSignMaterials.length];
          const billboard = new THREE.Mesh(new THREE.BoxGeometry(15, 5.0, 0.6), signMat);
          const boardX = side < 0 ? podiumWidth / 2 + 0.3 : -podiumWidth / 2 - 0.3;
          billboard.position.set(boardX, 26 + (b % 2) * 10, 0);
          billboard.rotateY(side < 0 ? Math.PI / 2 : -Math.PI / 2);
          complex.add(billboard);
        }

        segment.add(complex);
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
      this.asphaltMaterial.color.setHex(0x161a24);
      this.asphaltMaterial.roughness = 0.16;
      this.asphaltMaterial.metalness = 0.38;
      this.asphaltMaterial.bumpScale = 0.045;
      this.buildingMaterial.emissiveIntensity = 0.95;
      this.podiumMaterial.emissiveIntensity = 0.6;
      this.lineMaterial.emissiveIntensity = 0.65;
      this.yellowLineMaterial.emissiveIntensity = 0.75;
    } else {
      this.asphaltMaterial.color.setHex(0x383e4a);
      this.asphaltMaterial.roughness = 0.45;
      this.asphaltMaterial.metalness = 0.15;
      this.asphaltMaterial.bumpScale = 0.03;
      this.buildingMaterial.emissiveIntensity = 0.15;
      this.podiumMaterial.emissiveIntensity = 0.1;
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
      this.asphaltMaterial.bumpScale = 0.025;
    } else {
      this.asphaltMaterial.roughness = 0.16;
      this.asphaltMaterial.metalness = 0.38;
      this.asphaltMaterial.bumpScale = 0.045;
    }
  }
}
