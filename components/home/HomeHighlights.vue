<script setup lang="ts">
// Highlights below the hero: a short intro + two alternating photo/text rows
// showcasing the hands-on work. All copy + alt text come from the locale files.
const { t } = useI18n()
</script>

<template>
  <section class="bg-brand-white py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4">
      <!-- Intro -->
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blueDark">
          {{ t('home.highlights.eyebrow') }}
        </p>
        <h2 class="mt-4 text-3xl font-bold tracking-tight text-brand-black sm:text-4xl">
          {{ t('home.highlights.heading') }}
        </h2>
        <p class="mt-5 text-lg text-brand-black/70">
          {{ t('home.highlights.lead') }}
        </p>
      </div>

      <!-- Feature: build / airframe (image left) -->
      <div class="mt-16 grid items-center gap-8 sm:mt-20 lg:grid-cols-2 lg:gap-16">
        <div class="aspect-[4/5] overflow-hidden rounded-lg bg-brand-blueDark/5">
          <NuxtImg
            src="/images/home/9a9f336d2c10bee6808d7be8f425423b.JPEG"
            :alt="t('home.highlights.build.alt')"
            class="h-full w-full object-cover"
            sizes="100vw lg:600px"
            width="800"
            height="1000"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-brand-blueDark">
            {{ t('home.highlights.build.title') }}
          </h3>
          <p class="mt-4 text-lg text-brand-black/70">
            {{ t('home.highlights.build.body') }}
          </p>
        </div>
      </div>

      <!-- Feature: avionics / electronics (image right) -->
      <div class="mt-14 grid items-center gap-8 sm:mt-20 lg:grid-cols-2 lg:gap-16">
        <div class="lg:order-2 aspect-[4/5] overflow-hidden rounded-lg bg-brand-blueDark/5">
          <NuxtImg
            src="/images/home/IMG_6075.JPG"
            :alt="t('home.highlights.avionics.alt')"
            class="h-full w-full object-cover"
            sizes="100vw lg:600px"
            width="800"
            height="1000"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>
        <div class="lg:order-1">
          <h3 class="text-2xl font-bold text-brand-blueDark">
            {{ t('home.highlights.avionics.title') }}
          </h3>
          <p class="mt-4 text-lg text-brand-black/70">
            {{ t('home.highlights.avionics.body') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
