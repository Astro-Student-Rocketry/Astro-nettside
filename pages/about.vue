<script setup lang="ts">
// About: mission, founding story, the hybrid motor and the NORSTEC tie-in.
// All copy lives in the locale files under `about.*`.
const { t } = useI18n()
const localePath = useLocalePath()

useHead({ title: () => `${t('site.name')} — ${t('nav.about')}` })

// Keys only — the titles and bodies come from the locale files.
const pillars = ['bergen', 'hands', 'open'] as const
const chapters = ['founding', 'firstLaunch', 'today'] as const
const hybridPoints = ['design', 'test', 'data'] as const
</script>

<template>
  <div>
    <!-- Intro -->
    <section class="mx-auto max-w-6xl px-4 pt-16 sm:pt-24">
      <header class="max-w-3xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('about.eyebrow') }}
        </p>
        <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
          {{ t('about.heading') }}
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
          {{ t('about.lead') }}
        </p>
      </header>

      <div class="mt-12 aspect-[16/9] overflow-hidden rounded-lg bg-brand-blueDark/5 sm:mt-16">
        <NuxtImg
          src="/images/home/IMG_6075.JPG"
          :alt="t('about.heroImageAlt')"
          class="h-full w-full object-cover"
          sizes="100vw md:1200px"
          width="1600"
          height="900"
          format="webp"
          quality="80"
        />
      </div>
    </section>

    <!-- Mission -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div class="max-w-2xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('about.mission.eyebrow') }}
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {{ t('about.mission.heading') }}
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
          {{ t('about.mission.lead') }}
        </p>
      </div>

      <ul class="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        <li v-for="pillar in pillars" :key="pillar" class="border-t border-brand-blueDark/15 pt-6">
          <h3 class="font-display text-xl font-bold text-brand-blueDark">
            {{ t(`about.mission.pillars.${pillar}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-brand-slate/80">
            {{ t(`about.mission.pillars.${pillar}.body`) }}
          </p>
        </li>
      </ul>
    </section>

    <!-- Slogan -->
    <section class="bg-brand-ink">
      <figure class="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
        <blockquote
          class="font-display text-3xl font-bold tracking-tight text-brand-white sm:text-5xl"
        >
          “{{ t('about.slogan.quote') }}”
        </blockquote>
        <figcaption class="mx-auto mt-5 max-w-xl text-brand-white/60">
          {{ t('about.slogan.caption') }}
        </figcaption>
      </figure>
    </section>

    <!-- Founding story -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="lg:order-last">
          <div class="aspect-[4/5] overflow-hidden rounded-lg bg-brand-blueDark/5">
            <NuxtImg
              src="/images/home/IMG_9051.JPG"
              :alt="t('about.story.imageAlt')"
              class="h-full w-full object-cover"
              sizes="100vw lg:600px"
              width="800"
              height="1000"
              format="webp"
              quality="80"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
            {{ t('about.story.eyebrow') }}
          </p>
          <h2
            class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl"
          >
            {{ t('about.story.heading') }}
          </h2>

          <!-- Chapters, oldest first -->
          <ol class="mt-10 space-y-8 border-l border-brand-blueDark/20 pl-6">
            <li v-for="chapter in chapters" :key="chapter" class="relative">
              <span
                class="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-brand-blue"
                aria-hidden="true"
              />
              <h3 class="font-display text-xl font-bold text-brand-blueDark">
                {{ t(`about.story.${chapter}.title`) }}
              </h3>
              <p class="mt-3 leading-relaxed text-brand-slate/80">
                {{ t(`about.story.${chapter}.body`) }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Hybrid motor -->
    <section class="bg-brand-blueDark/5 py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-4">
        <div class="max-w-3xl">
          <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
            {{ t('about.hybrid.eyebrow') }}
          </p>
          <h2
            class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl"
          >
            {{ t('about.hybrid.heading') }}
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
            {{ t('about.hybrid.body') }}
          </p>
        </div>

        <ul class="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <li
            v-for="point in hybridPoints"
            :key="point"
            class="rounded-lg bg-brand-white p-6 shadow-sm"
          >
            <h3 class="font-display text-lg font-bold text-brand-blueDark">
              {{ t(`about.hybrid.points.${point}.title`) }}
            </h3>
            <p class="mt-3 leading-relaxed text-brand-slate/80">
              {{ t(`about.hybrid.points.${point}.body`) }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- NORSTEC -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
            {{ t('about.norstec.eyebrow') }}
          </p>
          <h2
            class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl"
          >
            {{ t('about.norstec.heading') }}
          </h2>
        </div>
        <div>
          <p class="text-lg leading-relaxed text-brand-slate/80">
            {{ t('about.norstec.body') }}
          </p>
          <p class="mt-6 border-l-2 border-brand-blue pl-5 leading-relaxed text-brand-slate/70">
            {{ t('about.norstec.aside') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Recruitment nudge -->
    <section class="mx-auto max-w-6xl px-4 pb-20 sm:pb-28">
      <div class="rounded-lg bg-brand-ink px-6 py-10 sm:px-10 sm:py-12">
        <div class="max-w-xl">
          <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
            {{ t('about.cta.heading') }}
          </h2>
          <p class="mt-3 text-brand-white/70">
            {{ t('about.cta.body') }}
          </p>
        </div>
        <div class="mt-7 flex flex-wrap items-center gap-4">
          <NuxtLink
            :to="localePath('/join')"
            class="inline-flex items-center rounded-md bg-brand-blue px-6 py-3 font-medium text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
          >
            {{ t('about.cta.action') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/launch')"
            class="inline-flex items-center rounded-md border border-brand-white/25 px-6 py-3 font-medium text-brand-white transition-colors hover:border-brand-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
          >
            {{ t('about.cta.secondary') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
