// VELOCITY X - High-Performance GPU Instanced Raindrop & Weather Streaks Engine
import * as THREE from 'three';

export class RainSystem {
  private scene: THREE.Scene;
  private maxRainDrops = 900;
  private geometry: THREE.BufferGeometry;
  private material: THREE.LineBasicMaterial;
  private lineSegments: THREE.LineSegments;
  private positions: Float32Array;

  // Rain particle velocities and state
  private dropSpeeds: Float32Array;
  private dropLengths: Float32Array;
  public enabled = false;

  // Bound volume around player
  private boxWidth = 36; // X span: -18 to +18
  private boxDepth = 90; // Z span: -20 to +70
  private boxHeight = 28; // Y span: 0 to 28

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Line segments require 2 vertices (start, end) per raindrop
    this.positions = new Float32Array(this.maxRainDrops * 6);
    this.dropSpeeds = new Float32Array(this.maxRainDrops);
    this.dropLengths = new Float32Array(this.maxRainDrops);

    for (let i = 0; i < this.maxRainDrops; i++) {
      const idx = i * 6;
      const x = (Math.random() - 0.5) * this.boxWidth;
      const y = Math.random() * this.boxHeight;
      const z = (Math.random() - 0.25) * this.boxDepth;
      const length = 1.2 + Math.random() * 0.8;

      // Top vertex
      this.positions[idx] = x;
      this.positions[idx + 1] = y + length;
      this.positions[idx + 2] = z;

      // Bottom vertex
      this.positions[idx + 3] = x;
      this.positions[idx + 4] = y;
      this.positions[idx + 5] = z;

      this.dropSpeeds[i] = 48 + Math.random() * 24; // fall speed
      this.dropLengths[i] = length;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    // Semi-transparent cyan-tinted rain streaks
    this.material = new THREE.LineBasicMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.lineSegments = new THREE.LineSegments(this.geometry, this.material);
    this.lineSegments.frustumCulled = false;
    this.lineSegments.visible = false;
    this.scene.add(this.lineSegments);
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    this.lineSegments.visible = enabled;
  }

  public update(delta: number, playerCarZ: number, playerCarX: number, playerSpeedKmh: number): void {
    if (!this.enabled) return;

    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    // Relative slant from forward vehicle motion (high speed makes rain slant backwards)
    const forwardSlant = (playerSpeedKmh / 3.6) * 0.08;

    for (let i = 0; i < this.maxRainDrops; i++) {
      const idx = i * 6;
      const speed = this.dropSpeeds[i];
      const length = this.dropLengths[i];

      // Drop falling down
      array[idx + 1] -= speed * delta;
      array[idx + 4] = array[idx + 1] - length;

      // Wind drag slant backwards along Z
      array[idx + 2] -= forwardSlant * delta;
      array[idx + 5] = array[idx + 2] + forwardSlant * 0.04;

      // Recycle if hit the ground or left bounding zone
      const relativeZ = array[idx + 2] - playerCarZ;
      const relativeX = array[idx] - playerCarX;

      if (
        array[idx + 1] <= 0.1 ||
        relativeZ < -25 ||
        relativeZ > 75 ||
        Math.abs(relativeX) > this.boxWidth / 2
      ) {
        // Respawn at top inside box ahead of player
        const newX = playerCarX + (Math.random() - 0.5) * this.boxWidth;
        const newY = this.boxHeight - Math.random() * 3;
        const newZ = playerCarZ + (Math.random() - 0.2) * this.boxDepth;

        array[idx] = newX;
        array[idx + 1] = newY;
        array[idx + 2] = newZ;

        array[idx + 3] = newX;
        array[idx + 4] = newY - length;
        array[idx + 5] = newZ;
      }
    }

    posAttr.needsUpdate = true;
  }

  public dispose(): void {
    this.scene.remove(this.lineSegments);
    this.geometry.dispose();
    this.material.dispose();
  }
}
