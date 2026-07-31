<script setup lang="ts">
// Base site chrome: nav on top, page content, footer at the bottom.
//
// Pages with a dark full-bleed hero opt the nav into its transparent skin with
// `definePageMeta({ navOverlay: true })` — the header then floats over the hero
// instead of pushing it down.
const route = useRoute()
const navOverlay = computed(() => route.meta.navOverlay === true)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-brand-white font-sans text-brand-black">
    <AppNav :overlay="navOverlay" />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
