<template>
  <section id="about" class="scroll-mt-24">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
      <p class="mx-auto mb-8 max-w-3xl text-center text-gray-600 dark:text-gray-300">
        Lulusan D4 Teknologi Rekayasa Perangkat Lunak IPB. Berpengalaman mengembangkan aplikasi web,
        integrasi REST API, autentikasi JWT, dashboard monitoring, dan integrasi machine learning.
        Tertarik pada posisi IT Developer, Web Developer, atau Software Engineer.
      </p>

      <div class="grid gap-6 md:grid-cols-3">
        <UCard 
          class="group rounded-2xl transition-all hover:scale-[1.02]"
          :ui="{ 
            root: 'bg-white/40 dark:bg-white/5 ring ring-gray-200 dark:ring-white/10 shadow-sm hover:shadow-md',
            body: 'p-6'
          }"
        >
          <h3 class="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-500 dark:text-white dark:group-hover:text-primary-400">Fokus</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Web App, REST API, Dashboard, Machine Learning.</p>
        </UCard>
        <UCard 
          class="group rounded-2xl transition-all hover:scale-[1.02]"
          :ui="{ 
            root: 'bg-white/40 dark:bg-white/5 ring ring-gray-200 dark:ring-white/10 shadow-sm hover:shadow-md',
            body: 'p-6'
          }"
        >
          <h3 class="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-500 dark:text-white dark:group-hover:text-primary-400">Nilai</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Security (JWT), Performance, System Documentation.</p>
        </UCard>
        <UCard 
          class="group rounded-2xl transition-all hover:scale-[1.02]"
          :ui="{ 
            root: 'bg-white/40 dark:bg-white/5 ring ring-gray-200 dark:ring-white/10 shadow-sm hover:shadow-md',
            body: 'p-6'
          }"
        >
          <h3 class="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-500 dark:text-white dark:group-hover:text-primary-400">Kolaborasi</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Git, Stakeholder Demo, Cross-functional Teams.</p>
        </UCard>
      </div>
    </div>
  </section>
</template>
