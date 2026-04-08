<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Main',
  to: '/',
},{
  label: 'About',
  to: '/about',
}, {
  label: 'Projects',
  to: '/projects',
}, {
  label: 'Contact',
  to: '/contact',
}])
</script>

<template>
  <UHeader mode="slideover" class="fixed w-full border-none">
    <template #title>
      <NuxtLink to="/" class="flex items-center text-2xl font-extrabold h-10">
        <NuxtImg class="h-10 md:h-14 w-auto object-contain"
          alt="Alexander Homes Logo" format="webp" width="200px" height="200px" src="/images/logo.webp" loading="lazy"
          fetch-priority="low" />

        <div class="flex flex-col leading-none">
          <span class="font-black uppercase tracking-tighter text-lg md:text-2xl text-white">Alexander</span>
          <span class="font-bold uppercase tracking-[0.3em] text-[10px] text-ah-lime">Homes & Painting</span>
        </div>
      </NuxtLink>
    </template>

    <UNavigationMenu color="neutral" :items="items" />

    <template #body>
      <UNavigationMenu color="neutral" :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
