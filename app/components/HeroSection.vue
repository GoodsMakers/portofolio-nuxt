<template>
  <section class="mt-16 flex flex-col items-center justify-center text-center">
    <!-- Image Placeholder -->
    <div class="group relative mb-6">
      <div
        class="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur transition duration-500 group-hover:opacity-100">
      </div>
      <img src="/foto-profil.png" alt="Muhammad Fatih Bagaskara"
        class="relative h-36 w-36 rounded-full border-4 border-white bg-gray-50 p-1 object-cover object-top shadow-xl dark:border-gray-900 dark:bg-gray-800 sm:h-40 sm:w-40" />
    </div>

    <UBadge color="neutral" variant="soft" class="mb-4 inline-flex items-center gap-2 px-4 py-1 text-sm">
      <UIcon name="i-lucide-briefcase-business" class="size-4" />
      Available for Work
    </UBadge>

    <h1 class="mb-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
      Halo, Saya <br> Muhammad
      <span
        class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
        Fatih
      </span>
      Bagaskara
    </h1>

    <p class="mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
      Lulusan D4 Teknologi Rekayasa Perangkat Lunak IPB dengan pengalaman sebagai IT Developer,
      Web Developer, dan Software Engineer.
    </p>

    <div class="flex flex-wrap justify-center gap-4">
      <UButton href="#projects" color="primary" variant="solid" size="lg" icon="i-lucide-folder-git-2">
        Lihat Project
      </UButton>

      <UButton href="#contact" color="neutral" variant="outline" size="lg" icon="i-lucide-send">
        Hubungi Saya
      </UButton>
    </div>
  </section>
</template>
