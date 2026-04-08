import { _ as __nuxt_component_0 } from './Header-B7huCAAA.mjs';
import { u as useHead, b as __nuxt_component_2$1, a as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './HeaderSection-CIirkF0C.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Alexander Homes | About",
      meta: [
        { name: "About", content: "Alexander Homes About." }
      ]
    });
    const principles = [
      {
        title: "Precision Substrate Prep",
        desc: "The foundation of a flawless finish. We utilize dustless sanding and chemical bonding agents to ensure every surface is surgically clean before a single drop of paint is applied."
      },
      {
        title: "Chamber-Controlled Finishing",
        desc: "For cabinetry and millwork, we utilize high-volume, low-pressure (HVLP) systems in controlled environments to eliminate contaminants and orange-peel textures."
      },
      {
        title: "Climate-Adaptive Coatings",
        desc: "In Montana, surfaces breathe. We select high-elasticity coatings that expand and contract with Evergreen’s extreme temperature shifts without cracking or peeling."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_2$1;
      const _component_baseHeaderSection = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ah-navy text-ah-white min-h-screen pt-40 pb-20" }, _attrs))}><div class="max-w-7xl mx-auto px-6 md:px-12"><header class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -50, duration: 1 }, void 0, { from: true }))}><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Mandate</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "The Art of<br>Persistence." }, null, _parent));
      _push(`<p class="text-ah-grey text-xl leading-relaxed max-w-lg"> Alexander Homes was founded on a simple realization: the final layer of a home is the most vulnerable, yet the most visible. We don&#39;t just paint; we protect and perfect. </p></div><div class="relative"><div${ssrRenderAttrs(mergeProps({ class: "relative sm:w-87.5 w-full h-full aspect-square bg-white/5 overflow-hidden border border-white/10 p-4" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, scale: 0.9, duration: 1.5 }, void 0, { from: true })))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-full h-full object-cover opacity-60",
        alt: "Alexander Homes Family",
        format: "webp",
        width: "200px",
        height: "200px",
        src: "/images/family.webp",
        loading: "lazy",
        "fetch-priority": "low"
      }, null, _parent));
      _push(`</div><div class="absolute -bottom-10 -left-10 text-[20vw] font-black text-white/5 z-[-1] pointer-events-none"> AH</div></div></header><section class="grid grid-cols-2 md:grid-cols-4 gap-1 bg-white/10 border-y border-white/10 mb-32"><!--[-->`);
      ssrRenderList([
        { v: "01", l: "Standard of Care" },
        { v: "100%", l: "Dustless sanding" },
        { v: "Kalispell", l: "Based & Operated" },
        { v: "5-Year", l: "Finish Warranty" }
      ], (stat) => {
        _push(`<div class="bg-ah-navy py-12 text-center"><div class="text-2xl font-black italic text-ah-lime mb-2">${ssrInterpolate(stat.v)}</div><div class="text-[9px] font-mono text-ah-grey/40 uppercase tracking-widest">${ssrInterpolate(stat.l)}</div></div>`);
      });
      _push(`<!--]--></section><section class="mb-32"><div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Our Methodology." }, null, _parent));
      _push(`<div class="h-px grow bg-white/10 mx-8 hidden md:block"></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-16"><!--[-->`);
      ssrRenderList(principles, (item, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: i,
          class: "group"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 30, delay: i * 0.2 }, void 0, { from: true })))}><div class="w-12 h-px bg-ah-lime mb-6 group-hover:w-full transition-all duration-500"></div><h4 class="text-xl font-black uppercase italic mb-4 tracking-tight">${ssrInterpolate(item.title)}</h4><p class="text-ah-grey/60 text-sm leading-relaxed">${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="bg-ah-lime p-10 text-ah-navy text-center relative overflow-hidden"><div class="relative z-10">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Expect Excellence." }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "px-12 py-5 bg-ah-navy text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a Finish Analysis `);
          } else {
            return [
              createTextVNode(" Book a Finish Analysis ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute inset-0 flex items-center justify-center text-[20vw] font-black opacity-10 pointer-events-none italic"> ALWAYS</div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BVMCkvmm.mjs.map
