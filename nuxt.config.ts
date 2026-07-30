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
    families: { Inter: [400, 500, 600, 700] },
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
