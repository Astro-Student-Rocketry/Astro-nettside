# Astro HVL — Design System

The brand and interface system for **Astro HVL**, a student hybrid-rocketry team at Western Norway University of Applied Sciences (Høgskulen på Vestlandet / HVL) in Bergen, Norway.

> **Bergens høyeste punkt** — "Bergen's highest point."

---

## 1. Company / product context

**Astro HVL** is a student-run team founded in **2025** that designs, builds, tests, and flies **hybrid rockets** (solid fuel grain + liquid/gaseous oxidiser, here N₂O). It is a volunteer, cross-disciplinary club drawing students from across HVL — mechanical, electronics, computer engineering, and beyond.

The brand voice is **technical aerospace**: blueprint grids, telemetry readouts, precision, and a dark navy-and-blue palette pulled straight from the logo and the team's lead sponsor. The personality is serious and engineering-led, but proud and a little heroic — these are students putting real hardware in the air.

**Primary surface (built here):** a **marketing website** — home, projects, team, sponsors, and a recruitment/join flow.

### Sources provided by the user
- **Primary logo** — `astro HVL` wordmark with a line-art rocket motif, supplied white-on-transparent. Stored at `uploads/logo_files-1781462334982.png`; recoloured variants live in `assets/`.
- **Sponsor logo** — **Nammo** (Norwegian aerospace & defence company), supplied as blue artwork. Stored at `uploads/sponsor_logos-1781462435284.png` → `assets/sponsor-nammo.png`.
- Brief: "Student hybrid rocket club from Bergen, founded 2025. Bergens høyeste punkt. Colours: black, blue, white. Vibe: technical / aerospace-engineering. Type: sans + mono pairing."

No codebase, Figma, or existing website was provided — this system is built fresh from the logo, the stated brand attributes, and the sponsor mark. **Club facts beyond the brief (crew size of 38, specific apogee/thrust figures, sponsor tiers, programme names) are realistic placeholders for demonstration — replace them with real data.**

---

## 2. Content fundamentals (voice & tone)

**Voice:** confident, technical, understated. We write like engineers who are quietly proud — facts over hype, specifics over adjectives.

- **Person:** "we" for the team ("We run the full cycle in-house"), "you" when addressing recruits and sponsors ("If you want to fly hardware, we want you on the crew"). Never "I".
- **Casing:** Sentence case for headings and body. **Mono UPPERCASE with wide tracking** is reserved for eyebrows, labels, status, and data units (e.g. `BERGEN · EST. 2025 · HYBRID PROPULSION`, `TARGET APOGEE`).
- **Tone:** plainspoken and concrete. Prefer "First student hybrid motor to static fire in Bergen" over "revolutionary propulsion technology."
- **Numbers are first-class.** Telemetry-style stats (`3.2 km`, `982 N`, `14.6 s`, `N₂O`) carry the technical credibility — show them in mono with tabular figures.
- **Norwegian where it counts.** The motto *Bergens høyeste punkt* is used proudly. A 🇳🇴 flag in the footer is acceptable; otherwise **emoji are rare** — one celebratory 🚀 on success states is the ceiling. Not an emoji-forward brand.
- **Bilingual register:** copy is primarily English (the team recruits across programmes and courts international sponsors) with Norwegian flourishes (motto, place names like Inndalsveien, Bergen).

**Example copy:**
- Hero: *"Bergens høyeste punkt."* / *"Astro HVL is a student team designing, building, and flying hybrid rockets out of Western Norway University of Applied Sciences. Engineered by students, fired in Bergen."*
- Mission: *"Every gram, every joule, engineered by students."*
- Recruitment: *"Build a rocket. No experience required."* / *"No commitment — come see a build day first."*
- Status microcopy: `Flight ready`, `In build`, `Hold`, `Scrub`, `Static fired`.

---

## 3. Visual foundations

