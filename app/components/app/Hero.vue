<template>
      <section id="about" class="relative min-h-screen flex items-center px-6 md:px-10 pt-24 md:pt-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 z-10 w-full max-w-7xl mx-auto">
        
        <div v-gsap.from="{ x: -50, opacity: 0, duration: 1.2 }">
          <span class="text-ah-lime font-mono text-xs tracking-widest uppercase mb-4 block">Paint & Finishes</span>
          <!-- Ensure your H1 isn't being cut off by the top of the viewport -->
          <baseHeader text="Surface. Perfected." />
          <p class="text-ah-grey text-lg max-w-md leading-relaxed">
            Alexander Homes specializes in high-spec painting and architectural coatings. We define the final layer of your legacy.
          </p>
        </div>

        <!-- Image Container -->
        <div class="relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5 bg-white/5 rounded-sm overflow-hidden border border-white/10">
          <NuxtImg class="w-full h-full object-cover opacity-80"
          alt="Alexander Homes Logo" format="webp" width="200px" height="200px" src="/images/home_one.webp" loading="lazy"
          fetch-priority="low" />
          <!-- Note: Make sure your img path is correct to fix the broken icon in your screenshot -->
          <!-- <img 
            src="/hero-painting.webp" 
            class="w-full h-full object-cover opacity-80"
            alt="Professional Finish"
          /> -->
        </div>

      </div>
    </section>
</template>