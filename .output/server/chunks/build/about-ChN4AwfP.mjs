import { u as useHead, c as __nuxt_component_2$1, b as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number
    },
    icon: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.number || __props.icon) {
        _push(`<div class="flex justify-between items-start mb-12">`);
        if (__props.number) {
          _push(`<span class="font-mono text-orange-600 text-sm">0${ssrInterpolate(__props.number + 1)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600 transition-colors">`);
        if (__props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: __props.icon,
            class: "w-5 h-5 text-zinc-500 group-hover:text-orange-600"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center"><h3 class="text-xl font-black uppercase italic mb-4 tracking-tight">${ssrInterpolate(__props.title)}</h3><p class="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "BaseCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    textOne: {
      type: String,
      default: "One"
    },
    textTwo: {
      type: String,
      default: "Two"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6" }, _attrs))}><span>${ssrInterpolate(__props.textOne)}</span><span class="text-orange-600 flex">${ssrInterpolate(__props.textTwo)}</span></h2>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "BaseHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hahn Built | About",
      meta: [
        { name: "About", content: "Hahn Built About." }
      ]
    });
    const stats = [
      { label: "PSI Strength", value: "4500+" },
      { label: "Licensed In", value: "Montana" },
      { label: "Core Team", value: "Evergreen" },
      { label: "Years Experience", value: "15+" }
    ];
    const qualityPoints = [
      {
        title: "Thermal Management",
        desc: "In Evergreen, the frost line is a moving target. We use specialized air-entrained admixtures to prevent internal pressure during Montana winters."
      },
      {
        title: "Laser Precision",
        desc: "Tolerances measured in millimeters. Using high-frequency laser screeds to ensure every commercial floor is perfectly planar."
      },
      {
        title: "Vapor Barrier Defense",
        desc: "Multi-layer moisture mitigation systems that prevent slab sweating and protect your finished flooring for decades."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2$1;
      const _component_baseCard = __nuxt_component_1;
      const _component_baseHeader = __nuxt_component_2;
      const _directive_gsap = resolveDirective("gsap");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-40 pb-20 px-10" }, _attrs))}><div class="max-w-7xl mx-auto"><header class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, x: -50, duration: 1 }, void 0, { from: true }))}><span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">The Mandate</span><h1 class="text-5xl md:text-7xl font-black uppercase italic leading-[0.85] tracking-tighter mb-8"> Built to <br> <span class="text-zinc-800">Outlast.</span></h1><p class="text-zinc-400 text-xl leading-relaxed max-w-lg"> In Montana, the environment is the ultimate inspector. At Hahn Built, we don&#39;t just pour concrete; we engineer foundations that withstand the shifting frost and heavy loads of the Flathead Valley. </p></div><div${ssrRenderAttrs(mergeProps({ class: "relative aspect-square bg-zinc-900 overflow-hidden group" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, scale: 0.9, duration: 1.5 }, void 0, { from: true })))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-3000",
        src: "/images/home_three.webp",
        format: "webp",
        preload: "",
        loading: "eager",
        "fetch-priority": "high"
      }, null, _parent));
      _push(`<div class="absolute inset-0 border-20 border-[#0c0c0c]"></div></div></header><section class="grid grid-cols-2 md:grid-cols-4 gap-1 border-y border-white/10 mb-32 bg-white/10"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="bg-[#0c0c0c] py-16 flex justify-center items-center text-center group">`);
        _push(ssrRenderComponent(_component_baseCard, {
          title: stat.label,
          description: stat.value
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section><section class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"><div class="lg:col-span-4"><h2 class="text-4xl font-black uppercase italic tracking-tight mb-6">Our Bedrock</h2><p class="text-zinc-500 leading-relaxed"> Hahn Built was founded on the principle that a project is only as good as its base. We specialize in high-spec commercial foundations and custom residential flatwork where precision isn&#39;t optional—it&#39;s the standard. </p></div><div class="lg:col-span-8"><div${ssrRenderAttrs(_temp0 = mergeProps({ class: "blueprint-img h-px bg-orange-600 mb-10" }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
        scrollTrigger: { trigger: ".blueprint-img", start: "top 80%" },
        width: "0%",
        duration: 1.5,
        ease: "expo.inOut"
      }, void 0, { from: true })))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><div class="flex flex-col md:flex-row justify-between gap-10"><div class="max-w-xs"><h4 class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">01. Precision</h4><p class="text-sm text-zinc-400">Laser-leveled accuracy on every pour, ensuring a perfect start for every build.</p></div><div class="max-w-xs"><h4 class="text-orange-600 font-mono text-[10px] uppercase mb-4 tracking-widest">02. Durability</h4><p class="text-sm text-zinc-400">Mixed specifically for the local climate to prevent cracking and structural failure.</p></div></div></div></section><section class="bg-[#0c0c0c] text-white py-32 px-10 border-y border-white/5 relative overflow-hidden"><div class="absolute top-10 right-10 font-mono text-[10px] text-zinc-800 uppercase tracking-[0.5em] hidden lg:block"> Spec: ASTM C94/C94M-22a </div><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"><div class="lg:col-span-5 relative group"><div${ssrRenderAttrs(mergeProps({ class: "relative aspect-3/4 overflow-hidden border border-white/10" }, ssrGetDirectiveProps(_ctx, _directive_gsap, { opacity: 0, scale: 1.1, duration: 1.5 }, void 0, { from: true })))}><img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&amp;fit=crop&amp;q=80" alt="Concrete Core Sample" class="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-1000"><div class="absolute top-10 left-10 px-4 py-1 border border-orange-600 text-orange-600 font-mono text-[10px] uppercase tracking-widest -rotate-12"> QC Passed </div></div><div class="absolute -bottom-6 -right-6 bg-orange-600 text-black p-6 max-w-50 hidden md:block"><p class="text-[10px] font-black uppercase tracking-tight leading-none"> Verified 4500 PSI mix design for extreme freeze-thaw resistance. </p></div></div><div class="lg:col-span-7">`);
      _push(ssrRenderComponent(_component_baseHeader, {
        textOne: "Our",
        textTwo: "Standards"
      }, null, _parent));
      _push(`<div class="space-y-12"><!--[-->`);
      ssrRenderList(qualityPoints, (point, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: i,
          class: "quality-point group flex gap-8 items-start border-b border-white/5 pb-8"
        }, ssrGetDirectiveProps(_ctx, _directive_gsap, {
          scrollTrigger: { trigger: ".quality-point", start: "top 85%" },
          x: 30,
          opacity: 0,
          delay: i * 0.2
        }, void 0, { from: true })))}><div class="text-orange-600 font-mono text-lg pt-1">/0${ssrInterpolate(i + 1)}</div><div><h4 class="text-xl font-black uppercase italic tracking-tight mb-2 group-hover:text-orange-600 transition-colors">${ssrInterpolate(point.title)}</h4><p class="text-zinc-500 text-sm leading-relaxed max-w-md">${ssrInterpolate(point.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section></div></div>`);
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
//# sourceMappingURL=about-ChN4AwfP.mjs.map
