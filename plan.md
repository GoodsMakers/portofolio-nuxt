# 📌 Portfolio Website Plan (Modern UI Version)

## 🎯 Tujuan

Membuat website portfolio yang:

* Modern & eye-catching
* Responsive
* Mudah dibaca recruiter / client
* Menampilkan project dan skill secara jelas

---

## 🧱 Tech Stack

### Core

* Framework: Nuxt 3/4
* Styling: Tailwind CSS

### UI & Visual

* Nuxt UI → komponen siap pakai
* Lucide Icons → icon modern
* Inspira UI (opsional) → animasi & efek visual

---

## 🧩 Struktur Halaman

### 1. 🏠 Hero Section

**Tujuan:** First impression kuat & menarik

**Komponen:**

* Heading besar (nama + role)
* Tagline singkat
* Icon (Lucide)
* CTA button
* Background gradient / blur

**UI:**

* UContainer
* UButton
* UIcon

**Style:**

* Gradient background
* Large typography
* Centered layout
* Animasi fade-in

---

### 2. 👤 About Me

**Tujuan:** Menjelaskan profil singkat

**Isi:**

* Deskripsi singkat
* Fokus bidang
* Highlight keahlian

**UI:**

* UCard
* UAvatar

**Style:**

* Card clean
* Rounded + shadow
* Layout 2 kolom (desktop)

---

### 3. 🛠️ Skills / Tech Stack

**Tujuan:** Menampilkan skill secara visual

**Isi:**

* Bahasa pemrograman
* Framework
* Tools

**UI:**

* UBadge
* UIcon

**Style:**

* Grid icon
* Hover effect
* Minimal + clean

---

### 4. 🚀 Projects

**Tujuan:** Showcase hasil karya

**Isi tiap project:**

* Nama project
* Screenshot
* Deskripsi
* Tech stack
* Link demo / repo

**UI:**

* UCard
* UBadge
* UButton

**Style:**

* Grid layout (2–3 kolom)
* Hover scale effect
* Shadow + rounded-xl

---

### 5. 💼 Experience (Opsional)

**Tujuan:** Menampilkan pengalaman

**Isi:**

* Magang / freelance / organisasi

**UI:**

* UAccordion / timeline custom

**Style:**

* Vertical timeline
* Clean spacing

---

### 6. 📞 Contact

**Tujuan:** Memudahkan komunikasi

**Isi:**

* Email
* WhatsApp
* LinkedIn
* GitHub

**UI:**

* UButton
* UIcon

**Style:**

* Centered
* Icon + label
* CTA besar

---

### 7. 🔻 Footer

**Isi:**

* Copyright
* Social media
* Quick links

---

## 🎨 Design System

### Warna

* Primary: Indigo / Blue
* Secondary: Cyan / Purple
* Background: Dark mode (recommended)

### Style

* Glassmorphism:

  * bg-white/10
  * backdrop-blur
* Rounded:

  * rounded-2xl
* Shadow:

  * shadow-lg

---

## ✨ Animasi & Interaksi

### Basic

* Hover scale:

  * hover:scale-105
* Transition:

  * transition-all duration-300

### Advanced (Opsional)

* Scroll reveal
* Parallax hero
* Glow effect (Inspira UI)

---

## 🧩 Struktur Komponen

```
components/
├── Hero.vue
├── About.vue
├── Skills.vue
├── Projects.vue
├── Experience.vue
├── Contact.vue
└── Footer.vue
```

---

## 📁 Struktur Halaman

```
pages/
└── index.vue
```

---

## 🧪 Data Awal (Dummy)

* Nama: Fatih Bagas
* Role: Web Developer
* Project:

  * Sistem Pengaduan (NLP)
  * Web Akuntansi
  * CRUD Calon Pegawai

---

## ✅ Checklist

### Setup

* [ ] Install Nuxt UI
* [ ] Setup Tailwind
* [ ] Setup Icon (Lucide)

### Development

* [ ] Hero section
* [ ] About section
* [ ] Skills section
* [ ] Projects section
* [ ] Contact section

### UI/UX

* [ ] Responsive mobile
* [ ] Animasi smooth
* [ ] Consistent spacing

### Final

* [ ] Deploy (Vercel / Netlify)
* [ ] Testing performance
* [ ] SEO basic

---

## 🚀 Next Step

1. Setup Nuxt project + Nuxt UI
2. Buat layout dasar (index.vue)
3. Implement Hero section dulu
4. Isi data dummy
5. Styling + animasi
6. Deploy

---
