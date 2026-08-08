<script setup lang="ts">
// Sponsors and partners, grouped. Entries come from
// `composables/usePartners.ts`; the one-line descriptions live in the locale
// files (see the notes in that composable).
const { t } = useI18n()
const { groups, partnersIn } = usePartners()

const email = t('footer.email')

useHead({ title: () => `${t('site.name')} — ${t('nav.partners')}` })
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:py-24">
    <!-- Intro -->
    <header class="max-w-2xl">
      <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
        {{ t('partners.eyebrow') }}
      </p>
      <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {{ t('partners.heading') }}
      </h1>
      <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
        {{ t('partners.lead') }}
      </p>
    </header>

    <!-- One section per group: sponsors, academic, industry -->
    <section v-for="group in groups" :key="group" class="mt-16 sm:mt-24">
      <div class="max-w-2xl border-t border-brand-blueDark/15 pt-8">
        <h2 class="font-display text-2xl font-bold tracking-tight text-brand-black sm:text-3xl">
          {{ t(`partners.groups.${group}.title`) }}
        </h2>
        <p class="mt-3 text-brand-slate/80">
          {{ t(`partners.groups.${group}.body`) }}
        </p>
      </div>

      <ul class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PartnerCard
          v-for="partner in partnersIn(group)"
          :key="partner.id"
          :partner="partner"
        />
      </ul>
    </section>

    <!-- Become a partner -->
    <section class="mt-20 rounded-lg bg-brand-ink px-6 py-10 sm:mt-28 sm:px-10 sm:py-12">
      <div class="max-w-xl">
        <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
          {{ t('partners.cta.heading') }}
        </h2>
        <p class="mt-3 text-brand-white/70">
          {{ t('partners.cta.body') }}
        </p>
      </div>
      <a
        :href="`mailto:${email}`"
        class="mt-7 inline-flex items-center rounded-md bg-brand-blue px-6 py-3 font-medium text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
      >
        {{ t('partners.cta.action') }}
      </a>
    </section>
  </div>
</template>
