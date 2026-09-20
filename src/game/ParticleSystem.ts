// VELOCITY X - High-Performance Object-Pooled Particle Engine
import * as THREE from 'three';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  active: boolean;
}

export class ParticleSystem {
  private maxParticles = 300;
  private particles: Particle[] = [];
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private points: THREE.Points;

  private positions: Float32Array;
  private colors: Float32Array;

  constructor(scene: THREE.Scene) {
    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        position: new THREE.Vector3(0, -999, 0),
        velocity: new THREE.Vector3(),
        color: new THREE.Color(1, 1, 1),
        size: 0.2,
        alpha: 1,
        life: 0,
        maxLife: 1,
        active: false,
      });
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    // Particle material with additive blending for glowing flames and sparks
    this.material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  public emitNitroFlame(leftExhaust: THREE.Vector3, rightExhaust: THREE.Vector3, carVelocityZ: number): void {
    const exhausts = [leftExhaust, rightExhaust];
    for (const pos of exhausts) {
      this.spawnParticle(
        pos.x + (Math.random() - 0.5) * 0.08,
        pos.y + (Math.random() - 0.5) * 0.08,
        pos.z + (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.3,
        carVelocityZ - (8 + Math.random() * 6), // shoot backwards violently
        Math.random() > 0.3 ? 0x00f3ff : 0x0066ff, // electric blue / cyan flame core
        0.3 + Math.random() * 0.15,
        0.18 + Math.random() * 0.12
      );
    }
  }

  public emitTireSmoke(pos: THREE.Vector3): void {
    this.spawnParticle(
      pos.x + (Math.random() - 0.5) * 0.15,
      pos.y + 0.1,
      pos.z + (Math.random() - 0.5) * 0.2,
      (Math.random() - 0.5) * 1.5,
      0.5 + Math.random() * 0.8,
      (Math.random() - 0.5) * 1.5,
      0x556677, // grey-blue tire smoke
      0.4 + Math.random() * 0.2,
      0.4 + Math.random() * 0.3
    );
  }

  public emitSparks(pos: THREE.Vector3, count = 12): void {
    for (let i = 0; i < count; i++) {
      this.spawnParticle(
        pos.x,
        pos.y,
        pos.z,
        (Math.random() - 0.5) * 12,
        2 + Math.random() * 8,
        (Math.random() - 0.5) * 12,
        Math.random() > 0.5 ? 0xffaa00 : 0xff3300, // orange-hot sparks
        0.2 + Math.random() * 0.15,
        0.3 + Math.random() * 0.25
      );
    }
  }

  private spawnParticle(
    x: number, y: number, z: number,
    vx: number, vy: number, vz: number,
    hexColor: number,
    size: number,
    lifeTime: number
  ): void {
    const p = this.particles.find(pt => !pt.active);
    if (!p) return;

    p.active = true;
    p.position.set(x, y, z);
    p.velocity.set(vx, vy, vz);
    p.color.setHex(hexColor);
    p.size = size;
    p.life = lifeTime;
    p.maxLife = lifeTime;
  }

  public update(delta: number): void {
    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const colAttr = this.geometry.attributes.color as THREE.BufferAttribute;

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (!p.active) {
        this.positions[i * 3 + 1] = -999;
        continue;
      }

      p.life -= delta;
      if (p.life <= 0) {
        p.active = false;
        this.positions[i * 3 + 1] = -999;
        continue;
      }

      // Physics integration
      p.position.x += p.velocity.x * delta;
      p.position.y += p.velocity.y * delta;
      p.position.z += p.velocity.z * delta;

      // Friction & gravity on sparks
      p.velocity.x *= 0.95;
      p.velocity.y -= 9.8 * delta * 0.5;
      p.velocity.z *= 0.95;

      const progress = p.life / p.maxLife;

      this.positions[i * 3] = p.position.x;
      this.positions[i * 3 + 1] = p.position.y;
      this.positions[i * 3 + 2] = p.position.z;

      this.colors[i * 3] = p.color.r * progress;
      this.colors[i * 3 + 1] = p.color.g * progress;
      this.colors[i * 3 + 2] = p.color.b * progress;
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  }

  public dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}
