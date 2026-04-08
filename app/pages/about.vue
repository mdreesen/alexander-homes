<script setup lang="ts">
const principles = [
  { 
    title: 'Precision Substrate Prep', 
    desc: 'The foundation of a flawless finish. We utilize dustless sanding and chemical bonding agents to ensure every surface is surgically clean before a single drop of paint is applied.' 
  },
  { 
    title: 'Chamber-Controlled Finishing', 
    desc: 'For cabinetry and millwork, we utilize high-volume, low-pressure (HVLP) systems in controlled environments to eliminate contaminants and orange-peel textures.' 
  },
  { 
    title: 'Climate-Adaptive Coatings', 
    desc: 'In Montana, surfaces breathe. We select high-elasticity coatings that expand and contract with Evergreen’s extreme temperature shifts without cracking or peeling.' 
  }
];
</script>

<template>
  <div class="bg-ah-navy text-ah-white min-h-screen pt-40 pb-20">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Section 1: The Mandate -->
      <header class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div v-gsap.from="{ opacity: 0, x: -50, duration: 1 }">
          <span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Mandate</span>
          <baseHeader text="The Art of<br>Persistence." />
          <p class="text-ah-grey text-xl leading-relaxed max-w-lg">
            Alexander Homes was founded on a simple realization: the final layer of a home is the most vulnerable, yet the most visible. We don't just paint; we protect and perfect.
          </p>
        </div>
        
        <div class="relative">
          <div 
            v-gsap.from="{ opacity: 0, scale: 0.9, duration: 1.5 }"
            class="relative sm:w-87.5 w-full h-full aspect-square bg-white/5 overflow-hidden border border-white/10 p-4"
          >
          <NuxtImg class="w-full h-full object-cover opacity-60"
          alt="Alexander Homes Family" format="webp" width="200px" height="200px" src="/images/family.webp" loading="lazy"
          fetch-priority="low" />

          </div>
          <!-- Structural A/H Watermark behind image -->
          <div class="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/5 z-[-1] pointer-events-none">AH</div>
        </div>
      </header>

      <!-- Section 2: Technical Stats -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white/10 border-y border-white/10 mb-32">
        <div v-for="stat in [
          {v: '01', l: 'Standard of Care'},
          {v: '100%', l: 'Dustless sanding'},
          {v: 'Kalispell', l: 'Based & Operated'},
          {v: '5-Year', l: 'Finish Warranty'}
        ]" :key="stat.l" class="bg-ah-navy py-12 text-center">
          <div class="text-2xl font-black italic text-ah-lime mb-2">{{ stat.v }}</div>
          <div class="text-[9px] font-mono text-ah-grey/40 uppercase tracking-widest">{{ stat.l }}</div>
        </div>
      </section>

      <!-- Section 3: The Method -->
      <section class="mb-32">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <baseHeaderSection text="Our Methodology." />
          <div class="h-px grow bg-white/10 mx-8 hidden md:block"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div 
            v-for="(item, i) in principles" 
            :key="i"
            v-gsap.from="{ opacity: 0, y: 30, delay: i * 0.2 }"
            class="group"
          >
            <div class="w-12 h-px bg-ah-lime mb-6 group-hover:w-full transition-all duration-500"></div>
            <h4 class="text-xl font-black uppercase italic mb-4 tracking-tight">{{ item.title }}</h4>
            <p class="text-ah-grey/60 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Section 4: Call to Action -->
      <section class="bg-ah-lime p-10 text-ah-navy text-center relative overflow-hidden">
        <div class="relative z-10">
           <baseHeaderSection text="Expect Excellence." />

           <NuxtLink to="/contact" class="px-12 py-5 bg-ah-navy text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform inline-block">
             Book a Finish Analysis
           </NuxtLink>
        </div>
        <!-- Large Ghost Text -->
        <div class="absolute inset-0 flex items-center justify-center text-[20vw] font-black opacity-10 pointer-events-none italic">ALWAYS</div>
      </section>
    </div>
  </div>
</template>