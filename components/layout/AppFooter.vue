<script setup lang="ts">
// No dedicated contact page — email + socials live here (per CLAUDE.md).
// Social links are placeholders until real handles are provided.
const { t } = useI18n()
const year = new Date().getFullYear()

const email = t('footer.email')
const socials = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
]
</script>

<template>
  <footer class="mt-16 bg-brand-blueDark text-brand-white">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:justify-between"
    >
      <div class="max-w-sm">
        <p class="text-lg font-bold">{{ t('site.name') }}</p>
        <p class="mt-2 text-sm text-brand-white/80">{{ t('footer.tagline') }}</p>
      </div>

      <div class="flex flex-col gap-6 sm:flex-row sm:gap-12">
        <div>
          <h2 class="text-sm font-semibold uppercase tracking-wide">
            {{ t('footer.contact') }}
          </h2>
          <a
            :href="`mailto:${email}`"
            class="mt-2 block text-sm text-brand-white/80 hover:text-brand-white"
          >
            {{ email }}
          </a>
        </div>

        <div>
          <h2 class="text-sm font-semibold uppercase tracking-wide">
            {{ t('footer.follow') }}
          </h2>
          <ul class="mt-2 space-y-1">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-brand-white/80 hover:text-brand-white"
              >
                {{ s.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <p class="mx-auto max-w-6xl px-4 py-4 text-xs text-brand-white/60">
        © {{ year }} {{ t('site.name') }}. {{ t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