**Overall vibe:** a dark **blueprint** — navy surfaces overlaid with fine engineering grids, lit by a single decisive **brand blue** and the occasional **cyan telemetry** accent. Light sections (paper white / cool mist) carry long-form content; dark navy carries hero, featured, and sponsor moments. The system alternates **light ↔ dark bands** for rhythm.

### Colour
- **Brand blue `--blue-500` #1F6FEB** is the workhorse — buttons, links, focus, key figures, the accented word in a headline. One blue, used decisively (see `tokens/colors.css`).
- **Navy ramp (#060E1A → #1F4C77)** for dark surfaces; **`--navy-900` #0A1A2F** is the primary dark surface and the logo's home.
- **Cool slate neutrals** (navy-tinted greys) for text, borders, sunken fills — never pure neutral grey.
- **Cyan `--cyan-500` #2BC4E0** is a *sparing* telemetry accent (eyebrows on dark, grid lines, oxidiser badges). Not a second brand colour.
- **Semantic:** success green, warning amber, danger red, each with a soft tint background.
- **Nammo blue #005387** is the sponsor's mark colour — referenced, not adopted as a brand colour.
- A **dark theme scope** (`[data-theme="dark"]`) remaps every semantic alias; drop it on any navy section.

### Typography (see `tokens/typography.css`)
- **Display — Space Grotesk** (600/500): geometric, engineered; all headings and the hero. Tight tracking (`-0.02em`), balanced wrap.
- **Body/UI — IBM Plex Sans** (400–600): neutral, technical, legible.
- **Mono — IBM Plex Mono** (500/600): eyebrows, labels, units, and all telemetry/data readouts, with tabular figures and wide uppercase tracking on labels.
- **Scale:** modular, 11px mono micro → 84px hero. Body floors at 13px; never smaller.
- ⚠️ **Font substitution:** no brand font files were supplied. These three are Google Fonts chosen to fit the technical/telemetry direction. **If the club has licensed brand fonts, drop the files in and update `tokens/fonts.css`.**

### Spacing, radius, elevation (see `tokens/spacing.css`)
- **4px spacing base**, calm and consistent.
- **Tight, engineered corner radii** — 3–18px; cards use `--radius-lg` (12px), pills for chips. Nothing bubbly.
- **Cool, navy-tinted shadows**, restrained (xs → lg) plus a **brand glow** for emphasis. Cards default to `--shadow-sm`; hover lifts to `--shadow-lg`.

### Backgrounds & motifs
- **Cinematic full-bleed photography** anchors the hero — a real static-fire shot of the hybrid motor (`assets/static-fire.png`) fills the viewport with a dark gradient scrim for legibility, SpaceX-style: content anchored low, uppercase headline, a thin telemetry bar pinned to the bottom edge. The same photo backs the featured project card.
- **Blueprint grid** (`.bp-grid`) — fine 24/48px line grids, usually masked with a radial fade, over navy. Used on darker content bands and sponsor sections.
- **Radial brand-blue glow** behind feature content.
- Swap in more real launch/build photography as it's captured (cool-toned, high-contrast, a little grain suits the brand).
- No gradients-as-decoration beyond the single hero glow and the blue join-CTA panel. Avoid purple/multi-stop gradients entirely.

### Motion, hover, press
- **Easing:** `--ease-out` cubic-bezier(.16,1,.3,1) for entrances; quick `--dur-fast` 120ms for interactive feedback.
- **Hover:** buttons shift one step darker/lighter; cards **lift 3px** and gain a brand-tinted border + larger shadow; nav links lighten and gain a faint fill.
- **Press:** buttons `translateY(1px)` (subtle physical depress). No bounces.
- A single restrained **pulse** on the "recruiting" status dot. No infinite decorative loops.
- All motion respects `prefers-reduced-motion`.

### Borders, transparency, blur
- **1px hairline borders** in cool slate (light) or white-at-10% (dark).
- **Sticky header** uses navy at 88% with `backdrop-filter: blur(14px)` — the main use of blur.
- Transparency via `color-mix(... transparent)` for tints and dark-mode borders; no heavy glassmorphism.

### Layout rules
- Max content width `--container` 1200px (wide variant 1400px for hero/header/footer).
- Fluid gutter `clamp(1.25rem, 4vw, 4rem)`; 72px sticky header.
- Generous vertical section padding `clamp(64px, 8vw, 112px)`.

---

## 4. Iconography

- **System: [Lucide](https://lucide.dev)** (MIT) — 24×24, 2px stroke, round caps/joins. Loaded via CDN (`unpkg.com/lucide`) and wrapped by `ui_kits/website/icons.jsx` as `<Icon name="Rocket" />` (any Lucide PascalCase name). The clean technical stroke matches the brand precisely. **This is a substitution** — no icon set was provided — but it's a strong, conventional fit; swap only if the club adopts a specific set.
- **Brand/social logos:** Lucide deliberately dropped brand marks, so social icons (Instagram, LinkedIn, GitHub) come from the **simple-icons** package via jsDelivr CDN, tinted with a CSS filter. The Nammo sponsor mark is a supplied PNG in `assets/`.
- **No emoji as UI icons.** Emoji appear only as rare editorial flourishes (🚀 success, 🇳🇴 footer).
- **No hand-drawn/inline decorative SVG** beyond the grid/glow CSS motifs and the supplied logo art.
- Common icons in use: `Rocket`, `ArrowRight`, `Flame`, `CircuitBoard`, `Parachute`, `Box`, `Check`, `CircleCheck`, `Mail`.

---

## 5. Index / manifest

**Root**
- `styles.css` — the entry stylesheet consumers link (import-only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.
- `assets/` — logos, favicon, sponsor mark.

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css` (base element styles + `.eyebrow`, `.bp-grid`, `.container`, `.mono` utilities).

**Components** (`components/<group>/` — React, exported on `window.AstroHVLDesignSystem_1d7919`)
- `buttons/` — **Button** (primary · secondary · ghost · danger; sm/md/lg; icon, loading, fullWidth, href)
- `data/` — **Badge** (status, 6 variants, solid/dot) · **Tag** (pill chip, removable) · **Stat** (telemetry metric readout)
- `forms/` — **Input** (label, hint, error, prefix/suffix)
- `surfaces/` — **Card** (surface panel, interactive lift) · **Avatar** (photo / mono-initials)
- Each group has a `*.card.html` spec card; each component has `.d.ts` + `.prompt.md`.

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive Astro HVL marketing site (Home / Projects / Team / Sponsors + Join flow).
- Sections: `Header`, `Hero`, `Mission`, `Projects`, `Team`, `Sponsors`, `JoinFooter` (Join + Footer), `icons` (Lucide wrapper).
- **Bilingual (NO/EN).** All copy lives in `ui_kits/website/i18n.jsx` as `window.AHVL_I18N[lang]` (`no` = Norwegian bokmål default, `en` = English). A NO/EN toggle in the header switches language live and persists the choice to `localStorage` (`ahvl_lang`); `<html lang>` updates too. Section components are presentation-only and receive the resolved string tree as a `t` prop — to edit copy, edit `i18n.jsx`, not the components.

**Foundation cards** (`guidelines/cards/`) — specimen HTML for the Design System tab, grouped Colors / Type / Spacing / Brand.

### Known caveats / to replace with real data
- **Fonts** are Google-Fonts substitutes — swap for licensed brand fonts if they exist.
- **Lucide / simple-icons** are substituted icon sets (none were provided).
- **Club facts** (crew of 38, apogee 3.2 km, thrust 982 N, sponsor tiers/prices, programme names, address) are realistic placeholders.
- **Only the Nammo sponsor logo is real**; "HVL / Bergen Tech / Nordic Aero" are placeholder partner names.
- No real photography — the logo rocket art stands in for hero/feature imagery.
