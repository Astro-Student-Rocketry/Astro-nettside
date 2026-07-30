<script setup lang="ts">
// Primary site navigation. Links are locale-aware via useLocalePath();
// labels come from the i18n locale files (never hardcoded).
const localePath = useLocalePath()
const { t } = useI18n()

const links = [
  { to: 'index', key: 'nav.home' },
  { to: 'about', key: 'nav.about' },
  { to: 'team', key: 'nav.team' },
  { to: 'partners', key: 'nav.partners' },
  { to: 'launch', key: 'nav.launch' },
  { to: 'join', key: 'nav.join' },
] as const
</script>

<template>
  <header class="border-b border-black/10 bg-brand-white">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4"
      :aria-label="t('site.name')"
    >
      <NuxtLink
        :to="localePath('index')"
        class="text-lg font-bold tracking-tight text-brand-blueDark"
      >
        {{ t('site.name') }}
      </NuxtLink>

      <ul class="flex items-center gap-5">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="localePath(link.to)"
            class="text-sm text-brand-black transition-colors hover:text-brand-blueDark"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  </header>
</template>
