// VELOCITY X - High-Performance Object-Pooled Particle Engine (Textured Sprites)
import * as THREE from 'three';

interface Particle {
  mesh: THREE.Sprite;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
  startScale: number;
  endScale: number;
}

// Canvas se soft circular glow texture banao — realistic, cartoon nahi
function createSoftGlowTexture(size = 64): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const center = size / 2;
  const grad = ctx.createRadialGradient(center, center, 0, center, center, center);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.3, 'rgba(255,255,255,0.6)');
  grad.addColorStop(0.7, 'rgba(255,255,255,0.15)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export class ParticleSystem {
  private maxParticles = 200;
  private particles: Particle[] = [];
  private glowTexture: THREE.CanvasTexture;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.glowTexture = createSoftGlowTexture(64);

    for (let i = 0; i < this.maxParticles; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.glowTexture,
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0, 0, 1);
      sprite.position.set(0, -999, 0);
      scene.add(sprite);

      this.particles.push({
        mesh: sprite,
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 1,
        active: false,
        startScale: 0.3,
        endScale: 0.0,
      });
    }
  }

  public emitNitroFlame(leftExhaust: THREE.Vector3, rightExhaust: THREE.Vector3, carVelocityZ: number): void {
    const exhausts = [leftExhaust, rightExhaust];
    for (const pos of exhausts) {
      const isCore = Math.random() > 0.4;
      this.spawnParticle(
        pos.x + (Math.random() - 0.5) * 0.12,
        pos.y + (Math.random() - 0.5) * 0.1,
        pos.z + (Math.random() - 0.5) * 0.15,
        (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 0.4,
        carVelocityZ - (10 + Math.random() * 8),
        isCore ? 0x00f3ff : 0x0033ff,
        isCore ? 0.7 : 0.45,
        0.0,
        0.22 + Math.random() * 0.14
      );
    }
  }

  public emitTireSmoke(pos: THREE.Vector3): void {
    this.spawnParticle(
      pos.x + (Math.random() - 0.5) * 0.2,
      pos.y + 0.1,
      pos.z + (Math.random() - 0.5) * 0.25,
      (Math.random() - 0.5) * 2.0,
      0.4 + Math.random() * 0.6,
      (Math.random() - 0.5) * 2.0,
      0x445566,
      0.3,
      0.9,
      0.5 + Math.random() * 0.35
    );
  }

  public emitSparks(pos: THREE.Vector3, count = 12): void {
    const total = Math.min(count * 4, 80);
    for (let i = 0; i < total; i++) {
      const isOrange = Math.random() > 0.4;
      this.spawnParticle(
        pos.x + (Math.random() - 0.5) * 0.5,
        pos.y + 0.3,
        pos.z + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 14,
        3 + Math.random() * 10,
        (Math.random() - 0.5) * 14,
        isOrange ? 0xffaa00 : 0xff4400,
        0.18 + Math.random() * 0.12,
        0.0,
        0.4 + Math.random() * 0.35
      );
    }
  }

  private spawnParticle(
    x: number, y: number, z: number,
    vx: number, vy: number, vz: number,
    hexColor: number,
    startScale: number,
    endScale: number,
    lifeTime: number
  ): void {
    const p = this.particles.find(pt => !pt.active);
    if (!p) return;

    p.active = true;
    p.mesh.position.set(x, y, z);
    p.velocity.set(vx, vy, vz);
    (p.mesh.material as THREE.SpriteMaterial).color.setHex(hexColor);
    (p.mesh.material as THREE.SpriteMaterial).opacity = 1.0;
    p.startScale = startScale;
    p.endScale = endScale;
    p.life = lifeTime;
    p.maxLife = lifeTime;
    p.mesh.scale.set(startScale, startScale, 1);
  }

  public update(delta: number): void {
    for (const p of this.particles) {
      if (!p.active) {
        p.mesh.position.y = -999;
        continue;
      }

      p.life -= delta;
      if (p.life <= 0) {
        p.active = false;
        p.mesh.position.y = -999;
        (p.mesh.material as THREE.SpriteMaterial).opacity = 0;
        p.mesh.scale.set(0, 0, 1);
        continue;
      }

      p.mesh.position.x += p.velocity.x * delta;
      p.mesh.position.y += p.velocity.y * delta;
      p.mesh.position.z += p.velocity.z * delta;

      p.velocity.x *= 0.93;
      p.velocity.y -= 9.8 * delta * 0.55;
      p.velocity.z *= 0.93;

      const progress = p.life / p.maxLife;
      const currentScale = p.startScale * progress + p.endScale * (1 - progress);
      p.mesh.scale.set(currentScale, currentScale, 1);
      (p.mesh.material as THREE.SpriteMaterial).opacity = progress * 0.9;
    }
  }

  public dispose(): void {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
      (p.mesh.material as THREE.SpriteMaterial).dispose();
    }
    this.glowTexture.dispose();
  }
}
