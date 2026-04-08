<script setup lang="ts">
useHead({
  title: 'Hahn Built | Projects',
  meta: [
    { name: 'Projects', content: 'Hahn Built Projects.' },
  ],
});

const projects = [
  { 
    id: '01',
    title: 'The Summit Estate', 
    location: 'Whitefish, MT',
    type: 'Residential Foundation',
    img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80',
    specs: '5,000 SQFT • 4500 PSI • Custom Rebar Grid'
  },
  { 
    id: '02',
    title: 'Ironwood Plaza', 
    location: 'Kalispell, MT',
    type: 'Commercial Flatwork',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80',
    specs: '12,000 SQFT • Industrial Grade • Laser Leveled'
  },
  { 
    id: '03',
    title: 'Flathead River Vault', 
    location: 'Bigfork, MT',
    type: 'Retaining Structural',
    img: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80',
    specs: 'Flood-Zone Rated • 20ft Vertical • Reinforced Steel'
  }
];

const activeBg = ref(projects[0].img);
const setBg = (img: string) => activeBg.value = img;
</script>

<template>
  <div class="bg-[#0c0c0c] min-h-screen text-white pt-40 pb-20 relative overflow-hidden">
    
    <!-- Large Background Preview (The "Ghost" Image) -->
    <div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none">
      <img :src="activeBg" class="w-full h-full object-cover scale-110" alt="Background Preview" />
      <div class="absolute inset-0 bg-linear-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-10 relative z-10">
      <header class="mb-24">
        <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Archive</span>
        <h1 class="text-5xl md:text-7xl font-black uppercase italic leading-none tracking-tighter">
          <span>Projects</span>
        </h1>
      </header>

      <div class="flex flex-col border-t border-white/10">
        <div 
          v-for="project in projects" 
          :key="project.id"
          @mouseenter="setBg(project.img)"
          class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            
            <div class="md:col-span-1 font-mono text-zinc-600 group-hover:text-orange-600 transition-colors">
              {{ project.id }}
            </div>

            <div class="md:col-span-5">
              <h3 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {{ project.title }}
              </h3>
              <p class="text-orange-600 font-mono text-[10px] uppercase tracking-widest mt-2">
                {{ project.location }}
              </p>
            </div>

            <div class="md:col-span-3 text-zinc-500 text-sm font-bold uppercase tracking-widest">
              {{ project.type }}
            </div>

            <div class="md:col-span-3 text-right hidden md:block">
              <span class="text-[10px] font-mono text-zinc-700 leading-none uppercase">
                Technical Specs:<br />
                <span class="text-zinc-400">{{ project.specs }}</span>
              </span>
            </div>

          </div>
        </div>
      </div>

      <footer class="mt-32 border-t border-white/5 pt-10 flex justify-between items-center text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
        <span>Verified Structural Builds</span>
        <span>Montana Licensed #XXXXX</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transition for the fixed background image */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>