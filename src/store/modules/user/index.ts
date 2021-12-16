import { Store, Module } from "vuex";
import { RootState } from "@/store";
import { state } from "./state";
import { mutations, Mutations } from "./mutations";
import { actions } from "./actions";
import type { UserState } from "./state";

export { UserState };

export const store: Module<UserState, RootState> = {
  state,
  mutations,
  actions,
};
