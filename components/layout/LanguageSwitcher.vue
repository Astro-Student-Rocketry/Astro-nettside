<script setup lang="ts">
// Toggle between Norwegian (/) and English (/en/), preserving the current
// route via useSwitchLocalePath(). `overlay` matches the dark nav skin.
defineProps<{ overlay?: boolean }>()

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
    :class="[
      'rounded-md px-2.5 py-2 font-mono text-xs font-medium tracking-[0.18em] transition-colors',
      overlay
        ? 'text-brand-white/70 hover:bg-brand-white/10 hover:text-brand-white'
        : 'text-brand-blueDark hover:bg-brand-black/5',
    ]"
    :aria-label="$t('lang.switch')"
  >
    {{ l.code.toUpperCase() }}
  </NuxtLink>
</template>
