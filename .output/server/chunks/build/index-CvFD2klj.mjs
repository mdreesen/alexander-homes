import { _ as __nuxt_component_0 } from './Image-B-dmCJmq.mjs';
import { _ as __nuxt_component_0$1 } from './Header-B7huCAAA.mjs';
import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Alexander Homes | Projects",
      meta: [
        { name: "Projects", content: "Alexander Homes Projects." }
      ]
    });
    const projects = [
      {
        id: "01",
        title: "Process",
        href: "/projects/process",
        img: "/images/projects/process.webp"
      },
      {
        id: "02",
        title: "Product",
        href: "/projects/product",
        img: "/images/projects/product.webp"
      }
    ];
    const activeBg = ref(projects[0].img);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseImage = __nuxt_component_0;
      const _component_baseHeader = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ah-navy min-h-screen text-ah-white pt-40 pb-20 relative overflow-hidden" }, _attrs))} data-v-1278253a><div class="fixed inset-0 z-0 transition-all duration-1000 ease-in-out opacity-20 grayscale pointer-events-none" data-v-1278253a>`);
      _push(ssrRenderComponent(_component_baseImage, {
        source: unref(activeBg),
        style: `w-full h-full object-cover scale-110`,
        alt: "Background Preview"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-linear-to-b from-ah-navy via-transparent to-ah-navy" data-v-1278253a></div></div><div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10" data-v-1278253a><header class="mb-24" data-v-1278253a><span class="text-ah-lime font-mono text-xs tracking-[0.3em] uppercase mb-4 block" data-v-1278253a>Archive</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { text: "Projects" }, null, _parent));
      _push(`</header><div class="flex flex-col border-t border-white/10" data-v-1278253a><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="group border-b border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5 px-4" data-v-1278253a>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: project.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-12 items-center gap-8" data-v-1278253a${_scopeId}><div class="md:col-span-1 font-mono text-ah-grey/30 group-hover:text-ah-lime transition-colors" data-v-1278253a${_scopeId}>${ssrInterpolate(project.id)}</div><div class="md:col-span-5" data-v-1278253a${_scopeId}><h3 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500" data-v-1278253a${_scopeId}>${ssrInterpolate(project.title)}</h3></div></div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-12 items-center gap-8" }, [
                  createVNode("div", { class: "md:col-span-1 font-mono text-ah-grey/30 group-hover:text-ah-lime transition-colors" }, toDisplayString(project.id), 1),
                  createVNode("div", { class: "md:col-span-5" }, [
                    createVNode("h3", { class: "text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500" }, toDisplayString(project.title), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1278253a"]]);

export { index as default };
//# sourceMappingURL=index-CvFD2klj.mjs.map
