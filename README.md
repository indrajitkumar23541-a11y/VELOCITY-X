# ⚡ VELOCITY X — Cyber Highway Police Pursuit

> **Next-Generation 3D WebGL Highway Racing & Police Pursuit Mobile Engine**  
> Engineered with **Three.js (WebGL 2.0)**, PBR Clearcoats, Procedural Web Audio API, and 100% Offline PWA Playability.  
> Locked **60–120 FPS ("Makhan Ki Tarah")** on All Android & iOS Devices.

[![Play Live Game](https://img.shields.io/badge/🎮_PLAY_LIVE_GAME-GitHub_Pages-00f3ff?style=for-the-badge&logo=google-chrome&logoColor=black)](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/)
[![Download Android APK](https://img.shields.io/badge/📱_DOWNLOAD-Android_APK-3ddc84?style=for-the-badge&logo=android&logoColor=white)](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/indrajitkumar23541-a11y/VELOCITY-X/deploy.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/actions)

---

## 📲 Quick Play on Phone (No App Store Needed!)

| Platform | Recommended Method | How to Install |
| :--- | :--- | :--- |
| **Android** | **Direct APK (Native App)** | 1. Go to [Releases](https://github.com/indrajitkumar23541-a11y/VELOCITY-X/releases)<br>2. Download **`VELOCITY-X.apk`** & tap **Install**<br>3. Open and play like Temple Run / Asphalt offline! |
| **Android** | **Web Instant Install (PWA)** | 1. Open [Live Game Link](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/) in Chrome<br>2. Tap **"Install App"** / 3 dots $\rightarrow$ **"Install App"** |
| **iOS (iPhone / iPad)** | **Home Screen App (PWA)** | 1. Open [Live Game Link](https://indrajitkumar23541-a11y.github.io/VELOCITY-X/) in Safari<br>2. Tap Share button (📤) $\rightarrow$ **"Add to Home Screen"**<br>3. Launches as full-screen standalone app with 0 URL bar! |

---

## 🏎️ Overview

**VELOCITY X** brings console-grade, high-octane 3D highway pursuit racing directly into the mobile browser. Weave inches between dense civilian traffic at 300+ km/h, rack up electric near-miss multiplier streaks, escape aggressive police interceptor PIT maneuvers, and customize supercars in an interactive 3D showroom.

With a production bundle footprint of **under 200 KB (gzip)** and **zero external MP3/WAV assets**, the entire game launches in under 1 second and plays seamlessly in **Airplane Mode** without an active internet connection.

---

## 🌟 Key Features

### 1. 🛣️ Endless 4-Lane Highway & Near-Miss Combos
- **4 Civilian Traffic Classes**: Yellow City Taxis, Aerodynamic Sports Sedans, Dark Luxury SUVs, and heavy 18-Wheeler Fuel Tanker Trucks.
- **Near-Miss Mechanics**: Weaving past traffic within inches at speeds > 115 km/h triggers **`NEAR MISS! +150 PTS`**.
- **Multiplier Streaks**: Chain consecutive near-misses before the 3.8s decay timer expires to build **`x2` → `x3` → `x5` → `x8`** score and coin multipliers.
- **Nitrous Oxide (NOS)**: Hold the NOS trigger to inject rocket boost, surging speeds up to **295–320 km/h** with dynamic camera FOV warp (68° to 92°) and dual exhaust flame particles.

### 2. 🚨 High-Speed Police Chase & PIT Maneuvers
- **Aggressive Interceptor AI**: High-speed cruisers spawn behind the player, flank blind spots, and execute **PIT maneuvers** (ramming your rear quarter-panel).
- **8 Hz Dual Strobes**: Alternating high-frequency Red & Blue roof emergency strobes and screen-edge vignette pulses.
- **Outcomes**:
  - **`🚨 POLICE EVADED!`**: Outrun cruisers by > 75 meters to earn a **+1,000 Coin Bonus**.
  - **`BUSTED!`**: Getting boxed in or pinned against highway barriers triggers the cinematic summary.

### 3. 🔊 100% Procedural Web Audio API (0 MB Downloads)
- **Dynamic Engine Roar**: Multi-oscillator synthesis (Sawtooth + Triangle + Square sub-bass) pitch-modulated in real-time by engine RPM (800 to 8,500 RPM) with throttle-tracking LowPass filtering.
- **Nitrous Whoosh & Blow-off**: Band-pass filtered white noise with turbo blow-off valve release (`pshhhh`).
- **Police Siren**: Dual alternating frequency LFO oscillator (480 Hz – 1120 Hz) with spatial stereo panning.
- **Tire Skids & Metal Crunch**: Real-time synthesized skid friction and deep bass collision impacts.

### 4. 📱 Mobile Ergonomics & Physical Haptics
- **Dual-Thumb Touch Controls**:
  - **Left Thumb**: Ultra-responsive Left & Right steering buttons.
  - **Right Thumb**: Gas Pedal, Brake/Reverse Pedal, and glowing NOS trigger button.
- **Hardware Haptic Rumble**: Android `navigator.vibrate` calls for near-miss ticks, nitro rumble, and police collision impacts.
- **Safe-Area Protection**: CSS `env(safe-area-inset-*)` ensures speedometer and pedals never get clipped by iPhone Dynamic Island or camera punch-holes.
- **Landscape Enforcement**: Dedicated orientation sensor overlay prompts players to rotate to landscape if opened in portrait mode.

### 5. 🏎️ Cyber Garage Showroom
- **3 Distinct Supercars**:
  - ⚡ **Apex Roadster**: Lightweight, 240 km/h top speed, hyper-agile 9.5 handling *(Default)*.
  - 🏎️ **Veloce GT Supercar**: Ultra-low aerodynamic wedge, 295 km/h top speed *(3,500 Coins)*.
  - 🦾 **Titan V8 Muscle**: Heavy torque, 260 km/h, 9.5 armor rating against police rams *(5,000 Coins)*.
- **Metallic Clearcoat Paint Shop**: Cyber Cyan, Midnight Obsidian, Crimson Flare, Liquid Gold, Toxic Lime, Ultraviolet.
- **RGB Neon Underglow**: Ice Blue, Neon Pink, Emerald, Solar Amber, Ghost Purple.

---

## ⚡ The "Makhan Ki Tarah" 60–120 FPS Architecture

To ensure silky-smooth performance across budget Androids and flagship iPhones:
1. **Zero Garbage Collection (GC)**: All 14 traffic vehicles, particles, bounding boxes, and vectors are pre-pooled at startup. Zero `new` allocations inside `requestAnimationFrame`.
2. **DPR Clamping**: Pixel ratio is clamped to `Math.min(window.devicePixelRatio, 1.75)` to prevent 4K retina GPU overheating.
3. **Volumetric Additive Cones**: Headlight beams use inverted cone geometries with additive blending instead of 10+ real-time shadow spotlights.
4. **Draw Call Minimization**: Highway barriers, dashed markings, and city skyscrapers utilize `InstancedMesh` (< 45 total draw calls).

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

---

## 📂 Project Architecture

```
VELOCITY-X/
├── public/
│   ├── manifest.json              # Standalone Mobile PWA Manifest (Landscape locked)
│   ├── sw.js                      # Cache-First Service Worker for 100% offline play
│   ├── favicon.svg                # Scalable high-res vector icon
│   └── icons/                     # PWA launcher icons (192x192, 512x512)
├── src/
│   ├── game/
│   │   ├── Engine.ts              # WebGL 2.0 coordinator, tick loop, adaptive DPR
│   │   ├── CameraManager.ts       # 3rd-person chase camera with dynamic speed FOV
│   │   ├── PlayerCar.ts           # Realistic PBR sports car with suspension & exhaust
│   │   ├── TrafficManager.ts      # Object-pooled civilian vehicles (SUV, Sedan, Truck, Taxi)
│   │   ├── PoliceChase.ts         # Cruiser AI, siren strobes, aggressive PIT maneuvers
│   │   ├── RoadManager.ts         # Infinite highway, asphalt grain, puddles, streetlights
│   │   ├── AudioManager.ts        # Pure Web Audio API procedural sound engine
│   │   ├── HapticsManager.ts      # Android vibration patterns & touch feedback
│   │   ├── ParticleSystem.ts      # Nitro flames, tire smoke, collision sparks
│   │   └── Storage.ts             # Offline persistence (coins, unlocks, high scores)
│   ├── components/
│   │   ├── MobileHUD.tsx          # Mobile speedometer, gear, nitro meter & near-miss badges
│   │   ├── MobileControls.tsx     # Low-latency touch pedals, steering buttons & nitro trigger
│   │   ├── RearviewMirror.tsx     # Tactical rearview mirror with approaching police
│   │   ├── GarageModal.tsx        # Mobile 3D car showroom & paint customizer
│   │   ├── RotatePhonePrompt.tsx  # Sleek overlay prompting landscape rotation
│   │   ├── GameOverModal.tsx      # Crash / Busted summary with instant restart
│   │   └── InstallPrompt.tsx      # "Add to Home Screen" one-tap install banner
│   ├── App.tsx                    # Game state coordinator (Menu, Garage, Racing)
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Mobile-first CSS, notch safe-areas, cyber glassmorphism
├── PRD.md                         # Product Requirement Document
├── Architecture.md                # System Architecture & Technical Blueprint
├── rules.md                       # Development Rules & Coding Standards
├── design.md                      # UI Design System & Aesthetics
├── task.md                        # Phased Project Task Breakdown
└── memory.md                      # Living Project Memory & Progress Log
```

---

## 📄 Documentation Links

- 📘 [PRD.md](./PRD.md) — Complete Product Requirements & Specifications
- 🏗️ [Architecture.md](./Architecture.md) — System Design, Engine Pipeline & Audio Graphs
- ⚖️ [rules.md](./rules.md) — The 7 Performance Laws & Coding Standards
- 🎨 [design.md](./design.md) — UI Component Specs, Color Tokens & Typography
- 📋 [task.md](./task.md) — 10-Phase Project Roadmap & Milestone Tracker
- 🧠 [memory.md](./memory.md) — Architectural Decision Records & Solved Issues

---

## 📜 License

MIT License © 2026 VELOCITY X Team.
