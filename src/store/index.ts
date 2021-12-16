import { createStore } from "vuex";
import { UserState } from "./modules/user/state";

export interface RootState {
  user: UserState;
}

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  actions: {},
  modules: {},
});
