<script setup lang="ts">
useSeoMeta({
    title: 'Alexander Homes | Projects',
    description: 'Projects Alexander Homes',
    ogDescription: 'Projects Alexander Homes',
    ogTitle: 'Alexander Homes | Projects',
    ogImage: '/images/logo.webp',
});

const projects = [
  {
    id: '01',
    title: 'Process',
    href: "/projects/process",
    img: '/images/projects/process.webp'
  },
  {
    id: '02',
    title: 'Product',
    href: "/projects/product",
    img: '/images/projects/product.webp'
  }
];

const activeBg = ref(projects[0].img);
const setBg = (img: string) => activeBg.value = img;
</script>

<template>
  <div class="bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 relative overflow-hidden">

    <div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none">
      <baseImage :source="activeBg" :style="`w-full h-full object-cover scale-110`" alt="Background Preview" />
      <div class="absolute inset-0 bg-linear-to-b from-ah-navy via-transparent to-ah-navy"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <header class="mb-24">
        <span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Archive</span>
        <baseHeader text="Projects" />
      </header>

      <div class="flex flex-col border-t border-white/10">
        <div v-for="project in projects" :key="project.id" @mouseenter="setBg(project.img)"
          class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4">
          <nuxt-link :to="project.href">
          <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8">

            <div class="md:col-span-1 font-mono text-ah-grey/30 group-hover:text-ah-lime transition-colors">
              {{ project.id }}
            </div>

            <div class="md:col-span-5">
              <h3
                class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {{ project.title }}
              </h3>
            </div>
          </div>
        </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure background image changes are fluid */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>