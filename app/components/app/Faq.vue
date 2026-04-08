<script setup lang="ts">
const activeIndex = ref<number | null>(null);

const faqs = [
  {
    q: "What types of concrete projects do you handle?",
    a: "We specialize in high-durability residential foundations, commercial flatwork, architectural stamped concrete, and structural retaining walls designed for Montana’s freeze-thaw cycles."
  },
  {
    q: "What is your typical service area?",
    a: "Based in Evergreen, we primarily serve the Flathead Valley, including Kalispell, Whitefish, Columbia Falls, and Bigfork. For large-scale commercial builds, we extend across Western Montana."
  },
  {
    q: "Are you licensed and insured in Montana?",
    a: "Absolutely. Hahn Built is fully licensed, bonded, and carries comprehensive liability and worker's comp insurance. Safety and compliance are our structural bedrock."
  },
  {
    q: "How do you handle project estimates?",
    a: "We provide detailed, transparent bids based on site-specific variables. This includes excavation needs, reinforcement requirements, and concrete PSI grades tailored to your project’s load."
  }
];

const toggle = (i: number) => {
  activeIndex.value = activeIndex.value === i ? null : i;
};
</script>

<template>
  <section class="bg-[#0c0c0c] text-white py-32 px-10">
    <div class="max-w-4xl mx-auto">
      
      <div class="mb-20">
        <baseHeader textOne="Common" textTwo="Questions" />
        <div class="h-1 w-24 bg-orange-600 hidden md:block"></div>
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
            <div class="flex items-center gap-8">
              <span class="font-mono text-zinc-700 group-hover:text-orange-600 transition-colors">
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
              <span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {{ faq.q }}
              </span>
            </div>
            
            <div class="relative w-6 h-6">
              <div class="absolute inset-0 bg-white h-0.5 my-auto transition-transform duration-500" :class="{ 'rotate-180': activeIndex === i }"></div>
              <div class="absolute inset-0 bg-white w-0.5 mx-auto transition-transform duration-500" :class="{ 'rotate-90 opacity-0': activeIndex === i }"></div>
            </div>
          </button>

          <div 
            v-show="activeIndex === i"
            v-gsap.from="{ height: 0, opacity: 0, duration: 0.5, ease: 'power4.out' }"
            class="pb-10 pl-16 md:pl-24 pr-10"
          >
            <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl border-l-2 border-orange-600/30 pl-6">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>