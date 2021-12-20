<template>
  <div :class="bem()">
    <div :class="bem('header')">
      <div :class="bem('logo')">logo</div>
      <h2 :class="bem('title')">vue3</h2>
    </div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <span>option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>Navigation One</template>
        <a-menu-item key="5">option 5</a-menu-item>
        <a-menu-item key="6">option 6</a-menu-item>
        <a-menu-item key="7">option 6</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Menu } from "ant-design-vue";
import { createBem } from "@tool";
export default defineComponent({
  components: {
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },
  setup() {
    const bem = createBem("side-menu");
    const state = reactive({
      openKeys: ["sub1"],
      selectedKeys: ["1"],
      collapsed: false,
    });
    return {
      bem,
      ...toRefs(state),
    };
  },
});
</script>
