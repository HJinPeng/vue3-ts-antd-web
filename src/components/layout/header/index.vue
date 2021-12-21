<template>
  <div :class="bem()">
    <div :class="bem('left')">
      <img src="~@/assets/images/logo.png" alt="logo" :class="bem('logo')" />
      <span :class="bem('title')">JP-WEB</span>
    </div>
    <div :class="bem('right')">
      <span :class="bem('user')">admin</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createBem } from "@tool";
export default defineComponent({
  setup() {
    const bem = createBem("header");
    return {
      bem,
    };
  },
});
</script>

<style lang="less">
.x-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: @header-height;
  color: #fff;
  background-color: @header-bg;
  &__left {
    display: flex;
    align-items: center;
  }
  &__right {
  }
  &__logo {
    width: 32px;
    height: 32px;
  }
  &__title {
    color: #fff;
    font-size: 18px;
    margin-left: 12px;
  }
  &__user {
  }
}
</style>
