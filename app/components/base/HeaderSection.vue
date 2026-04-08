<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'One'
    },
})
</script>

<template>
    <h2 class="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8" v-html="text" />
</template>