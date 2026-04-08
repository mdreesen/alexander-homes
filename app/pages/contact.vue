<script setup lang="ts">
useHead({
  title: 'Alexander Homes | Contact',
  meta: [
    { name: 'Contact', content: 'Alexander Homes Contact.' },
  ],
});

const formData = ref({
  name: '',
  email: '',
  phone: '',
  scope: 'Interior',
  location: '',
  details: ''
});

const isSubmitting = ref(false);

const transmitManifest = async () => {
  isSubmitting.value = true;
  // Integrate your GhostForm or Email logic here
  setTimeout(() => {
    isSubmitting.value = false;
    alert('Project Manifest Transmitted.');
  }, 2000);
};
</script>

<template>
  <div class="bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">

    <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
      <div class="absolute top-0 left-1/4 w-px h-full bg-white"></div>
      <div class="absolute top-1/2 left-0 w-full h-px bg-white"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <header class="mb-24">
        <span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Communication</span>
        <baseHeader text="Contact" />
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">

        <div class="lg:col-span-7">
          <div class="bg-white/5 border border-white/10 p-10 rounded-sm backdrop-blur-sm">
            <div class="space-y-12">

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="space-y-2">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Principal Name</label>
                  <input v-model="formData.name" type="text" placeholder="Full Name"
                    class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-ah-lime transition-colors font-bold uppercase italic" />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Email Address</label>
                  <input v-model="formData.email" type="email" placeholder="email@example.com"
                    class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-ah-lime transition-colors font-bold uppercase italic" />
                </div>
              </div>

              <div class="space-y-4">
                <label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40 block">Project
                  Scope</label>
                <div class="flex flex-wrap gap-4">
                  <button v-for="scope in ['Interior', 'Exterior', 'Cabinetry', 'Commercial']" :key="scope"
                    @click="formData.scope = scope"
                    :class="formData.scope === scope ? 'bg-ah-lime text-ah-navy border-ah-lime' : 'bg-transparent text-white border-white/10'"
                    class="px-6 py-3 border text-[10px] font-black uppercase italic tracking-widest transition-all">
                    {{ scope }}
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Technical
                  Requirements</label>
                <textarea v-model="formData.details" rows="4"
                  placeholder="Describe the substrate conditions, desired sheens, or architectural details..."
                  class="w-full bg-transparent border border-white/10 p-6 outline-none focus:border-ah-lime transition-colors font-medium text-ah-grey text-sm"></textarea>
              </div>

              <button @click="transmitManifest" :disabled="isSubmitting"
                class="group relative w-full py-6 bg-ah-lime text-ah-navy font-black uppercase tracking-widest italic overflow-hidden transition-transform active:scale-[0.98]">
                <span v-if="!isSubmitting"
                  class="relative z-10 group-hover:text-white transition-colors duration-500">Transmit Manifest</span>
                <span v-else class="relative z-10 animate-pulse">Processing Data...</span>
                <div
                  class="absolute inset-0 bg-ah-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                </div>
              </button>

            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-between py-6">
          <div class="space-y-16">
            <div>
              <h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Headquarters</h4>
              <p class="text-3xl font-bold uppercase italic leading-tight">
                Kalispell, Montana<br />
                Flathead Valley Region
              </p>
            </div>

            <div>
              <h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Inquiry Line</h4>
              <p class="text-3xl font-bold uppercase italic leading-tight hover:text-ah-lime transition-colors">
                <a href="tel:4063906173">406.390.6173</a>
              </p>
              <p class="text-[10px] text-ah-grey/40 mt-2 font-mono uppercase tracking-widest">Available 07:00 — 17:00
                MST</p>
            </div>
          </div>

          <div class="p-10 border border-white/5 bg-white/5 mt-20">
            <h5 class="text-[10px] font-black uppercase tracking-widest mb-4 text-ah-lime">Pre-Project Analysis</h5>
            <p class="text-[10px] text-ah-grey leading-relaxed uppercase tracking-tight">
              All project manifests undergo a technical review for surface feasibility and coating compatibility. We
              typically provide a preliminary analysis within 24 operational hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>