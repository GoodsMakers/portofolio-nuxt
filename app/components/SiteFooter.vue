<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 py-10 dark:border-white/10">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
      <p class="text-sm text-gray-500 dark:text-gray-400">© {{ year }} Fatih. All rights reserved.</p>
      <div class="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
        <a href="#about" class="inline-flex items-center gap-1 transition-colors hover:text-primary-600 dark:hover:text-white">
          <UIcon name="i-lucide-user-round" class="size-4" />
          About
        </a>
        <a href="#projects" class="inline-flex items-center gap-1 transition-colors hover:text-primary-600 dark:hover:text-white">
          <UIcon name="i-lucide-folder-kanban" class="size-4" />
          Projects
        </a>
        <a href="#experience" class="inline-flex items-center gap-1 transition-colors hover:text-primary-600 dark:hover:text-white">
          <UIcon name="i-lucide-briefcase-business" class="size-4" />
          Experience
        </a>
        <a href="#contact" class="inline-flex items-center gap-1 transition-colors hover:text-primary-600 dark:hover:text-white">
          <UIcon name="i-lucide-send" class="size-4" />
          Contact
        </a>
      </div>
    </div>
  </footer>
</template>
