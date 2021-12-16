<template>
  <div class="home">
    <a-button @click="add">按钮</a-button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// import { Button } from "ant-design-vue";
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    // aButton: Button,
  },
  methods: {
    add() {
      // this.$store.commit("increment");
    },
  },
});
</script>
