import { _ as __nuxt_component_0 } from './Header-B7huCAAA.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Alexander Homes | Projects",
      meta: [
        { name: "Projects", content: "Alexander Homes Projects." }
      ]
    });
    const projects2 = [
      {
        id: "01",
        title: "Lakeside Estate",
        location: "Whitefish, MT",
        system: "Interior Museum-Grade",
        sheen: "Level 5 / Matte",
        img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80"
      },
      {
        id: "02",
        title: "The Ironwood Cabin",
        location: "Bigfork, MT",
        system: "Exterior Weather-Shield",
        sheen: "Semi-Transparent Stain",
        img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
      },
      {
        id: "03",
        title: "Skyline Commercial",
        location: "Kalispell, MT",
        system: "Industrial Epoxy Floor",
        sheen: "High-Gloss / Anti-Slip",
        img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80"
      }
    ];
    const activeBg = ref(projects2[0].img);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 relative overflow-hidden" }, _attrs))} data-v-b4287ccd><div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none" data-v-b4287ccd><img${ssrRenderAttr("src", unref(activeBg))} class="w-full h-full object-cover scale-110" alt="Finish Preview" data-v-b4287ccd><div class="absolute inset-0 bg-linear-to-b from-ah-navy via-transparent to-ah-navy" data-v-b4287ccd></div></div><div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10" data-v-b4287ccd><header class="mb-24" data-v-b4287ccd><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block" data-v-b4287ccd>Archive</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Projects" }, null, _parent));
      _push(`</header><div class="flex flex-col border-t border-white/10" data-v-b4287ccd><!--[-->`);
      ssrRenderList(projects2, (project) => {
        _push(`<div class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4" data-v-b4287ccd><div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8" data-v-b4287ccd><div class="md:col-span-1 font-mono text-ah-grey/30 group-hover:text-ah-lime transition-colors" data-v-b4287ccd>${ssrInterpolate(project.id)}</div><div class="md:col-span-5" data-v-b4287ccd><h3 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500" data-v-b4287ccd>${ssrInterpolate(project.title)}</h3><p class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mt-2" data-v-b4287ccd>${ssrInterpolate(project.location)}</p></div><div class="md:col-span-3 text-ah-grey/60 text-sm font-bold uppercase tracking-widest" data-v-b4287ccd>${ssrInterpolate(project.system)}</div><div class="md:col-span-3 text-right hidden md:block" data-v-b4287ccd><span class="text-[10px] font-mono text-ah-grey/30 leading-none uppercase" data-v-b4287ccd> Technical Sheen:<br data-v-b4287ccd><span class="text-white" data-v-b4287ccd>${ssrInterpolate(project.sheen)}</span></span></div></div></div>`);
      });
      _push(`<!--]--></div><footer class="mt-32 border-t border-white/5 pt-10 flex justify-between items-center text-ah-grey/30 font-mono text-[10px] uppercase tracking-widest" data-v-b4287ccd><span data-v-b4287ccd>Architectural Coatings Verified</span><span data-v-b4287ccd>Montana Licensed #XXXXX</span></footer></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4287ccd"]]);

export { projects as default };
//# sourceMappingURL=projects-BGyk4DMy.mjs.map
