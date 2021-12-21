<template>
  <div :class="bem()">
    <Header :class="bem('header')" />
    <div :class="bem('main')">
      <SideMenu :class="bem('side-menu')" />
      <div :class="bem('content')">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createBem } from "@tool";
import Header from "./header/index.vue";
import SideMenu from "./side-menu/index.vue";
export default defineComponent({
  components: {
    Header,
    SideMenu,
  },
  setup() {
    const bem = createBem("layout");
    return {
      bem,
    };
  },
});
</script>

<style lang="less">
.x-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__header {
  }
  &__main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  &__side-menu {
  }
  &__content {
    flex: 1;
  }
}
</style>
