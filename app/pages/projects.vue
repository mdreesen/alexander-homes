<script setup lang="ts">
useHead({
  title: 'Alexander Homes | Projects',
  meta: [
    { name: 'Projects', content: 'Alexander Homes Projects.' },
  ],
});

const projects = [
  {
    id: '01',
    title: 'Lakeside Estate',
    location: 'Whitefish, MT',
    system: 'Interior Museum-Grade',
    sheen: 'Level 5 / Matte',
    img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80'
  },
  {
    id: '02',
    title: 'The Ironwood Cabin',
    location: 'Bigfork, MT',
    system: 'Exterior Weather-Shield',
    sheen: 'Semi-Transparent Stain',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80'
  },
  {
    id: '03',
    title: 'Skyline Commercial',
    location: 'Kalispell, MT',
    system: 'Industrial Epoxy Floor',
    sheen: 'High-Gloss / Anti-Slip',
    img: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80'
  }
];

const activeBg = ref(projects[0].img);
const setBg = (img: string) => activeBg.value = img;
</script>

<template>
  <div class="bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 relative overflow-hidden">

    <div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none">
      <img :src="activeBg" class="w-full h-full object-cover scale-110" alt="Finish Preview" />
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
          <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8">

            <div class="md:col-span-1 font-mono text-ah-grey/30 group-hover:text-ah-lime transition-colors">
              {{ project.id }}
            </div>

            <div class="md:col-span-5">
              <h3
                class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {{ project.title }}
              </h3>
              <p class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mt-2">
                {{ project.location }}
              </p>
            </div>

            <div class="md:col-span-3 text-ah-grey/60 text-sm font-bold uppercase tracking-widest">
              {{ project.system }}
            </div>

            <div class="md:col-span-3 text-right hidden md:block">
              <span class="text-[10px] font-mono text-ah-grey/30 leading-none uppercase">
                Technical Sheen:<br />
                <span class="text-white">{{ project.sheen }}</span>
              </span>
            </div>

          </div>
        </div>
      </div>

      <footer
        class="mt-32 border-t border-white/5 pt-10 flex justify-between items-center text-ah-grey/30 font-mono text-[10px] uppercase tracking-widest">
        <span>Architectural Coatings Verified</span>
        <span>Montana Licensed #XXXXX</span>
      </footer>
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