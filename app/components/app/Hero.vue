<template>
        <section class="h-screen flex flex-col justify-center px-12 relative overflow-hidden">
      <div class="z-10">
        <h1 v-gsap.from="{
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.2
        }" class="text-[clamp(4.5rem,18vw,14rem)] font-black leading-[0.80] uppercase tracking-tighter italic">
          <div>Built to</div>
          <div class="text-orange-600">Endure.</div>
        </h1>

        <p v-gsap.from="{ opacity: 0, x: -50, duration: 1, delay: 0.8 }"
          class="mt-10 max-w-xl text-zinc-400 font-medium leading-relaxed text-lg">
          Advanced concrete solutions for residential and commercial developments. At Hahn Built, we bridge the gap between architectural vision and structural permanence.
        </p>
      </div>

      <div v-gsap.to="{
        scrollTrigger: {
          trigger: 'section',
          start: 'top top',
          scrub: true
        },
        scale: 1.2
      }" class="absolute right-0 top-0 w-1/2 h-full grayscale opacity-40">

        <NuxtImg class="w-full h-full object-cover" src="/images/home_one.webp" format="webp" preload loading="eager"
          fetch-priority="high" />
      </div>
    </section>
</template>
