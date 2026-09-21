# VELOCITY X — Project Task Roadmap & Milestones (task.md)

> **Project Goal**: High-Octane 3D WebGL Highway Pursuit Mobile Game (Android & iOS)  
> **Target Refresh Rate**: 60–120 FPS ("Makhan Ki Tarah")  
> **Status Legend**:  
> - `[x]` Completed & Verified  
> - `[/]` In Progress / Active  
> - `[ ]` Planned / Next Milestone  

---

## Phase 1: Project Scaffolding & Foundation Setup

- [x] **1.1 Project Structure**: Initialize Vite + React 18 + TypeScript in `e:\VELOCITY X`.
- [x] **1.2 Dependencies Setup**: Install Three.js (`three`, `@types/three`), Lucide-React icons, and Vite React plugin.
- [x] **1.3 PWA Configuration**: Create `public/manifest.json` with standalone and landscape orientation settings.
- [x] **1.4 Service Worker**: Create `public/sw.js` with Cache-First strategy for 100% offline play.
- [x] **1.5 Mobile Viewport**: Configure `index.html` with viewport-fit=cover, apple-touch meta, and Orbitron/Rajdhani typography.
- [x] **1.6 Vector Icons**: Generate high-res PWA launcher icons (`icon-192.svg`, `icon-512.svg`, `favicon.svg`).

---

## Phase 2: WebGL 2.0 Core Engine & Infinite Highway

- [x] **2.1 Renderer Setup**: Configure Three.js WebGLRenderer with `antialias: true`, ACESFilmicToneMapping, and clamped DPR (`Math.min(DPR, 1.75)`).
- [x] **2.2 Infinite Road System**: Implement `RoadManager.ts` with 4 distinct lanes (-5.4m, -1.8m, 1.8m, 5.4m).
- [x] **2.3 Procedural Asphalt Texture**: Generate procedural micro-grain asphalt canvas texture with specular wet puddle sheens.
- [x] **2.4 Roadside Props**: Add outer guardrails with reflectors, roadside street light poles, and dashed lane markings.
- [x] **2.5 Cityscape Parallax**: Add instanced distant cyberpunk skyscrapers for high-speed parallax depth.
- [x] **2.6 Dynamic Lighting**: Directional moonlight with tight shadow frustum tightly following player car.

---

## Phase 3: Photorealistic PBR Supercar & Vehicle Physics

- [x] **3.1 Procedural Sports Chassis**: Construct aerodynamic wedge body with sculpted hood, cabin, front splitter, and rear diffuser in `PlayerCar.ts`.
- [x] **3.2 PBR Automotive Paint**: Implement `MeshPhysicalMaterial` with metallic flake, clearcoat reflectivity, and specular roughness.
- [x] **3.3 Detailed Wheels & Calipers**: 4 detailed wheels with black rubber tires, alloy spoke rims, and glowing red brake calipers that steer in real-time.
- [x] **3.4 Volumetric Headlights**: Twin white projector headlights casting active volumetric light beams with additive blending.
- [x] **3.5 Taillights & Exhaust**: Full-width glowing red LED taillight bar (intensifies under braking) and dual titanium exhaust tips.
- [x] **3.6 Driving Physics**: Acceleration, top speed, braking deceleration, steering inertia, simulated RPM (800–8500), and automated 6-speed transmission.
- [x] **3.7 Nitrous Oxide Injection**: Rocket propulsion surging speed up to 295–320 km/h with high-speed exhaust fire particle emitters.

---

## Phase 4: Highway Traffic Simulation & Near-Miss System

- [x] **4.1 Civilian Vehicle Models**: Implement `TrafficManager.ts` with 4 distinct classes:
  - Yellow City Taxi (with roof sign)
  - White Sports Coupe
  - Dark Luxury Executive SUV
  - Heavy 18-Wheeler Fuel Tanker Truck
- [x] **4.2 Zero-Allocation Object Pooling**: Pre-instantiate pool of 14 civilian vehicles and smoothly recycle them ahead of the player along +Z.
- [x] **4.3 High-Speed Near-Miss Detection**:
  - Check speed > 115 km/h, lateral clearance < 1.85m, and Z-axis overlap.
  - Trigger `NEAR MISS! +150 PTS` alert and award bonus score/coins.
- [x] **4.4 Combo Multiplier Chain**: Consecutive near-misses build combo streak `x2` → `x3` → `x5` → `x8` with 3.8s decay timer.
- [x] **4.5 Collision System**: Tight bounding-box intersection detection triggering crash sequence.

---

## Phase 5: High-Speed Police Chase AI & PIT Maneuvers

- [x] **5.1 Police Interceptor Models**: Black & White cruisers with steel push bumpers (bullbars) and roof-mounted dual lightbar in `PoliceChase.ts`.
- [x] **5.2 Dual Red & Blue Strobes**: 8 Hz alternating high-frequency point lights and emissive strobe caps.
- [x] **5.3 Pursuit AI State Machine**:
  - `IDLE`: Normal traffic flow.
  - `PURSUIT`: Cruisers accelerate to 280 km/h from rear, flank player, and execute aggressive PIT maneuvers (ramming rear quarter-panel).
  - `EVADED`: Leaving cruisers > 75m behind triggers celebration bonus (+1,000 coins).
  - `BUSTED`: Being pinned or slowed < 22 km/h triggers busted cinematic summary.
- [x] **5.4 Screen-Edge Strobe Vignette**: Pulsing red & blue screen-edge vignette during active pursuits.

---

