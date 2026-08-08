<script setup lang="ts">
// Listing of launch posts, newest first. Posts are markdown files in
// content/<locale>/launch/ — see the README for how to add one.
const { t } = useI18n()
const localePath = useLocalePath()
const { collection, formatDate } = useLaunchPosts()

const { data: posts } = await useAsyncData(
  () => `launch-list-${collection.value}`,
  () => queryCollection(collection.value).order('date', 'DESC').all(),
  { watch: [collection] },
)

useHead({ title: () => `${t('site.name')} — ${t('nav.launch')}` })
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-16 sm:py-24">
    <header class="max-w-2xl">
      <p class="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-blueDark">
        {{ t('launch.eyebrow') }}
      </p>
      <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {{ t('launch.heading') }}
      </h1>
      <p class="mt-5 text-lg leading-relaxed text-brand-slate/80">
        {{ t('launch.lead') }}
      </p>
    </header>

    <ul v-if="posts?.length" class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="localePath(post.path)" class="group block">
          <div class="aspect-[3/2] overflow-hidden rounded-lg bg-brand-blueDark/5">
            <NuxtImg
              v-if="post.cover"
              :src="post.cover"
              :alt="post.coverAlt ?? post.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="100vw sm:600px"
              width="800"
              height="533"
              format="webp"
              quality="80"
              loading="lazy"
            />
          </div>

          <p class="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-brand-blueDark">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span v-if="post.location"> · {{ post.location }}</span>
          </p>
          <h2
            class="mt-3 font-display text-2xl font-bold tracking-tight text-brand-black transition-colors group-hover:text-brand-blueDark"
          >
            {{ post.title }}
          </h2>
          <p v-if="post.summary" class="mt-3 leading-relaxed text-brand-slate/80">
            {{ post.summary }}
          </p>
          <p class="mt-4 font-medium text-brand-blueDark">
            {{ t('launch.readMore') }}
            <span aria-hidden="true">&rarr;</span>
          </p>
        </NuxtLink>
      </li>
    </ul>

    <p v-else class="mt-16 border-t border-brand-blueDark/15 pt-8 text-lg text-brand-slate/70">
      {{ t('launch.empty') }}
    </p>
  </div>
</template>
