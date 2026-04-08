<script setup lang="ts">
const props = defineProps({
    textOne: {
        type: String,
        default: 'One'
    },

    textTwo: {
        type: String,
        default: 'Two'
    },
})
</script>

<template>
    <h2 class="flex flex-col text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
        <span>{{ textOne }}</span>
        <span class="text-orange-600 flex">{{ textTwo }}</span>
    </h2>
</template>