# VELOCITY X — System Architecture & Technical Blueprint

> **Architecture Style**: Hybrid WebGL 2.0 Canvas + React 18 DOM HUD  
> **Target Environment**: Modern Mobile Browsers (Blink / WebKit / Gecko)  
> **Rendering Pipeline**: Three.js WebGLRenderer with Custom PBR Shaders & Object Pooling  
> **Audio Architecture**: Procedural Web Audio API Synthesis Graph (0 MB external assets)  

---

## 1. High-Level Architecture Diagram

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT BROWSER ENVIRONMENT                          │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────────┐   Touch / Pointers    ┌──────────────────────────┐  │
│  │   React 18 DOM HUD   │ ◄───────────────────► │  Dual-Thumb Controls     │  │
│  │  - Speedometer       │                       │  - Left / Right Steer    │  │
│  │  - Rearview Mirror   │   HUD State Updates   │  - Gas / Brake / NOS     │  │
│  │  - Garage Showroom   │ ◄──────────────────┐  └──────────────────────────┘  │
│  └──────────────────────┘                    │                 │              │
│                                              │                 │ Dispatch     │
│  ┌───────────────────────────────────────────┴─────────────────▼────────────┐  │
│  │                      THREE.JS WEBGL 2.0 ENGINE CORE                      │  │
│  │                                                                         │  │
│  │  ┌─────────────────────────┐  Controls /   ┌──────────────────────────┐ │  │
│  │  │ PlayerCar.ts            │  Inertia      │ CameraManager.ts         │ │  │
│  │  │ - Procedural PBR Chassis│ ────────────► │ - 3rd-Person Chase Cam   │ │  │
│  │  │ - Physics / Steering    │               │ - Speed FOV (68° to 92°) │ │  │
│  │  └─────────────────────────┘               └──────────────────────────┘ │  │
│  │                 │ Bounds Check                            ▲             │  │
│  │                 ▼                                         │ Impact      │  │
│  │  ┌─────────────────────────┐ Near-Miss     ┌──────────────┴───────────┐ │  │
│  │  │ TrafficManager.ts       │ & Collisions  │ PoliceChase.ts           │ │  │
│  │  │ - 14-Vehicle Object Pool│ ────────────► │ - Interceptor AI         │ │  │
│  │  │ - Sedan, SUV, Taxi, Semi│               │ - PIT Maneuver Ramming   │ │  │
│  │  └─────────────────────────┘               └──────────────────────────┘ │  │
│  │                 ▲                                         ▲             │  │
│  │                 │ Scroll + Recycle                        │ Strobes     │  │
│  │  ┌──────────────┴──────────┐               ┌──────────────┴───────────┐ │  │
│  │  │ RoadManager.ts          │               │ ParticleSystem.ts        │ │  │
│  │  │ - 4-Lane Infinite Deck  │               │ - Nitro Flame Jets       │ │  │
│  │  │ - Instanced Cityscape   │               │ - Collision Sparks       │ │  │
│  └──┴─────────────────────────┴───────────────┴──────────────────────────┴─┘  │
│                 │ Audio Events & RPM              │ Vibrate Patterns          │
│                 ▼                                 ▼                           │
│  ┌────────────────────────────┐      ┌─────────────────────────────┐          │
│  │ Web Audio API Synthesizer  │      │ HTML5 Vibration Haptics     │          │
│  │ - Sawtooth/Square RPM Roar │      │ - Near-Miss Ticks (18ms)    │          │
│  │ - Turbo Noise & Blow-off   │      │ - Nitro Rumbler ([25,25])   │          │
│  │ - Dual LFO Police Siren    │      │ - Crash Crunch ([120, 200]) │          │
│  └────────────────────────────┘      └─────────────────────────────┘          │
│                                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                PROGRESSIVE WEB APP (PWA) CACHING LAYER                  │  │
│  │  - Cache-First Service Worker (`public/sw.js`)                          │  │
│  │  - Web App Manifest (`public/manifest.json`)                            │  │
│  │  - LocalStorage Persistence (`Storage.ts` for coins, records, unlocks)  │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack & Decision Matrix

| Layer | Selected Tech | Justification & Performance Benefit |
| :--- | :--- | :--- |
| **3D Rendering** | **Three.js (r160) WebGL 2.0** | ~600 KB footprint vs Unity's 30MB+ WebGL export. Zero memory spikes on mobile Safari. Full low-level control over rendering loops. |
| **UI Framework** | **React 18 + Vite 5** | Lightweight reactive HUD layer decoupled from 60–120 FPS WebGL loop. Sub-second HMR development. |
| **Type Safety** | **TypeScript 5 (Strict)** | Enforces strict null checks and vector pooling contracts; zero runtime crashes. |
| **Audio Engine** | **Web Audio API** | Real-time mathematical sound synthesis. 0 KB MP3/WAV download, 0 ms network latency, runs 100% offline. |
| **Icons & Badges** | **Lucide-React** | Ultra-clean modern vector icons tree-shaken into the bundle. |
| **Mobile Haptics** | **Navigator.vibrate API** | Hardware tactile feedback on Android phones (near-misses, police impacts, nitro). |
| **Offline Cache** | **CacheStorage & ServiceWorker** | Cache-First strategy pre-caches HTML, JS, CSS, and SVG assets for Airplane Mode play. |

