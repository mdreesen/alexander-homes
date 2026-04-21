<script setup lang="ts">
useSeoMeta({
    title: 'Alexander Homes | Projects Process',
    description: 'Projects Process Alexander homes',
    ogDescription: 'Projects Process Alexander homes',
    ogTitle: 'Alexander Homes | Projects Process',
    ogImage: '/images/logo.webp',
});

const { data: images } = await useFetch('/api/images/process')

</script>

<template>
  <section class="py-24 px-6 md:px-12 border-t border-zinc-800">

    <header class="mb-20">
      <baseHeaderSection text="Project Process" />
      <baseDescription
        text="From residential foundations to complex commercial scale, Alexander Homes structures defines endurance with setup." />
    </header>

    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
      <div v-for="item, index in images" :key="index"
        class="break-inside-avoid group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl transition-all duration-300 hover:border-white-300/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/5">
        <div class="aspect-square">
          <baseImage :source="item"
            :style="`w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`"
            alt="Setup Concrete image" />

          <div
            class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span class="font-mono text-xs uppercase tracking-widest mb-2">Alexander Homes Verified</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensures the Pinterest effect is clean and smooth */
.break-inside-avoid {
  break-inside: avoid;
}
</style>