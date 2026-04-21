<script setup lang="ts">
const props = defineProps({
    source: {
        type: String,
        default: 'One'
    },

    style: {
        type: String,
        default: ''
    },

    alt: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <NuxtImg :class="style" :src="source" format="webp" :alt="alt" preload loading="eager" fetch-priority="high" />
</template>