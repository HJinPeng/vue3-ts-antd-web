# vue3-base-2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1. 安装antdv
1. 下载antdv
`yarn add ant-design-vue@next`
2. 在babel.config.js添加按需引入代码
```js
plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ], // `style: true` 会加载 less 文件
  ],
```
3. 配置vue.config.js
引入a-button启动报错
```
in ./node_modules/ant-design-vue/es/style/index.less

Syntax Error: 

// https://github.com/ant-design/ant-motion/issues/44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?
```
解决方案:
在 vue.config.js 中添加
```js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
```

### 4. style-resources-loader 注入less变量
`https://www.npmjs.com/package/style-resources-loader`