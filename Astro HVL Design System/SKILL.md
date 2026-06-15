---
name: astro-hvl-design
description: Use this skill to generate well-branded interfaces and assets for Astro HVL, the student hybrid-rocketry team at HVL Bergen — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/` for the foundations, `components/` for reusable React primitives, `ui_kits/website/` for full-screen recreations, `guidelines/cards/` for specimens, `assets/` for logos).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Quick start:
- Link `styles.css` for all design tokens (colors, type, spacing) and base utilities (`.eyebrow`, `.bp-grid`, `.container`, `.mono`).
- The brand is dark-forward technical aerospace: navy surfaces + blueprint grids + one decisive brand blue (`#1F6FEB`) + sparing cyan telemetry accent. Add `data-theme="dark"` to any navy section. Headings in Space Grotesk, body in IBM Plex Sans, all labels/data in IBM Plex Mono uppercase.
- Components are exposed on `window.AstroHVLDesignSystem_1d7919` after loading `_ds_bundle.js`.
- Icons: Lucide (`<Icon name="Rocket" />` wrapper in `ui_kits/website/icons.jsx`); social marks via simple-icons CDN.
- Logos live in `assets/` (white, navy, blue variants + favicon). Motto: *Bergens høyeste punkt*.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
