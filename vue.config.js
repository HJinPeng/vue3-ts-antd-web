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
  },
};
