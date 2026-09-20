# VELOCITY X — Product Requirement Document (PRD)

> **Document Status**: Approved & Active  
> **Target Platforms**: Mobile-First (All Android & iOS Smartphones & Tablets)  
> **Game Type**: 3D Photorealistic WebGL Highway Racer & Police Pursuit  
> **Offline Support**: 100% Offline via Progressive Web App (PWA) Engine  

---

## 1. Executive Summary & Product Overview

**VELOCITY X** is a high-octane, photorealistic 3D highway pursuit mobile racing game engineered directly in the mobile browser using **Three.js (WebGL 2.0)**, **Physically Based Rendering (PBR)** materials, and **100% Procedural Web Audio API**. 

The game combines the high-speed traffic-weaving adrenaline of *Burnout* with the aggressive police pursuits of *Need for Speed: Most Wanted*, packaged into an ultra-lightweight web application (< 200 KB compressed) that launches in under 1 second and plays completely offline in **Airplane Mode**.

---

## 2. Core Goals & Success Metrics

| Goal | Target Metric | Technical Implementation |
| :--- | :--- | :--- |
| **"Makhan Ki Tarah" Smoothness** | **Locked 60–120 FPS** | Zero Garbage Collection in render loop, Object Pooling, Clamped DPR (1.75 max), Draw calls < 45. |
| **Instant Load Time** | **< 1.0 Second** | Procedural Web Audio (0 MB MP3s), Procedural Textures (0 external images), gzip bundle < 200 KB. |
| **100% Offline Playability** | **Airplane Mode Ready** | Cache-First Service Worker (`sw.js`) + Standalone Web App Manifest (`manifest.json`). |
| **Universal Mobile Compatibility** | **All Android & iOS Devices** | Responsive landscape layout, Touch Pointer Events, CSS Safe-Area Insets for iPhone Dynamic Island / Notches. |
| **Photorealistic Visual Quality** | **No Cartoon / No Low-Poly** | `MeshPhysicalMaterial` with metallic clearcoat, volumetric additive headlight beams, specular wet tarmac puddles. |

---

## 3. Target User Persona & Device Profiles

### 3.1 Primary Audience
- **Casual & Mid-Core Mobile Gamers**: Users who want instant high-adrenaline 3D racing without downloading 3GB-5GB files from Google Play Store or Apple App Store.
- **Commuters & Travelers**: Playing on trains, flights (Airplane Mode), or areas with spotty cellular connectivity.

### 3.2 Hardware Tier Compatibility
1. **Tier 1 (Budget Android Phones)**: MediaTek Helio / Snapdragon 600 series, 4GB RAM, Mali/Adreno GPUs.  
   *Target: Solid 60 FPS locked, temperature below 38°C.*
2. **Tier 2 (Mid-Range Android & Older iPhones)**: iPhone 11/12/13, Snapdragon 700/800 series.  
   *Target: 60 FPS locked with full volumetric lighting.*
3. **Tier 3 (Flagship Android & Pro iPhones)**: iPhone 14/15/16 Pro (120Hz ProMotion), Galaxy S22/S23/S24 (120Hz).  
   *Target: Silky-smooth 90–120 FPS.*

---

## 4. Detailed Core Features Specification

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE GAMEPLAY MATRIX                            │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Endless 4-Lane Highway Traffic with 4 Civilian Vehicle Classes      │
│ 2. Proximity Near-Miss Multiplier System (+150 PTS, Combos x2 to x8)   │
│ 3. Nitrous Oxide (NOS) Boost with High-Speed FOV Warp & Exhaust Fire   │
│ 4. Dynamic Police Pursuit AI (Interceptors, Flashing Strobes, PIT)     │
│ 5. Tactical Rearview Mirror with Live Pursuer Distance Readout         │
│ 6. Cyber Showroom Garage (3 Supercars, Clearcoat Paints, RGB Underglow)│
│ 7. Dual-Thumb Touch Controls with Physical Haptic Feedback             │
│ 8. Zero-Latency Procedural Audio Engine (Real-Time RPM Modulation)     │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Feature 1: Endless Highway Traffic & Physics
- **Highway Layout**: 4-lane infinite scrolling asphalt highway with guardrails, reflective lane dashes, and instanced cyberpunk skyline backdrop.
- **Civilian Traffic Classes**:
  1. 🚕 **City Taxi**: Agile yellow sedan cruising at 80–95 km/h.
  2. 🚗 **Executive Sports Coupe**: White aerodynamic commuter at 90–110 km/h.
  3. 🚙 **Dark Luxury SUV**: Tall, heavy vehicle creating visual obstruction at 85–100 km/h.
  4. 🚛 **Heavy Fuel Tanker Truck**: 18-wheeler chrome tanker taking up lane space, requiring precise lane changes to overtake.
