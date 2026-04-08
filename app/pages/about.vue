<script setup lang="ts">
useHead({
  title: 'Hahn Built | About',
  meta: [
    { name: 'About', content: 'Hahn Built About.' },
  ],
});

const stats = [
    { label: 'PSI Strength', value: '4500+' },
    { label: 'Licensed In', value: 'Montana' },
    { label: 'Core Team', value: 'Evergreen' },
    { label: 'Years Experience', value: '15+' }
];

const qualityPoints = [
    {
        title: "Thermal Management",
        desc: "In Evergreen, the frost line is a moving target. We use specialized air-entrained admixtures to prevent internal pressure during Montana winters."
    },
    {
        title: "Laser Precision",
        desc: "Tolerances measured in millimeters. Using high-frequency laser screeds to ensure every commercial floor is perfectly planar."
    },
    {
        title: "Vapor Barrier Defense",
        desc: "Multi-layer moisture mitigation systems that prevent slab sweating and protect your finished flooring for decades."
    }
];
</script>

<template>
    <div class="min-h-screen pt-40 pb-20 px-10">
        <div class="max-w-7xl mx-auto">

            <header class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
                <div v-gsap.from="{ opacity: 0, x: -50, duration: 1 }">
                    <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">The
                        Mandate</span>
                    <h1 class="text-5xl md:text-7xl font-black uppercase italic leading-[0.85] tracking-tighter mb-8">
                        Built to <br /> <span class="text-zinc-800">Outlast.</span>
                    </h1>
                    <p class="text-zinc-400 text-xl leading-relaxed max-w-lg">
                        In Montana, the environment is the ultimate inspector. At Hahn Built, we don't just pour
                        concrete; we engineer foundations that withstand the shifting frost and heavy loads of the
                        Flathead Valley.
                    </p>
                </div>

                <div v-gsap.from="{ opacity: 0, scale: 0.9, duration: 1.5 }"
                    class="relative aspect-square bg-zinc-900 overflow-hidden group">
                    <NuxtImg
                        class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-3000"
                        src="/images/home_three.webp" format="webp" preload loading="eager" fetch-priority="high" />
                    <div class="absolute inset-0 border-20 border-[#0c0c0c]"></div>
                </div>
            </header>

            <section class="grid grid-cols-2 md:grid-cols-4 gap-1 border-y border-white/10 mb-32 bg-white/10">
                <div v-for="stat in stats" :key="stat.label"
                    class="bg-[#0c0c0c] py-16 flex justify-center items-center text-center group">
                    <baseCard :title="stat.label" :description="stat.value" />
                </div>
            </section>

            <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                <div class="lg:col-span-4">
                    <h2 class="text-4xl font-black uppercase italic tracking-tight mb-6">Our Bedrock</h2>
                    <p class="text-zinc-500 leading-relaxed">
                        Hahn Built was founded on the principle that a project is only as good as its base. We
                        specialize in high-spec commercial foundations and custom residential flatwork where precision
                        isn't optional—it's the standard.
                    </p>
                </div>

                <div class="lg:col-span-8">
                    <div v-gsap.from="{
                        scrollTrigger: { trigger: '.blueprint-img', start: 'top 80%' },
                        width: '0%',
                        duration: 1.5,
                        ease: 'expo.inOut'
                    }" class="blueprint-img h-px bg-orange-600 mb-10"></div>
                    <div class="flex flex-col md:flex-row justify-between gap-10">
                        <div class="max-w-xs">
                            <h4 class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">01.
                                Precision</h4>
                            <p class="text-sm text-zinc-400">Laser-leveled accuracy on every pour, ensuring a perfect
                                start for every build.</p>
                        </div>
                        <div class="max-w-xs">
                            <h4 class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">02.
                                Durability</h4>
                            <p class="text-sm text-zinc-400">Mixed specifically for the local climate to prevent
                                cracking and structural failure.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-[#0c0c0c] text-white py-32 px-10 border-y border-white/5 relative overflow-hidden">

                <div
                    class="absolute top-10 right-10 font-mono text-[10px] text-zinc-800 uppercase tracking-[0.5em] hidden lg:block">
                    Spec: ASTM C94/C94M-22a
                </div>

                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                        <div class="lg:col-span-5 relative group">
                            <div v-gsap.from="{ opacity: 0, scale: 1.1, duration: 1.5 }"
                                class="relative aspect-3/4 overflow-hidden border border-white/10">
                                <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
                                    alt="Concrete Core Sample"
                                    class="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-1000" />
                                <div
                                    class="absolute top-10 left-10 px-4 py-1 border border-orange-600 text-orange-600 font-mono text-[10px] uppercase tracking-widest -rotate-12">
                                    QC Passed
                                </div>
                            </div>
                            <div
                                class="absolute -bottom-6 -right-6 bg-orange-600 text-black p-6 max-w-50 hidden md:block">
                                <p class="text-[10px] font-black uppercase tracking-tight leading-none">
                                    Verified 4500 PSI mix design for extreme freeze-thaw resistance.
                                </p>
                            </div>
                        </div>

                        <div class="lg:col-span-7">
                            <!-- <h2
                                class="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-12">
                                The Bedrock <br /> <span class="text-zinc-800">Standard.</span>
                            </h2> -->
                            <baseHeader textOne="Our" textTwo="Standards" />


                            <div class="space-y-12">
                                <div v-for="(point, i) in qualityPoints" :key="i" v-gsap.from="{
                                    scrollTrigger: { trigger: '.quality-point', start: 'top 85%' },
                                    x: 30,
                                    opacity: 0,
                                    delay: i * 0.2
                                }" class="quality-point group flex gap-8 items-start border-b border-white/5 pb-8">
                                    <div class="text-orange-600 font-mono text-lg pt-1">/0{{ i + 1 }}</div>
                                    <div>
                                        <h4
                                            class="text-xl font-black uppercase italic tracking-tight mb-2 group-hover:text-orange-600 transition-colors">
                                            {{ point.title }}
                                        </h4>
                                        <p class="text-zinc-500 text-sm leading-relaxed max-w-md">
                                            {{ point.desc }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>