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

  // Lighting Baseline Values
  private baseDirIntensity = 1.8;
  private baseAmbientIntensity = 1.4;

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

  public setWeather(weather: WeatherType): void {
    this.currentWeather = weather;
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
    this.setWeather(next);
    return next;
  }

  public update(delta: number, playerCarZ: number, playerCarX: number, playerSpeedKmh: number): void {
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
    this.rainSystem.dispose();
  }
}
