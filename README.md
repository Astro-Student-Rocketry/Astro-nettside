# Astro-nettside

Public website for **ASTRO**, the student rocketry association at Høgskulen på
Vestlandet (HVL). Built with Nuxt 3 (SSG), Tailwind CSS, @nuxt/content, i18n
(Norwegian default at `/`, English at `/en/`) and deployed to Cloudflare Pages.

See [`CLAUDE.md`](./CLAUDE.md) for conventions.

## Local development

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
```

Other scripts:

```bash
npm run generate   # static build for Cloudflare Pages → .output/public
npm run preview    # preview the production build locally
```

## Deploy

Pushing to `main` triggers a Cloudflare Pages rebuild — that's the whole flow.

- Build command: `npm run generate`
- Output directory: `.output/public`

## Adding a launch post

_(Coming with the Launch feature.)_ Launch posts will live as markdown files in
`content/launch/` so they can be added without touching Vue — drop a `.md` file
plus images, push to GitHub, and Cloudflare rebuilds.
