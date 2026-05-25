<script setup lang="ts">
useHead({ title: 'Projects | Fatih' })
</script>

<template>
  <div class="space-y-10">
    <h1 class="text-3xl font-bold">Projects</h1>
    <ProjectsSection :standalone="true" />
  </div>
</template>