<template>
    <section class="bg-[#0c0c0c] text-white py-32 px-10 border-t border-white/5">
        <div class="max-w-7xl mx-auto">
            <div class="mb-24">
                <baseHeader textOne="Everything" textTwo="You Need" />
                <p class="mt-8 max-w-2xl text-zinc-500 text-lg leading-relaxed">
                    From massive commercial foundations to custom architectural flatwork, Hahn Built delivers structural
                    concrete that serves as the literal bedrock of Montana.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10">
                <div v-for="(item, index) in services" :key="index" v-gsap.from="{
                    scrollTrigger: { trigger: '.service-item', start: 'top 90%' },
                    opacity: 0,
                    y: 30,
                    delay: index * 0.1
                }"
                    class="service-item group p-12 border-r border-b border-white/10 hover:bg-zinc-900/50 transition-colors duration-500">
                    <baseCard :number="index" :icon="item.icon" :title="item.title" :description="item.description" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        title: 'Foundation Systems',
        description: 'Precision-engineered pouring for residential estates and commercial hubs. We build the base that never shifts.',
        icon: 'lucide:layers'
    },
    {
        title: 'Architectural Flatwork',
        description: 'Custom stamped and stained concrete that blurs the line between structural necessity and high-end design.',
        icon: 'lucide:layout-grid'
    },
    {
        title: 'Reinforcement & Steel',
        description: 'Industrial-grade rebar integration and structural reinforcement for high-stress Montana environments.',
        icon: 'lucide:shield-check'
    },
    {
        title: 'Site Preparation',
        description: 'Comprehensive excavation, grading, and compaction to ensure your concrete sits on a perfect foundation.',
        icon: 'lucide:mountain'
    }
];
</script>