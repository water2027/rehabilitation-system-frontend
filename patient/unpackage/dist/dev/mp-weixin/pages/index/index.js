"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_LittleCard2 = common_vendor.resolveComponent("LittleCard");
  const _easycom_MoreCard2 = common_vendor.resolveComponent("MoreCard");
  const _easycom_ArticleCard2 = common_vendor.resolveComponent("ArticleCard");
  const _easycom_DefaultLayout2 = common_vendor.resolveComponent("DefaultLayout");
  (_easycom_LittleCard2 + _easycom_MoreCard2 + _easycom_ArticleCard2 + _easycom_DefaultLayout2)();
}
const _easycom_LittleCard = () => "../../components/LittleCard/LittleCard.js";
const _easycom_MoreCard = () => "../../components/MoreCard/MoreCard.js";
const _easycom_ArticleCard = () => "../../components/ArticleCard/ArticleCard.js";
const _easycom_DefaultLayout = () => "../../components/DefaultLayout/DefaultLayout.js";
if (!Math) {
  (_easycom_LittleCard + _easycom_MoreCard + _easycom_ArticleCard + _easycom_DefaultLayout)();
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
    const articles = common_vendor.ref([
      {
        title: "因为经常掏耳朵，女子患上恶性肿瘤！紧急提醒：这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！",
        time: "2024-06-25",
        cover: "http://iph.href.lu/768x256?text=test"
      },
      {
        title: "因为经常掏耳朵，女子患上恶性肿瘤！紧急提醒：这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！",
        time: "2024-06-25",
        cover: "http://iph.href.lu/768x256?text=test"
      }
    ]);
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
        }),
        b: common_vendor.p({
          name: "每日打卡",
          ["more-title"]: "详情",
          link: "/MeView/MeView"
        }),
        c: common_vendor.f(articles.value, (article, k0, i0) => {
          return {
            a: article.title,
            b: "0823ce23-4-" + i0 + ",0823ce23-3",
            c: common_vendor.p({
              article
            })
          };
        }),
        d: common_vendor.p({
          name: "康复咨询",
          ["more-title"]: "更多",
          link: "/MeView/MeView"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
