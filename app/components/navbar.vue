<script setup lang="ts">
const isOpen = ref(false)

const navItems = [
  { href: '#about', label: 'About', icon: 'i-lucide-user-round' },
  { href: '#skills', label: 'Skills', icon: 'i-lucide-code-2' },
  { href: '#projects', label: 'Projects', icon: 'i-lucide-folder-kanban' },
  { href: '#experience', label: 'Experience', icon: 'i-lucide-briefcase-business' },
  { href: '#contact', label: 'Contact', icon: 'i-lucide-send' },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-gray-950/70">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" class="font-bold text-xl tracking-wide text-gray-900 dark:text-white">
        fatihbagaskara<span class="text-blue-500">.me</span>
      </a>

      <div class="hidden items-center gap-6 text-gray-600 dark:text-gray-300 md:flex">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          class="inline-flex items-center gap-1 transition-colors hover:text-primary-500 dark:hover:text-white">
          <UIcon :name="item.icon" class="size-4" />
          {{ item.label }}
        </a>

        <!-- Desktop Theme Toggle -->
        <ColorModeButton />

        <!-- Download CV Button -->
        <UButton
          href="/CV_Muhammad_Fatih_Bagaskara.pdf"
          download="CV_Muhammad_Fatih_Bagaskara.pdf"
          target="_blank"
          color="primary"
          variant="solid"
          size="sm"
          icon="i-lucide-download"
        >
          Download CV
        </UButton>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <!-- Mobile Theme Toggle -->
        <ColorModeButton />
        <UButton color="neutral" variant="ghost" :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          @click="isOpen = !isOpen" />
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="border-t border-gray-200 bg-white/95 dark:border-white/10 dark:bg-gray-950/95 md:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10"
          @click="closeMenu">
          <UIcon :name="item.icon" class="size-4" />
          {{ item.label }}
        </a>
        
        <UButton
          href="/CV_Muhammad_Fatih_Bagaskara.pdf"
          download="CV_Muhammad_Fatih_Bagaskara.pdf"
          target="_blank"
          color="primary"
          variant="solid"
          class="mt-2 justify-center"
          icon="i-lucide-download"
        >
          Download CV
        </UButton>
      </div>
    </div>
  </header>
</template>
