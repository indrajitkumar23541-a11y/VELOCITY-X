// VELOCITY X - Rock-Solid Cinematic 3rd-Person Chase Camera (Zero-Jitter, Speed FOV)
import * as THREE from 'three';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;
  private currentPos = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  // Dynamic FOV range — Realistic high-speed peripheral perception
  private baseFOV = 64;
  private maxFOV = 76;

  // Impact & Near-Miss Camera Shake (Only on events, never continuous jitter)
  private shakeIntensity = 0;
  private shakeDecay = 5.0;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      this.baseFOV,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.currentPos.set(0, 3.8, -8);
    this.camera.position.copy(this.currentPos);
  }

  public triggerShake(intensity: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  public resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  public reset(carPos: THREE.Vector3): void {
    this.shakeIntensity = 0;
    this.camera.fov = this.baseFOV;
    this.camera.updateProjectionMatrix();
    this.currentPos.set(carPos.x * 0.72, carPos.y + 1.45, carPos.z - 4.4);
    this.camera.position.copy(this.currentPos);
    this.lookTarget.set(carPos.x * 0.85, carPos.y + 0.85, carPos.z + 10);
    this.camera.lookAt(this.lookTarget);
  }

  public update(delta: number, carPos: THREE.Vector3, speedKmh: number, isNitro: boolean): void {
    // 1. Dynamic FOV based on speed and nitro (smooth speed rush sensation)
    const speedRatio = Math.min(1, speedKmh / 280);
    const targetFOV = Math.min(this.maxFOV, this.baseFOV + speedRatio * 12 + (isNitro ? 6 : 0));
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFOV, delta * 4);
    this.camera.updateProjectionMatrix();

    // 2. Camera Chase Distance & Height
    const backDistance = 4.4 + speedRatio * 0.7;
    const height = 1.45 + speedRatio * 0.2;

    // Rigidly lock Z distance to eliminate oscillating frame-rate micro-stutter
    this.currentPos.z = carPos.z - backDistance;

    // Smooth lateral and vertical damping (graceful camera lean during turns)
    this.currentPos.x = THREE.MathUtils.lerp(this.currentPos.x, carPos.x * 0.72, delta * 10);
    this.currentPos.y = THREE.MathUtils.lerp(this.currentPos.y, carPos.y + height, delta * 8);

    // 3. Impact & Collision Shake (only triggers on actual crashes / near-misses)
    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeIntensity > 0.01) {
      shakeX = (Math.random() - 0.5) * this.shakeIntensity;
      shakeY = (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * delta);
    }

    this.camera.position.set(
      this.currentPos.x + shakeX,
      this.currentPos.y + shakeY,
      this.currentPos.z
    );

    // 4. Stable look-ahead target smoothly tracking vehicle center
    this.lookTarget.x = THREE.MathUtils.lerp(this.lookTarget.x, carPos.x * 0.85, delta * 12);
    this.lookTarget.y = carPos.y + 0.85;
    this.lookTarget.z = carPos.z + 10;
    this.camera.lookAt(this.lookTarget);
  }
}
