<script setup lang="ts">
// A single launch post. The body is markdown from content/<locale>/launch/.
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const { collection, formatDate } = useLaunchPosts()

// The route is /launch/<slug> (and /en/launch/<slug>); the content path is
// /launch/<slug> in both collections.
const slug = computed(() => {
  const raw = route.params.slug
  return Array.isArray(raw) ? raw.join('/') : String(raw ?? '')
})

const { data: post } = await useAsyncData(
  () => `launch-${collection.value}-${slug.value}`,
  () => queryCollection(collection.value).path(`/launch/${slug.value}`).first(),
  { watch: [collection, slug] },
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Launch post not found', fatal: true })
}

useHead({ title: () => `${t('site.name')} — ${post.value?.title ?? t('nav.launch')}` })
</script>

<template>
  <article v-if="post" class="mx-auto max-w-3xl px-4 py-16 sm:py-24">
    <NuxtLink
      :to="localePath('/launch')"
      class="font-mono text-xs uppercase tracking-[0.18em] text-brand-blueDark hover:underline"
    >
      <span aria-hidden="true">&larr;</span>
      {{ t('launch.backToList') }}
    </NuxtLink>

    <header class="mt-8">
      <LaunchBadges :type="post.type" :status="post.status" />

      <p class="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-brand-blueDark">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span v-if="post.location"> · {{ post.location }}</span>
      </p>
      <h1 class="mt-4 font-display text-4xl font-bold tracking-tight text-brand-black sm:text-5xl">
        {{ post.title }}
      </h1>
      <p v-if="post.summary" class="mt-5 text-lg leading-relaxed text-brand-slate/80">
        {{ post.summary }}
      </p>
    </header>

    <div v-if="post.cover" class="mt-10 aspect-[3/2] overflow-hidden rounded-lg bg-brand-blueDark/5">
      <NuxtImg
        :src="post.cover"
        :alt="post.coverAlt ?? post.title"
        class="h-full w-full object-cover"
        sizes="100vw md:768px"
        width="1200"
        height="800"
        format="webp"
        quality="80"
      />
    </div>

    <!-- Markdown body. Styled with child selectors since @tailwindcss/typography
         isn't part of the stack — keep this list in sync with what posts use. -->
    <div
      class="mt-12 leading-relaxed text-brand-slate/85 [&_a]:font-medium [&_a]:text-brand-blueDark [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-brand-blue [&_blockquote]:pl-5 [&_blockquote]:text-brand-slate/70 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-black [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand-blueDark [&_img]:my-8 [&_img]:w-full [&_img]:rounded-lg [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-5 [&_strong]:font-semibold [&_strong]:text-brand-black [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
    >
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
