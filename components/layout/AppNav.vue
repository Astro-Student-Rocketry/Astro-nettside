<script setup lang="ts">
// Primary site navigation. Links are locale-aware via useLocalePath();
// labels come from the i18n locale files (never hardcoded).
//
// Two skins: the default light bar, and an `overlay` variant that floats
// transparently on top of a dark hero (see layouts/default.vue → navOverlay).
const props = defineProps<{ overlay?: boolean }>()

const localePath = useLocalePath()
const { t } = useI18n()
const route = useRoute()

const links = [
  { to: 'index', key: 'nav.home' },
  { to: 'about', key: 'nav.about' },
  { to: 'team', key: 'nav.team' },
  { to: 'partners', key: 'nav.partners' },
  { to: 'launch', key: 'nav.launch' },
] as const

// Mobile disclosure — closes itself on navigation.
const open = ref(false)
watch(() => route.fullPath, () => (open.value = false))

const logo = computed(() =>
  props.overlay
    ? '/images/Genneral/AstroHVL_hvit-nav.svg'
    : '/images/Genneral/AstroHVL_svart-nav.svg',
)
const linkClass = computed(() =>
  props.overlay
    ? 'text-brand-white/70 hover:bg-brand-white/10 hover:text-brand-white'
    : 'text-brand-slate hover:bg-brand-black/5 hover:text-brand-blueDark',
)
const activeLinkClass = computed(() =>
  props.overlay ? 'text-brand-white' : 'text-brand-blueDark',
)
</script>

<template>
  <header
    :class="[
      'z-30 w-full',
      overlay
        ? 'absolute inset-x-0 top-0 bg-transparent'
        : 'sticky top-0 border-b border-brand-black/10 bg-brand-white',
    ]"
  >
    <nav
      class="mx-auto flex h-[84px] w-full max-w-wide items-center justify-between gap-8 px-5 sm:px-8 lg:px-14"
      :aria-label="t('site.name')"
    >
      <NuxtLink :to="localePath('index')" class="flex shrink-0 items-center">
        <NuxtImg
          :src="logo"
          :alt="t('nav.logoAlt')"
          class="h-9 w-auto sm:h-11"
          height="44"
        />
      </NuxtLink>

      <!-- Desktop -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="localePath(link.to)"
            :class="[
              'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
              linkClass,
            ]"
            :active-class="activeLinkClass"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </li>
        <li class="ml-2">
          <LanguageSwitcher :overlay="overlay" />
        </li>
        <li class="ml-2">
          <NuxtLink
            :to="localePath('join')"
            class="rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueDark active:translate-y-px"
          >
            {{ t('nav.join') }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile -->
      <div class="flex items-center gap-3 lg:hidden">
        <LanguageSwitcher :overlay="overlay" />
        <button
          type="button"
          :class="[
            'rounded-md p-2 transition-colors',
            overlay
              ? 'text-brand-white hover:bg-brand-white/10'
              : 'text-brand-black hover:bg-brand-black/5',
          ]"
          :aria-label="open ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          <svg
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path v-if="open" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-show="open"
      id="mobile-nav"
      :class="[
        'lg:hidden',
        overlay
          ? 'border-t border-brand-white/15 bg-brand-ink/95 backdrop-blur'
          : 'border-t border-brand-black/10 bg-brand-white',
      ]"
    >
      <ul class="mx-auto flex max-w-wide flex-col gap-1 px-5 py-4 sm:px-8">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="localePath(link.to)"
            :class="[
              'block rounded-md px-3 py-2.5 text-base font-medium transition-colors',
              linkClass,
            ]"
            :active-class="activeLinkClass"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </li>
        <li class="mt-2">
          <NuxtLink
            :to="localePath('join')"
            class="block rounded-md bg-brand-blue px-4 py-3 text-center text-base font-semibold text-brand-ink transition-colors hover:bg-brand-blueLight"
          >
            {{ t('nav.join') }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
