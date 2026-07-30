import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Launch posts are markdown files so non-coders can add them without
// touching Vue. Drop a .md file in content/launch/ + images, push to
// GitHub, and Cloudflare rebuilds. See CLAUDE.md → Launch posts.
export default defineContentConfig({
  collections: {
    launch: defineCollection({
      type: 'page',
      source: 'launch/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        location: z.string().optional(),
        cover: z.string().optional(),
      }),
    }),
  },
})
