// VELOCITY X - Core WebGL 2.0 Engine & Game Orchestrator
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { CameraManager } from './CameraManager';
import { PlayerCar, PlayerControls } from './PlayerCar';
import { RoadManager } from './RoadManager';
import { TrafficManager } from './TrafficManager';
import { PoliceChase } from './PoliceChase';
import { ParticleSystem } from './ParticleSystem';
import { audioManager } from './AudioManager';
import { HapticsManager } from './HapticsManager';
import { CarConfig, StorageManager } from './Storage';
import { tiltManager } from './TiltManager';
import { WeatherManager, WeatherType } from './WeatherManager';

export interface HUDData {
  speedKmh: number;
  gear: number;
  rpm: number;
  nitroPercent: number;
  score: number;
  distanceMeters: number;
  combo: number;
  comboTimerProgress: number;
  pursuitActive: boolean;
  pursuitAlertIntensity: number;
  policeDistance: number;
  steerAxis: number;
  tiltAngle: number;
  tiltActive: boolean;
  weather: WeatherType;
  isLightningFlashing: boolean;
  proximityWarning?: { distance: number; lane: 'SAME' | 'LEFT' | 'RIGHT' } | null;
}

export interface GameSummary {
  score: number;
  distanceMeters: number;
  nearMisses: number;
  policeEvaded: number;
  coinsEarned: number;
  isBusted: boolean;
  isHighScore: boolean;
}

// Mobile performance detection — low-end pe bloom disable
function detectLowEndDevice(): boolean {
  // Agar <= 4 cores ho ya mobile GPU ho toh low-end maano
  const cores = navigator.hardwareConcurrency ?? 4;
  const isMobileUA = /Android|iPhone|iPad/i.test(navigator.userAgent);
  // Rough heuristic: 4 cores ya kam wala mobile = low-end
  return isMobileUA && cores <= 4;
}

export class Engine {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  private composer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  public readonly bloomEnabled: boolean;
  public cameraManager: CameraManager;
  public playerCar: PlayerCar;
  public roadManager: RoadManager;
  public trafficManager: TrafficManager;
  public policeChase: PoliceChase;
  public particleSystem: ParticleSystem;
  public weatherManager: WeatherManager;
  public isLightningFlashing = false;
  public trackMode: 'NIGHT' | 'DAY' = 'NIGHT';
  public isTurntableMode = false;
  private turntableAngle = 0;

  private dirLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private clock = new THREE.Clock();
  private isRunning = false;
  private animFrameId: number | null = null;
  private finishRunTimeoutId: number | null = null;
  private hudUpdateTimer = 0;

  // Game Progression State
  public score = 0;
  public distanceMeters = 0;
  public nearMissCount = 0;
  public policeEvadedCount = 0;
  public comboMultiplier = 1;
  private comboResetTimer = 0;
  private nextPursuitDistance = 750; // first chase after 750m

  // Callbacks for React HUD & UI
  public onHUDUpdate?: (hud: HUDData) => void;
  public onNearMissAlert?: (text: string, combo: number) => void;
  public onGameOver?: (summary: GameSummary) => void;
  public onPursuitEvadedAlert?: (bonusCoins: number) => void;
  public onFounderMilestone?: (milestoneMeters: number) => void;

  // Active Mobile Controls
  public controls: PlayerControls = {
    steerLeft: false,
    steerRight: false,
    throttle: false,
    brake: false,
    nitro: false,
    steerAxis: 0,
  };

  constructor(canvas: HTMLCanvasElement, activeCarConfig: CarConfig) {
    // 1. WebGL 2.0 High-Performance Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });

    // Mobile: DPR 1.0 max for performance; Desktop: 1.75 for crispness
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    this.renderer.setPixelRatio(isMobile
      ? Math.min(window.devicePixelRatio || 1, 1.0)
      : Math.min(window.devicePixelRatio || 1, 1.75)
    );
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Photorealistic ACES Filmic Tone Mapping — realistic, not cartoon
    // OutputPass handles tone mapping when bloom is active
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene: Deep navy night sky (not pure black — more like real night)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0e1a); // Deep navy, not black
    this.scene.fog = new THREE.FogExp2(0x0a0e1a, 0.006); // Exponential fog — depth realistic

    // 3. Procedural Cyberpunk HDR Environment Map for 4K Supercar Reflections
    this.setupCyberpunkEnvironment();

