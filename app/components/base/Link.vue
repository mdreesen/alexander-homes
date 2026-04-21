<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: 'One'
    },

    style: {
        type: String,
        default: ''
    },

    text: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <nuxt-link :class="style" :to="to">
        {{ text }}
    </nuxt-link>
</template>