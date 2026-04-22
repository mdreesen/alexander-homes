<script setup lang="ts">
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-facebook"
        color="neutral"
        variant="ghost"
        to="https://www.facebook.com/p/Alexander-Homes-100093503735484/"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
        to="https://www.instagram.com/alexanderhomespaint/"
        target="_blank"
        aria-label="Instagram"
      />
    </template>
  </UFooter>
</template>
