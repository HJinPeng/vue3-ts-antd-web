/**
 * 注册 antd 的全局组件
 */

import { App } from "vue";
import { Button, Input } from "ant-design-vue";

const components = [Button, Input];

export default {
  install: (app: App): void => {
    components.forEach((comp) => {
      app.use(comp);
    });
  },
};