    // Moonlight: warm neutral (not blue-tinted), realistic outdoor night
    this.dirLight = new THREE.DirectionalLight(0xfff5e8, 1.8);
    this.dirLight.position.set(25, 55, 20);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 120;
    this.dirLight.shadow.camera.left = -18;
    this.dirLight.shadow.camera.right = 18;
    this.dirLight.shadow.camera.top = 22;
    this.dirLight.shadow.camera.bottom = -22;
    this.dirLight.shadow.bias = -0.0006;
    this.scene.add(this.dirLight);

    // Ambient: warm neutral fill — banishes blue cast, more realistic outdoor night
    this.ambientLight = new THREE.AmbientLight(0x5a6070, 1.8);
    this.scene.add(this.ambientLight);

    // 4. Subsystems
    this.cameraManager = new CameraManager();
    this.roadManager = new RoadManager(this.scene);
    this.roadManager.onFounderMilestone = (m) => {
      this.onFounderMilestone?.(m);
    };
    this.playerCar = new PlayerCar(this.scene, activeCarConfig);
    this.trafficManager = new TrafficManager(this.scene);
    this.policeChase = new PoliceChase(this.scene);
    this.particleSystem = new ParticleSystem(this.scene);
    this.weatherManager = new WeatherManager(this.scene, this.dirLight, this.ambientLight, this.roadManager);
    this.weatherManager.onLightningFlash = () => {
      this.isLightningFlashing = true;
      setTimeout(() => { this.isLightningFlashing = false; }, 160);
    };

