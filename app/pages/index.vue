<!-- pages/index.vue -->
<script setup lang="ts">
useHead({
  title: 'Alexander Homes | Home',
  meta: [
    { name: 'Home', content: 'Alexander Homes Home.' },
  ],
});
</script>
<template>
  <div>

    <appHero />

    <appDescription />

    <appRecentProjects />

    <appFaq />

  </div>
</template>