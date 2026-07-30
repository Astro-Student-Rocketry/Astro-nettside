<script setup lang="ts">
const { t } = useI18n()
useHead({ title: () => `${t('site.name')} — ${t('nav.join')}` })
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-16">
    <h1 class="text-3xl font-bold text-brand-blueDark">{{ t('nav.join') }}</h1>
  </section>
</template>