---

## 3. Directory & File Structure Map

```
e:\VELOCITY X\
├── public/
│   ├── manifest.json              # Standalone Mobile PWA Manifest (Landscape locked)
│   ├── sw.js                      # Cache-First Service Worker for 100% offline play
│   ├── favicon.svg                # Scalable high-res vector icon
│   └── icons/
│       ├── icon-192.svg           # Android & iOS Home Screen icon (192x192)
│       └── icon-512.svg           # Splash screen & PWA launcher icon (512x512)
├── src/
│   ├── game/
│   │   ├── Engine.ts              # WebGL 2.0 coordinator, tick loop, adaptive DPR, HUD dispatcher
│   │   ├── CameraManager.ts       # 3rd-person chase camera with dynamic speed FOV & shake
│   │   ├── PlayerCar.ts           # Realistic PBR sports car with suspension, steer, exhaust
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
│   │   ├── RearviewMirror.tsx     # Compact top rearview mirror with approaching police
│   │   ├── GarageModal.tsx        # Mobile 3D car showroom & paint customizer
│   │   ├── RotatePhonePrompt.tsx  # Sleek overlay prompting landscape rotation if in portrait
│   │   ├── GameOverModal.tsx      # Mobile crash/busted summary with instant restart button
│   │   └── InstallPrompt.tsx      # "Add to Home Screen" one-tap install banner
│   ├── App.tsx                    # Game state coordinator (Menu, Garage, Racing, Pause)
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Mobile-first CSS, notch safe-areas, cyber glassmorphism
├── index.html                     # Viewport meta tags, Apple touch meta, PWA headers
├── package.json                   # Dependencies (Three.js, Lucide-react, React, Vite)
├── tsconfig.json                  # TypeScript config
├── vite.config.ts                 # Vite setup
├── PRD.md                         # Product Requirement Document
├── Architecture.md                # System Architecture & Technical Blueprint
├── rules.md                       # Development & Coding Rules
├── design.md                      # UI Design System & Aesthetics
├── task.md                        # Phased Project Task Breakdown
└── memory.md                      # Project Memory & Progress Tracker
```

---

## 4. The 60–120 FPS "Makhan Ki Tarah" Execution Pipeline

Every single frame executed in `requestAnimationFrame` follows this strict sequential pipeline:

```
[Frame Start]
      │
      ▼
1. Delta Time Clamping (Math.min(clock.getDelta(), 0.08))
      │
      ▼
2. PlayerCar Physics Update (Speed, Steering Inertia, Chassis Roll & Pitch)
      │
      ▼
3. Audio & Haptics Modulation (Engine RPM Pitch, Turbo Hiss, Tire Skid)
      │
      ▼
4. Road Segment Recycling (Recycles road segments behind player to furthest ahead)
      │
      ▼
5. Traffic Manager Update (Forward translation, collision raycasting, near-miss checks)
      │
      ▼
6. Police Pursuit AI State Machine (Flanking, PIT ramming, siren distance pan)
      │
      ▼
7. Particle Simulation Update (Nitro flames, tire smoke, collision sparks)
      │
      ▼
8. Dynamic Chase Camera Update (Speed FOV 68°-92°, camera shake decay, lookAt)
      │
      ▼
9. Three.js WebGL Render Call (Renderer.render(scene, camera))
      │
      ▼
10. Lightweight React HUD Dispatch (Speed, Gear, RPM, NOS, Distance, Combo)
      │
[Frame End]
```

---

## 5. Procedural Web Audio API Synthesis Graph

Rather than downloading multi-megabyte MP3 files that stutter and load slowly, VELOCITY X uses pure mathematical audio graph synthesis:

```
[Sawtooth Oscillator 1] ───┐
(Base RPM: 48Hz - 288Hz)    │
                            ├─► [BiquadFilter (LowPass)] ─► [Engine Gain] ─► [Master Gain] ─► [Destination]
[Triangle Oscillator 2] ───┤   (Cutoff: 300Hz - 3300Hz)     (0.35 - 0.8)       (Volume)
(Harmonic: 1.5x)            │
                            │
[Square Oscillator 3] ─────┘
(Sub-Bass: 0.5x)

[White Noise Buffer] ─────────► [BiquadFilter (BandPass)] ─► [Nitro Gain] ─► [Master Gain]
(Nitro Rush Whoosh)             (1400 Hz, Q: 1.5)

[Police Siren Osc] ───────────► [Siren Gain] ───────────────► [Stereo Panner] ─► [Master Gain]
(Modulated by Sine LFO 0.65Hz)  (Volume based on Distance)   (Pans left/right)
```

---

## 6. Offline Caching & Storage Architecture

1. **Service Worker (`public/sw.js`)**:
   - Cache-First strategy.
   - On install: Precaches `/`, `/index.html`, `/manifest.json`, and SVG icons.
   - On fetch: Intercepts network requests; serves instantly from CacheStorage. Falls back to index.html for SPA routing.
2. **Persistence (`Storage.ts`)**:
   - Stores game progression in `localStorage`:
     - `highScore` (number)
     - `coins` (number)
     - `totalNearMisses` (number)
     - `totalPoliceEvaded` (number)
     - `selectedCarId` (string)
     - Car customizations (selected paint color hex and RGB underglow hex).
