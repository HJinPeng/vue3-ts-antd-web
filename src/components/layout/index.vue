<template>
  <div :class="bem()">
    <div :class="bem('left')">
      <div :class="bem('side-menu')">side-menu</div>
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
export default defineComponent({
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
  &__left {
  }
  &__right {
  }
  &__side-menu {
    color: red;
  }
  &__header {
    color: green;
  }
  &__content {
  }
}
</style>
