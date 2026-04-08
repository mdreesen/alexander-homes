<script setup lang="ts">
const props = defineProps({
    number: {
        type: Number,
    },
    icon: {
        type: String,
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <div>
        <div v-if="number || icon" class="flex justify-between items-start mb-12">
            <span v-if="number" class="font-mono text-orange-600 text-sm">0{{ number + 1 }}</span>
            <div
                class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">
                <Icon v-if="icon" :name="icon" class="w-5 h-5 text-zinc-500 group-hover:text-orange-600" />
            </div>
        </div>

        <div class="flex flex-col items-center">
        <h3 class="text-xl font-black uppercase italic mb-4 tracking-tight">
            {{ title }}
        </h3>
        <p class="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
            {{ description }}
        </p>
    </div>
    </div>
</template>