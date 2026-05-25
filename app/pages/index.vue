<script setup lang="ts">
useHead({
  title: 'Portfolio | Fatih',
  meta: [
    {
      name: 'description',
      content: 'Portfolio Fatih — Web Developer (Nuxt, Laravel, Backend).',
    },
    { property: 'og:title', content: 'Portfolio | Fatih' },
    {
      property: 'og:description',
      content: 'Web Developer portfolio dengan project, skills, dan contact.',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <div class="space-y-28">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <SiteFooter />
  </div>
</template>
