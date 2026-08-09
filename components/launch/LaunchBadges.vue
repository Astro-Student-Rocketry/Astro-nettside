<script setup lang="ts">
// Type + outcome badges for a launch post, both from frontmatter. `type` falls
// back to "launch"; `status` renders nothing when unset, so a post without an
// outcome yet (a placeholder, an upcoming flight) doesn't claim success.
// Labels live in the locale files under `launch.badges.*`.
const props = defineProps<{
  type?: 'launch' | 'motor-test'
  status?: 'success' | 'aborted'
}>()

const { t } = useI18n()

const base =
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em]'

// A motor test reads as the quieter, secondary thing; a launch is the headline.
const typeBadge = computed(() => {
  const type = props.type ?? 'launch'
  return type === 'motor-test'
    ? { label: t('launch.badges.type.motorTest'), class: 'bg-brand-ink/5 text-brand-slate' }
    : { label: t('launch.badges.type.launch'), class: 'bg-brand-blue/15 text-brand-blueDark' }
})

// Aborted is deliberately unfilled — it should not read as a win at a glance.
// (Filled blueDark clears AA for small text; the outlined variant uses ink.)
const statusBadge = computed(() => {
  if (!props.status) return null
  return props.status === 'aborted'
    ? {
        label: t('launch.badges.status.aborted'),
        class: 'bg-brand-white text-brand-ink ring-1 ring-brand-ink/30',
        dot: 'bg-brand-ink/40',
      }
    : {
        label: t('launch.badges.status.success'),
        class: 'bg-brand-blueDark text-brand-white',
        dot: 'bg-brand-white/70',
      }
})
</script>

<template>
  <p class="flex flex-wrap items-center gap-2">
    <span :class="[base, typeBadge.class]">{{ typeBadge.label }}</span>
    <span v-if="statusBadge" :class="[base, statusBadge.class]">
      <span class="h-1.5 w-1.5 rounded-full" :class="statusBadge.dot" aria-hidden="true" />
      {{ statusBadge.label }}
    </span>
  </p>
</template>
