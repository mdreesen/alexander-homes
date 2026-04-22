import { _ as __nuxt_component_0 } from './HeaderSection-CIirkF0C.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './Image-B6wvsNsE.mjs';
import { _ as _export_sfc, b as useSeoMeta } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Description",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: "One"
    },
    color: {
      type: String,
      default: "text-zinc-400"
    },
    size: {
      type: String,
      default: "text-xl"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: `${props.color} ${props.size} leading-relaxed max-w-lg`
      }, _attrs))}>${__props.text ?? ""}</p>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BaseDescription" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Alexander Homes | Projects Process",
      description: "Projects Process Alexander homes",
      ogDescription: "Projects Process Alexander homes",
      ogTitle: "Alexander Homes | Projects Process",
      ogImage: "/images/logo.webp"
    });
    const images = [1, 2];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderSection = __nuxt_component_0;
      const _component_baseDescription = __nuxt_component_1;
      const _component_baseImage = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24 px-6 md:px-12 border-t border-zinc-800" }, _attrs))} data-v-e3b37954><header class="mb-20" data-v-e3b37954>`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { text: "Project Process" }, null, _parent));
      _push(ssrRenderComponent(_component_baseDescription, { text: "From residential foundations to complex commercial scale, Alexander Homes structures defines endurance with setup." }, null, _parent));
      _push(`</header><div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8" data-v-e3b37954><!--[-->`);
      ssrRenderList(images, (_, index2) => {
        _push(`<div class="break-inside-avoid group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm shadow-xl transition-all duration-300 hover:border-white-300/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/5 aspect-square" data-v-e3b37954><div class="aspect-square" data-v-e3b37954>`);
        _push(ssrRenderComponent(_component_baseImage, {
          source: `/images/projects/process/process_${index2 + 1}.webp`,
          style: `w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`,
          alt: "Setup Concrete image"
        }, null, _parent));
        _push(`<div class="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8" data-v-e3b37954><span class="font-mono text-xs uppercase tracking-widest mb-2" data-v-e3b37954>Alexander Homes Verified</span></div> 1/div&gt; <div class="p-5 flex justify-between items-center bg-zinc-900 border-t border-zinc-800" data-v-e3b37954><div class="w-8 h-0.5 bg-zinc-700 group-hover:w-16 group-hover:bg-white transition-all duration-300" data-v-e3b37954></div></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/process/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3b37954"]]);

export { index as default };
//# sourceMappingURL=index-BChOe0JJ.mjs.map
