<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'One'
    },
    color: {
        type: String,
        default: 'text-zinc-400'
    },
    size: {
        type: String,
        default: 'text-xl'
    },
})
</script>
<template>
    <p :class="`${props.color} ${props.size} leading-relaxed max-w-lg`" v-html="text" />
</template>