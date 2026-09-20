// VELOCITY X - Dynamic 3rd-Person Chase Camera with Speed FOV & Impact Shake
import * as THREE from 'three';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;
  private currentPos = new THREE.Vector3();
  private targetPos = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  // Dynamic FOV range
  private baseFOV = 68;
  private maxFOV = 92;

  // Impact & Nitro Camera Shake
  private shakeIntensity = 0;
  private shakeDecay = 4.5;

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

  public update(delta: number, carPos: THREE.Vector3, speedKmh: number, isNitro: boolean): void {
    // 1. Dynamic FOV based on speed and nitro
    const speedRatio = Math.min(1, speedKmh / 280);
    const targetFOV = Math.min(this.maxFOV, this.baseFOV + speedRatio * 16 + (isNitro ? 8 : 0));
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFOV, delta * 5);
    this.camera.updateProjectionMatrix();

    // 2. Camera Chase Distance: pulls back slightly at higher speeds for better traffic view
    const backDistance = 7.5 + speedRatio * 1.5;
    const height = 3.2 + speedRatio * 0.4;

    this.targetPos.set(
      carPos.x * 0.75, // slight lateral lag for dynamic drift feel
      carPos.y + height,
      carPos.z - backDistance
    );

    // Smooth damping / lerp
    this.currentPos.x = THREE.MathUtils.lerp(this.currentPos.x, this.targetPos.x, delta * 9);
    this.currentPos.y = THREE.MathUtils.lerp(this.currentPos.y, this.targetPos.y, delta * 9);
    this.currentPos.z = THREE.MathUtils.lerp(this.currentPos.z, this.targetPos.z, delta * 12);

    // 3. Camera Shake Calculation
    let shakeX = 0;
    let shakeY = 0;
    if (this.shakeIntensity > 0.01) {
      shakeX = (Math.random() - 0.5) * this.shakeIntensity;
      shakeY = (Math.random() - 0.5) * this.shakeIntensity;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * delta);
    }

    // High-speed natural engine vibration
    if (speedKmh > 160) {
      shakeY += Math.sin(Date.now() * 0.04) * (speedRatio * 0.025);
    }

    this.camera.position.set(
      this.currentPos.x + shakeX,
      this.currentPos.y + shakeY,
      this.currentPos.z
    );

    // 4. Look ahead along the highway
    this.lookTarget.set(
      carPos.x * 0.4,
      carPos.y + 1.2,
      carPos.z + 18 // look 18m ahead
    );
    this.camera.lookAt(this.lookTarget);
  }
}
