import { createStore } from "vuex";
import { UserState, store as user, UserStore } from "./modules/user";

export interface RootState {
  user: UserState;
}

export type Store = UserStore<Pick<RootState, "user">>;

export const store = createStore({
  modules: {
    user,
  },
});

export function useStore(): Store {
  return store as Store;
}
