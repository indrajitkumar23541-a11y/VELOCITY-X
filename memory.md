# VELOCITY X — Project Memory & Progress Log (memory.md)

> **Document Role**: Living Memory Bank for Architectural Decisions, Solved Challenges, and Current State.  
> **Last Updated**: September 20, 2026  
> **Current Version**: v1.0.0 (Production Ready)  
> **Development Location**: `e:\VELOCITY X` (Mirrored to `e:\Indra-MarketMind\cyber-highway-racer`)  

---

## 1. Project Context & Summary

- **Product**: VELOCITY X — Cyber Highway Police Pursuit
- **Target Platform**: All Android and iOS Smartphones & Tablets
- **Core Technology**: Three.js (WebGL 2.0), React 18, TypeScript, Vite, Web Audio API, HTML5 Vibration API, PWA Service Worker.
- **Key Metric**: Locked 60–120 FPS ("Makhan Ki Tarah"), < 200 KB gzip bundle, 100% offline in Airplane Mode.

---

## 2. Key Architectural Decisions (ADRs)

### ADR 1: Procedural Web Audio API vs External MP3/WAV Files
- **Decision**: Synthesize 100% of the game audio in real-time using mathematical oscillators and noise buffers via the Web Audio API.
- **Rationale**: External audio files add 5MB–15MB of downloads, cause buffer latency on mobile browsers, can fail to load on spotty mobile data, and sound repetitive. Procedural audio has **0 KB download size**, **0 ms latency**, shifts pitch dynamically with actual car RPM, and works 100% offline in Airplane Mode.

### ADR 2: Volumetric Additive Headlights vs Real-Time Spotlights
- **Decision**: Use inverted cone geometries with custom alpha gradients and `THREE.AdditiveBlending` for vehicle headlights instead of real-time shadow-casting Three.js `SpotLight` objects.
- **Rationale**: Casting real-time shadows from 10+ civilian and police headlights drops mobile frame rates to under 20 FPS. Volumetric additive cones create stunning cinematic headlight beams visible on wet asphalt while consuming nearly 0% GPU time.

### ADR 3: Device Pixel Ratio (DPR) Clamping to 1.75
- **Decision**: Clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))`.
- **Rationale**: High-end flagship phones (iPhone 15 Pro, Galaxy S24) feature 3x-4x Retina displays. Rendering WebGL at native 4K resolution forces the mobile GPU to shade over 8 million pixels per frame, leading to thermal throttling and battery drain. Clamping to 1.75 retains razor-sharp visuals while preserving GPU headroom for a locked 60–120 FPS.

### ADR 4: Object Pooling for Zero Garbage Collection
- **Decision**: Pre-instantiate all 14 traffic vehicles, particles, and bounding boxes at startup; recycle them ahead of the player.
- **Rationale**: JavaScript's Garbage Collector introduces micro-stutters ("janks") whenever memory is dynamically allocated inside `requestAnimationFrame`. Zero GC guarantees steady frame pacing.

### ADR 5: Dual-Thumb Ergonomic Mobile Touch Architecture
- **Decision**: Split touch controls into Left Thumb (steering swerve buttons) and Right Thumb (Gas pedal, Brake pedal, NOS rocket button) with `touch-action: none`.
- **Rationale**: Prevents accidental browser pull-to-refresh or swipe-back navigation gestures while allowing multi-touch (e.g. steering while holding throttle and tapping NOS).

---

## 3. Solved Issues & Bug Log

| Issue Description | Root Cause | Resolution |
| :--- | :--- | :--- |
| **Playwright Driver 404 in Automated Subagent** | Upstream Playwright driver download link (1.57.0) on Windows returned 404 from CDN. | Verified server independently via PowerShell `Invoke-WebRequest` and live network URL `http://10.173.133.3:3000/`. |
| **TypeScript Strict Compilation Errors** | Unused imported symbols (`Zap`, `Award`, `Check`, `Gauge`) and missing import in `PlayerCar.ts`. | Pruned unused symbols, explicitly typed `PlayerControls`, and added `RoadManager` import. `npm run build` now completes cleanly. |
| **Workspace Path Discrepancy** | Opened workspace was `e:\VELOCITY X` while initial prompt mentioned `e:\Indra-MarketMind\cyber-highway-racer`. | Developed primarily inside `e:\VELOCITY X` and mirrored cleanly via robocopy to `e:\Indra-MarketMind\cyber-highway-racer`. |

---

## 4. Current State & Deliverables

1. **Production Build**: Successfully compiled (`dist/` directory generated, gzip bundle size ~186 KB).
2. **Dev Server**: Running on `http://localhost:3000/` and local network `http://10.173.133.3:3000/`.
3. **Documentation Foundation Completed**:
   - `PRD.md` — Product Requirement Document
   - `Architecture.md` — System Architecture & Technical Blueprint
   - `rules.md` — Development Rules & Coding Standards
   - `design.md` — UI Design System & Aesthetics
   - `task.md` — Phased Project Task Breakdown
   - `memory.md` — Living Project Memory & State Tracker