- **Object Pooling**: Pool of 14 vehicles continuously recycled ahead of the player (+Z) to guarantee 0 memory allocations.

### 4.2 Feature 2: High-Speed Near-Miss Multipliers
- **Detection Criteria**:
  - Speed must exceed **115 km/h**.
  - Lateral clearance within **1.85 meters** of civilian vehicle.
  - Longitudinal overlap along Z axis.
- **Reward Mechanics**:
  - Triggers **`NEAR MISS! +150 PTS`**.
  - Awards instant bonus coins.
  - Increments Combo Streak: **`x2` → `x3` → `x5` → `x8`**.
  - 3.8-second decay timer: Weaving consecutively resets the timer and amplifies overall run score.

### 4.3 Feature 3: Nitrous Oxide (NOS) Rocket Propulsion
- **Activation**: Holding the glowing cyan/orange NOS button on the right thumb zone.
- **Effects**:
  - Top speed surges up to **295–320 km/h** with 65 km/h/s acceleration surge.
  - Camera FOV dynamically expands from **68° to 92°** creating extreme peripheral speed warp.
  - Dual titanium exhaust tips emit high-velocity electric blue/cyan flame particles.
  - NOS bar depletes over ~4.5 seconds; regenerates passively when cruising above 100 km/h.

### 4.4 Feature 4: High-Speed Police Chase & PIT Maneuvers
- **Trigger**: Reaching high speeds (> 180 km/h) or hitting a high combo streak.
- **Visual & Audio Alarm**:
  - Screen edges pulse with dynamic **Red & Blue 8 Hz flashing emergency strobes**.
  - Directional wailing siren audio sweeps from behind with stereo panning.
- **Pursuit AI Behavior**:
  - 2 Black & White Interceptor Cruisers equipped with steel bullbars spawn behind player.
  - Cruisers accelerate up to 280 km/h, flank the player's blind spots, and execute **PIT maneuvers** (ramming player's rear quarter-panel).
- **Outcomes**:
  - **EVADED**: Outrunning cruisers by > 75 meters for 4.5 seconds triggers **`🚨 POLICE EVADED! +1,000 BONUS COINS`**.
  - **BUSTED**: Being pinned against barriers or slowed below 22 km/h triggers the dramatic **`BUSTED!`** cinematic summary.

### 4.5 Feature 5: Cyber Garage & Supercar Customization
- **Vehicle Roster**:
  1. ⚡ **Apex Roadster**: Lightweight, 240 km/h top speed, hyper-agile 9.5 handling *(Default Unlocked)*.
  2. 🏎️ **Veloce GT Supercar**: Ultra-low aerodynamic wedge, 295 km/h top speed *(3,500 Coins)*.
  3. 🦾 **Titan V8 Muscle**: Heavy torque, 260 km/h, 9.5 armor rating against police rams *(5,000 Coins)*.
- **Paint Shop**: 6 Metallic Clearcoat finishes (Cyber Cyan, Midnight Obsidian, Crimson Flare, Liquid Gold, Toxic Lime, Ultraviolet).
- **RGB Neon Underglow**: 5 Underbody ground glow colors (Ice Blue, Neon Pink, Emerald, Solar Amber, Ghost Purple).
- **Persistence**: 100% saved in browser `localStorage`.

### 4.6 Feature 6: Mobile Ergonomics & Physical Haptics
- **Landscape Enforcement**: Dedicated orientation sensor overlay prompting portrait users to rotate for full widescreen cockpit visibility.
- **Dual-Thumb Layout**: Left thumb controls steering buttons; right thumb controls Gas, Brake, and NOS trigger.
- **Haptic Vibration Feedback**: Native `navigator.vibrate` calls for near-miss ticks, nitro rumble, and collision crunch on Android.
- **Safe-Area Protection**: Automatic padding for iPhone Dynamic Island and camera punch-holes.

---

## 5. Non-Functional Requirements

1. **Security**: Zero external script dependencies from third-party CDNs. Content Security Policy (CSP) compliant.
2. **Reliability**: Graceful fallback if Web Audio or Vibration APIs are unavailable on legacy browsers.
3. **Storage Footprint**: Under 1 MB total offline cache footprint in CacheStorage.
