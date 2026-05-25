<script setup lang="ts">
const contacts = [
  { label: 'Email', value: 'mfatihbagaskara@gmail.com', href: 'mailto:mfatihbagaskara@gmail.com' },
  { label: 'Phone', value: '0815-1004-0349', href: 'tel:+6281510040349' },
  { label: 'LinkedIn', value: 'linkedin.com/in/muhammad-fatih-bagaskara', href: 'https://linkedin.com/in/muhammad-fatih-bagaskara' },
  { label: 'Portfolio', value: 'fatihbagaskara.me', href: 'https://fatihbagaskara.me' },
]
</script>

<template>
  <section id="contact" class="scroll-mt-24">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
      <p class="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300">
        Punya ide project atau mau kolaborasi? Silakan hubungi saya.
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Info</h3>
          <ul class="space-y-3">
            <li v-for="c in contacts" :key="c.label" class="flex flex-col">
              <span class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{{ c.label }}</span>
              <a :href="c.href" target="_blank" rel="noreferrer"
                class="text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-200 dark:hover:text-white">
                {{ c.value }}
              </a>
            </li>
          </ul>
        </div>

        <UCard class="rounded-2xl" :ui="{
          root: 'bg-white/40 dark:bg-white/5 ring ring-gray-200 dark:ring-white/10'
        }">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Quick Message</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
          </p>
          <UButton color="primary" variant="solid" size="lg" icon="i-lucide-mail" class="mt-6 font-medium"
            href="mailto:mfatihbagaskara@gmail.com?subject=Halo%20Fatih">
            Kirim Email
          </UButton>
        </UCard>
      </div>
    </div>
  </section>
</template>
