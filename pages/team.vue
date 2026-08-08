<script setup lang="ts">
// The roster: the board plus one section per technical team. Members come from
// `composables/useTeam.ts`; their roles and one-liners live in the locale files
// (see the notes in that composable).
const { t } = useI18n()
const localePath = useLocalePath()
const { groups, membersIn } = useTeam()

useHead({ title: () => `${t('site.name')} — ${t('nav.team')}` })
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:py-24">
    <!-- Intro -->
    <header class="max-w-2xl">
      <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
        {{ t('team.eyebrow') }}
      </p>
      <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {{ t('team.heading') }}
      </h1>
      <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
        {{ t('team.lead') }}
      </p>
    </header>

    <!-- One section per group: board, propulsion, structures, avionics -->
    <section v-for="group in groups" :key="group" class="mt-16 sm:mt-24">
      <div class="max-w-2xl border-t border-brand-blueDark/15 pt-8">
        <h2 class="font-display text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
          {{ t(`team.groups.${group}.title`) }}
        </h2>
        <p class="mt-3 text-brand-slate/80">
          {{ t(`team.groups.${group}.body`) }}
        </p>
      </div>

      <ul
        class="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <TeamMemberCard
          v-for="member in membersIn(group)"
          :key="member.id"
          :member="member"
        />
      </ul>
    </section>

    <!-- Recruitment nudge -->
    <section class="mt-20 rounded-lg bg-brand-ink px-6 py-10 sm:mt-28 sm:px-10 sm:py-12">
      <div class="max-w-xl">
        <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
          {{ t('team.cta.heading') }}
        </h2>
        <p class="mt-3 text-brand-white/70">
          {{ t('team.cta.body') }}
        </p>
      </div>
      <NuxtLink
        :to="localePath('/join')"
        class="mt-7 inline-flex items-center rounded-md bg-brand-blue px-6 py-3 font-medium text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
      >
        {{ t('team.cta.action') }}
      </NuxtLink>
    </section>
  </div>
</template>
