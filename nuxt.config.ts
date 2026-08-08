// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
  ],

  app: {
    head: {
      // Favicons live in public/ and are cropped from the rocket in the ASTRO
      // logo (see the comment in public/favicon.svg). The tile is opaque brand
      // blue, so the mark stays legible on both light and dark browser chrome.
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
  },

  // Allow logical grouping (e.g. components/layout/) while still referencing
  // components by filename (<AppNav />, not <LayoutAppNav />).
  components: [{ path: '~/components', pathPrefix: false }],

  // Canonical site URL — used by the sitemap module.
  site: {
    url: 'https://astrohvl.no',
    name: 'ASTRO HVL',
  },

  // Bilingual: Norwegian at the root (/), English prefixed at /en/.
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'no',
    // Keep locale files at the repo root in `locales/` rather than the
    // v9 default (`i18n/locales/`): disable the restructured dir, then
    // langDir resolves relative to the project root.
    restructureDir: false,
    langDir: 'locales',
    locales: [
      { code: 'no', language: 'nb-NO', name: 'Norsk', file: 'no.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    // Deterministic SSG — no browser-based redirects.
    detectBrowserLanguage: false,
    baseUrl: 'https://astrohvl.no',
    bundle: {
      // Opt out of the v9 translation-directive optimization (deprecated in v10).
      optimizeTranslationDirective: false,
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700], // body copy
      Archivo: [500, 600, 700], // headings
      'IBM+Plex+Mono': [500, 600], // eyebrows, labels, figures
    },
    display: 'swap',
  },

  // Static generation for Cloudflare Pages.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
