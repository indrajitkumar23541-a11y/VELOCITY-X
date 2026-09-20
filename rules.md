# VELOCITY X — Development Rules & Coding Standards

> **Purpose**: This document establishes the mandatory engineering rules, performance laws, and coding standards for VELOCITY X. Every contributor and AI agent must adhere strictly to these rules to guarantee the game runs **smooth like butter ("makhan ki tarah") at 60–120 FPS**.

---

## 1. The 7 Golden Laws of Mobile 60–120 FPS Performance

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE 7 PERFORMANCE LAWS (ZERO-LAG)                   │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Zero Garbage Collection (GC) in the Render Loop (Object Pooling)    │
│ 2. DPR Clamping: Math.min(window.devicePixelRatio, 1.75)               │
│ 3. Strict Draw Call Budget (< 45 Draw Calls per Frame)                 │
│ 4. Smart Volumetric Lighting (Additive Blending, Never 10 Spotlights)  │
│ 5. Touch Action Lockdown (touch-action: none, No Pull-to-Refresh)      │
│ 6. Pure Procedural Web Audio (Zero MP3 Downloads, Zero Latency)        │
│ 7. Safe-Area Protection (CSS env(safe-area-inset-*) for Notches)       │
└────────────────────────────────────────────────────────────────────────┘
```

### Law 1: Zero Garbage Collection in `tick()`
- **The Problem**: In JavaScript, when objects are allocated inside the 60 FPS animation loop, the browser Garbage Collector (GC) runs every few seconds to reclaim memory. This causes visible frame drops ("janks" or stuttering).
- **The Rule**: **NEVER** write `new THREE.Vector3()`, `new THREE.Matrix4()`, `new THREE.Box3()`, or create temporary object literals inside any method called within `requestAnimationFrame` (`tick()`).
- **Implementation**: Allocate reusable scratch vectors, quaternions, and bounding boxes once as private class members at instantiation, and reuse them using `.set()`, `.copy()`, or `.applyMatrix4()`.

### Law 2: Device Pixel Ratio (DPR) Clamping
- **The Problem**: Modern mobile phones have 3x and 4x retina screens (e.g. iPhone 15 Pro, Galaxy S24 Ultra). Rendering WebGL at native 4K resolution forces the GPU to shade 8+ million pixels per frame, resulting in severe thermal throttling and battery drain.
- **The Rule**: Always clamp pixel ratio:
  ```typescript
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  ```
  This produces razor-sharp visuals on mobile screens while preserving 50% of the GPU bandwidth for 60–120 FPS rendering.

### Law 3: Strict Draw Call Budget (< 45 Draw Calls)
- **The Problem**: Every unique geometry or material switch generates a draw call between the CPU and GPU. Exceeding 60 draw calls drops frame rates on budget Android Mali/Adreno GPUs.
- **The Rule**:
  - Use **`InstancedMesh`** for repeating elements (highway streetlamps, guardrail segments, distant skyscrapers).
  - Share material instances (e.g., civilian cars share `glassMaterial`, `tireMaterial`, and `taillightMaterial`).
  - Total draw calls in scene must remain under 45.

### Law 4: Smart Volumetric Lighting (Additive Blending)
- **The Problem**: Giving 10 cars real-time Three.js `SpotLight` with shadows will immediately drop mobile frame rates to 15 FPS.
- **The Rule**:
  - Exactly **ONE** primary `DirectionalLight` (moonlight) casts real-time shadow within a 40-meter radius around the player car.
  - Vehicle headlights must use procedural volumetric cone meshes with custom alpha gradients and `THREE.AdditiveBlending`. They look photorealistic and cost almost 0% GPU time.

### Law 5: Touch Action Lockdown
- **The Problem**: In mobile browsers, swiping or fast double-tapping can trigger default browser behaviors: pull-to-refresh, address bar expansion, or page rubber-banding.
- **The Rule**:
  - The canvas and touch controls must have `touch-action: none` and `user-select: none`.
  - Touch event listeners must use `{ passive: false }` and `e.preventDefault()` where needed to ensure zero browser gesture interference.

### Law 6: Pure Procedural Audio Synthesis
- **The Problem**: External audio files (.mp3, .wav) take seconds to download, can fail on poor cellular networks, have trigger latency, and consume cellular data.
- **The Rule**: All sounds must be synthesized mathematically using the browser's native **Web Audio API**:
  - Engine: Dynamic pitch-scaled oscillators modulated by real-time RPM.
  - Nitrous: Band-pass filtered white noise buffer.
  - Police Siren: Dual-tone LFO with spatial stereo panning.
  - Tire Skid: Filtered white noise.
- Total external audio asset size must remain **0 KB**.

### Law 7: Safe-Area Notch Protection
- **The Problem**: Modern iPhones (13, 14, 15, 16) have notches or Dynamic Islands, and Android phones have camera punch-holes and curved screen corners.
- **The Rule**: All HUD elements, speedometers, touch pedals, and modal headers must use CSS safe-area insets:
  ```css
  padding-left: max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));
  padding-top: max(12px, env(safe-area-inset-top));
  padding-bottom: max(12px, env(safe-area-inset-bottom));
  ```

---

## 2. Technology & Coding Standards

### 2.1 TypeScript Conventions
- **Strict Mode**: `tsconfig.json` must have `"strict": true`, `"noUnusedLocals": true`, and `"noUnusedParameters": true`.
- **No `any`**: Explicitly type all variables, function arguments, and return types. Use union types for state machines (e.g. `type ChaseState = 'IDLE' | 'WARNING' | 'PURSUIT' | 'EVADED' | 'BUSTED'`).
- **Null Safety**: Check for null before accessing refs (e.g. `if (engineRef.current) ...`).

### 2.2 Component Architecture & State Separation
- **Decoupled Architecture**:
  - The **Three.js WebGL Engine** runs independently at the screen's refresh rate (60Hz/90Hz/120Hz).
  - The **React UI Layer** mounts on top as a pointer-events-transparent overlay.
  - State communication between Three.js and React must happen via throttled event callbacks (`onHUDUpdate`, `onNearMissAlert`, `onGameOver`), **never** by passing Three.js objects directly into React component state.

### 2.3 Mobile-First Design Principles
- **Landscape-First**: Racing games require wide horizontal vision for highway traffic foresight.
- **Orientation Lock**: Always mount `<RotatePhonePrompt />` to smoothly detect portrait orientation and guide the user to turn horizontal.
- **Multi-Touch Support**: Pointer events must support simultaneous inputs (e.g. holding throttle with right thumb while steering left and tapping NOS).

---

## 3. Offline & PWA Standards
- All static assets must be precached in `public/sw.js`.
- The Web App Manifest (`public/manifest.json`) must specify:
  - `"display": "standalone"`
  - `"orientation": "landscape"`
- Game must be fully tested and operational with Chrome/Safari DevTools set to **Network: Offline**.
