# 🎨 VELOCITY X — Design System & UI/UX Master Specification (design.md)

> **Document Classification**: Design Master Architecture (DS-001)  
> **Aesthetic Philosophy**: Cyber-Kinetic Hyper-Realism & Midnight Automotive Pursuit  
> **Inspirations**: *Need for Speed: Most Wanted*, *Cyberpunk 2077*, *Porsche Digital Cockpit*  
> **UI Paradigm**: Glassmorphism with Luminous Neon Accents & Dual-Thumb Ergonomics  
> **Last Updated**: September 20, 2026 | Version 2.0 (Executive Edition)  

---

## 1. Design DNA & Visual Tenets

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                             THE 5 PILLARS OF CYBER-KINETIC UI                            │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  1. 300 KM/H GLANCEABILITY    2. PERIPHERAL HORIZON       3. PHOTOREALISTIC PBR          │
│     Telemetry readable in        Center highway lanes        Clearcoat lacquer &         │
│     under 50 milliseconds        100% unobstructed           wet tarmac speculars        │
│                                                                                          │
│                  4. TACTILE DUAL-THUMB        5. LUMINOUS ADRENALINE                     │
│                     Ergonomic hit zones          8 Hz police strobes &                   │
│                     with haptic rumble           speed-warp bloom                        │
│                                                                                          │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **Glanceability Under Extreme Speed**:
   When the player is weaving between 18-wheeler trucks at 280+ km/h, they cannot read small paragraphs. Telemetry uses massive, high-contrast digital typography (`Orbitron 900`), glowing radial SVG arcs, and instant color-coded alerts.
2. **Peripheral Horizon Protection**:
   The center of the screen is sacred. All HUD instruments are pushed to the top and bottom edges, leaving the 4 highway lanes 100% clear for high-speed traffic anticipation.
3. **Photorealistic Automotive Lacquer (No Cartoon / No Low-Poly)**:
   Vehicles feature multi-layered procedural `MeshPhysicalMaterial` with metallic clearcoat lacquer, specular asphalt puddle reflections, and glowing alloy brake calipers.
4. **Tactile Dual-Thumb Ergonomics**:
   Controls are mapped directly to the natural biomechanical resting zones of human thumbs on horizontal mobile screens.
5. **Luminous Energy & Adrenaline**:
   Electric cyan photons, molten amber streaks, and alternating red-blue emergency strobes pulse dynamically with game intensity.

---

## 2. Design Tokens & Color Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                 CORE COLOR SPECTRUM & TOKENS                             │
├───────────────────┬───────────┬──────────────────────┬─────────────┬─────────────────────┤
│ TOKEN NAME        │ HEX CODE  │ RGB / ALPHA          │ CONTRAST    │ ROLE & SEMANTICS    │
├───────────────────┼───────────┼──────────────────────┼─────────────┼─────────────────────┤
│ `--bg-dark`       │ `#080b12` │ `rgb(8, 11, 18)`     │ Base        │ Root canvas & fog   │
│ `--bg-card`       │ Translucent│ `rgba(14, 20, 32, 0.82)`│ 12.8:1  │ Glassmorphic modals │
│ `--bg-border`     │ Translucent│ `rgba(0, 243, 255, 0.25)`│ 4.5:1   │ Neon cyber rimlines │
│ `--cyan`          │ `#00f3ff` │ `rgb(0, 243, 255)`   │ 14.2:1 (AAA)│ Primary UI & Speed  │
│ `--cyan-glow`     │ Translucent│ `rgba(0, 243, 255, 0.45)`│ Glow    │ Button touch bloom  │
│ `--crimson`       │ `#ff0055` │ `rgb(255, 0, 85)`    │ 6.8:1 (AAA) │ Near-Miss & Calipers│
│ `--crimson-glow`  │ Translucent│ `rgba(255, 0, 85, 0.45)`│ Glow    │ Brake pedal light   │
│ `--amber`         │ `#ffaa00` │ `rgb(255, 170, 0)`   │ 10.4:1 (AAA)│ Multiplier combos   │
│ `--gold`          │ `#e6c300` │ `rgb(230, 195, 0)`   │ 11.2:1 (AAA)│ Currency & Trophies │
│ `--police-red`    │ `#ff1133` │ `rgb(255, 17, 51)`   │ 7.2:1 (AAA) │ 8Hz Roof Strobe     │
│ `--police-blue`   │ `#0066ff` │ `rgb(0, 102, 255)`   │ 5.8:1 (AA)  │ 8Hz Roof Strobe     │
└───────────────────┴───────────┴──────────────────────┴─────────────┴─────────────────────┘
```

### 2.1 Supercar Automotive Paint Formulations
Every vehicle lacquer finish is engineered with physical specular reflection values:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                 AUTOMOTIVE LACQUER FORMULAS                              │
├───────────────────┬───────────┬───────────┬───────────┬───────────┬──────────────────────┤
│ FINISH NAME       │ HEX CODE  │ METALNESS │ ROUGHNESS │ CLEARCOAT │ OPTICAL CHARACTER    │
├───────────────────┼───────────┼───────────┼───────────┼───────────┼──────────────────────┤
│ ⚡ Cyber Cyan     │ `#00f3ff` │ 0.85      │ 0.18      │ 1.00      │ Electric metallic    │
│ 🖤 Midnight Carbon│ `#11141a` │ 0.92      │ 0.12      │ 1.00      │ Deep obsidian mirror │
│ 🏎️ Crimson Flare  │ `#ff0044` │ 0.88      │ 0.16      │ 1.00      │ Candy-apple racing red│
│ 👑 Liquid Gold    │ `#e6c300` │ 0.95      │ 0.14      │ 1.00      │ Specular gold nugget │
│ 🧪 Toxic Lime     │ `#22ff44` │ 0.82      │ 0.20      │ 1.00      │ Pearl-metallic lime  │
│ 🔮 Ultraviolet    │ `#a822ff` │ 0.86      │ 0.15      │ 1.00      │ Deep royal violet    │
└───────────────────┴───────────┴───────────┴───────────┴───────────┴──────────────────────┘
```

### 2.2 RGB Neon Ground Underglow Formulations
Simulates double-pass real-time ground bounce (Planar additive decal + dynamic PointLight):
- ❄️ **Ice Blue**: `#00f3ff` (3.2m radius, 1.5 intensity)
- 🌸 **Neon Pink**: `#ff0088` (3.2m radius, 1.5 intensity)
- 🌲 **Emerald**: `#00ff66` (3.2m radius, 1.5 intensity)
- ☀️ **Solar Amber**: `#ff9900` (3.2m radius, 1.5 intensity)
- 👻 **Ghost Purple**: `#9933ff` (3.2m radius, 1.5 intensity)

