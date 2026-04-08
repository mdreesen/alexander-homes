import { resolveComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheNav = resolveComponent("TheNav");
  const _directive_gsap = resolveDirective("gsap");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ah-navy min-h-screen text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheNav, null, null, _parent));
  _push(`<section id="about" class="relative min-h-screen flex items-center px-6 md:px-10 pt-24 md:pt-32"><div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 z-10 w-full max-w-7xl mx-auto"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { x: -50, opacity: 0, duration: 1.2 }, void 0, { from: true }))}><span class="text-ah-lime font-mono text-xs tracking-widest uppercase mb-4 block">Paint &amp; Finishes</span><h1 class="text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8"> Surface.<br> <span class="text-ah-grey/40">Perfected.</span></h1><p class="text-ah-grey text-lg max-w-md leading-relaxed"> Alexander Homes specializes in high-spec painting and architectural coatings. We define the final layer of your legacy. </p></div><div class="relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5 bg-white/5 rounded-sm overflow-hidden border border-white/10"></div></div></section><section id="services" class="py-40 bg-white text-ah-navy"><div class="max-w-7xl mx-auto px-10"><div class="mb-24 flex flex-col md:flex-row justify-between items-end gap-10"><h2 class="text-6xl font-black uppercase italic tracking-tighter leading-none"> Museum Grade<br>Applications. </h2><div class="h-1 w-24 bg-ah-lime mb-4"></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-ah-navy/10 border border-ah-navy/10"><!--[-->`);
  ssrRenderList(["Interior Systems", "Exterior Shield", "Fine Finishes"], (s, i) => {
    _push(`<div class="group p-12 bg-white hover:bg-ah-navy transition-all duration-700"><span class="font-mono text-ah-lime block mb-20 text-sm">/0${ssrInterpolate(i + 1)}</span><h3 class="text-3xl font-black uppercase italic mb-4 group-hover:text-ah-lime">${ssrInterpolate(s)}</h3><p class="text-ah-navy/50 group-hover:text-white/60 text-sm leading-relaxed"> Rigorous preparation and multi-stage coating systems for enduring architectural beauty. </p></div>`);
  });
  _push(`<!--]--></div></div></section><section id="portfolio" class="py-40 px-10 border-t border-white/5"><div class="max-w-7xl mx-auto text-center"><h2 class="text-4xl font-bold uppercase tracking-widest text-ah-grey">Recent Work</h2><div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 italic uppercase font-black text-xl"><div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div><div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div><div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div><div class="aspect-square bg-white/5 flex items-center justify-center border border-white/5">Coming Soon</div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CMFGWO1w.mjs.map
