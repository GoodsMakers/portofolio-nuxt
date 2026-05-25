<script setup lang="ts">
const experiences = [
  {
    title: 'IT Developer - AirNav Indonesia',
    period: 'Okt 2025 - Apr 2026',
    description: 'Mengembangkan sistem Helpdesk Ticketing dan NavEvent. Implementasi dashboard, notifikasi, multi-role workflow, SLA, dan integrasi REST API dengan JWT.',
  },
  {
    title: 'Freelance Software Developer',
    period: 'Jan 2025 - Sep 2025',
    description: 'Membangun sistem absensi otomatis, sistem perhitungan lembur Excel VBA, dan sistem informasi akuntansi berbasis web.',
  },
  {
    title: 'Web Developer - PT Bermaks Indonesia',
    period: 'Agu 2024 - Des 2024',
    description: 'Optimalisasi web statis ke dinamis, mengembangkan modul katalog produk, dan merancang sistem screening rekrutmen pegawai.',
  },
  {
    title: 'Software Engineer - Diskominfo Kota Tangerang',
    period: 'Jul 2024 - Des 2024',
    description: 'Merancang sistem pengaduan publik terintegrasi machine learning untuk menganalisis 5.000+ data aduan.',
  },
]
</script>

<template>
  <section id="experience" class="scroll-mt-24">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>

      <div class="space-y-5">
        <UCard
          v-for="item in experiences"
          :key="item.title"
          class="shadow-lg transition-all duration-300 hover:scale-[1.01]"
          :ui="{
            root: 'bg-white/40 dark:bg-white/5 ring ring-gray-200 dark:ring-white/10'
          }"
        >
          <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.title }}</h3>
            <UBadge color="neutral" variant="soft" class="px-3 py-1 text-xs">
              {{ item.period }}
            </UBadge>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.description }}</p>
        </UCard>
      </div>
    </div>
  </section>
</template>
