const Path = require("path");

function resolve(dir) {
  return Path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("@comp", resolve("src/components"))
      .set("@utils", resolve("src/common/utils"))
      .set("@tool", resolve("src/common/utils/tool.ts"));
    config.module
      .rule("styleResources")
      .test(/\.less$/)
      .use("style-resources-loader")
      .loader("style-resources-loader")
      .options({
        patterns: [
          resolve("src/common/styles/var.less"),
          resolve("src/common/styles/mixin.less"),
        ],
        injector: "append",
      })
      .end();
  },
};
