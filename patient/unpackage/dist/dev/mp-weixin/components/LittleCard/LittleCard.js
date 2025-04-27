"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LittleCard",
  props: {
    name: String,
    imgUrl: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.imgUrl,
        b: __props.name,
        c: common_vendor.t(__props.name)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-90a4940f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LittleCard/LittleCard.js.map
