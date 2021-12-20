import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import antd from "@/common/plugins/antd";
import "@/common/styles/reset.less";

createApp(App).use(store).use(router).use(antd).mount("#app");
