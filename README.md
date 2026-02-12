# VITRA • The Architecture of Strength

> **Raw. Refined. Relentless.**  
> A brutalist-inspired aesthetic gym website — where iron meets intention, and code meets craftsmanship.

[![Made with](https://img.shields.io/badge/Made%20with-HTML%20%7C%20CSS%20%7C%20JS-0b0b0b?style=flat&logo=html5&logoColor=d8b45e&labelColor=0b0b0b&color=d8b45e)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-d8b45e?style=flat&labelColor=0b0b0b&color=d8b45e)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-d8b45e?style=flat&labelColor=0b0b0b&color=d8b45e)]()
[![No Frameworks](https://img.shields.io/badge/vanilla-js-f5e050?style=flat&labelColor=0b0b0b&color=d8b45e)]()

---

## ⚡ Overview

**VITRA** is not just another gym website. It's a digital manifestation of premium fitness culture — minimal, powerful, and unapologetically bold. Crafted exclusively with **HTML, CSS, and vanilla JavaScript**, this project embodies the aesthetic of high-end strength studios: dark tonalities, brutalist geometry, and signature gold accents.

Every component is deliberate. Every hover state, intentional. This is fitness architecture in the browser.

🔗 **Live Demo:** [vitra-gym.vercel.app](#) *(coming soon)*

---

## 🏛️ Design Philosophy

```
“Strength is structural. So is great design.”
```

| Principle | Application |
|----------|-------------|
| **Brutalist Honesty** | Raw grids, exposed structure, unpolished elegance |
| **Monochromatic Power** | Deep blacks, charcoal gradients, 8% opacity textures |
| **Gold as Signal** | `#d8b45e` reserved for what matters — CTAs, borders, achievements |
| **Whitespace as Luxury** | Generous padding, breathable layouts, no visual noise |
| **Motion with Restraint** | Subtle counters, hover depth shifts, never gratuitous |

---

## 🧱 Architecture

```
├── 📄 index.html               # Single-page sanctuary
├── 📁 assets/                  
│   ├── css/                   # Inline styles (no external deps)
│   └── js/                    # Vanilla interactions
└── 📄 README.md               # You are here
```

**Zero frameworks. Zero dependencies. Zero compromises.**  
Every line hand-crafted, every selector intentional.

---

## ✨ Core Features

### 🎨 **Aesthetic Brutalism**
- Custom scrollbar design with matte charcoal & gold
- Monochromatic palette with `#d8b45e` as the single accent
- Geometric SVG noise overlay in hero section
- Sharp borders, negative space, and intentional asymmetry

### 📱 **Fluid Responsiveness**
- Mobile-first navigation with smooth drawer transition
- Adaptive grid system (auto-fit + media queries)
- Typography scaling across viewports (4.2rem → 3.2rem → 2.4rem)

### ⚙️ **Interactive Sophistication**
- **Live member counter** — animates from 2.24K → 2.4K on load
- **Dynamic schedule injection** — clean, maintainable class data
- **Active nav highlighting** — scroll spy with gold underline
- **Hover architecture** — card elevation, border shifts, shadow morphing

### 🧠 **Semantic Structure**
- Accessible landmark elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Icon-driven communication (Font Awesome 6)
- ARIA-friendly toggle interactions

---

## 🎯 Sections & Hierarchy

| Section | Vibe | Key Element |
|--------|------|-------------|
| **Hero** | Monumental | Brutalist box with `-20px 20px` gold shadow |
| **Features** | Institutional | 4-column service pillars with iconography |
| **Schedule** | Operational | Gold-left-border class cards |
| **Trainers** | Exclusive | Monochrome portraits, gold hover states |
| **CTA Banner** | Urgent | Full-bleed gold, black-on-gold typography |
| **Footer** | Minimal | 3-part structural closure |

---

## 🛠️ Technology Stack

```html
<!-- That's the beauty of it -->
<link rel="stylesheet" href="none">
<script src="zero-external.js"></script>
```

- **HTML5** — Semantic, clean, future-proof
- **CSS3** — Flexbox, Grid, custom properties, backdrop filters
- **JavaScript ES6** — DOM manipulation, event delegation, animations
- **Font Awesome 6** — Pro-level iconography (free tier)
- **Google Fonts** — Inter: the perfect grotesque

---

## 🚀 Getting Started

### Clone & Run in 3 commands

```bash
# 1. Bring the iron
git clone https://github.com/yourusername/vitra-gym.git

# 2. Enter the studio
cd vitra-gym

# 3. Open the gates (macOS)
open index.html

# Or simply double-click index.html
# No build step. No node_modules. No pain.
```

---

## 🎨 Customization Guide

### 🎭 **Color Architecture**
```css
:root {
  --obsidian: #0b0b0b;      /* Primary background */
  --charcoal: #141414;      /* Secondary surfaces */
  --gold: #d8b45e;          /* The accent — use sparingly */
  --steel: #eaeaea;         /* Primary text */
  --graphite: #a5a5a5;      /* Secondary text */
}
```

### ✏️ **Typography**
- **Headlines:** `Inter 800`, `-2px letter-spacing`, UPPERCASE
- **Body:** `Inter 300`, `1.6 line-height`, `#c6c6c6`
- **Accents:** 2px letter spacing, gold, all-caps

### 🧩 **Component Patterns**
To create new aesthetic blocks:
1. Use `border-left: 5px solid #d8b45e` for hierarchy
2. Apply `background: #151515` with `border: 1px solid #242424`
3. Add `transition: all 0.3s` with gold border on hover
4. Maintain `2rem` internal padding

---

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| >1024px | Full 4-column grids, horizontal nav |
| 768–1024px | 2-column features, collapsed hero |
| <768px | Single column, mobile menu, stacked stats |

**Mobile menu:**  
Clean `backdrop-filter: blur(12px)` drawer with gold accent border. No JavaScript jank — smooth class toggling.

---

## 💡 The JavaScript (just enough)

```javascript
// No frameworks. No bloat. No excuses.
// 72 lines of pure utility.

- Mobile menu toggle
- Active section highlighter (scroll spy)
- Dynamic schedule injection
- Member counter animation
- Hover micro-interactions
```

All interactions **enhance**, never distract. Performance budget: **instant**.

---

## 🖼️ Visual Highlights

### 🥇 **Hero Brutalism**
The hero image container features a signature `box-shadow: -20px 20px 0 #d8b45e` — a deliberate structural offset that whispers “premium imperfection.”

### 🧊 **Feature Cards**
On hover: `transform: translateY(-10px)` + `border-color: #d8b45e`.  
Subtle lift. No rotation, no noise. Confidence over gimmicks.

### 📅 **Schedule Cards**
Bold class names set in 1.7rem uppercase. Gold left border anchors each session. The rhythm is unmistakable.

---

## 🧠 Behind the Design

**Why VITRA?**  
Vitruvius wrote of firmness, commodity, delight. This site aspires to the same:  
- **Firmness** — Rock-solid layout, cross-browser stable  
- **Commodity** — Clear information hierarchy, immediate utility  
- **Delight** — The gold hover, the subtle counter, the shadow that shifts  

Every gym site shows dumbbells and smiles. We chose shadow, structure, and signal.

---

## 🔮 Future Iterations

- [ ] Dark/light toggle (charcoal mode / paper mode)
- [ ] Membership pricing calculator (JS)
- [ ] Booking modal with time selection
- [ ] Trainer bio micro-interactions
- [ ] Performance-optimized SVG patterns
- [ ] CSS-only loading animation

*All while maintaining zero-dependency purity.*

---

## 🤝 Contribution

This is a demonstration project, but the aesthetic is yours to extend.

**If you build something beautiful:**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-idea`)
3. Commit your changes (`git commit -m 'Add some aesthetic'`)
4. Push to the branch (`git push origin feature/your-idea`)
5. Open a Pull Request

---

## 📄 License

**MIT** — Free for personal and commercial use.  
Please retain the original aesthetic direction. Gold accents mandatory.

---

## 🎙️ Curated by

**Senior Web Developer** with 12+ years shaping digital experiences.  
Obsessed with typography, brutalism, and the intersection of strength and software.

> “We are what we repeatedly do. Excellence, then, is not an act, but a habit.”  
> — Aristotle (and every great coach)

---

<p align="center">
  <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='20' viewBox='0 0 60 20'><rect width='60' height='20' fill='%230b0b0b'/><rect x='2' y='2' width='56' height='16' fill='none' stroke='%23d8b45e' stroke-width='1.5'/><text x='12' y='15' font-family='Inter, sans-serif' font-size='12' fill='%23d8b45e' font-weight='bold'>VITRA</text></svg>" alt="VITRA Badge">
</p>

<p align="center">
  <b>LIFT HEAVY. CODE LIGHTER.</b><br>
  <i>Forged in NYC · 2025</i>
</p>