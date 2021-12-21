<template>
  <div class="home">
    <a-button @click="changeToken">修改token</a-button>
    <div>token: {{ token }}</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// import { Button } from "ant-design-vue";
import { defineComponent, computed, watch, reactive, toRefs } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "@/store";
import { UserActionTypes } from "@/store/modules/user/action-types";
import { createBem } from "@tool";

export default defineComponent({
  name: "Home",
  setup() {
    const bem = createBem("home");
    console.log("bem", bem(), bem("btn"), bem("btn", ":active"));
    const store = useStore();
    const token = computed(() => {
      return store.state.user.token;
    });
    watch(token, (v) => {
      console.log(v);
    });

    const state = reactive({
      changeToken: () => {
        store.dispatch(UserActionTypes.ACTION_LOGIN, {
          username: "123",
          password: "65462",
        });
      },
    });

    return {
      token,
      ...toRefs(state),
    };
  },
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
