<script setup lang="ts">
import type { Partner } from '~/composables/usePartners'

// One logo tile. Links out when the partner has a public site; otherwise it
// renders as a plain tile so partners without a URL still get a slot.
const props = defineProps<{ partner: Partner }>()

const { t } = useI18n()

const blurb = computed(() => t(`partners.items.${props.partner.id}.blurb`))
const isLink = computed(() => Boolean(props.partner.url))
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
      class="group flex h-full flex-col rounded-lg border border-brand-blueDark/10 bg-brand-white p-6 transition-colors"
      :class="isLink
        ? 'hover:border-brand-blueDark/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueDark'
        : ''"
    >
      <div class="flex h-24 items-center justify-center">
        <NuxtImg
          :src="partner.logo"
          :alt="partner.name"
          class="max-h-full w-auto max-w-full opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          height="160"
          loading="lazy"
        />
      </div>

      <p class="mt-6 font-display text-base font-semibold tracking-tight text-brand-black">
        {{ partner.name }}
      </p>
      <p class="mt-2 text-sm leading-relaxed text-brand-slate/80">
        {{ blurb }}
      </p>

      <span
        v-if="isLink"
        class="mt-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-blueDark"
        aria-hidden="true"
      >
        {{ t('partners.visitShort') }} →
      </span>
    </component>
  </li>
</template>
