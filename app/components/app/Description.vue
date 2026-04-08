<template>
    <section class="bg-white text-black py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      <div class="absolute left-4 top-163.75 -translate-y-1/2 -rotate-90 origin-left hidden lg:block">
        <span class="text-[10px] font-mono text-zinc-800 uppercase tracking-[1em] whitespace-nowrap">
          Standard Operating Procedure: AH-2026
        </span>
      </div>
  
      <div class="max-w-7xl mx-auto gap-20 flex justify-center items-center">
        <div v-gsap.from="{ opacity: 0, y: 30, duration: 1, delay: 0.5 }">
          <span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Ethos</span>
          <baseHeaderSection text="Defining The<br>Final Layer." />
  
          <div class="space-y-10 max-w-xl">
            <p class="text-ah-grey text-lg leading-relaxed">
              Based in <span class="border-b border-black pb-1">Kalispell, Montana</span>, Alexander Homes is an architectural finishing firm. We believe the difference between a building and a home lies in the precision of the surface.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-10">
              <div>
                <h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mb-4">I. Preparation</h4>
                <p class="text-xs text-ah-grey/60 leading-relaxed">
                  80% of a museum-grade finish is invisible. Our multi-stage sanding and substrate priming ensure a flawless bond.
                </p>
              </div>
              <div>
                <h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mb-4">II. Execution</h4>
                <p class="text-xs text-ah-grey/60 leading-relaxed">
                  Utilizing high-volume, low-pressure (HVLP) systems and hand-brushed techniques for surgical accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>