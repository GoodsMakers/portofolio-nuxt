<script setup lang="ts">
const skills = {
  languages: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  frameworks: ['Nuxt.js', 'Vue.js', 'React', 'Laravel', 'CodeIgniter', 'Nest.js', 'Bootstrap', 'Tailwind CSS'],
  tools: ['Git/GitHub', 'MySQL', 'Postman', 'VS Code', 'Excel VBA'],
}
</script>

<template>
  <section id="skills" class="scroll-mt-24">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">Skills / Tech Stack</h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Languages</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in skills.languages"
              :key="item"
              color="neutral"
              variant="soft"
              class="px-3 py-1 text-sm"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Frameworks</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in skills.frameworks"
              :key="item"
              color="neutral"
              variant="soft"
              class="px-3 py-1 text-sm"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Tools</h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in skills.tools"
              :key="item"
              color="neutral"
              variant="soft"
              class="px-3 py-1 text-sm"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