---

## 3. Typography & Information Hierarchy

We combine two Google Fonts to create the authentic telemetry feel of a high-tech supercar cockpit:

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800;900&family=Rajdhani:wght@500;600;700&display=swap');
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                   TYPOGRAPHY SCALE TABLE                                 │
├───────────────────┬──────────┬────────┬─────────┬──────────────┬─────────────────────────┤
│ ROLE / ELEMENT    │ FONT     │ WEIGHT │ SIZE    │ LETTER-SPACE │ TEXT-SHADOW GLOW        │
├───────────────────┼──────────┼────────┼─────────┼──────────────┼─────────────────────────┤
│ Game Title (Hero) │ Orbitron │ 900    │ 48–64px │ 6px          │ 0 0 25px var(--cyan)    │
│ Speedometer Digits│ Orbitron │ 900    │ 26–32px │ 0px          │ 0 0 12px #fff           │
│ Gear Badge Number │ Orbitron │ 800    │ 13px    │ 0px          │ None                    │
│ Combo Badge       │ Orbitron │ 900    │ 18px    │ 0px          │ 0 0 10px var(--amber)   │
│ Near-Miss Banner  │ Orbitron │ 900    │ 14px    │ 1.5px        │ 0 0 16px var(--crimson) │
│ Button CTAs       │ Orbitron │ 900    │ 14–16px │ 1.5px        │ 0 0 14px var(--cyan)    │
│ Subtitles/Headers │ Orbitron │ 800    │ 11–13px │ 2px          │ None                    │
│ Telemetry Labels  │ Rajdhani │ 700    │ 9–10px  │ 1.5px        │ None                    │
│ Stats / Coins     │ Rajdhani │ 700    │ 14–16px │ 0.5px        │ None                    │
│ Dialog Body       │ Rajdhani │ 600    │ 13–14px │ 0px          │ None                    │
└───────────────────┴──────────┴────────┴─────────┴──────────────┴─────────────────────────┘
```

---

## 4. Mobile Ergonomics & Thumb Reachability Heatmap

Modern mobile racing games must respect the natural biomechanics of the human hand in landscape orientation:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                         LANDSCAPE THUMB ERGONOMICS & SAFE ZONES                          │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│  [Audio] [Install]                [TACTICAL REARVIEW MIRROR]                [Coins 🪙]   │
│  Top-Left (Low Reach)                  Top-Center Mirror                Top-Right (Glance)│
│                                                                                          │
│                                                                                          │
│                           HIGHWAY RACING & TRAFFIC DECK                                  │
│                             (100% UNRESTRICTED VISION)                                   │
│                                                                                          │
│                                                                                          │
│   ┌───────────────────────┐                               ┌──────────────────────────┐   │
│   │ LEFT THUMB ZONE       │                               │ RIGHT THUMB ZONE         │   │
│   │ (Natural Pivot Arc)   │                               │ (High-Intensity Actions) │   │
│   │                       │      ┌─────────────────┐      │                          │   │
│   │   ┌─────┐   ┌─────┐   │      │ SPEED & RPM HUD │      │    ┌─────┐    ┌─────┐    │   │
│   │   │LEFT │   │RIGHT│   │      │    194 KM/H     │      │    │ NOS │    │ GAS │    │   │
│   │   │STEER│   │STEER│   │      │  GEAR 4 | NOS%  │      │    └─────┘    │ PED │    │   │
│   │   └─────┘   └─────┘   │      └─────────────────┘      │    ┌─────┐    │ AL  │    │   │
│   │                       │                               │    │BRAKE│    │     │    │   │
│   └───────────────────────┘                               │    └─────┘    └─────┘    │   │
│                                                           └──────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Safe-Area Inset Handling (iPhone Dynamic Island & Notches)
Every primary container enforces CSS safe-area padding:
```css
.mobile-controls-container,
.mobile-app-header,
.garage-modal-overlay {
  padding-left: max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));
  padding-top: max(12px, env(safe-area-inset-top));
  padding-bottom: max(12px, env(safe-area-inset-bottom));
}
```

---

## 5. UI Component Design Specifications

### 5.1 Cockpit Speedometer & RPM Cluster

```
        ┌────────────────────────┐
        │       140  180         │
        │    100   ▲    220      │
        │   60    / \      260   │
        │  20    /   \      300  │
        │       ┌─────┐          │
        │       │ 194 │ KM/H     │
        │       └─────┘          │
        │  [GEAR 4] [████████░░] │
        └────────────────────────┘
