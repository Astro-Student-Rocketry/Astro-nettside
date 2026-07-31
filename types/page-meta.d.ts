// Custom `definePageMeta` keys used by the site chrome.
declare module '#app' {
  interface PageMeta {
    /** Float the nav transparently over a dark full-bleed hero. */
    navOverlay?: boolean
  }
}

export {}
