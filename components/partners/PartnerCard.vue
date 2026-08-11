<script setup lang="ts">
import type { Partner } from '~/composables/usePartners'

// One logo tile on the dark logo wall. Links out when the partner has a public
// site; otherwise it renders as a plain tile so partners without a URL still get
// a slot.
const props = defineProps<{ partner: Partner }>()

const { t } = useI18n()

const isLink = computed(() => Boolean(props.partner.url))

// Every logo should land at roughly the same optical width (~55% of the tile).
// The square export canvases carry a lot of empty margin — their artwork only
// fills about two thirds of the canvas — so they're blown up past the box,
// while a tight wordmark crop is scaled down to match.
const logoSize = computed(() =>
  props.partner.fit === 'square' ? 'h-[125%] w-auto' : 'h-[38%] w-auto max-w-[85%]',
)
</script>

<template>
  <li>
    <component
      :is="isLink ? 'a' : 'div'"
      v-bind="
        isLink
          ? {
            href: partner.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': t('partners.visit', { name: partner.name }),
          }
          : {}
      "
      class="group relative flex h-full flex-col items-center justify-center rounded-lg border border-brand-white/10 bg-brand-white/[0.03] px-5 py-6 text-center transition duration-300"
      :class="isLink
        ? 'hover:-translate-y-0.5 hover:border-brand-blue/50 hover:bg-brand-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue'
        : ''"
    >
      <div class="flex aspect-[16/9] w-full items-center justify-center">
        <NuxtImg
          :src="partner.logo"
          :alt="partner.name"
          class="max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          :class="[logoSize, partner.knockout ? 'brightness-0 invert' : '']"
          height="320"
          loading="lazy"
        />
      </div>

      <p class="mt-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-brand-white/55 transition-colors group-hover:text-brand-white/85">
        {{ partner.name }}
      </p>
    </component>
  </li>
</template>
