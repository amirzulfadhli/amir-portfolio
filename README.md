# Amir Zulfadhli — Portfolio

Single-page portfolio for a full-stack developer working at the intersection of IoT, mechatronics, and machine learning.

**Live demo:** [PLACEHOLDER — deploy to Vercel/Netlify]
**Design:** Neo-Brutalist × Bento Grid × Dual-Theme (Tactile Lab / Cybernetic Control Room)
**Performance:** 90+ Lighthouse target across all categories

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 7](https://astro.build) (static SSG) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Fonts | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |
| Animations | CSS transitions + Intersection Observer API |
| Deployment | Static HTML — works on Vercel, Netlify, GitHub Pages |

**Zero runtime JS frameworks.** All interactivity uses vanilla JS inline scripts. No React/Vue/Svelte shipped to the client.

---

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Sticky nav + theme toggle + scroll-spy
│   │   ├── Footer.astro         # Dark footer with links
│   │   └── ImageModal.astro     # Reusable lightbox overlay
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Root layout (meta, fonts, theme init, global scripts)
│   │   └── MarkdownPostLayout.astro
│   ├── pages/
│   │   └── index.astro          # Single-page entry
│   ├── sections/
│   │   ├── Hero.astro           # Full-viewport hero with circuit SVG + dot grid
│   │   ├── About.astro          # Asymmetric 2-grid bio + framed photo
│   │   ├── Projects.astro       # Carousel with gallery, accordion, lightbox
│   │   ├── Skills.astro         # Skill chips with doc links + edit mode
│   │   ├── Playground.astro     # Interactive widgets (palette, haptic, sensor, color)
│   │   └── Contact.astro        # Form + 6 social link cards
│   ├── scripts/
│   │   └── menu.js              # (Legacy — kept for reference)
│   └── styles/
│       └── global.css           # Tailwind v4 @theme, dark variant, base styles, animations
└── astro.config.mjs
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 22.12.0
- **npm** ≥ 9

### Install & Run

```bash
# Clone the repo
git clone [PLACEHOLDER] && cd amir-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:4321

# Production build
npm run build
# → Output in ./dist/

# Preview production build locally
npm run preview
```

---

## Dual-Theme System

The portfolio implements a seamless Light/Dark mode system controlled by a toggle in the navigation bar.

### How It Works

1. **On first visit:** The site checks `localStorage` for a saved preference. If none is found, it respects the OS-level `prefers-color-scheme` setting.
2. **Theme toggle:** A sun/moon button in the navbar manually switches between themes. The choice is saved to `localStorage`.
3. **No FOUC:** A blocking `<script>` in `<head>` applies the correct `dark` class before the page renders.
4. **OS change listener:** If the user hasn't set a manual preference, switching the OS theme updates the site automatically.

### Color Themes

| Token | Light Mode ("Tactile Lab") | Dark Mode ("Cybernetic Control Room") |
|-------|---------------------------|---------------------------------------|
| Background | `#F5F6F8` (soft off-white) | `#0B0F17` (midnight obsidian) |
| Card surface | `#FFFFFF` (pure white) | `#161B26` (deep slate) |
| Primary text | `#12181A` (ink black) | `#E8ECF1` (light gray) |
| Primary accent | `#E2FF52` (acid yellow) | `#00F2FE` (electric cyan) |
| Secondary accent | `#FF6B4A` (coral) | `#7928CA` (electric violet) |
| Border | `#C5C9CC` (soft gray) | `#2A3447` (dark steel) |
| Card shadow | `4px 4px 0 0 #12181A` | `4px 4px 0 0 rgba(0,242,254,0.15)` |

---

## Features

### Sections

1. **Hero** — Name, title, tagline, `taghue` brand badge, sticker badge, CTA buttons, animated circuit SVG background, dot grid + scanline overlays
2. **About** — Asymmetric 2-grid layout: bio/philosophy/building list (2/3) + framed profile photo with doodle hover (1/3)
3. **Projects Carousel** — 5 projects with: 3-image gallery per card, tech stack links with official doc URLs, progressive disclosure accordion (deep-dive overview, architecture, key highlights), lightbox modal for full-resolution images, ← → carousel navigation
4. **Skills** — 6 skill categories with chip pills, direct documentation links, edit mode toggle (remove chips visually), level indicator bars
5. **Playground** — 6 interactive widgets:
   - **Palette Generator** — Generate harmonized color palettes, click to copy hex
   - **Haptic Toggle** — 3 toggle switches with ripple animation
   - **Sensor Calibration Tool** — ADC simulator with offset/gain sliders, live signal bar, terminal output
   - **Image Color Editor** — CSS filter editor (hue, saturation, contrast, brightness) with real-time preview and CSS copy
   - **ML Demo Placeholder** — Embed slot for Streamlit/Hugging Face iframe
   - **IoT Simulation Placeholder** — Embed slot for Wokwi/Tinkercad iframe
6. **Contact** — Form (Name, Email, Message) + 6 social link cards (GitHub, LinkedIn, YouTube, Instagram, X/Twitter, Email)

### Interactivity

- **Theme toggle:** Manual light/dark switch with localStorage persistence
- **Carousel:** Arrow buttons with disabled states, touch swipe support, responsive (1 card mobile, 3 cards desktop)
- **Image lightbox:** Click any project image → full-resolution overlay, keyboard navigation (← → Esc), caption display
- **Scroll animations:** Intersection Observer triggers fade-up, stagger-children, and doodle SVG underline reveals
- **Custom cursor:** CSS-only dot that morphs on interactive elements
- **Sticky navbar:** Backdrop blur, active section highlighting via Intersection Observer
- **Mobile menu:** Animated hamburger → full dropdown

---

## Customization

### Personal Content

All placeholder text is marked with `[PLACEHOLDER]` comments. Key files:

| File | What to change |
|------|---------------|
| `src/sections/Hero.astro` | Name, title, tagline |
| `src/sections/About.astro` | Bio text, profile photo URL, building list |
| `src/sections/Projects.astro` | Project data: names, descriptions, images, links, tech stack |
| `src/sections/Skills.astro` | Skill categories, names, documentation URLs |
| `src/sections/Playground.astro` | GitHub repo names, ML/IoT embed URLs |
| `src/sections/Contact.astro` | Email, social media URLs, closing tagline |
| `src/components/Footer.astro` | Name, attribution text |

### Colors & Theme Tokens

Color tokens are defined in `src/styles/global.css` via Tailwind v4's `@theme` directive:

```css
@theme {
  --color-bg: #F5F6F8;
  --color-surface: #FFFFFF;
  --color-ink: #12181A;
  --color-acid: #E2FF52;
  --color-sage: #9EB0A2;
  --color-coral: #FF6B4A;
  /* ... see global.css for full palette */
}
```

Dark mode overrides use the `.dark` class:

```css
.dark {
  --color-bg: #0B0F17;
  --color-surface: #161B26;
  --color-ink: #E8ECF1;
  /* ... */
}
```

### Typography

Fonts are loaded from Google Fonts in `src/layouts/BaseLayout.astro`. To switch:
1. Update the Google Fonts URL
2. Update the `--font-sans`, `--font-display`, `--font-mono` tokens in `global.css`

### Adding Projects

Edit the `projects` array in `src/sections/Projects.astro`. Each project supports:

```js
{
  title: 'Project Name',
  category: 'Category · Subcategory',
  shortDescription: 'One-paragraph summary',
  deepDive: {
    overview: 'Detailed overview paragraph',
    architecture: 'Architecture description',
    keyPoints: ['Point 1', 'Point 2', '...']
  },
  techStack: [{ name: 'React', url: 'https://react.dev/' }, ...],
  images: [
    { src: 'url', alt: 'description' },
    { src: 'url', alt: 'description' },
    { src: 'url', alt: 'description' },
  ],
  github: 'url',
  demo: 'url',
}
```

---

## Design System

### Card Component

```html
<div class="brutal-card p-6">
  <!-- card content -->
</div>
```

### Button Variants

```html
<!-- Primary (acid yellow / cyan) -->
<a href="#" class="brutal-btn">Click me</a>

<!-- Dark variant -->
<a href="#" class="brutal-btn brutal-btn--dark">Click me</a>

<!-- Coral / Violet variant -->
<button class="brutal-btn brutal-btn--coral">Submit</button>

<!-- Ghost (transparent) -->
<button class="brutal-btn brutal-btn--ghost">Cancel</button>
```

### Scroll Animations

Add `animate-on-scroll` class for fade-up reveal on scroll.
Add `stagger-children` to a parent container to stagger-animate its direct children.

### Lab Sliders

```html
<input type="range" class="lab-slider" min="0" max="100" value="50" />
```

---

## Deployment

### Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Framework preset: **Astro** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Netlify

1. Push to GitHub
2. Import repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Performance Notes

- **HTML-only output** — no JS framework shipped
- **CSS:** Tailwind purges unused styles
- **Images:** All use lazy loading (`loading="lazy"`) with explicit dimensions
- **Fonts:** `display=swap` prevents render-blocking; subset to latin only
- **Animations:** Intersection Observer + CSS transitions — no requestAnimationFrame loops, no layout thrashing
- **Theme init:** Blocking `<head>` script prevents flash of wrong theme (FOUC)

---

## License

MIT — adapt and reuse freely.

---

Built with Astro, Tailwind CSS, and late-night curiosity. No heavy frameworks harmed in the making. &#x1F9EA;