    // ── Post-Processing Pipeline (Mobile-Adaptive Bloom) ──────────────────
    // Low-end mobile: bloom skip karo FPS bachao
    // High-end mobile/desktop: subtle realistic bloom
    this.bloomEnabled = !detectLowEndDevice();

    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.cameraManager.camera);
    this.composer.addPass(renderPass);

    // Bloom: threshold upar kiya — sirf VERY bright things bloom lein
    // Road markings (emissive 0.04) bloom nahi karengi, sirf headlights/police (emissive 5-6)
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.28,  // strength  — subtle and clean
      0.4,   // radius    — tight, sharp
      0.88   // threshold — only very bright emissives bloom
    );
    if (this.bloomEnabled) {
      this.composer.addPass(this.bloomPass);
    }

    // OutputPass: ACESFilmic tone mapping + gamma correction
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
    // ─────────────────────────────────────────────────────────────────────

    window.addEventListener('resize', this.onResize);
  }

  public setCarConfig(config: CarConfig): void {
    this.playerCar.setCarConfig(config);
  }

  public start(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    this.isRunning = true;
    this.clock.start();
    this.resetRunState();
    this.tick();
  }

  public stop(): void {
    this.isRunning = false;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.finishRunTimeoutId !== null) {
      clearTimeout(this.finishRunTimeoutId);
      this.finishRunTimeoutId = null;
    }
    audioManager.stopAllGameSounds();
  }

  public resetRunState(): void {
    if (this.finishRunTimeoutId !== null) {
      clearTimeout(this.finishRunTimeoutId);
      this.finishRunTimeoutId = null;
    }
    this.score = 0;
    this.distanceMeters = 0;
    this.nearMissCount = 0;
    this.policeEvadedCount = 0;
    this.comboMultiplier = 1;
    this.comboResetTimer = 0;
    this.nextPursuitDistance = 650;

    this.playerCar.reset(1);
    this.roadManager.reset(this.playerCar.mesh.position.z);
    this.trafficManager.reset(this.playerCar.mesh.position.z);
    this.policeChase.reset();
    this.cameraManager.reset(this.playerCar.mesh.position);
  }

  public setTrackEnvironment(mode: 'NIGHT' | 'DAY'): void {
    this.trackMode = mode;
    this.roadManager.setTrackEnvironment(mode);
    this.weatherManager.setTrackMode(mode);
    if (mode === 'NIGHT') {
      this.scene.background = new THREE.Color(0x0a0e1a);
      this.scene.fog = new THREE.FogExp2(0x0a0e1a, 0.006);
      this.dirLight.color.setHex(0xfff5e8);
      this.dirLight.intensity = 1.8;
      this.ambientLight.color.setHex(0x5a6070);
      this.ambientLight.intensity = 1.8;
    } else {
      this.scene.background = new THREE.Color(0x527799);
      this.scene.fog = new THREE.Fog(0x6b8fae, 35, 300);
      this.dirLight.color.setHex(0xfffaea);
      this.dirLight.intensity = 3.6;
      this.ambientLight.color.setHex(0x8da3b8);
      this.ambientLight.intensity = 2.4;
    }
  }

  public setTurntableMode(active: boolean): void {
    this.isTurntableMode = active;
    if (active) {
      this.turntableAngle = 0;
      this.playerCar.mesh.position.set(0, 0, 0);
      this.playerCar.mesh.rotation.set(0, 0, 0);
      this.roadManager.reset(0);
    }
  }

  private onResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
    this.bloomPass.resolution.set(width, height);
    this.cameraManager.resize(width, height);
  };

  private handleNearMiss = (basePts: number): void => {
    this.nearMissCount++;
    this.comboMultiplier = Math.min(8, this.comboMultiplier + 1);
    this.comboResetTimer = 3.8; // 3.8 seconds to chain next near-miss

    const awardedScore = basePts * this.comboMultiplier;
    this.score += awardedScore;

    // Trigger procedural near-miss whoosh audio
    audioManager.playNearMiss();

    // Mobile physical vibration
    HapticsManager.nearMiss();

    // Camera impact shake
    this.cameraManager.triggerShake(0.12);

    // Alert React HUD
    if (this.onNearMissAlert) {
      this.onNearMissAlert(`NEAR MISS! +${awardedScore}`, this.comboMultiplier);
    }
  };

  private handleCrash = (): void => {
    if (this.playerCar.isCrashed) return;
    this.playerCar.isCrashed = true;

    // Heavy crash SFX & Haptic crunch
    audioManager.playCrash();
    HapticsManager.crash();

    // Violently shake camera
    this.cameraManager.triggerShake(0.55);

    // Emit collision sparks
    this.particleSystem.emitSparks(this.playerCar.mesh.position, 28);

    // Trigger Game Over after short cinematic delay
    if (this.finishRunTimeoutId !== null) {
      clearTimeout(this.finishRunTimeoutId);
    }
    this.finishRunTimeoutId = window.setTimeout(() => {
      this.finishRunTimeoutId = null;
      this.finishRun(false);
    }, 1400);
  };

  private handleBusted = (): void => {
    if (this.playerCar.isCrashed) return;
    this.playerCar.isCrashed = true;

    HapticsManager.crash();
    this.cameraManager.triggerShake(0.35);

    if (this.finishRunTimeoutId !== null) {
      clearTimeout(this.finishRunTimeoutId);
    }
    this.finishRunTimeoutId = window.setTimeout(() => {
      this.finishRunTimeoutId = null;
      this.finishRun(true);
    }, 1200);
  };

  private handlePursuitEvaded = (bonusCoins: number): void => {
    this.policeEvadedCount++;
    this.score += 2500;
    audioManager.playCoinPickup();

    if (this.onPursuitEvadedAlert) {
      this.onPursuitEvadedAlert(bonusCoins);
    }

    // Next pursuit triggered further down the highway
    this.nextPursuitDistance = this.distanceMeters + 1200;
  };

  private finishRun(isBusted: boolean): void {
    this.stop();
    audioManager.stopAllGameSounds();

    // Save stats offline
    const stats = StorageManager.getStats();
    const isHighScore = this.score > stats.highScore;
    const earnedCoins = Math.floor(this.score / 15) + (this.policeEvadedCount * 500);

    StorageManager.saveStats({
      highScore: Math.max(stats.highScore, this.score),
      coins: stats.coins + earnedCoins,
      totalNearMisses: stats.totalNearMisses + this.nearMissCount,
      totalPoliceEvaded: stats.totalPoliceEvaded + this.policeEvadedCount,
    });

    // Save score to Global Leaderboard
    if (this.score > 200) {
      StorageManager.addLeaderboardScore({
        callsign: stats.playerCallsign || 'VIPER_01',
        score: this.score,
        distanceMeters: Math.floor(this.distanceMeters),
        policeEvaded: this.policeEvadedCount,
        carName: this.playerCar.config.name,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase(),
      });
    }

    if (this.onGameOver) {
      this.onGameOver({
        score: this.score,
        distanceMeters: Math.floor(this.distanceMeters),
        nearMisses: this.nearMissCount,
        policeEvaded: this.policeEvadedCount,
        coinsEarned: earnedCoins,
        isBusted,
        isHighScore,
      });
    }
  }

  private tick = (): void => {
    if (!this.isRunning) return;

    this.animFrameId = requestAnimationFrame(this.tick);

    // Delta time clamped to avoid physics glitches on mobile lag
    const delta = Math.min(this.clock.getDelta(), 0.08);

    // Turntable 3D Showroom rotation mode
    if (this.isTurntableMode) {
      this.turntableAngle += delta * 0.55;
      const dist = 5.2;
      this.cameraManager.camera.position.set(
        Math.sin(this.turntableAngle) * dist,
        1.6 + Math.sin(this.turntableAngle * 0.5) * 0.2,
        Math.cos(this.turntableAngle) * dist
      );
      this.cameraManager.camera.lookAt(0, 0.55, 0);
      // Showroom mein bhi bloom — car ke headlights glow karengi
      this.composer.render();
      return;
    }

    // 0. Update Gyro Tilt Steering if enabled
    if (tiltManager.enabled) {
      this.controls.steerAxis = tiltManager.update(delta);
    }

    // 1. Update Player Car
    this.playerCar.update(delta, this.controls);

    // Audio & Haptics Engine updates
    const isDriving = !this.playerCar.isCrashed;
    audioManager.updateEngine(this.playerCar.currentRPM, this.controls.throttle ? 1 : 0, isDriving);
    audioManager.updateTireSkid(Math.abs(this.playerCar.steeringInertia) * (this.playerCar.speedKmh > 120 ? 0.35 : 0));

    if (this.playerCar.isNitroActive) {
      audioManager.startNitro();
      HapticsManager.nitroPulse();
      this.particleSystem.emitNitroFlame(
        this.playerCar.leftExhaustPos,
        this.playerCar.rightExhaustPos,
        this.playerCar.speedKmh / 3.6
      );
    } else {
      audioManager.stopNitro();
    }

    // 2. Highway Scrolling & Lighting Follow
    this.roadManager.update(this.playerCar.mesh.position.z);
    this.dirLight.position.set(
      this.playerCar.mesh.position.x + 20,
      45,
      this.playerCar.mesh.position.z + 15
    );
    this.dirLight.target.position.set(
      this.playerCar.mesh.position.x,
      0,
      this.playerCar.mesh.position.z + 10
    );
    this.dirLight.target.updateMatrixWorld();

    // 3. Update Traffic
    this.trafficManager.update(
      delta,
      this.playerCar.mesh.position.z,
      this.playerCar.mesh.position.x,
      this.playerCar.speedKmh,
      this.playerCar.bounds,
      this.handleNearMiss,
      this.handleCrash
    );

    // 4. Police Chase Progression
    this.distanceMeters = this.playerCar.mesh.position.z;
    if (this.policeChase.state === 'IDLE' && this.distanceMeters >= this.nextPursuitDistance) {
      this.policeChase.triggerPursuit(this.playerCar.mesh.position.z, this.playerCar.mesh.position.x);
    }

    this.policeChase.update(
      delta,
      this.playerCar.mesh.position.z,
      this.playerCar.mesh.position.x,
      this.playerCar.speedKmh,
      this.playerCar.bounds,
      this.handleBusted,
      this.handlePursuitEvaded,
      (forceX) => this.playerCar.applyLateralImpulse(forceX)
    );

    // 5. Update Particle System, Weather & Camera
    this.particleSystem.update(delta);
    this.weatherManager.update(
      delta,
      this.playerCar.mesh.position.z,
      this.playerCar.mesh.position.x,
      this.playerCar.speedKmh
    );
    this.cameraManager.update(
      delta,
      this.playerCar.mesh.position,
      this.playerCar.speedKmh,
      this.playerCar.isNitroActive,
      this.policeChase.state === 'PURSUIT'
    );

    // 6. Combo Multiplier Decay Timer
    if (this.comboResetTimer > 0) {
      this.comboResetTimer -= delta;
      if (this.comboResetTimer <= 0) {
        this.comboMultiplier = 1;
      }
    }

    // Distance based score increment
    if (!this.playerCar.isCrashed && this.playerCar.speedKmh > 50) {
      this.score += Math.floor((this.playerCar.speedKmh / 36) * delta * 10 * this.comboMultiplier);
    }

    // 7. Render WebGL Scene via Post-Processing Composer
    this.composer.render();

    // 8. Update React HUD throttled to ~20 Hz to eliminate GC & React reconciliation stutter
    this.hudUpdateTimer += delta;
    if (this.hudUpdateTimer >= 0.048 && this.onHUDUpdate) {
      this.hudUpdateTimer = 0;
      this.onHUDUpdate({
        speedKmh: Math.floor(this.playerCar.speedKmh),
        gear: this.playerCar.currentGear,
        rpm: Math.floor(this.playerCar.currentRPM),
        nitroPercent: Math.floor(this.playerCar.nitroReserve),
        score: this.score,
        distanceMeters: Math.floor(this.distanceMeters),
        combo: this.comboMultiplier,
        comboTimerProgress: Math.max(0, this.comboResetTimer / 3.8),
        pursuitActive: this.policeChase.state === 'PURSUIT',
        pursuitAlertIntensity: this.policeChase.redBlueFlashIntensity,
        policeDistance: Math.floor(this.policeChase.distanceToClosest),
        steerAxis: this.playerCar.steeringInertia,
        tiltAngle: Math.round(tiltManager.calibratedAngle),
        tiltActive: tiltManager.enabled,
        weather: this.weatherManager.currentWeather,
        isLightningFlashing: this.isLightningFlashing,
        proximityWarning: this.trafficManager.getProximityWarning(
          this.playerCar.mesh.position.z,
          this.playerCar.mesh.position.x
        ),
      });
    }
  };

  private setupCyberpunkEnvironment(): void {
    if (typeof document === 'undefined') return;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Sleek Midnight Sky Gradient with Subtle Atmospheric Horizon Glow
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#010308');
    skyGrad.addColorStop(0.38, '#060d1c');
    skyGrad.addColorStop(0.49, '#111e38');
    skyGrad.addColorStop(0.51, '#1b2a4a'); // Elegant subtle metropolitan horizon glow
    skyGrad.addColorStop(0.55, '#0a1222');
    skyGrad.addColorStop(1, '#02040a');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // 2. Distant sweeping searchlight beams (Atmospheric Skybeams)
    ctx.save();
    for (let b = 0; b < 4; b++) {
      const bx = 180 + b * 240;
      const grad = ctx.createLinearGradient(bx, 256, bx + (b % 2 === 0 ? 80 : -80), 30);
      grad.addColorStop(0, 'rgba(160, 210, 255, 0.16)');
      grad.addColorStop(0.6, 'rgba(160, 210, 255, 0.04)');
      grad.addColorStop(1, 'rgba(160, 210, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(bx - 12, 256);
      ctx.lineTo(bx + 12, 256);
      ctx.lineTo(bx + (b % 2 === 0 ? 120 : -120), 20);
      ctx.lineTo(bx + (b % 2 === 0 ? 80 : -80), 20);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // 3. Multi-Tier Architectural Skyline Silhouettes
    const warmWindowColors = ['#fef3c7', '#fde68a', '#e2e8f0', '#cbd5e1'];
    for (let i = 0; i < 64; i++) {
      const x = (i / 64) * 1024 + (Math.sin(i * 3.5) * 8);
      const w = 12 + (i % 5) * 6;
      const h = 35 + ((i * 19) % 85);
      const y = 256 - h;

      // Skyscraper body
      ctx.fillStyle = '#060b18';
      ctx.fillRect(x, y, w, h);

      // Realistic warm architectural office lighting (No harsh disco colors)
      const winColor = warmWindowColors[i % warmWindowColors.length];
      ctx.fillStyle = winColor;
      for (let wy = y + 6; wy < 250; wy += 8) {
        ctx.fillRect(x + 2, wy, w - 4, 3);
      }

      // Rooftop aviation warning beacon
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(x + w / 2 - 1, y - 6, 2, 6);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;

    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;

    this.scene.environment = envMap;
    pmremGenerator.dispose();
    texture.dispose();
  }

  public destroy(): void {
    this.stop();
    if (this.finishRunTimeoutId !== null) {
      clearTimeout(this.finishRunTimeoutId);
      this.finishRunTimeoutId = null;
    }
    window.removeEventListener('resize', this.onResize);
    this.weatherManager.dispose();
    this.particleSystem.dispose();
    this.roadManager.dispose();
    this.trafficManager.dispose();
    this.policeChase.dispose();
    this.playerCar.dispose();
    if (this.scene.environment) {
      this.scene.environment.dispose();
    }
    this.composer.dispose();
    this.renderer.dispose();
  }
}
