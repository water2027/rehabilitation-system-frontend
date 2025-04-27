"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ArticleCard",
  props: {
    article: {
      cover: String,
      title: String,
      time: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: __props.article.cover,
        b: __props.article.title,
        c: common_vendor.t(((_b = (_a = __props.article) == null ? void 0 : _a.title) == null ? void 0 : _b.length) > 50 ? `${__props.article.title.slice(0, 50)}...` : __props.article.title),
        d: common_vendor.t(new Date(__props.article.time).toLocaleString())
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ArticleCard/ArticleCard.js.map
