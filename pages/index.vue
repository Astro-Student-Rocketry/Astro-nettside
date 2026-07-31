<script setup lang="ts">
const { t } = useI18n()

// The hero is a dark full-bleed section — float the nav on top of it.
definePageMeta({ navOverlay: true })

useHead({ title: () => `${t('site.name')} — ${t('nav.home')}` })
</script>

<template>
  <HomeHero />
  <HomeHighlights />
</template>
