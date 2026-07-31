<script setup lang="ts">
// Home hero: full-bleed motor-test footage behind a one-line statement of what
// ASTRO is and the primary "Join" CTA. The nav floats on top of this section
// (layouts/default.vue → navOverlay). All copy comes from the locale files.
const { t } = useI18n()
const localePath = useLocalePath()

// Poster frame — also the still fallback wherever the video can't play.
const poster = '/images/home/IMG_9051.JPG'

const video = ref<HTMLVideoElement | null>(null)
onMounted(() => {
  // Respect reduced-motion: hold the poster frame instead of looping footage.
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    video.value?.pause()
  }
})

const facts = [
  { label: 'home.hero.facts.foundedLabel', value: 'home.hero.facts.foundedValue' },
  { label: 'home.hero.facts.baseLabel', value: 'home.hero.facts.baseValue' },
  { label: 'home.hero.facts.networkLabel', value: 'home.hero.facts.networkValue' },
] as const
</script>

<template>
  <section
    class="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-ink"
  >
    <!-- Background: motor-trim footage, with a photo poster as fallback. -->
    <video
      ref="video"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/images/home/motor-trim.mp4" type="video/mp4" />
    </video>

    <!-- Overlays: vertical for legibility over any frame, horizontal so the
         copy column keeps contrast while the right side stays open. -->
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-ink/70 via-brand-ink/40 to-brand-ink/95"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink/70 via-brand-ink/20 to-transparent"
    />

    <!-- Copy sits at the bottom of the frame; pt clears the floating nav. -->
    <div
      class="mx-auto flex w-full max-w-wide flex-1 items-end px-5 pb-12 pt-[84px] sm:px-8 sm:pb-16 lg:px-14 lg:pb-24"
    >
      <div class="max-w-[880px] py-16 text-brand-white">
        <p class="mb-7 flex items-center gap-3">
          <span
            class="h-[7px] w-[7px] shrink-0 rounded-full bg-brand-blue motion-safe:animate-pulseDot"
            aria-hidden="true"
          />
          <span
            class="font-mono text-[11.5px] font-medium uppercase tracking-[0.26em] text-brand-white/70"
          >
            {{ t('home.hero.eyebrow') }}
          </span>
        </p>

        <h1
          class="mb-7 text-balance font-display text-[clamp(2.875rem,6.4vw,5.75rem)] font-bold leading-[0.96] tracking-[-0.03em]"
        >
          {{ t('home.hero.headlineLead') }}<br />
          <span class="text-brand-blue">{{ t('home.hero.headlineAccent') }}</span>
        </h1>

        <p
          class="mb-10 max-w-[620px] text-pretty text-base leading-relaxed text-brand-white/80 lg:text-[19px]"
        >
          {{ t('home.hero.subline') }}
        </p>

        <div class="flex flex-wrap items-center gap-3.5">
          <NuxtLink
            :to="localePath('join')"
            class="inline-flex items-center gap-2.5 rounded-[7px] bg-brand-blue px-6 py-4 text-[15px] font-semibold text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white active:translate-y-px"
          >
            {{ t('home.hero.cta') }}
            <span class="text-[17px] leading-none" aria-hidden="true">&rarr;</span>
          </NuxtLink>

          <NuxtLink
            :to="localePath('launch')"
            class="inline-flex items-center rounded-[7px] border border-brand-white/30 px-6 py-4 text-[15px] font-semibold text-brand-white transition-colors hover:border-brand-white/50 hover:bg-brand-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white"
          >
            {{ t('home.hero.secondaryCta') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Instrumentation strip: the org at a glance. -->
    <div
      class="relative border-t border-brand-white/15 bg-brand-ink/40 backdrop-blur"
    >
      <dl
        class="mx-auto flex max-w-wide flex-wrap gap-x-12 gap-y-6 px-5 py-5 sm:px-8 lg:gap-x-24 lg:px-14"
      >
        <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-1.5">
          <dt
            class="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-brand-white/50"
          >
            {{ t(fact.label) }}
          </dt>
          <dd
            class="font-mono text-[17px] font-semibold tabular-nums text-brand-white"
          >
            {{ t(fact.value) }}
          </dd>
        </div>

        <div class="flex flex-col gap-1.5 lg:ml-auto">
          <dt
            class="font-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-brand-white/50"
          >
            {{ t('home.hero.facts.intakeLabel') }}
          </dt>
          <dd class="font-mono text-[17px] font-semibold text-brand-blue">
            {{ t('home.hero.facts.intakeValue') }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
