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

Launch posts are markdown files — no Vue, no deploy button. Add a file, push to
GitHub, and Cloudflare rebuilds.

1. **Add the images.** Put photos in `public/images/launch/`. Resize them first
   (a few hundred KB each, not multi-MB phone originals).
2. **Create two markdown files with the same filename** — the Norwegian post in
   `content/no/launch/`, the English one in `content/en/launch/`. Matching
   filenames are what let the language switcher move between them, so
   `content/no/launch/helios-1.md` needs `content/en/launch/helios-1.md`. Use a
   short, lowercase, dash-separated name; it becomes the URL.
3. **Fill in the frontmatter** at the top of each file:

   ```markdown
   ---
   title: "Helios 1"
   date: "2026-05-17"
   location: "Bergen"
   cover: /images/launch/helios-1.jpg
   coverAlt: "Helios 1 leaving the rail"
   summary: "One or two sentences, shown on the /launch listing."
   ---

   The report goes here, as normal markdown.
   ```

   `title` and `date` are required; the rest are optional. **Keep the quotes
   around the date** — without them the build fails. Write the date as
   `"YYYY-MM-DD"`; the site formats it per language.

4. **Write the body** in markdown: `##` headings, `**bold**`, bullet lists,
   links, and images as `![Alt text](/images/launch/whatever.jpg)`.
5. **Push to `main`.** The post appears at `/launch/helios-1` (and
   `/en/launch/helios-1`), newest first on the listing.

Copy `content/no/launch/coming-soon.md` as a starting point.
