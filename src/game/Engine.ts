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

  private dirLight: THREE.DirectionalLight;
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
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Scene & Moody Cyberpunk Fog
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x080b12);
    this.scene.fog = new THREE.FogExp2(0x080b12, 0.0035);

    // 3. Dynamic Directional Moonlight with tight shadow frustum
    this.dirLight = new THREE.DirectionalLight(0x88bbff, 1.8);
    this.dirLight.position.set(25, 45, 20);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 120;
    this.dirLight.shadow.camera.left = -18;
    this.dirLight.shadow.camera.right = 18;
    this.dirLight.shadow.camera.top = 22;
    this.dirLight.shadow.camera.bottom = -22;
    this.dirLight.shadow.bias = -0.0008;
    this.scene.add(this.dirLight);

    // Ambient Night Road Fill Light
    const ambientLight = new THREE.AmbientLight(0x1a2638, 1.4);
    this.scene.add(ambientLight);

    // 4. Subsystems
    this.cameraManager = new CameraManager();
    this.roadManager = new RoadManager(this.scene);
    this.playerCar = new PlayerCar(this.scene, activeCarConfig);
    this.trafficManager = new TrafficManager(this.scene);
    this.policeChase = new PoliceChase(this.scene);
    this.particleSystem = new ParticleSystem(this.scene);

    window.addEventListener('resize', this.onResize);
  }

  public setCarConfig(config: CarConfig): void {
    this.playerCar.config = config;
    this.playerCar.setCustomization(config.color, config.underglowColor);
    this.playerCar.maxSpeedKmh = config.topSpeedKmh;
    this.playerCar.nitroMaxSpeedKmh = config.topSpeedKmh * 1.22;
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
    this.trafficManager.reset(this.playerCar.mesh.position.z);
    this.policeChase.reset();
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

    // 5. Update Particle System & Camera
    this.particleSystem.update(delta);
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
      });
    }
  };

  public destroy(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    this.particleSystem.dispose();
    this.renderer.dispose();
  }
}
