import { _ as __nuxt_component_0$1 } from './Header-B7huCAAA.mjs';
import { b as useSeoMeta, _ as _export_sfc, c as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$2 } from './HeaderSection-CIirkF0C.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_baseHeader = __nuxt_component_0$1;
  const _component_NuxtImg = __nuxt_component_2$1;
  const _directive_gsap = resolveDirective("gsap");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "relative min-h-screen flex items-center px-6 md:px-10 pt-24 md:pt-32"
  }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 z-10 w-full max-w-7xl mx-auto"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { x: -50, opacity: 0, duration: 1.2 }, void 0, { from: true }))}><span class="text-ah-lime font-mono text-xs tracking-widest uppercase mb-4 block">Paint &amp; Finishes</span>`);
  _push(ssrRenderComponent(_component_baseHeader, { text: "Surface.<br>Perfected." }, null, _parent));
  _push(`<p class="text-ah-grey text-lg max-w-md leading-relaxed"> Alexander Homes specializes in high-spec painting and architectural coatings. We define the final layer of your legacy. </p></div><div class="relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5 bg-white/5 rounded-sm overflow-hidden border border-white/10">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-full h-full object-cover opacity-80",
    alt: "Alexander Homes Logo",
    format: "webp",
    width: "200px",
    height: "200px",
    src: "/images/home_one.webp",
    loading: "lazy",
    "fetch-priority": "low"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AppHero" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_baseHeaderSection = __nuxt_component_0$2;
  const _directive_gsap = resolveDirective("gsap");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white text-black py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden" }, _attrs))}><div class="absolute left-4 top-163.75 -translate-y-1/2 -rotate-90 origin-left hidden lg:block"><span class="text-[10px] font-mono text-zinc-800 uppercase tracking-[1em] whitespace-nowrap"> Standard Operating Procedure: AH-2026 </span></div><div class="max-w-7xl mx-auto gap-20 flex justify-center items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, y: 30, duration: 1, delay: 0.5 }, void 0, { from: true }))}><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Ethos</span>`);
  _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Defining The<br>Final Layer." }, null, _parent));
  _push(`<div class="space-y-10 max-w-xl"><p class="text-ah-grey text-lg leading-relaxed"> Based in <span class="border-b border-black pb-1">Kalispell, Montana</span>, Alexander Homes is an architectural finishing firm. We believe the difference between a building and a home lies in the precision of the surface. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-10"><div><h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mb-4">I. Preparation</h4><p class="text-xs text-ah-grey/60 leading-relaxed"> 80% of a museum-grade finish is invisible. Our multi-stage sanding and substrate priming ensure a flawless bond. </p></div><div><h4 class="text-ah-lime font-mono text-[10px] uppercase tracking-widest mb-4">II. Execution</h4><p class="text-xs text-ah-grey/60 leading-relaxed"> Utilizing high-volume, low-pressure (HVLP) systems and hand-brushed techniques for surgical accuracy. </p></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Description.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "AppDescription" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(null);
    const faqs = [
      {
        q: "What is your standard for surface preparation?",
        a: "Preparation is 80% of our process. We utilize dustless sanding systems, specialized chemical bonding primers, and high-intensity lighting to identify and eliminate substrate defects before the final coating is applied."
      },
      {
        q: "How do you handle Montana's extreme climate shifts?",
        a: "We utilize high-elasticity architectural coatings engineered for the freeze-thaw cycles of the Flathead Valley. These systems allow for thermal expansion and contraction without cracking or delamination."
      },
      {
        q: "Do you offer specialized cabinetry or millwork finishes?",
        a: "Yes. For fine finishes, we utilize HVLP (High Volume Low Pressure) spray systems in controlled environments to achieve a glass-smooth, factory-grade finish that standard brushes cannot replicate."
      },
      {
        q: "Are you licensed and insured for high-end residential work?",
        a: "Alexander Homes is fully licensed, bonded, and carries comprehensive liability and worker's compensation insurance. We strictly adhere to all architectural and safety specifications for luxury estates."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderSection = __nuxt_component_0$2;
      const _directive_gsap = resolveDirective("gsap");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "bg-white text-black py-32 px-6 md:px-12 border-t border-white/5"
      }, _attrs))}><div class="max-w-4xl mx-auto"><div><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Information</span>`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Common<br>Questions." }, null, _parent));
      _push(`<div class="h-1 w-24 bg-ah-lime"></div></div><div class="border-t border-white/10"><!--[-->`);
      ssrRenderList(faqs, (faq, i) => {
        _push(`<div class="border-b border-white/10 overflow-hidden"><button class="w-full py-10 flex items-center justify-between text-left group transition-all"><div class="flex items-center gap-6 md:gap-10"><span class="font-mono text-ah-grey/20 group-hover:text-ah-lime transition-colors">${ssrInterpolate((i + 1).toString().padStart(2, "0"))}</span><span class="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">${ssrInterpolate(faq.q)}</span></div><div class="relative w-6 h-6"><div class="${ssrRenderClass([{ "rotate-180": unref(activeIndex) === i }, "absolute inset-0 bg-black h-0.5 my-auto transition-transform duration-500"])}"></div><div class="${ssrRenderClass([{ "rotate-90 opacity-0": unref(activeIndex) === i }, "absolute inset-0 bg-black w-0.5 mx-auto transition-transform duration-500"])}"></div></div></button><div${ssrRenderAttrs(mergeProps({
          class: "pb-10 pl-8 md:pl-18 pr-10",
          style: unref(activeIndex) === i ? null : { display: "none" }
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, { height: 0, opacity: 0, duration: 0.5, ease: "power4.out" }, void 0, { from: true })))}><p class="text-ah-grey text-lg leading-relaxed max-w-2xl border-l border-ah-lime/30 pl-8">${ssrInterpolate(faq.a)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Faq.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AppFaq" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Alexander Homes | Main",
      description: "Main Alexander Homes",
      ogDescription: "Main Alexander Homes",
      ogTitle: "Alexander Homes | Main",
      ogImage: "/images/logo.webp"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_appDescription = __nuxt_component_1;
      const _component_appFaq = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appHero, null, null, _parent));
      _push(ssrRenderComponent(_component_appDescription, null, null, _parent));
      _push(ssrRenderComponent(_component_appFaq, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BU0cKuoK.mjs.map
