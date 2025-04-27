# 前端

后端在[这个仓库](https://github.com/water2027/rehabilitation-system-backend)

如果要跑微信小程序（患者端）的话，可以下一个微信开发者工具，在[这里](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)下载，不下载也可以，可以在网页上跑，不过不知道会有什么网页上正常小程序不正常的情况。

使用微信开发者工具跑患者端时，如果只是修改了js代码没有改动页面可能需要重新跑一次（先停止再编译），这样小程序那边才会改动。

如果小程序报错，但是不知道哪里错了，可以试试在网页跑一下，报错可能会更准确一些。

对于网页端，开发都是这样子：

打开目录，执行

```sh
npm i # 或者pnpm i
```

安装依赖，然后执行

```sh
npm run dev # 或者pnpm dev
```

尽量使用jsDoc进行注释，这样编辑器有代码提示，减少出错概率。