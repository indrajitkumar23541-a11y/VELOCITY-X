# VELOCITY X — UI & Visual Design System (design.md)

> **Design Style**: Cyberpunk Hyper-Realism & Midnight Automotive Pursuit  
> **Inspirations**: *Need for Speed: Most Wanted*, *Burnout*, *Cyberpunk 2077*  
> **UI Paradigm**: Glassmorphism with Neon Accents & Mobile Ergonomics  

---

## 1. Design Philosophy & Visual Tenets

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE DESIGN TENETS                              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Realistic Automotive Finish: PBR clearcoat paint, asphalt wetness   │
│ 2. High-Octane High-Contrast: Deep obsidian darks with electric neons   │
│ 3. Instant Peripheral Clarity: Large digital speedometer, color alerts │
│ 4. Tactile Ergonomics: Dual-thumb mobile touch zones, zero clipping    │
│ 5. Dynamic Adrenaline FX: Flashing police strobes, speed FOV warp      │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Photorealistic Automotive Finishes (No Cartoon / No Low-Poly)**:
   Cars feature multi-faceted body geometries with realistic metallic flake clearcoat, carbon fiber aerodynamic splitters and spoilers, alloy rims with red brake calipers, and active volumetric headlights.
2. **High-Contrast Dark Mode**:
   Deep midnight asphalt and dark space backgrounds allow vibrant cyber cyan, molten amber, and police strobes to pop with intense luminous energy.
3. **Cockpit Ergonomics**:
   All critical driving information (Speed, Gear, RPM, NOS, Distance, Combo Streak) is positioned along the natural visual horizon without blocking the highway racing lanes.

---

## 2. Curated Color Palette

