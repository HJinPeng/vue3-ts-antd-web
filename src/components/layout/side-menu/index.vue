<template>
  <div :class="bem()">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :inline-collapsed="collapsed"
      :class="bem('menu')"
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
      <a-sub-menu key="sub2">
        <template #title>Navigation TWO</template>
        <a-menu-item key="8">option 8</a-menu-item>
        <a-menu-item key="9">option 9</a-menu-item>
        <a-menu-item key="10">option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div :class="bem('collapsed')" @click="toggle">
      <menu-fold-outlined v-if="collapsed" />
      <menu-unfold-outlined v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Menu } from "ant-design-vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { createBem } from "@tool";
export default defineComponent({
  components: {
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const bem = createBem("side-menu");
    const state = reactive({
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
      selectedKeys: ["1"],
      collapsed: false,
    });
    const toggle = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };
    return {
      bem,
      ...toRefs(state),
      toggle,
    };
  },
});
</script>

<style lang="less">
.x-side-menu {
  width: @side-menu-width;
  background-color: @side-menu-color;
  box-shadow: 2px 0 6px rgba(29, 35, 41, 5%);
  display: flex;
  flex-direction: column;
  &__menu {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 0;
    .ant-menu {
      background: @side-menu-color;
    }
  }
  &__collapsed {
    border-top: 1px solid #f0f0f0;
    height: 32px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }
  }
}
</style>
