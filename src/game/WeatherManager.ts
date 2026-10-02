// VELOCITY X - Dynamic Atmospheric Weather & Cyber Rainstorm Orchestrator
import * as THREE from 'three';
import { RainSystem } from './RainSystem';
import { RoadManager } from './RoadManager';
import { audioManager } from './AudioManager';

export type WeatherType = 'CLEAR' | 'RAIN';

export class WeatherManager {
  public currentWeather: WeatherType = 'CLEAR';
  public rainSystem: RainSystem;
  private roadManager: RoadManager;
  private dirLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private scene: THREE.Scene;

  // Lighting Baseline Values (dynamic based on track mode)
  private baseDirIntensity = 1.8;
  private baseAmbientIntensity = 1.8;
  public trackMode: 'NIGHT' | 'DAY' = 'NIGHT';

  // Dynamic Weather Progression Cycle State
  private weatherCycleTimer = 35; // 35s to first rainstorm on Night track
  private isAutoWeatherEnabled = true;

  public setTrackMode(mode: 'NIGHT' | 'DAY'): void {
    this.trackMode = mode;
    if (mode === 'NIGHT') {
      this.baseDirIntensity = 1.8;
      this.baseAmbientIntensity = 1.8;
      this.weatherCycleTimer = 35 + Math.random() * 15;
    } else {
      this.baseDirIntensity = 3.6;
      this.baseAmbientIntensity = 2.4;
      this.setWeather('CLEAR');
    }
    if (!this.isFlashing) {
      this.resetLighting();
    }
  }

  public reset(mode: 'NIGHT' | 'DAY' = 'NIGHT'): void {
    this.isFlashing = false;
    this.flashDuration = 0;
    this.lightningTimer = 8;
    this.setTrackMode(mode);
    this.setWeather('CLEAR');
  }

  // Lightning Simulation State
  private lightningTimer = 8;
  private isFlashing = false;
  private flashDuration = 0;

  // Callbacks for UI
  public onLightningFlash?: () => void;
  public onWeatherChange?: (weather: WeatherType) => void;

  constructor(
    scene: THREE.Scene,
    dirLight: THREE.DirectionalLight,
    ambientLight: THREE.AmbientLight,
    roadManager: RoadManager
  ) {
    this.scene = scene;
    this.dirLight = dirLight;
    this.ambientLight = ambientLight;
    this.roadManager = roadManager;
    this.rainSystem = new RainSystem(scene);
  }

  public setWeather(weather: WeatherType, userOverride = false): void {
    this.currentWeather = weather;
    if (userOverride) {
      // Pause automatic cycling briefly on manual player choice
      this.weatherCycleTimer = 65;
    }
    const isRain = weather === 'RAIN';

    // 1. Enable/Disable 3D Rain Streaks
    this.rainSystem.setEnabled(isRain);

    // 2. Adjust Road Puddle & Wetness Refraction
    this.roadManager.setWetness(isRain);

    // 3. Audio synthesis
    if (isRain) {
      audioManager.startRain();
      this.lightningTimer = 5 + Math.random() * 6; // first thunder within 5-11s
      if (this.scene.fog instanceof THREE.FogExp2) {
        this.scene.fog.density = 0.0055; // thicker atmospheric rain fog
      }
    } else {
      audioManager.stopRain();
      if (this.scene.fog instanceof THREE.FogExp2) {
        this.scene.fog.density = 0.0035;
      }
      this.resetLighting();
    }

    if (this.onWeatherChange) {
      this.onWeatherChange(weather);
    }
  }

  public toggleWeather(): WeatherType {
    const next: WeatherType = this.currentWeather === 'CLEAR' ? 'RAIN' : 'CLEAR';
    this.setWeather(next, true);
    return next;
  }

  public update(delta: number, playerCarZ: number, playerCarX: number, playerSpeedKmh: number): void {
    // 0. Dynamic Atmospheric Weather Progression Cycle (Tokyo Cyber Night)
    if (this.trackMode === 'NIGHT' && this.isAutoWeatherEnabled) {
      this.weatherCycleTimer -= delta;
      if (this.weatherCycleTimer <= 0) {
        if (this.currentWeather === 'CLEAR') {
          // Cyberpunk midnight rainstorm rolls in
          this.setWeather('RAIN');
          this.weatherCycleTimer = 45 + Math.random() * 25; // 45-70s rainstorm duration
        } else {
          // Clouds part and storm subsides
          this.setWeather('CLEAR');
          this.weatherCycleTimer = 55 + Math.random() * 30; // 55-85s clear night
        }
      }
    }

    if (this.currentWeather !== 'RAIN') return;

    // 1. Update Rain Particles
    this.rainSystem.update(delta, playerCarZ, playerCarX, playerSpeedKmh);

    // 2. Lightning & Thunder Timer
    if (!this.isFlashing) {
      this.lightningTimer -= delta;
      if (this.lightningTimer <= 0) {
        this.triggerLightning();
      }
    } else {
      this.flashDuration -= delta;
      if (this.flashDuration <= 0) {
        this.isFlashing = false;
        this.resetLighting();
        this.lightningTimer = 9 + Math.random() * 12; // next thunder in 9-21s
      }
    }
  }

  private triggerLightning(): void {
    this.isFlashing = true;
    this.flashDuration = 0.14; // 140ms surge

    // Surge moonlight & ambient light
    this.dirLight.intensity = this.baseDirIntensity * 3.6;
    this.ambientLight.intensity = this.baseAmbientIntensity * 3.2;

    // Trigger procedural rolling thunder audio
    audioManager.playThunder();

    // Notify React HUD to flash screen vignette
    if (this.onLightningFlash) {
      this.onLightningFlash();
    }
  }

  private resetLighting(): void {
    this.dirLight.intensity = this.baseDirIntensity;
    this.ambientLight.intensity = this.baseAmbientIntensity;
  }

  public dispose(): void {
    audioManager.stopRain();
    this.rainSystem.dispose();
  }
}