## Phase 6: Procedural Web Audio API & Mobile Haptics

- [x] **6.1 Zero-Asset Audio Engine**: Implement `AudioManager.ts` using 100% native Web Audio API (0 MB MP3s).
- [x] **6.2 Dynamic Engine Roar**: RPM-modulated multi-oscillator synthesis (Sawtooth + Triangle + Square sub-bass) with throttle-tracking LowPass filter.
- [x] **6.3 Nitrous Whoosh**: Band-pass filtered white noise with blow-off valve release hiss (`pshhhh`).
- [x] **6.4 Police Siren**: Dual-tone wailing siren with LFO modulation and spatial stereo panning based on cruiser location.
- [x] **6.5 Tire Skid & Crash SFX**: Frequency-swept tire screech noise and deep impact crunch.
- [x] **6.6 Physical Haptics**: Implement `HapticsManager.ts` with vibration patterns for Android devices (`navigator.vibrate`).

---

## Phase 7: Mobile Touch Controls & Cockpit HUD

- [x] **7.1 Dual-Thumb Ergonomic Pedals**: Implement `MobileControls.tsx`:
  - Left Thumb: Left & Right steering buttons with active tactile feedback.
  - Right Thumb: Gas Pedal, Brake Pedal, and glowing NOS Boost trigger bottle.
  - Multi-touch enabled (`touch-action: none`).
- [x] **7.2 Cockpit Speedometer**: Analog SVG radial arc + digital KM/H readout, gear badge (1–6), and RPM redline bar in `MobileHUD.tsx`.
- [x] **7.3 Nitrous Level Gauge**: Cyan glowing energy tube displaying 0–100% NOS reserve.
- [x] **7.4 Tactical Rearview Mirror**: Top-center mirror showing pursuing police cruisers, strobe reflections, and distance meter in `RearviewMirror.tsx`.
- [x] **7.5 Near-Miss & Evaded Alerts**: Floating popups with animated bounce.
- [x] **7.6 Landscape Orientation Prompt**: Overlay prompting horizontal rotation if held in portrait (`RotatePhonePrompt.tsx`).

---

## Phase 8: 3D Garage Showroom & Customization

- [x] **8.1 Car Showroom**: Implement `GarageModal.tsx` with 3 supercars (Apex Roadster, Veloce GT, Titan V8 Muscle).
- [x] **8.2 Car Telemetry & Specs**: Top Speed, Acceleration bar, Handling bar, and Armor against police rams.
- [x] **8.3 Metallic Paint Shop**: 6 custom clearcoat colors (Cyber Cyan, Midnight Obsidian, Crimson Flare, Liquid Gold, Toxic Lime, Ultraviolet).
- [x] **8.4 RGB Neon Underglow**: 5 glowing underbody colors with ground projection decal.
- [x] **8.5 Coin Economy & Unlocks**: In-game currency system saved in `localStorage`.

---

## Phase 9: PWA Offline Engine & Persistence

- [x] **9.1 Offline Service Worker**: Cache-First caching strategy verified.
- [x] **9.2 Airplane Mode Readiness**: Operates 100% offline with zero external network dependencies.
- [x] **9.3 Game Over Summary**: Busted / Crashed modal with distance, near-misses, rewards, and retry in `GameOverModal.tsx`.
- [x] **9.4 PWA Install Button**: Native "Add to Home Screen" one-tap install banner in `InstallPrompt.tsx`.

---

## Phase 10: Performance Profiling & Future Enhancements

- [x] **10.1 Production Build Optimization**: Compiled clean bundle (< 186 KB gzip) with zero TypeScript errors.
- [x] **10.2 Dev Server Verification**: Verified HTTP 200 OK on localhost:3000 and network IP.
- [x] **10.3 Gyroscope / Tilt Steering Mode**:
  - Implemented `TiltManager.ts` with auto-detection of Landscape 90° vs 270° angles.
  - Added iOS `DeviceOrientationEvent.requestPermission()` handling.
  - Added baseline angle re-centering / calibration and ±2.0° deadzone filter.
  - Added analog `steerAxis` support in `PlayerCar.ts` and `Engine.ts`.
  - Added Cyberpunk Artificial Horizon Gauge in `MobileControls.tsx` and status chip in `MobileHUD.tsx`.
  - Added quick control mode toggle in Menu screen and top header bar.
- [x] **10.4 Dynamic Weather System**:
  - Implemented `RainSystem.ts` with 900 GPU-instanced vertical falling rain streaks.
  - Implemented `WeatherManager.ts` managing Clear Night vs Cyber Rainstorm modes.
  - Added procedural lightning flashes that surge scene lighting to 3.6x.
  - Synthesized procedural rain hiss and rolling thunder in `AudioManager.ts` (Web Audio API).
  - Implemented `RainScreenOverlay.tsx` with animated windshield condensation droplets.
  - Added wet asphalt mirror reflections in `RoadManager.ts`.
- [x] **10.5 Global Online Leaderboards & Hall of Fame**:
  - Implemented `LeaderboardModal.tsx` displaying Top 10 world records with Gold/Silver/Bronze badges.
  - Integrated driver callsign profile customization with real-time editing.
  - Connected race finish recording in `Engine.ts` and `Storage.ts`.
- [x] **10.6 Production Deployment & Hosting Setup**:
  - Created `vercel.json` with SPA routing and immutable PWA cache-control headers.
  - Created `netlify.toml` with build commands and redirect rules.
  - Generated high-res PNG icons (`icon-192.png`, `icon-512.png`) for official Chrome WebAPK PWA installation.
