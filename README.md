# ⚡ VELOCITY X — Cyber Highway Police Pursuit

> **Next-Generation 3D WebGL Highway Racing & Police Pursuit Mobile Game**  
> Engineered with **Three.js (WebGL 2.0)**, PBR Clearcoats, Procedural Web Audio API, and 100% Offline PWA & Native Android Playability.  
> Locked **60–120 FPS ("Makhan Ki Tarah")** on All Android & iOS Devices.

[![Play Live Game](https://img.shields.io/badge/🎮_PLAY_LIVE_GAME-GitHub_Pages-00f3ff?style=for-the-badge&logo=google-chrome&logoColor=black)](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/)
[![Download Android APK](https://img.shields.io/badge/📱_DOWNLOAD-Android_APK-3ddc84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases)
[![Download Windows EXE](https://img.shields.io/badge/💻_DOWNLOAD-Windows_Setup-0078d4?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/indrajitkumar23541-a11y/VELOCITY-X/deploy.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/actions)
[![PWA Ready](https://img.shields.io/badge/⚡_PWA-100%25_Offline-ff007f?style=for-the-badge&logo=pwa&logoColor=white)](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/)

---

## 📲 Play on Every Device (Universal App)

| Platform | Recommended Method | How to Install |
| :--- | :--- | :--- |
| **Android (Phone / Tablet)** | **Direct APK (Native App)** | 1. Go to [Releases](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases)<br>2. Download **`VELOCITY-X.apk`** & tap **Install**<br>3. Open and play offline with full hardware acceleration! |
| **Windows (PC / Laptop)** | **Direct .EXE / Desktop App** | 1. Download **`VELOCITY-X-Setup.exe`** from [Releases](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases) & run setup<br>2. Or open in Edge/Chrome $\rightarrow$ Click **"Install App"** icon in URL bar |
| **iOS (iPhone / iPad)** | **Home Screen App (PWA)** | 1. Open [Live Game Link](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/) in Safari<br>2. Tap Share button (📤) $\rightarrow$ **"Add to Home Screen"**<br>3. Launches as full-screen standalone app with 0 URL bar! |
| **macOS (MacBook / iMac)** | **Dock App / Desktop** | 1. Open in Safari $\rightarrow$ File $\rightarrow$ **"Add to Dock"**<br>2. Or open in Chrome $\rightarrow$ Click **"Install VELOCITY X"** |

---

## 🏎️ Overview

**VELOCITY X** brings console-grade, high-octane 3D highway pursuit racing directly into the mobile browser and native Android app. Weave inches between dense civilian traffic at 300+ km/h, rack up electric near-miss multiplier streaks, escape aggressive police interceptor PIT maneuvers, and customize supercars in an interactive 3D showroom.

With a production bundle footprint of **under 250 KB (gzip)** and **zero external MP3/WAV assets**, the entire game launches in under 1 second and plays seamlessly in **Airplane Mode** without an active internet connection.

---

## 🌟 Complete Game Features

### 1. 🛣️ Highway Slalom Arranging & AI Flow
- **8-Wave Staggered Slalom**: 16 traffic vehicles are arranged across 8 progressive highway waves. Guarantees that at any distance, **at least 2 escape lanes remain wide open**, preventing unavoidable "walls of death".
- **Anti-Clipping Distance Pacing AI**: Civilian vehicles continuously detect cars ahead within a 32m buffer. If closing in on a slower vehicle, they automatically brake and match speed, completely eliminating visual mesh overlapping and clipping bugs.
- **Autonomous Civilian Lane Merging**: Civilian cars dynamically check adjacent lanes and safely merge with realistic smooth steering yaw roll (`rotation.y`), giving the highway a vibrant, living traffic flow.
- **Highway Speed Hierarchy**:
  - **Lane 0 (Slow / Heavy freight)**: Heavy trucks & delivery vans cruise at 76–86 km/h.
  - **Lane 1 (Commercial delivery)**: Delivery vans & economy sedans cruise at 84–95 km/h.
  - **Lane 2 (Cruising lane)**: Sedans & SUVs cruise at 95–108 km/h.
  - **Lane 3 (Fast passing lane)**: High-speed sports sedans & SUVs cruise at 106–122 km/h.

---

### 2. 🚐 Authentic 3D Traffic Models & Delivery Fleet
Every traffic vehicle is modeled with realistic procedural 3D geometries, authentic lighting, alloy wheels, and bumpers:
- **Commercial Cargo Delivery Vans (Sprinter / Transit Style)**:
  - Tall aerodynamic cargo box, sloped nose/hood, tinted windshield and side cabin glass.
  - Front commercial grille, composite bumper, and dual white LED headlights.
  - Side sliding cargo door seams and protective rub strips.
  - Rear dual cargo doors, rear step bumper, and **signature tall vertical red LED taillights**.
  - **4 Multi-Color Fleet Liveries**:
    1. ⚪ **Polar Fleet White** (`#f8fafc`) — Standard Delivery Fleet
    2. 🟡 **Express Courier Amber/Yellow** (`#f59e0b`) — DHL Express Style
    3. 🔵 **Logistics Deep Navy Blue** (`#1d4ed8`) — Amazon Prime / Logistics Style
    4. 🔘 **Executive Metallic Silver** (`#94a3b8`) — Corporate Cargo Style
- **Luxury Modern Sports SUVs (Range Rover / Cayenne Style)**:
  - Muscular high-stance chassis, dual chrome roof rails, front projector LED headlights, lower silver skid plate, rear roof spoiler, and a **continuous full-width rear LED lightbar**.
- **Executive Highway Sports Sedans (BMW / Audi Style)**:
  - Low-slung 3-box aerodynamic body, fastback rear window glass, front air splitter, sharp dual-intake grille, and **signature L-shaped LED taillights** with dual chrome exhaust tips.
- **Commercial Freight Box Semi Trucks (18-Wheeler Style)**:
  - Heavy tractor sleeper cab, aerodynamic roof deflector fairing, twin towering vertical chrome exhaust stacks, heavy corrugated cargo container box, steel underride crash bar, and **10 commercial heavy-duty wheels with alloy rims**.

---

### 3. 🎥 Rock-Solid Cinematic Camera (Zero Jitter)
- **Rigid Z-Chase Tracking**: The chase camera rigidly locks its Z-following distance to the player's car, completely eliminating the delta-timing micro-stutters and forward/backward shaking ("kampta hai car") experienced on mobile screens.
- **Dynamic Speed FOV**: Fluid field-of-view expansion (64° to 76°, up to 82° on Nitrous) provides high-speed peripheral tunnel-vision without nausea or camera vibration.
- **Subtle Steering Lean**: Graceful lateral camera damping smoothly leans into sharp lane transitions.
- **Event-Driven Impact Shake**: Screen shake is strictly reserved for high-speed crashes and near-miss shockwaves, leaving normal high-speed cruising buttery-smooth.

---

### 4. ✨ Luxury Clearcoat Paint & Midnight City Atmosphere
- **Automotive Clearcoat Sheen**: Calibrated PBR Metallic Physical materials with clearcoat roughness (`0.22`), completely eliminating the harsh strobe reflections ("DJ light / bhak-bhak flashing").
- **Architectural Horizon Skyline**: Replaced saturated neon stripes with realistic midnight twilight gradients, towering skyscraper silhouettes, warm office window illumination, distant sweeping searchlights, and red aviation rooftop warning beacons.

---

### 5. 🚨 Aggressive Police Chase & PIT Maneuvers
- **Aggressive Interceptor AI**: State police cruisers spawn behind the player, flank blind spots, and execute **PIT maneuvers** (ramming your rear quarter-panel) with real physical lateral momentum.
- **High-Frequency Emergency Strobes**: Alternating high-intensity red and blue roof beacons cast flashing ground illumination with pulsating screen-edge vignette alerts.
- **Pursuit Outcomes**:
  - **`🚨 POLICE EVADED!`**: Outrun cruisers by > 75 meters to earn a **+1,000 Coin Bonus**.
  - **`BUSTED!`**: Getting boxed in or pinned against highway barriers triggers the cinematic capture sequence.

---

### 6. 🪞 Tactical Rearview Mirror & Danger Proximity HUD
- **Real-Time Rearview Mirror**: Embedded wide-angle digital mirror displaying trailing vehicles and flashing police cruisers approaching from behind.
- **Proximity Danger Warning**: Real-time HUD alert showing the exact distance (in meters) to the closest car ahead with directional steer indicators:
  - `TRAFFIC AHEAD (28m) — STEER LEFT`
  - `TRAFFIC AHEAD (16m) — STEER RIGHT`

---

### 7. 🔊 100% Procedural Web Audio API (0 MB Downloads)
- **Dynamic Engine Roar**: Multi-oscillator synthesis (Sawtooth + Triangle + Square sub-bass) pitch-modulated in real-time by engine RPM (800 to 8,500 RPM) with throttle-tracking LowPass filtering.
- **Nitrous Whoosh & Blow-off**: Band-pass filtered white noise with turbo blow-off valve release (`pshhhh`).
- **Police Siren**: Dual alternating frequency LFO oscillator (480 Hz – 1120 Hz) with spatial stereo panning.
- **Tire Skids & Metal Crunch**: Real-time synthesized skid friction and deep bass collision impacts.
- **Clean Audio Lifecycle**: All oscillators and audio nodes are cleanly disposed on game over, pause, and window blur to prevent persistent background sound leaks.

---

### 8. 📱 Mobile Ergonomics & Physical Haptics
- **Dual-Thumb Touch Controls**:
  - **Left Thumb**: Ultra-responsive Left & Right steering buttons.
  - **Right Thumb**: Gas Pedal, Brake/Reverse Pedal, and glowing NOS trigger button.
- **Device Tilt Steering (Gyroscope)**: Optional accelerometer/gyroscope mode allowing you to steer your supercar by physically tilting your phone.
- **Hardware Haptic Rumble**: Android `navigator.vibrate` calls for near-miss ticks, nitro rumble, and police collision impacts.
- **Safe-Area Protection**: CSS `env(safe-area-inset-*)` ensures speedometer and pedals never get clipped by iPhone Dynamic Island or camera punch-holes.
- **Landscape Enforcement**: Dedicated orientation sensor overlay prompts players to rotate to landscape if opened in portrait mode.

---

### 9. 🏎️ Cyber Garage Showroom
- **3 Distinct Supercars**:
  - ⚡ **Apex Roadster**: Lightweight, 240 km/h top speed, hyper-agile 9.5 handling *(Default)*.
  - 🏎️ **Veloce GT Supercar**: Ultra-low aerodynamic wedge, 295 km/h top speed *(3,500 Coins)*.
  - 🦾 **Titan V8 Muscle**: Heavy torque, 260 km/h, 9.5 armor rating against police rams *(5,000 Coins)*.
- **Metallic Clearcoat Paint Shop**: Cyber Cyan, Midnight Obsidian, Crimson Flare, Liquid Gold, Toxic Lime, Ultraviolet.
- **RGB Neon Underglow**: Ice Blue, Neon Pink, Emerald, Solar Amber, Ghost Purple.

---

### 10. 🔄 Over-The-Air (OTA) Cloud Auto-Update Engine
- **Instant Version Detection**: Built-in `UpdateManager` polls `version.json` with `cache: 'no-store'`, immediately detecting new releases whenever you launch the game or reconnect.
- **Seamless 1-Tap Update**: An in-game notification displays a 4-second countdown toast with an instant "RESTART" action to switch to the latest version without manually clearing cache or reinstalling.
- **Race-Safe**: Update reloads are deferred while driving so ongoing police pursuits are never interrupted.

---

## ⚡ The "Makhan Ki Tarah" 60–120 FPS Architecture

To ensure silky-smooth performance across budget Androids and flagship iPhones:
1. **Zero Garbage Collection (GC) in Render Loop**: All 16 traffic vehicles, particles, bounding boxes, and scratch vectors are pre-pooled at startup. Zero `new` allocations inside `requestAnimationFrame`.
2. **DPR Clamping**: Pixel ratio is clamped to `Math.min(window.devicePixelRatio, 1.75)` to prevent 4K retina GPU overheating.
3. **Throttled React HUD**: High-frequency telemetry updates the 3D WebGL scene at native 60–120 FPS while React state dispatch is throttled to ~20 Hz, preventing React component thrashing.
4. **Draw Call Minimization**: Highway barriers, dashed markings, and city skyscrapers utilize instancing and shared materials (< 45 total draw calls).
5. **Clean GPU Disposal**: Every texture, geometry, and material implements strict `.dispose()` to ensure zero WebGL memory leaks across race restarts.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/indrajitkumar23541-a11y/VELOCITY-X.git

# Navigate into the project folder
cd VELOCITY-X

# Install dependencies
npm install

# Start the Vite development server (accessible via localhost & mobile WiFi)
npm run dev
```

Open your browser at `http://localhost:3000/` (or scan your local network IP on mobile).

### Production Build
```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

### Android APK Build
```bash
# Sync web build to native Android assets
npm run build
cp -r dist/* android/app/src/main/assets/public/

# Build native debug APK
cd android
./gradlew assembleDebug
```
Output APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 📂 Project Architecture

```
VELOCITY-X/
├── android/                       # Capacitor Native Android Studio Project
│   ├── app/                       # Android App Module & Build Configurations
│   │   ├── build.gradle           # Android application build configuration
│   │   └── src/main/assets/public # Bundled game assets for 100% offline play
│   ├── build.gradle               # Project-level Gradle build configuration
│   └── variables.gradle           # SDK & dependency version definitions
├── public/
│   ├── manifest.json              # Standalone Mobile PWA Manifest (Landscape locked)
│   ├── sw.js                      # Cache-First Service Worker for 100% offline play
│   ├── version.json               # Cloud version manifest for OTA updates
│   ├── favicon.svg                # Scalable high-res vector icon
│   └── icons/                     # PWA launcher icons (192x192, 512x512)
├── src/
│   ├── game/
│   │   ├── Engine.ts              # WebGL 2.0 coordinator, tick loop, adaptive DPR
│   │   ├── CameraManager.ts       # 3rd-person chase camera with zero-jitter tracking
│   │   ├── PlayerCar.ts           # Realistic PBR sports car with suspension & exhaust
│   │   ├── TrafficManager.ts      # 16-vehicle pooled AI (Vans, SUVs, Sedans, Trucks)
│   │   ├── PoliceChase.ts         # Cruiser AI, siren strobes, aggressive PIT maneuvers
│   │   ├── RoadManager.ts         # Infinite highway, asphalt grain, puddles, streetlights
│   │   ├── AudioManager.ts        # Pure Web Audio API procedural sound engine
│   │   ├── HapticsManager.ts      # Android vibration patterns & touch feedback
│   │   ├── ParticleSystem.ts      # Nitro flames, tire smoke, collision sparks
│   │   ├── TiltManager.ts         # Mobile device orientation (gyroscope) steering
│   │   ├── UpdateManager.ts       # Real-time OTA cloud update detector
│   │   └── Storage.ts             # Offline persistence (coins, unlocks, high scores)
│   ├── components/
│   │   ├── MobileHUD.tsx          # Speedometer, gear, nitro meter, proximity warning
│   │   ├── MobileControls.tsx     # Low-latency touch pedals, steering buttons & nitro trigger
│   │   ├── RearviewMirror.tsx     # Tactical rearview mirror with approaching police
│   │   ├── GarageModal.tsx        # Mobile 3D car showroom, paint & underglow customizer
│   │   ├── RotatePhonePrompt.tsx  # Sleek overlay prompting landscape rotation
│   │   ├── GameOverModal.tsx      # Crash / Busted summary with instant restart
│   │   └── UpdateNotification.tsx # Animated OTA update toast with countdown
│   ├── App.tsx                    # Game state coordinator (Menu, Garage, Racing)
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Mobile-first CSS, notch safe-areas, cyber glassmorphism
├── .github/workflows/
│   └── deploy.yml                 # Automated Web Deploy (GitHub Pages) & Android APK Build
├── PRD.md                         # Product Requirement Document
├── Architecture.md                # System Architecture & Technical Blueprint
├── rules.md                       # Development Rules & Coding Standards
└── walkthrough.md                 # Solved Issues & Bug Elimination Log
```

---

## 📜 License

MIT License © 2026 VELOCITY X Team.
