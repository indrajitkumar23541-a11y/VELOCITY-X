// VELOCITY X - Device Gyroscope & Accelerometer Tilt-to-Steer Controller
import * as THREE from 'three';

export interface TiltState {
  enabled: boolean;
  supported: boolean;
  steerAxis: number;     // -1.0 (full left) to +1.0 (full right)
  rawAngle: number;      // raw degrees
  calibratedAngle: number; // degrees relative to baseline
  isCalibrated: boolean;
}

export class TiltManager {
  private static instance: TiltManager | null = null;

  public enabled = false;
  public supported = false;
  public steerAxis = 0;
  public rawAngle = 0;
  public calibratedAngle = 0;
  private baselineAngle = 0;
  private isCalibrated = false;

  // Calibration Tuning Parameters
  public deadzoneDeg = 2.0;    // Angles within ±2° ignore resting-hand tremor
  public maxSteerDeg = 16.0;   // ±16° tilt achieves 100% full steering lock
  public smoothing = 14.0;     // Lerp filter speed for buttery response

  private boundHandleOrientation: (e: DeviceOrientationEvent) => void;

  constructor() {
    this.boundHandleOrientation = this.handleDeviceOrientation.bind(this);
    this.checkSupport();
  }

  public static getInstance(): TiltManager {
    if (!TiltManager.instance) {
      TiltManager.instance = new TiltManager();
    }
    return TiltManager.instance;
  }

  private checkSupport(): void {
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      this.supported = true;
    }
  }

  /**
   * Request permission for iOS 13+ Safari/WebKit
   */
  public async requestPermission(): Promise<boolean> {
    if (
      typeof window !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'
    ) {
      try {
        const response = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
        if (response === 'granted') {
          this.supported = true;
          return true;
        } else {
          this.supported = false;
          return false;
        }
      } catch (err) {
        console.warn('DeviceOrientation permission request failed:', err);
        return false;
      }
    }
    return this.supported;
  }

  /**
   * Start listening to device orientation
   */
  public start(): void {
    if (typeof window === 'undefined') return;
    this.enabled = true;
    window.addEventListener('deviceorientation', this.boundHandleOrientation, { passive: true });
  }

  /**
   * Stop listening to device orientation
   */
  public stop(): void {
    if (typeof window === 'undefined') return;
    this.enabled = false;
    this.steerAxis = 0;
    this._targetSteer = 0;
    window.removeEventListener('deviceorientation', this.boundHandleOrientation);
  }

  /**
   * Re-center / Zero-calibrate to driver's current resting angle
   */
  public calibrate(): void {
    this.baselineAngle = this.rawAngle;
    this.isCalibrated = true;
    this.calibratedAngle = 0;
    this.steerAxis = 0;
    this._targetSteer = 0;
  }

  /**
   * Handle raw orientation events and normalize for landscape
   */
  private handleDeviceOrientation(event: DeviceOrientationEvent): void {
    if (!this.enabled) return;

    // Detect screen orientation (landscape primary 90° vs reverse landscape 270° / -90°)
    let screenAngle = 90;
    if (typeof window !== 'undefined') {
      if (window.screen?.orientation?.angle !== undefined) {
        screenAngle = window.screen.orientation.angle;
      } else if (typeof window.orientation === 'number') {
        screenAngle = window.orientation;
      }
    }

    let raw = 0;
    const beta = event.beta ?? 0;
    const gamma = event.gamma ?? 0;

    // In Landscape orientation:
    // Top of phone is to the left at angle = 90° -> tilting left down reduces beta
    // Top of phone is to the right at angle = 270° / -90° -> inverted
    if (screenAngle === 90) {
      raw = beta;
    } else if (screenAngle === 270 || screenAngle === -90) {
      raw = -beta;
    } else {
      // Fallback for portrait or flat orientation
      raw = gamma;
    }

    this.rawAngle = raw;

    // Auto-calibrate on first valid reading if not yet calibrated
    if (!this.isCalibrated) {
      this.baselineAngle = raw;
      this.isCalibrated = true;
    }

    // Relative angle against calibrated resting posture
    let relative = raw - this.baselineAngle;

    // Constrain relative angle to ±45°
    relative = THREE.MathUtils.clamp(relative, -45, 45);
    this.calibratedAngle = relative;

    // Calculate target steer axis (-1.0 to +1.0) with deadzone & sensitivity curve
    const absRel = Math.abs(relative);
    let targetSteer = 0;

    if (absRel > this.deadzoneDeg) {
      const activeSpan = this.maxSteerDeg - this.deadzoneDeg;
      const progress = Math.min(1.0, (absRel - this.deadzoneDeg) / activeSpan);

      // Smooth progressive sensitivity curve: linear with subtle cubic curvature
      const curved = 0.7 * progress + 0.3 * Math.pow(progress, 2);
      targetSteer = Math.sign(relative) * curved;
    }

    // Direct assignment; smoothing is applied in update(delta)
    this._targetSteer = targetSteer;
  }

  private _targetSteer = 0;

  /**
   * Called every frame in the engine loop to apply smooth lerping
   */
  public update(delta: number): number {
    if (!this.enabled) {
      this.steerAxis = 0;
      return 0;
    }

    // Smooth filtering to prevent accelerometer jitter
    this.steerAxis = THREE.MathUtils.lerp(
      this.steerAxis,
      this._targetSteer,
      Math.min(1.0, delta * this.smoothing)
    );

    return this.steerAxis;
  }

  public getState(): TiltState {
    return {
      enabled: this.enabled,
      supported: this.supported,
      steerAxis: this.steerAxis,
      rawAngle: this.rawAngle,
      calibratedAngle: this.calibratedAngle,
      isCalibrated: this.isCalibrated,
    };
  }
}

export const tiltManager = TiltManager.getInstance();
