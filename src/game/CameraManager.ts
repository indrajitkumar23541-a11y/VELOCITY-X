// VELOCITY X - Dynamic 3rd-Person Chase Camera with Speed FOV & Impact Shake
import * as THREE from 'three';

export class CameraManager {
  public camera: THREE.PerspectiveCamera;
  private currentPos = new THREE.Vector3();
  private targetPos = new THREE.Vector3();
  private lookTarget = new THREE.Vector3();

  // Dynamic FOV range — Night City Racing jaisa tight framing
  private baseFOV = 65;
  private maxFOV = 78;

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

  public reset(carPos: THREE.Vector3): void {
    this.shakeIntensity = 0;
    this.camera.fov = this.baseFOV;
    this.camera.updateProjectionMatrix();
    this.targetPos.set(carPos.x * 0.6, carPos.y + 1.4, carPos.z - 4.2);
    this.currentPos.copy(this.targetPos);
    this.camera.position.copy(this.currentPos);
    this.lookTarget.set(carPos.x * 0.3, carPos.y + 0.6, carPos.z + 8);
    this.camera.lookAt(this.lookTarget);
  }

  public update(delta: number, carPos: THREE.Vector3, speedKmh: number, isNitro: boolean): void {
    // 1. Dynamic FOV based on speed and nitro
    const speedRatio = Math.min(1, speedKmh / 280);
    const targetFOV = Math.min(this.maxFOV, this.baseFOV + speedRatio * 16 + (isNitro ? 8 : 0));
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFOV, delta * 5);
    this.camera.updateProjectionMatrix();

    // Camera Chase Distance: low & close — Night City Racing style
    // Height 1.4m: car ke peeche bilkul neeche, car badi dikhegi
    const backDistance = 4.2 + speedRatio * 0.8;
    const height = 1.4 + speedRatio * 0.25;

    this.targetPos.set(
      carPos.x * 0.6,  // tight lateral tracking
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

    // 4. Look at car + small look-ahead (tighter framing, car more centered)
    this.lookTarget.set(
      carPos.x * 0.3,
      carPos.y + 0.6,
      carPos.z + 8  // 8m look-ahead — car fills more of screen
    );
    this.camera.lookAt(this.lookTarget);
  }
}
