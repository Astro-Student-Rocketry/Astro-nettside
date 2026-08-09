import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Launch posts are markdown files so non-coders can add them without
// touching Vue. Drop a .md file in content/<locale>/launch/ + images, push to
// GitHub, and Cloudflare rebuilds. See CLAUDE.md → Launch posts and the
// "Adding a launch post" section of the README.
const launchSchema = z.object({
  title: z.string(),
  // Quoted ISO date, e.g. "2026-05-17" — the quotes matter, without them YAML
  // hands us a Date object and the build fails.
  date: z.string(),
  location: z.string().optional(),
  // Path under public/, e.g. /images/launch/first-flight.jpg
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  // One or two sentences, shown on the /launch listing.
  summary: z.string().optional(),
  // What the entry is and how it went — rendered as badges on the listing and
  // the post. Both default to a successful launch when left out.
  type: z.enum(['launch', 'motor-test']).optional(),
  status: z.enum(['success', 'aborted']).optional(),
})

// One collection per language. Filenames are shared between the two
// (content/no/launch/x.md ↔ content/en/launch/x.md) so the language switcher
// lands on the same post instead of a 404.
export default defineContentConfig({
  collections: {
    launch_no: defineCollection({
      type: 'page',
      source: { include: 'no/launch/**/*.md', prefix: '/launch' },
      schema: launchSchema,
    }),
    launch_en: defineCollection({
      type: 'page',
      source: { include: 'en/launch/**/*.md', prefix: '/launch' },
      schema: launchSchema,
    }),
  },
})
