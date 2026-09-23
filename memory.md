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
| **Render Loop GC Vector Allocations (Rule #1 Violation)** | `new THREE.Vector3()` instantiated every frame in `PlayerCar.updateBounds()`, `TrafficManager.updateVehicleBounds()`, and `PoliceChase.updateCruiserBounds()`. | Replaced with pre-allocated scratch vectors (`scratchCenter`, `scratchBoundsCenter`) on instances, eliminating GC spikes. |
| **React State Thrashing from Render Loop** | `Engine.onHUDUpdate` dispatched on every render frame (60–120Hz), causing React DOM reconciliation thrashing. | Throttled HUD state updates to ~20Hz (`hudUpdateTimer >= 0.048s`), decoupling WebGL frame pacing from React UI. |
| **Empty Highway & Traffic Overlap Glitch** | Traffic cars only recycled when behind player (`z < playerZ - 35`). Driving slowly allowed traffic to escape forward forever; respawns could overlap. | Implemented bidirectional recycling (`z < playerZ - 35 || z > playerZ + 210`) with lane overlap collision checks (`Math.abs(other.z - candidateZ) < 24`). |
| **Camera 3000m Flight Glitch on Restart** | Camera position lagged far behind at high Z on game restart, causing disorienting 3000m warp animation. | Added `CameraManager.reset(carPos)` and called immediately in `Engine.resetRunState()`. |
| **Police PIT Maneuver Dead Code** | Police lateral ramming force was calculated and stored in an unused local variable without physical player response. | Added `onPoliceRam` callback and `PlayerCar.applyLateralImpulse(forceX)` for authentic impact physics. |
| **Audio Zombie Leaks on Crash / Stop** | Procedural engine drone, police sirens, and nitro noise nodes remained active on crash or menu exit. | Created `AudioManager.stopAllGameSounds()` and integrated into `stop()`, `finishRun()`, and `onGameOver`. |
| **Procedural White Noise GC & Nitro Audio Stutter** | Re-allocating audio buffers on every nitro press caused audio thread stutters and rapid tap clipping. | Implemented `cachedWhiteNoiseBuffer` and active timeout clearing (`nitroStopTimeout`). |
| **Permanent Weather Dimming in Day Mode** | Lightning strikes permanently dimmed ambient light when racing in daytime track mode. | Added `WeatherManager.setTrackMode()` and integrated into `Engine.setTrackEnvironment()`. |
| **WebGL GPU Resource Leaks on Re-mount** | Geometries and materials were not disposed of when the game unmounted or destroyed. | Implemented comprehensive `dispose()` across `RoadManager`, `TrafficManager`, `PoliceChase`, and `PlayerCar`. |
| **Crash Timeout Race Condition** | Rapid restart after crash could trigger a stale `finishRun` timeout on the newly started race. | Managed `finishRunTimeoutId` handle and cleared it on `stop()`, `resetRunState()`, and `destroy()`. |
| **Stuck Controls & Audio on Window Blur** | Switching tabs or app minimization left keys stuck in active state and audio running. | Added `blur` and `visibilitychange` listeners in `App.tsx` to release controls and pause audio. |
| **Volumetric Headlight Cone Obstruction ("Ghaak")** | Giant 26m `ConeGeometry` mesh directly in front of car obscured 50% of the forward view in 3rd person camera. | Completely removed floating cone geometry while retaining bright emissive lens glow; softened spotlights. Road ahead is 100% crystal clear. |
| **Solid Underglow Rectangular Decal** | Harsh 2.7m x 5.2m plane with 0.75 opacity looked like a bright solid red carpet on the road. | Replaced with feathered radial gradient canvas texture at 0.38 opacity for authentic soft ground neon. |
| **Blinding Road Glare & Mirror Reflections** | PBR roughness map had #080808 values and asphalt material had 0.4 envMapIntensity, reflecting all skyscraper windows like a mirror. | Changed asphalt to matte charcoal (roughness 0.90, envMapIntensity 0.12), eliminated mirror puddles, and reduced barrier glare. |
| **Traffic Car Invisibility & Left/Right Steer Collisions** | Vehicles blended with dark highway, trucks had zero taillights, and civilian taillights were dull dark boxes. | Added ultra-bright glowing red LED taillights (`0xff0033`) to ALL vehicles including dual clusters & markers on trucks. Added HUD Proximity Hazard Alert (`⚠️ TRAFFIC AHEAD - 25M`). |
| **Slow Game Launch / Multi-Screen Delay** | 3.0s forced splash timer + 3-step menu + 3.0s countdown meant 10–12s wait to play. | Reduced splash to 0.75s (instant tap-to-skip), added 1-tap "⚡ QUICK RACE" on title screen, and shortened countdown to 1.05s. |

---

## 4. Current State & Deliverables
 
1. **Production Build**: 100% Completed & Verified (`dist/` directory, gzip bundle size ~188 KB, 0 errors).
2. **Phase 10 Completed**:
   - Gyroscope & Tilt-to-Steer Mode with iOS permissions & deadzone calibration.
   - Dynamic Weather System (900 GPU rain streaks, procedural rain hiss & rolling thunder audio, lightning light surges, wet asphalt specular sheen, windshield droplets overlay).
   - Global Hall of Fame Leaderboards with driver callsign editor and persistent top records.
   - PWA WebAPK PNG icons generated (`icon-192.png`, `icon-512.png`).
3. **Production Deployment Ready**:
   - `vercel.json` configured for zero-config Vercel deployment with PWA headers.
   - `netlify.toml` configured for zero-config Netlify deployment with SPA rewrites.
4. **Documentation Complete**:
   - `PRD.md` — Product Requirement Document
   - `Architecture.md` — System Architecture & Technical Blueprint
   - `rules.md` — Development Rules & Coding Standards
   - `design.md` — UI Design System & Aesthetics
   - `task.md` — Complete Phased Roadmap (100% checked)
   - `memory.md` — Living Project Memory & State Tracker
