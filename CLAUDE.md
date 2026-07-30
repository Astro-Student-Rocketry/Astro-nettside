# CLAUDE.md — ASTRO HVL Website

Conventions for this repo. Read this before making changes and follow it consistently.

## What this is

The public website for **ASTRO**, the student rocketry association at Høgskulen på Vestlandet (HVL) in Bergen. Purpose: recruitment (HVL + UiB students), showcasing launches, and presenting the org to partners/industry. Connected to NORSTEC.

Audience: prospective student members (primarily Norwegian) and partners/industry (international). This is a content/marketing site, not an app — favor clarity, strong imagery, and fast load over cleverness.

Domain: **astrohvl.no** (already owned).

## Tech stack

- **Nuxt 3** (Vue 3) — statically generated (SSG)
- **Vue Composition API** with `<script setup>` — always, no Options API
- **Tailwind CSS** for all styling — no separate CSS files except the Tailwind entry and unavoidable globals
- **@nuxt/content** — markdown-driven content (see Launch posts below)
- **@nuxt/image** — all images go through `<NuxtImg>` / `<NuxtPicture>` for responsive sizing + lazy loading
- **@nuxtjs/i18n** — bilingual (see i18n below)
- **@nuxtjs/sitemap** — auto-generates sitemap.xml (do not hand-write it)
- Deploy: **Cloudflare Pages** (static)

Use TypeScript in `<script setup lang="ts">` where practical.

## Sitemap / routes

| Page | Route (NO) | Notes |
|------|-----------|-------|
| Home | `/` | Hero + highlights. Hardest page, sets the visual tone. |
| About | `/about` | Mission, founding story, NORSTEC tie-in. |
| Team | `/team` | Roster: name, role, photo, one line. |
| Partners | `/partners` | Logo grid + links. Sponsors, academic + industry partners. |
| Launch | `/launch` | **Listing of launch posts** (see @nuxt/content). |
| Join | `/join` | Recruitment + contact form. The conversion page. |

No dedicated Contact page — put email + socials in the footer.

## i18n

- **Norwegian is the default**, served at the root: `astrohvl.no/about`.
- **English is prefixed**: `astrohvl.no/en/about`.
- Every page exists in both languages. All user-facing strings live in translation files (`locales/no.json`, `locales/en.json`) — never hardcode display text in components.
- Provide a language switcher in the nav.

## Launch posts (@nuxt/content)

Launches are markdown files so **non-coders can add them without touching Vue**. This is a hard requirement — keep it simple.

- Location: `content/launch/*.md` (per language, follow the i18n content convention).
- Each post: frontmatter (title, date, location, cover image) + markdown body + inline images.
- The `/launch` page lists posts (newest first); each post gets its own page.
- Document the "how to add a launch" steps in the repo README (see Handoff).

Adding a launch = drop a `.md` file + images, push to GitHub, Cloudflare rebuilds. No deploy button, no code.

## Design tokens

Extend the Tailwind theme with these — reference tokens, never raw hex in components.

```
colors:
  brand:
    blue:      #4894B3   // primary — buttons, accents, fills
    blueDark:  #21607B   // secondary — hover, depth, text links on white
    black:     #000000   // text
    white:     #FFFFFF   // background
```

**Contrast rules (accessibility — follow these):**
- For **text links / small text on white**, use `blueDark` (#21607B) — it clears WCAG AA. The lighter `blue` (#4894B3) does **not** have enough contrast for small text on white.
- White text belongs on `blueDark` (#21607B) for reliable contrast. Be cautious with white text on the lighter `blue` — only use it for large text or big UI elements, not body copy.
- Use `blue` (#4894B3) mainly for fills, accents, and large elements; `blueDark` for anything text-sized.

**Typography:** `Inter` for everything (load via @nuxtjs/google-fonts or @fontsource). <!-- TODO: swap if ASTRO adopts a specific brand font, especially a display font for headings -->

**Feel:** clean, technical, confident. Generous whitespace. Let launch photos carry the visual weight. Avoid heavy component-library look — this should feel like ASTRO, not like a template.

## Conventions

- Components: `PascalCase.vue`, one component per file, grouped logically (e.g. `components/launch/`, `components/layout/`).
- Prefer small, composable components over large page files.
- Composables in `composables/`, prefixed `use…`.
- Images: always `<NuxtImg>`/`<NuxtPicture>`, never raw `<img>`. Keep source images reasonably sized before committing (a few hundred KB, not multi-MB phone originals).
- No `<form>`-only backend assumptions — the Join form uses Netlify Forms or Formspree (no server).
- Keep it accessible: alt text on images, semantic headings, keyboard-navigable nav.

## Deploy

- Static build for Cloudflare Pages.
- Build command: `npm run generate`
- Output directory: `.output/public`
- Pushing to `main` triggers a Cloudflare rebuild — that's the whole deploy flow. No manual steps.

## Don't

- Don't add a backend, database, or CMS server — this stays static (forms via Netlify/Formspree, content via markdown).
- Don't hardcode user-facing strings — they go in the i18n locale files.
- Don't use the Options API.
- Don't hand-write `sitemap.xml`.
- Don't over-engineer. Ship a fast, good-looking static site; improve iteratively.

## Working style

Build one page/concern per change, commit per feature so diffs stay small and reviewable. Start with Home (it defines the pattern), then About/Team/Partners, then Launch, then the Join form last.
