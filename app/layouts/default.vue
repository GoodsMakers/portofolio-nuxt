<template>
  <div id="top" class="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-950">
    <!-- Background patterns (subtle) -->
    <div class="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
    
    <Navbar />

    <main class="mx-auto max-w-6xl px-6 py-10 transition-colors duration-300">
      <slot />
    </main>
  </div>
</template>