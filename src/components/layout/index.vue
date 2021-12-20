<template>
  <div :class="bem()">
    <div :class="bem('left')">
      <SideMenu :class="bem('side-menu')" />
    </div>
    <div :class="bem('right')">
      <div :class="bem('header')">header</div>
      <div :class="bem('content')">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createBem } from "@tool";
import SideMenu from "./side-menu/index.vue";
export default defineComponent({
  components: {
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
  height: 100%;
  &__left {
    width: 256px;
  }
  &__right {
    flex: 1;
  }
  &__side-menu {
    color: red;
    height: 100%;
  }
  &__header {
    color: @blue;
  }
  &__content {
  }
}
</style>
