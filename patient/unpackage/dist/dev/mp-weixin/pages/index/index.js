"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_LittleCard2 = common_vendor.resolveComponent("LittleCard");
  const _easycom_DefaultLayout2 = common_vendor.resolveComponent("DefaultLayout");
  (_easycom_LittleCard2 + _easycom_DefaultLayout2)();
}
const _easycom_LittleCard = () => "../../components/LittleCard/LittleCard.js";
const _easycom_DefaultLayout = () => "../../components/DefaultLayout/DefaultLayout.js";
if (!Math) {
  (_easycom_LittleCard + _easycom_DefaultLayout)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const littleCards = [
      {
        name: "康复测评",
        imgUrl: "http://iph.href.lu/768x256?text=test"
      },
      {
        name: "康复预约",
        imgUrl: "http://iph.href.lu/768x256?text=test"
      },
      {
        name: "康复团队",
        imgUrl: "http://iph.href.lu/768x256?text=test"
      },
      {
        name: "康复打卡",
        imgUrl: "http://iph.href.lu/768x256?text=test"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(littleCards, (item, k0, i0) => {
          return {
            a: item.name,
            b: "0823ce23-1-" + i0 + ",0823ce23-0",
            c: common_vendor.p({
              name: item.name,
              ["img-url"]: item.imgUrl
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
