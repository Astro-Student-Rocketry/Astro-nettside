<script setup lang="ts">
// Sponsors and partners. A light intro, then a full-bleed dark logo wall —
// dark because that is the background nearly every partner's logo is drawn for.
// Entries come from `composables/usePartners.ts`; the section headings live in
// the locale files.
const { t } = useI18n()
const { groups, partnersIn, partners } = usePartners()

const email = t('footer.email')

useHead({ title: () => `${t('site.name')} — ${t('nav.partners')}` })
</script>

<template>
  <div>
    <!-- Intro -->
    <header class="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div class="max-w-2xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('partners.eyebrow') }}
        </p>
        <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
          {{ t('partners.heading') }}
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
          {{ t('partners.lead') }}
        </p>
      </div>

      <p class="mt-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-slate/50">
        {{ t('partners.count', { count: partners.length }) }}
      </p>
    </header>

    <!-- Logo wall — full bleed, dark. -->
    <div class="relative overflow-hidden bg-brand-ink">
      <!-- Soft light from the top edge, so the wall doesn't read as a flat block. -->
      <div
        class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(72,148,179,0.18),transparent_70%)]"
        aria-hidden="true"
      />

      <div class="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <!-- One section per group: sponsors, academic, industry -->
        <section
          v-for="(group, i) in groups"
          :key="group"
          :class="i === 0 ? '' : 'mt-16 sm:mt-24'"
        >
          <div
            class="max-w-2xl pt-8"
            :class="i === 0 ? '' : 'border-t border-brand-white/10'"
          >
            <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
              {{ t(`partners.groups.${group}.title`) }}
            </h2>
            <p class="mt-3 leading-relaxed text-brand-white/60">
              {{ t(`partners.groups.${group}.body`) }}
            </p>
          </div>

          <ul class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            <PartnerCard
              v-for="partner in partnersIn(group)"
              :key="partner.id"
              :partner="partner"
            />
          </ul>
        </section>

        <!-- Become a partner -->
        <section class="mt-20 border-t border-brand-white/10 pt-12 sm:mt-28 sm:pt-16">
          <div class="max-w-xl">
            <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
              {{ t('partners.cta.heading') }}
            </h2>
            <p class="mt-3 leading-relaxed text-brand-white/70">
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
    </div>
  </div>
</template>
