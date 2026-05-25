<script setup lang="ts">
type Project = {
  name: string
  category: string
  role: string
  description: string
  stack: string[]
  highlight: string
  status: string
  link: string
}

const props = defineProps<{ standalone?: boolean }>()

const projects: Project[] = [
  {
    name: "Helpdesk Ticketing System",
    category: "Internal Web Application",
    role: "IT Developer / Frontend Developer",
    description: "Sistem helpdesk berbasis web untuk membantu pengelolaan, monitoring, dan penyelesaian tiket layanan IT internal perusahaan.",
    stack: ["Nuxt.js", "Vue.js", "Tailwind CSS", "REST API", "Bearer Token"],
    highlight: "Dashboard statistik, ticket management, SLA monitoring, feedback & rating, notifikasi, dan workflow multi-role.",
    status: "Private Company Project",
    link: "/projects/helpdesk-ticketing",
  },
  {
    name: "NavEvent",
    category: "Event Management System",
    role: "IT Developer / Frontend Developer",
    description: "Sistem informasi manajemen event berbasis web untuk mendukung pengelolaan kegiatan, peserta, jadwal, dan monitoring status event perusahaan.",
    stack: ["Nuxt.js", "Vue.js", "Tailwind CSS", "REST API", "Bearer Token"],
    highlight: "Dashboard event, event management, participant registration, scheduling, notification, dan workflow multi-role.",
    status: "Private Company Project",
    link: "/projects/navevent",
  },
  {
    name: "Public Complaint Management System",
    category: "Web Application / ML",
    role: "Software Engineer",
    description: "Sistem informasi berbasis web untuk mengelola dan menganalisis data aduan masyarakat dengan integrasi machine learning.",
    stack: ["PHP", "CodeIgniter 4", "MySQL", "Python", "Machine Learning", "Bootstrap", "JWT"],
    highlight: "Complaint management, data processing, ML integration, dashboard analytics, dan pengelolaan 5.000+ data aduan.",
    status: "Government / Internship",
    link: "/projects/public-complaint-system",
  },
  {
    name: "Accounting Information System",
    category: "Business Web Application",
    role: "Freelance Web Developer",
    description: "Sistem informasi akuntansi berbasis web untuk membantu pencatatan jurnal, pengelolaan transaksi, dan manajemen hak akses pengguna.",
    stack: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "JavaScript"],
    highlight: "Journal entry, transaction management, user access control, dashboard, dan laporan sederhana.",
    status: "Freelance Project",
    link: "/projects/accounting-information-system",
  },
  {
    name: "School Attendance System",
    category: "Education Web Application",
    role: "Freelance Developer",
    description: "Sistem absensi sekolah berbasis web untuk mencatat kehadiran siswa dan menghitung persentase kehadiran otomatis sebagai parameter kenaikan kelas.",
    stack: ["Excel VBA", "Microsoft Excel", "Formula Automation", "Macro"],
    highlight: "Attendance tracking, percentage calculation, student data management, dan reporting.",
    status: "Freelance Project",
    link: "/projects/school-attendance-system",
  },
  {
    name: "Employee Overtime Calculation System",
    category: "HR Automation System",
    role: "Freelance Developer",
    description: "Sistem perhitungan lembur berbasis Excel VBA untuk membantu proses pencatatan jam kerja, perhitungan lembur, dan rekap data karyawan secara otomatis.",
    stack: ["Excel VBA", "Microsoft Excel", "Formula Automation", "Macro"],
    highlight: "Overtime calculation, employee work hour tracking, automatic recap, reset entry, dan payroll support.",
    status: "Freelance Project",
    link: "/projects/overtime-calculation-system",
  },
  {
    name: "Inventory & Service Catalog System",
    category: "Company Web Application",
    role: "Web Developer",
    description: "Sistem manajemen stok barang dan katalog jasa berbasis web untuk membantu perusahaan mengelola data persediaan, produk, dan layanan yang ditawarkan.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CRUD"],
    highlight: "Inventory management, service catalog, product data management, stock tracking, dan dynamic content management.",
    status: "Company Project",
    link: "/projects/inventory-service-catalog",
  },
  {
    name: "Employee Recruitment Management System",
    category: "HR Web Application",
    role: "Web Developer",
    description: "Sistem rekrutmen calon pegawai berbasis PHP untuk membantu perusahaan mengelola data pelamar, pengalaman kerja, sertifikat, posisi, dan proses screening kandidat.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CRUD"],
    highlight: "Applicant data management, candidate screening, work experience records, certificate management, dan recruitment workflow.",
    status: "Company Project",
    link: "/projects/employee-recruitment-system",
  },
]

const getTechIcon = (tech: string) => {
  const map: Record<string, string> = {
    'Nuxt.js': 'i-logos-nuxt-icon',
    'Vue.js': 'i-logos-vue',
    'Tailwind CSS': 'i-logos-tailwindcss-icon',
    'REST API': 'i-lucide-network',
    'JWT': 'i-logos-jwt-icon',
    'Bearer Token': 'i-lucide-key',
    'PHP': 'i-logos-php',
    'CodeIgniter 4': 'i-logos-codeigniter-icon',
    'Laravel': 'i-logos-laravel',
    'MySQL': 'i-logos-mysql',
    'Python': 'i-logos-python',
    'Machine Learning': 'i-lucide-brain',
    'Bootstrap': 'i-logos-bootstrap',
    'JavaScript': 'i-logos-javascript',
    'Excel VBA': 'i-vscode-icons-file-type-excel',
    'Microsoft Excel': 'i-vscode-icons-file-type-excel',
    'Formula Automation': 'i-lucide-function-square',
    'Macro': 'i-lucide-terminal',
    'CRUD': 'i-lucide-database-backup',
  }
  return map[tech] || 'i-lucide-code'
}
</script>

<template>
  <section id="projects" class="scroll-mt-24">
    <div class="mx-auto max-w-6xl">
      <h2 v-if="!props.standalone" class="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Proyek Pilihan
      </h2>

      <div class="grid gap-8 md:grid-cols-2">
        <UCard
          v-for="p in projects"
          :key="p.name"
          class="group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary-500/10"
          :ui="{
            root: 'bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm ring ring-gray-200 dark:ring-gray-800',
            body: 'flex h-full flex-col p-6'
          }"
        >
          <!-- Glow effect on hover -->
          <div class="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>

          <!-- Header Tags -->
          <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 dark:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-500/20">
              <UIcon name="i-lucide-layout-template" class="size-3.5" />
              {{ p.category }}
            </span>
            <span class="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10">
              {{ p.status }}
            </span>
          </div>

          <!-- Title & Role -->
          <h3 class="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
            {{ p.name }}
          </h3>
          <p class="mb-4 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300">
            <UIcon name="i-lucide-user-circle" class="size-4" />
            {{ p.role }}
          </p>

          <!-- Description -->
          <p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {{ p.description }}
          </p>

          <!-- Highlight Box -->
          <div class="mb-6 rounded-lg border border-gray-100 bg-gray-50/50 p-3 text-sm text-gray-700 dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-300">
            <span class="font-semibold text-gray-900 dark:text-white">✨ Highlight:</span> {{ p.highlight }}
          </div>

          <!-- Spacer -->
          <div class="flex-grow"></div>

          <!-- Tech Stack -->
          <div class="mt-auto border-t border-gray-100 pt-4 dark:border-gray-800">
            <div class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Teknologi yang Digunakan</div>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="t in p.stack"
                :key="t"
                class="flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700"
              >
                <UIcon :name="getTechIcon(t)" class="size-4" />
                {{ t }}
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
