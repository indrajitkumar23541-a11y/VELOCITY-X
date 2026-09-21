// VELOCITY X - Core WebGL 2.0 Engine & Game Orchestrator
import * as THREE from 'three';
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

export class Engine {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
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

    // Clamp DPR to 1.75 to prevent 4K retina overheating while keeping crisp visuals
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Photorealistic ACES Filmic Tone Mapping
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Scene & High-Visibility Cyber City Linear Fog (extends out to 280m)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913);
    this.scene.fog = new THREE.Fog(0x060913, 25, 280);

    // 3. Procedural Cyberpunk HDR Environment Map for 4K Supercar Reflections
    this.setupCyberpunkEnvironment();

    // 4. Dynamic Directional Moonlight with tight shadow frustum
    this.dirLight = new THREE.DirectionalLight(0xb0d8ff, 2.6);
    this.dirLight.position.set(25, 45, 20);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 140;
    this.dirLight.shadow.camera.left = -22;
    this.dirLight.shadow.camera.right = 22;
    this.dirLight.shadow.camera.top = 25;
    this.dirLight.shadow.camera.bottom = -25;
    this.dirLight.shadow.bias = -0.0006;
    this.scene.add(this.dirLight);

    // Ambient Night Road Fill Light with Cyber City Hue
    this.ambientLight = new THREE.AmbientLight(0x384a68, 2.2);
    this.scene.add(this.ambientLight);

    // 4. Subsystems
    this.cameraManager = new CameraManager();
    this.roadManager = new RoadManager(this.scene);
    this.playerCar = new PlayerCar(this.scene, activeCarConfig);
    this.trafficManager = new TrafficManager(this.scene);
    this.policeChase = new PoliceChase(this.scene);
    this.particleSystem = new ParticleSystem(this.scene);
    this.weatherManager = new WeatherManager(this.scene, this.dirLight, this.ambientLight, this.roadManager);
    this.weatherManager.onLightningFlash = () => {
      this.isLightningFlashing = true;
      setTimeout(() => { this.isLightningFlashing = false; }, 160);
    };

    window.addEventListener('resize', this.onResize);
  }

  public setCarConfig(config: CarConfig): void {
    this.playerCar.setCarConfig(config);
  }

  public start(): void {
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
  }

  public resetRunState(): void {
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
  }

  public setTrackEnvironment(mode: 'NIGHT' | 'DAY'): void {
    this.trackMode = mode;
    this.roadManager.setTrackEnvironment(mode);
    if (mode === 'NIGHT') {
      this.scene.background = new THREE.Color(0x060913);
      this.scene.fog = new THREE.Fog(0x060913, 25, 280);
      this.dirLight.color.setHex(0xb0d8ff);
      this.dirLight.intensity = 2.6;
      this.ambientLight.color.setHex(0x384a68);
      this.ambientLight.intensity = 2.2;
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
    setTimeout(() => {
      this.finishRun(false);
    }, 1400);
  };

  private handleBusted = (): void => {
    if (this.playerCar.isCrashed) return;
    this.playerCar.isCrashed = true;

    HapticsManager.crash();
    this.cameraManager.triggerShake(0.35);

    setTimeout(() => {
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
      this.renderer.render(this.scene, this.cameraManager.camera);
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
      this.handlePursuitEvaded
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
      this.playerCar.isNitroActive
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

    // 7. Render WebGL Scene
    this.renderer.render(this.scene, this.cameraManager.camera);

    // 8. Update React HUD
    if (this.onHUDUpdate) {
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
      });
    }
  };

  private setupCyberpunkEnvironment(): void {
    if (typeof document === 'undefined') return;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Midnight Sky Gradient with glowing horizon
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 256);
    skyGrad.addColorStop(0, '#02050c');
    skyGrad.addColorStop(0.35, '#071022');
    skyGrad.addColorStop(0.48, '#0a2345');
    skyGrad.addColorStop(0.5, '#00f3ff');  // Electric cyan horizon line
    skyGrad.addColorStop(0.53, '#ff007f'); // Neon magenta city reflection
    skyGrad.addColorStop(0.65, '#0d1322');
    skyGrad.addColorStop(1, '#03060d');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, 512, 256);

    // 2. Horizon Neon Skyline Reflection Silhouettes
    for (let i = 0; i < 32; i++) {
      const x = (i / 32) * 512 + (Math.sin(i * 4) * 6);
      const w = 10 + (i % 4) * 6;
      const h = 20 + ((i * 11) % 45);
      const y = 128 - h;

      // Dark skyscraper body
      ctx.fillStyle = '#060b17';
      ctx.fillRect(x, y, w, h);

      // Neon window strips
      ctx.fillStyle = i % 2 === 0 ? '#00f3ff' : (i % 3 === 0 ? '#ff007f' : '#ffaa00');
      ctx.fillRect(x + 2, y + 4, w - 4, 3);
      ctx.fillRect(x + 2, y + 12, w - 4, 2);
      ctx.fillRect(x + 2, y + 20, w - 4, 2);

      // Rooftop warning beacon
      ctx.fillStyle = i % 2 === 0 ? '#ff3366' : '#00f3ff';
      ctx.fillRect(x + w / 2 - 1, y - 5, 2, 5);
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
    window.removeEventListener('resize', this.onResize);
    this.weatherManager.dispose();
    this.particleSystem.dispose();
    this.renderer.dispose();
  }
}
