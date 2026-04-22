import { c as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    source: {
      type: String,
      default: "One"
    },
    style: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
        class: __props.style,
        src: __props.source,
        format: "webp",
        alt: __props.alt,
        preload: "",
        loading: "eager",
        "fetch-priority": "high"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BaseImage" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Image-B6wvsNsE.mjs.map
