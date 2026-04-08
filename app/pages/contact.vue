<script setup lang="ts">
useHead({
  title: 'Hahn Built | Contact',
  meta: [
    { name: 'Contact', content: 'Hahn Built Contact.' },
  ],
});

const formData = ref({
  name: '',
  email: '',
  projectType: 'Residential',
  location: '',
  details: ''
});

const isSubmitting = ref(false);

const submitManifest = async () => {
  isSubmitting.value = true;
  // Integrate your GhostForm logic here
  setTimeout(() => {
    isSubmitting.value = false;
    alert('Project Data Transmitted.');
  }, 2000);
};
</script>

<template>
  <div class="bg-[#0c0c0c] min-h-screen text-white pt-40 pb-20 px-10 relative overflow-hidden">
    
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-px h-full bg-white"></div>
      <div class="absolute top-1/3 left-0 w-full h-px bg-white"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <header class="mb-24">
        <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Intake</span>
        <h1 class="text-5xl md:text-7xl  font-black uppercase italic leading-[0.85] tracking-tighter mb-8">
          <span>Contact</span>
        </h1>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        <div class="lg:col-span-7">
          <div class="bg-zinc-900/30 border border-white/5 p-10 rounded-3xl backdrop-blur-sm">
            <div class="space-y-12">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="space-y-2">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Principal Name</label>
                  <input v-model="formData.name" type="text" placeholder="Full Name" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic" />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Contact Email</label>
                  <input v-model="formData.email" type="email" placeholder="Email Address" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic" />
                </div>
              </div>

              <div class="space-y-4">
                <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">Structural Category</label>
                <div class="flex flex-wrap gap-4">
                  <button 
                    v-for="type in ['Residential', 'Commercial', 'Civil', 'Other']" 
                    :key="type"
                    @click="formData.projectType = type"
                    :class="formData.projectType === type ? 'bg-orange-600 text-black border-orange-600' : 'bg-transparent text-white border-white/10'"
                    class="px-8 py-3 border text-xs font-black uppercase italic tracking-widest transition-all"
                  >
                    {{ type }}
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Project Details</label>
                <textarea v-model="formData.details" rows="4" placeholder="Briefly describe the structural requirements..." class="w-full bg-transparent border border-white/10 p-6 outline-none focus:border-orange-600 transition-colors font-medium text-zinc-400"></textarea>
              </div>

              <button 
                @click="submitManifest"
                :disabled="isSubmitting"
                class="group relative w-full py-6 bg-white text-black font-black uppercase tracking-widest italic overflow-hidden"
              >
                <span v-if="!isSubmitting" class="relative z-10 group-hover:text-white transition-colors duration-500">Transmit Data</span>
                <span v-else class="relative z-10 animate-pulse">Processing...</span>
                <div class="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>

            </div>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-between py-6">
          <div class="space-y-16">
            <div>
              <h4 class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Headquarters</h4>
              <p class="text-3xl font-bold uppercase italic leading-tight">
                Evergreen, Montana<br />
                Flathead Valley
              </p>
            </div>

            <div>
              <h4 class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Direct Line</h4>
              <p class="text-3xl font-bold uppercase italic leading-tight hover:text-orange-600 transition-colors">
                <a href="tel:4063002052">(406) 300-2052</a>
              </p>
              <p class="text-sm text-zinc-500 mt-2 font-mono uppercase">Mon — Fri / 07:00 — 17:00</p>
            </div>
          </div>

          <div class="p-10 border border-white/5 bg-zinc-900/10 mt-20">
            <h5 class="text-xs font-black uppercase tracking-widest mb-4">Structural Inspection</h5>
            <p class="text-xs text-zinc-500 leading-relaxed uppercase tracking-tight">
              All project manifests are reviewed by our lead engineers. Response time is typically within 24 operational hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>