<!-- pages/index.vue -->
<template>
  <div class="bg-ah-navy min-h-screen text-white">
    <TheNav />

    <!-- Added pt-32 (desktop) and pt-24 (mobile) to clear the fixed nav -->
    <section id="about" class="relative min-h-screen flex items-center px-6 md:px-10 pt-24 md:pt-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 z-10 w-full max-w-7xl mx-auto">
        
        <div v-gsap.from="{ x: -50, opacity: 0, duration: 1.2 }">
          <span class="text-ah-lime font-mono text-xs tracking-widest uppercase mb-4 block">Paint & Finishes</span>
          <!-- Ensure your H1 isn't being cut off by the top of the viewport -->
          <h1 class="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            Surface.<br /> <span class="text-ah-grey/40">Perfected.</span>
          </h1>
          <p class="text-ah-grey text-lg max-w-md leading-relaxed">
            Alexander Homes specializes in high-spec painting and architectural coatings. We define the final layer of your legacy.
          </p>
        </div>

        <!-- Image Container -->
        <div class="relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5 bg-white/5 rounded-sm overflow-hidden border border-white/10">
          <!-- Note: Make sure your img path is correct to fix the broken icon in your screenshot -->
          <!-- <img 
            src="/hero-painting.webp" 
            class="w-full h-full object-cover opacity-80"
            alt="Professional Finish"
          /> -->
        </div>

      </div>
    </section>

    <section id="services" class="py-40 bg-white text-ah-navy">
      <div class="max-w-7xl mx-auto px-10">
        <div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <h2 class="text-6xl font-black uppercase italic tracking-tighter leading-none">
            Museum Grade<br />Applications.
          </h2>
          <div class="h-1 w-24 bg-ah-lime mb-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-ah-navy/10 border border-ah-navy/10">
          <div 
            v-for="(s, i) in ['Interior Systems', 'Exterior Shield', 'Fine Finishes']" 
            :key="i"
            class="group p-12 bg-white hover:bg-ah-navy transition-all duration-700"
          >
            <span class="font-mono text-ah-lime block mb-20 text-sm">/0{{ i + 1 }}</span>
            <h3 class="text-3xl font-black uppercase italic mb-4 group-hover:text-ah-lime">
              {{ s }}
            </h3>
            <p class="text-ah-navy/50 group-hover:text-white/60 text-sm leading-relaxed">
              Rigorous preparation and multi-stage coating systems for enduring architectural beauty.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="py-40 px-10 border-t border-white/5">
       <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl font-bold uppercase tracking-widest text-ah-grey">Recent Work</h2>
          <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 italic uppercase font-black text-xl">
             <div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div>
             <div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div>
             <div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div>
             <div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div>
          </div>
       </div>
    </section>
  </div>
</template>