| Token Name | Hex Code | Visual Sample | Usage & Purpose |
| :--- | :--- | :--- | :--- |
| **`--bg-dark`** | `#080b12` | ![#080b12](https://via.placeholder.com/15/080b12/000000?text=+) | Deep obsidian root background, sky fog, and road shadows. |
| **`--bg-card`** | `rgba(14, 20, 32, 0.82)` | ![#0e1420](https://via.placeholder.com/15/0e1420/000000?text=+) | Translucent frosted glassmorphism for HUD cards and modals. |
| **`--cyan`** | `#00f3ff` | ![#00f3ff](https://via.placeholder.com/15/00f3ff/000000?text=+) | Primary brand color, tachometer needle, NOS boost, Apex car. |
| **`--cyan-glow`** | `rgba(0, 243, 255, 0.45)` | ![#00f3ff](https://via.placeholder.com/15/00f3ff/000000?text=+) | Box-shadow neon glow for active buttons and pedals. |
| **`--crimson`** | `#ff0055` | ![#ff0055](https://via.placeholder.com/15/ff0055/000000?text=+) | Near-miss pill, Veloce GT supercar paint, brake calipers. |
| **`--crimson-glow`** | `rgba(255, 0, 85, 0.45)` | ![#ff0055](https://via.placeholder.com/15/ff0055/000000?text=+) | Active brake pedal illumination. |
| **`--amber`** | `#ffaa00` | ![#ffaa00](https://via.placeholder.com/15/ffaa00/000000?text=+) | Combo streak multiplier badges, armor ratings. |
| **`--gold`** | `#e6c300` | ![#e6c300](https://via.placeholder.com/15/e6c300/000000?text=+) | Coin rewards, high score trophy, Titan V8 car paint. |
| **`--police-red`** | `#ff1133` | ![#ff1133](https://via.placeholder.com/15/ff1133/000000?text=+) | 8Hz roof strobe flasher, screen-edge pursuit vignette. |
| **`--police-blue`** | `#0066ff` | ![#0066ff](https://via.placeholder.com/15/0066ff/000000?text=+) | 8Hz roof strobe flasher, screen-edge pursuit vignette. |

### Supercar Custom Paint Options
- ⚡ **Cyber Cyan**: `#00f3ff`
- 🖤 **Midnight Obsidian**: `#11141a`
- 🏎️ **Crimson Flare**: `#ff0044`
- 👑 **Liquid Gold**: `#e6c300`
- 🧪 **Toxic Lime**: `#22ff44`
- 🔮 **Ultraviolet**: `#a822ff`

### Underglow RGB Neon Options
- ❄️ **Ice Blue**: `#00f3ff`
- 🌸 **Neon Pink**: `#ff0088`
- 🌲 **Emerald**: `#00ff66`
- ☀️ **Solar Amber**: `#ff9900`
- 👻 **Ghost Purple**: `#9933ff`

---

## 3. Typography System

We use two distinct Google Fonts to create an authentic automotive racing cockpit aesthetic:

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=Rajdhani:wght@500;600;700&display=swap');
```

| Font Family | Weights | Role & Usage |
| :--- | :--- | :--- |
| **`Orbitron`** | 600, 800, 900 | **Racing Telemetry**: Digital Speedometer, Gear indicator, Title screen, Near-miss banner, Button labels, Combos. |
| **`Rajdhani`** | 500, 600, 700 | **Subsystems & Labels**: Stat metrics, coin amounts, modal descriptions, distance labels, tooltips. |

---

## 4. UI Components Specification

### 4.1 Cockpit Speedometer & RPM Cluster
- **Radial Speed Arc**: 100x100 SVG circle track with dynamic `stroke-dashoffset` driven by speed (0 to 300 km/h) with cyan-to-orange-to-red gradient.
- **Center Readout**: Large 26px `Orbitron` digital speed + `KM/H` unit badge.
- **Gear Badge**: Compact pill showing current automated transmission gear (1 to 6).
- **RPM Linear Gauge**: Horizontal bar with redline warning flash when approaching 7,500+ RPM.
- **Nitrous (NOS) Level**: Horizontal energy tube filled with cyan-to-blue gradient, flashing fiery orange when active and dimming when depleted.

### 4.2 Tactical Top Rearview Mirror
- Positioned top-center (`env(safe-area-inset-top)`).
- Visual horizon line with dynamic approaching silhouette of Police Interceptors.
- Alternating Red & Blue 8 Hz flashing strobe dots embedded in the mirror glass.
- Proximity Distance Readout (e.g. `24m`) showing exact distance of closest pursuing unit.

### 4.3 Dual-Thumb Touch Controls
- **Left Zone**:
  - `LEFT` & `RIGHT` buttons (78x78px), rounded rectangles with cyan borders.
  - Active state: Scales to 0.92x with cyan backdrop flash and 10ms haptic tick.
- **Right Zone**:
  - `GAS` (Race Pedal): 72x92px tall pedal with vertical gradient, illuminating under touch.
  - `BRAKE` Pedal: 64x76px pedal with crimson accent.
  - `NOS` Trigger Button: 68x68px circular rocket canister icon with glowing cyan border and pulse ring.

### 4.4 Near-Miss & Pursuit Celebration Alerts
- **Near-Miss Pill**: Floating pill banner sliding into view with `slidePop` cubic-bezier bounce: `NEAR MISS! +150 PTS`, accompanied by combo streak badge (`x2`, `x3`, `x5`).
- **Pursuit Alert**: High-intensity screen-edge red/blue vignette flashing with top warning banner: `POLICE PURSUIT — OUTRUN OR WEAVE TRAFFIC!`.
- **Evaded Banner**: Gold celebration card: `POLICE EVADED! +1,000 BONUS REWARD`.

### 4.5 Landscape Rotation Prompt Overlay
- Activates automatically if `window.innerWidth < window.innerHeight` (phone held vertically).
- Displays a high-tech phone icon rotating 90° smoothly with neon cyan accents.
- Guides player: *"ROTATE YOUR PHONE — LANDSCAPE MODE ONLY"*. Auto-dismisses upon rotation.

---

## 5. Micro-Animations & Dynamic Shaders

1. **Speed FOV Expansion**: Smooth camera focal length warp from 68° to 92° as speed approaches 300 km/h on NOS.
2. **Chassis Roll & Pitch**: Physical body roll into corners (-0.08 rad) and suspension dive under hard braking (+0.04 rad).
3. **Exhaust Flame Particles**: Dual exhaust emitters spitting high-velocity cyan/blue particle jets behind the car.
4. **Collision Sparks**: Directional orange/yellow sparks showering upon barrier or traffic contact.