```

- **SVG Radial Arc**: Outer 100x100 circle track with `stroke-dasharray="198"`, dynamically calculated via:
  $$\text{DashOffset} = 198 - \left(\frac{\text{Speed}_{\text{km/h}}}{300}\right) \times 165$$
- **Color Gradient Arc**: Cyan (`#00f3ff`) at 0 km/h $\rightarrow$ Amber (`#ffaa00`) at 180 km/h $\rightarrow$ Crimson (`#ff0055`) at 300 km/h.
- **Center Readout**: Large 26px `Orbitron 900` digital counter.
- **Gear Badge**: Compact pill with cyan bold numeral.
- **Linear RPM Bar**: 100% width track with redline visual flash when $\text{RPM} > 7,500$.
- **Nitrous Energy Tube**: Cyan-to-blue energy reservoir tube, flashing orange when active and dimming when $< 15\%$.

---

### 5.2 Tactical Top-Center Rearview Mirror

```
        ┌───────────────────────────────────┐
        │  [●] RED STROBE    BLUE STROBE [●]│
        │            ┌─────────┐            │
        │            │ POLICE  │            │
        │            │ [=] [=] │            │
        │            └─────────┘     [24m]  │
        └───────────────────────────────────┘
```

- **Glass Finish**: Gradient from `#101622` to `#1e293b` with a dark lower road horizon.
- **Approaching Cruiser Silhouette**: Scales dynamically in real-time based on distance:
  $$\text{Scale} = \min\left(1.8, \max\left(0.4, \frac{80 - \text{Dist}}{40}\right)\right)$$
- **Roof Strobes**: Embedded red and blue LED dots alternating at 8 Hz.
- **Distance Badge**: Crimson pill displaying real-time distance in meters (e.g., `24m`).

---

### 5.3 Dual-Thumb Ergonomic Pedals & Steering Pads

```
  [LEFT THUMB]                                          [RIGHT THUMB]
 ┌──────────┐ ┌──────────┐                     ┌──────────┐     ┌──────────┐
 │    ▲     │ │    ▲     │                     │  ⚡ NOS   │     │  ▲ GAS   │
 │   /      │ │     \    │                     │  ROCKET  │     │          │
 │  LEFT    │ │   RIGHT  │                     │  (68px)  │     │  RACE    │
 │  (78px)  │ │   (78px) │                     └──────────┘     │  PEDAL   │
 └──────────┘ └──────────┘                     ┌──────────┐     │  (92px)  │
                                               │ ■ BRAKE  │     │          │
                                               │ (76px)   │     │          │
                                               └──────────┘     └──────────┘
```

- **Touch Interaction**:
  - `PointerDown`: Instantly scales to `0.92x`, triggers a 10ms haptic tick, and illuminates cyan glow.
  - `PointerUp / Cancel`: Returns to `1.0x` scale smoothly.
- **Multi-Touch**: Supported natively via isolated pointer IDs (`touch-action: none`).

