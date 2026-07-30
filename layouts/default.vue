<script setup lang="ts">
// Base site chrome: nav on top, page content, footer at the bottom.
</script>

<template>
  <div class="flex min-h-screen flex-col bg-brand-white font-sans text-brand-black">
    <AppNav />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
