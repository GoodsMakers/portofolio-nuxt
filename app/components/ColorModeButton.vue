<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
      class="hover:bg-primary-500/10"
    />
    <template #fallback>
      <div class="size-8 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse" />
    </template>
  </ClientOnly>
</template>
