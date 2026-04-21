<script setup lang="ts">
const activeIndex = ref<number | null>(null);

const faqs = [
  {
    q: "What is your standard for surface preparation?",
    a: "Preparation is 80% of our process. We utilize dustless sanding systems, specialized chemical bonding primers, and high-intensity lighting to identify and eliminate substrate defects before the final coating is applied."
  },
  {
    q: "How do you handle Montana's extreme climate shifts?",
    a: "We utilize high-elasticity architectural coatings engineered for the freeze-thaw cycles of the Flathead Valley. These systems allow for thermal expansion and contraction without cracking or delamination."
  },
  {
    q: "Do you offer specialized cabinetry or millwork finishes?",
    a: "Yes. For fine finishes, we utilize HVLP (High Volume Low Pressure) spray systems in controlled environments to achieve a glass-smooth, factory-grade finish that standard brushes cannot replicate."
  },
  {
    q: "Are you licensed and insured for high-end residential work?",
    a: "Alexander Homes is fully licensed, bonded, and carries comprehensive liability and worker's compensation insurance. We strictly adhere to all architectural and safety specifications for luxury estates."
  }
];

const toggle = (i: number) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};
</script>

<template>
  <section id="faq" class="py-32 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-4xl mx-auto">
      
      <div>
        <span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Information</span>
        <baseHeaderSection text="Common<br>Questions." />
        <div class="h-1 w-24 bg-ah-lime"></div>
      </div>

      <div class="border-t border-white/10">
        <div 
          v-for="(faq, i) in faqs" 
          :key="i"
          class="border-b border-white/10 overflow-hidden"
        >
          <button 
            @click="toggle(i)"
            class="w-full py-10 flex items-center justify-between text-left group transition-all"
          >
            <div class="flex items-center gap-6 md:gap-10">
              <span class="font-mono text-ah-grey/20 group-hover:text-ah-lime transition-colors">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
              <span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {{ faq.q }}
              </span>
            </div>
            
            <div class="relative w-6 h-6">
              <div class="absolute inset-0 bg-black h-0.5 my-auto transition-transform duration-500" :class="{ 'rotate-180': activeIndex === i }"></div>
              <div class="absolute inset-0 bg-black w-0.5 mx-auto transition-transform duration-500" :class="{ 'rotate-90 opacity-0': activeIndex === i }"></div>
            </div>
          </button>

          <div 
            v-show="activeIndex === i"
            v-gsap.from="{ height: 0, opacity: 0, duration: 0.5, ease: 'power4.out' }"
            class="pb-10 pl-8 md:pl-18 pr-10"
          >
            <p class="text-ah-grey text-lg leading-relaxed max-w-2xl border-l border-ah-lime/30 pl-8">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>