---

### 5.4 Floating Near-Miss & Combo Badges

```
       ┌────────────────────────────────────────────────┐
       │ 🔥 NEAR MISS! +300 PTS               [x2 COMBO]│
       └────────────────────────────────────────────────┘
```

- **Animation**: Drops into screen using `slidePop` cubic-bezier easing with bouncy overshoot.
- **Multiplier Tag**: High-contrast black pill with molten amber border.

---

### 5.5 Cyber Showroom Garage Modal

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │ CYBER GARAGE                     [🪙 2,450 COINS]                  [X] │
 ├────────────────────────────────────────────────────────────────────────┤
 │ [ APEX ROADSTER ✓ ]      [ VELOCE GT 🔒 ]       [ TITAN V8 MUSCLE 🔒 ] │
 ├──────────────────────────────────┬─────────────────────────────────────┤
 │ SPECS TELEMETRY                  │ CUSTOMIZATION SHOP                  │
 │                                  │                                     │
 │ TOP SPEED:    240 KM/H           │ METALLIC PAINT                      │
 │ ACCELERATION: [█████████░] 9.2   │ (●) (●) (●) (●) (●) (●)             │
 │ HANDLING:     [█████████▌] 9.5   │                                     │
 │ RAM ARMOR:    [██████░░░░] 6.0   │ RGB NEON UNDERGLOW                  │
 │                                  │ (●) (●) (●) (●) (●)                 │
 ├──────────────────────────────────┴─────────────────────────────────────┤
 │ [                    EQUIPPED & READY TO RACE                         ]│
 └────────────────────────────────────────────────────────────────────────┘
```

- **Spec Bars**: High-contrast glowing cyan tracks for acceleration and handling, molten amber track for ram armor.
- **Color Swatches**: Circular buttons with white checkmark on active selection and real-time 3D model update.

---

### 5.6 Post-Race Summary Modal (Game Over / Busted)

```
 ┌────────────────────────────────────────────────────────┐
 │           🚨 BUSTED BY HIGHWAY PATROL 🚨               │
 ├────────────────────────────────────────────────────────┤
 │                  [🏆 NEW ALL-TIME RECORD!]             │
 │                                                        │
 │                      FINAL SCORE                       │
 │                        48,250                          │
 │                                                        │
 │     DISTANCE: 3,420 m           NEAR-MISSES: 14        │
 │     POLICE EVADED: 2            REWARD: 🪙 +4,216      │
 ├────────────────────────────────────────────────────────┤
 │ [ 🔧 GARAGE ]                       [ 🔄 RACE AGAIN ]  │
 └────────────────────────────────────────────────────────┘
```

---

## 6. Motion Design, Curves & Dynamic Shaders

### 6.1 Easing Curves & Transitions
All UI animations utilize custom cubic-bezier curves for a snappy automotive feel:

```css
/* Snappy popup entrance with overshoot */
--ease-pop: cubic-bezier(0.18, 0.89, 0.32, 1.28);

/* Smooth mechanical deceleration */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
```

### 6.2 Camera FOV Speed Warp Curve
As speed increases, the camera perspective dynamically stretches to heighten peripheral velocity:

```
Camera FOV
   92° ┼───────────────────────────────────────────────● (NOS Boost 320 km/h)
       │                                            .´
   80° ┼──────────────────────────────● (Cruise 200 km/h)
       │                           .´
   68° ┼─────────● (Idle 0 km/h) .´
       └─────────┴────────────────────┴────────────────┴─────────────
       0 km/h    100 km/h             200 km/h         320 km/h
```

$$\text{FOV}_{\text{target}} = 68^\circ + \left(\frac{\text{Speed}}{280}\right) \times 16^\circ + (\text{isNitro} \times 8^\circ)$$

---

## 7. Accessibility, Contrast & Sensory Redundancy

1. **Colorblind-Safe Design**:
   - Red and Blue police strobes are differentiated by **position** (Left = Red, Right = Blue), not just color.
   - Near-miss alerts pair text (`NEAR MISS!`) with flame icons and combo numerals (`x2`).
2. **Sensory Dual-Channel Feedback**:
   - Every visual near-miss banner is accompanied by a **18ms haptic tick** and an audio whoosh.
   - Every police collision is reinforced by a **violent camera shake** and a double haptic impact.
3. **Contrast Compliance**:
   - All critical text achieves a minimum contrast ratio of **7:1 (WCAG AAA)** against the midnight obsidian backdrop.

---

## 8. Summary & Approval

This design specification guarantees that VELOCITY X delivers an unforgettable visual spectacle: photorealistic car finishes, zero visual clutter on the highway, and ultra-responsive dual-thumb cockpit ergonomics engineered specifically for mobile gaming excellence.
