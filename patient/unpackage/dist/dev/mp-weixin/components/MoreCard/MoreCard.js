"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "MoreCard",
  props: {
    name: String,
    moreTitle: String,
    link: String,
    otherInfo: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.name),
        b: common_vendor.t(__props.otherInfo),
        c: common_vendor.t(__props.moreTitle || "更多"),
        d: __props.link
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c4435fb2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/MoreCard/MoreCard.js.map
