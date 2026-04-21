import { _ as __nuxt_component_0 } from './Header-B7huCAAA.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { b as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'perfect-debounce';
import '@vue/shared';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Alexander Homes | Contact",
      description: "Contact Alexander Homes",
      ogDescription: "Contact Alexander Homes",
      ogTitle: "Alexander Homes | Contact",
      ogImage: "/images/logo.webp"
    });
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      scope: "Interior",
      location: "",
      details: ""
    });
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 px-6 md:px-12 relative overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"><div class="absolute top-0 left-1/4 w-px h-full bg-white"></div><div class="absolute top-1/2 left-0 w-full h-px bg-white"></div></div><div class="max-w-7xl mx-auto relative z-10"><header class="mb-24"><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Communication</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Contact" }, null, _parent));
      _push(`</header><div class="grid grid-cols-1 lg:grid-cols-12 gap-20"><div class="lg:col-span-7"><div class="bg-white/5 border border-white/10 p-10 rounded-sm backdrop-blur-sm"><div class="space-y-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-10"><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Principal Name</label><input${ssrRenderAttr("value", unref(formData).name)} type="text" placeholder="Full Name" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-ah-lime transition-colors font-bold uppercase italic"></div><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Email Address</label><input${ssrRenderAttr("value", unref(formData).email)} type="email" placeholder="email@example.com" class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-ah-lime transition-colors font-bold uppercase italic"></div></div><div class="space-y-4"><label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40 block">Project Scope</label><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(["Interior", "Exterior", "Cabinetry", "Commercial"], (scope) => {
        _push(`<button class="${ssrRenderClass([unref(formData).scope === scope ? "bg-ah-lime text-ah-navy border-ah-lime" : "bg-transparent text-white border-white/10", "px-6 py-3 border text-[10px] font-black uppercase italic tracking-widest transition-all"])}">${ssrInterpolate(scope)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-2"><label class="text-[10px] font-mono uppercase tracking-widest text-ah-grey/40">Technical Requirements</label><textarea rows="4" placeholder="Describe the substrate conditions, desired sheens, or architectural details..." class="w-full bg-transparent border border-white/10 p-6 outline-none focus:border-ah-lime transition-colors font-medium text-ah-grey text-sm">${ssrInterpolate(unref(formData).details)}</textarea></div><button${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="group relative w-full py-6 bg-ah-lime text-ah-navy font-black uppercase tracking-widest italic overflow-hidden transition-transform active:scale-[0.98]">`);
      if (!unref(isSubmitting)) {
        _push(`<span class="relative z-10 group-hover:text-white transition-colors duration-500">Transmit Manifest</span>`);
      } else {
        _push(`<span class="relative z-10 animate-pulse">Processing Data...</span>`);
      }
      _push(`<div class="absolute inset-0 bg-ah-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div></button></div></div></div><div class="lg:col-span-5 flex flex-col justify-between py-6"><div class="space-y-16"><div><h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Headquarters</h4><p class="text-3xl font-bold uppercase italic leading-tight"> Kalispell, Montana<br> Flathead Valley Region </p></div><div><h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Inquiry Line</h4><p class="text-3xl font-bold uppercase italic leading-tight hover:text-ah-lime transition-colors"><a href="tel:4063906173">406.390.6173</a></p><p class="text-[10px] text-ah-grey/40 mt-2 font-mono uppercase tracking-widest">Available 07:00 — 17:00 MST</p></div></div><div class="p-10 border border-white/5 bg-white/5 mt-20"><h5 class="text-[10px] font-black uppercase tracking-widest mb-4 text-ah-lime">Pre-Project Analysis</h5><p class="text-[10px] text-ah-grey leading-relaxed uppercase tracking-tight"> All project manifests undergo a technical review for surface feasibility and coating compatibility. We typically provide a preliminary analysis within 24 operational hours. </p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-DVzil03b.mjs.map
