<script setup lang="ts">
// Toggle between Norwegian (/) and English (/en/), preserving the current
// route via useSwitchLocalePath().
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const available = computed(() =>
  (locales.value as { code: string; name?: string }[]).filter(
    (l) => l.code !== locale.value,
  ),
)
</script>

<template>
  <NuxtLink
    v-for="l in available"
    :key="l.code"
    :to="switchLocalePath(l.code)"
    class="text-sm font-medium text-brand-blueDark underline-offset-4 hover:underline"
    :aria-label="$t('lang.switch')"
  >
    {{ l.code.toUpperCase() }}
  </NuxtLink>
</template>
