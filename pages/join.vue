<script setup lang="ts">
// Recruitment page. There is no form on the site itself — the whole page
// funnels to an external Google Form (no backend, per CLAUDE.md).
const { t } = useI18n()

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER — replace with the real ASTRO application form URL.
// Paste the link from Google Forms → Send → the link (🔗) tab.
// This is the only place the URL appears; both buttons on the page use it.
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_FORM_URL = 'https://forms.gle/REPLACE-ME-WITH-ASTRO-FORM-LINK'

useHead({ title: () => `${t('site.name')} — ${t('nav.join')}` })

const email = computed(() => t('footer.email'))

// Keys only — copy lives in the locale files.
const benefits = ['hands', 'people', 'network'] as const
const roles = ['propulsion', 'structures', 'avionics', 'operations'] as const
const steps = ['apply', 'meet', 'build'] as const
const questions = ['experience', 'study', 'time', 'year'] as const
</script>

<template>
  <div>
    <!-- Intro + primary call to action -->
    <section class="mx-auto max-w-6xl px-4 pt-16 sm:pt-24">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
            {{ t('join.eyebrow') }}
          </p>
          <h1
            class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl"
          >
            {{ t('join.heading') }}
          </h1>
          <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
            {{ t('join.lead') }}
          </p>

          <a
            :href="GOOGLE_FORM_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-9 inline-flex items-center gap-3 rounded-md bg-brand-blueDark px-8 py-4 text-lg font-semibold text-brand-white transition-colors hover:bg-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueDark"
          >
            {{ t('join.cta.action') }}
            <span class="sr-only">({{ t('join.cta.newTab') }})</span>
            <svg
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
          <p class="mt-4 text-sm text-brand-slate/70">
            {{ t('join.cta.note') }}
          </p>
        </div>

        <div class="aspect-[4/3] overflow-hidden rounded-lg bg-brand-blueDark/5">
          <NuxtImg
            src="/images/home/9a9f336d2c10bee6808d7be8f425423b.JPEG"
            :alt="t('join.imageAlt')"
            class="h-full w-full object-cover"
            sizes="100vw lg:600px"
            width="800"
            height="600"
            format="webp"
            quality="80"
          />
        </div>
      </div>
    </section>

    <!-- Why join -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div class="max-w-2xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('join.why.eyebrow') }}
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {{ t('join.why.heading') }}
        </h2>
      </div>

      <ul class="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        <li v-for="item in benefits" :key="item" class="border-t border-brand-blueDark/15 pt-6">
          <h3 class="font-display text-xl font-bold text-brand-blueDark">
            {{ t(`join.why.items.${item}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-brand-slate/80">
            {{ t(`join.why.items.${item}.body`) }}
          </p>
        </li>
      </ul>
    </section>

    <!-- Roles -->
    <section class="bg-brand-blueDark/5 py-20 sm:py-28">
      <div class="mx-auto max-w-6xl px-4">
        <div class="max-w-2xl">
          <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
            {{ t('join.roles.eyebrow') }}
          </p>
          <h2
            class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl"
          >
            {{ t('join.roles.heading') }}
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
            {{ t('join.roles.lead') }}
          </p>
        </div>

        <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="role in roles" :key="role" class="rounded-lg bg-brand-white p-6 shadow-sm">
            <h3 class="font-display text-lg font-bold text-brand-blueDark">
              {{ t(`join.roles.items.${role}.title`) }}
            </h3>
            <p class="mt-3 leading-relaxed text-brand-slate/80">
              {{ t(`join.roles.items.${role}.body`) }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- How it works -->
    <section class="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div class="max-w-2xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('join.how.eyebrow') }}
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {{ t('join.how.heading') }}
        </h2>
      </div>

      <ol class="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        <li v-for="(step, index) in steps" :key="step">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-mono text-sm font-semibold text-brand-ink"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>
          <h3 class="mt-5 font-display text-xl font-bold text-brand-blueDark">
            {{ t(`join.how.steps.${step}.title`) }}
          </h3>
          <p class="mt-3 leading-relaxed text-brand-slate/80">
            {{ t(`join.how.steps.${step}.body`) }}
          </p>
        </li>
      </ol>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-6xl px-4 pb-20 sm:pb-28">
      <div class="max-w-2xl">
        <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('join.faq.eyebrow') }}
        </p>
        <h2 class="mt-4 font-display text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {{ t('join.faq.heading') }}
        </h2>
      </div>

      <dl class="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        <div v-for="question in questions" :key="question">
          <dt class="font-display text-lg font-bold text-brand-black">
            {{ t(`join.faq.items.${question}.question`) }}
          </dt>
          <dd class="mt-3 leading-relaxed text-brand-slate/80">
            {{ t(`join.faq.items.${question}.answer`) }}
          </dd>
        </div>
      </dl>
    </section>

    <!-- Closing call to action -->
    <section class="mx-auto max-w-6xl px-4 pb-20 sm:pb-28">
      <div class="rounded-lg bg-brand-ink px-6 py-12 text-center sm:px-10 sm:py-16">
        <h2 class="font-display text-2xl font-bold tracking-tight text-brand-white sm:text-4xl">
          {{ t('join.closing.heading') }}
        </h2>
        <p class="mx-auto mt-4 max-w-md text-brand-white/70">
          {{ t('join.closing.body') }}
        </p>

        <a
          :href="GOOGLE_FORM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-9 inline-flex items-center gap-3 rounded-md bg-brand-blue px-8 py-4 text-lg font-semibold text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
        >
          {{ t('join.closing.action') }}
          <span class="sr-only">({{ t('join.cta.newTab') }})</span>
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>

        <i18n-t keypath="join.cta.fallback" tag="p" class="mt-6 text-sm text-brand-white/60">
          <template #email>
            <a :href="`mailto:${email}`" class="underline hover:text-brand-white">{{ email }}</a>
          </template>
        </i18n-t>
      </div>
    </section>
  </div>
</template>
