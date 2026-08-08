<script setup lang="ts">
import type { TeamMember } from '~/composables/useTeam'

// One roster entry: portrait, name, role and a single line of context.
// Role/blurb are looked up per member id so they stay in the locale files.
const props = defineProps<{ member: TeamMember }>()

const { t } = useI18n()

const role = computed(() => t(`team.members.${props.member.id}.role`))
const blurb = computed(() => t(`team.members.${props.member.id}.blurb`))
</script>

<template>
  <li class="group">
    <div class="aspect-[4/5] overflow-hidden rounded-lg bg-brand-blueDark/5">
      <NuxtImg
        :src="member.image"
        :alt="t('team.portraitAlt', { name: member.name, role })"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="100vw sm:50vw lg:340px"
        width="800"
        height="1000"
        format="webp"
        quality="80"
        loading="lazy"
      />
    </div>

    <h3 class="mt-5 font-display text-lg font-semibold tracking-tight text-brand-black">
      {{ member.name }}
    </h3>
    <p class="mt-1 font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-blueDark">
      {{ role }}
    </p>
    <p class="mt-3 text-sm leading-relaxed text-brand-slate/80">
      {{ blurb }}
    </p>
  </li>
</template>
