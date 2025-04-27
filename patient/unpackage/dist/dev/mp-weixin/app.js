"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/CommunityView/CommunityView.js";
  "./pages/SchemeView/SchemeView.js";
  "./pages/MeView/MeView.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
    common_vendor.index.login({
      provider: "weixin",
      onlyAuthorize: true
    }).then((res) => {
      if (!res.code) {
        common_vendor.index.__f__("log", "at App.vue:11", "登录失败");
        common_vendor.index.__f__("log", "at App.vue:12", res);
        return;
      }
    });
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:19", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:22", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
