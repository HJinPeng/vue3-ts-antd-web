import { ActionContext, ActionTree, Mutation } from "vuex";
import { RootState } from "@/store";
import { UserState } from "./state";
import { Mutations } from "./mutations";
import { UserActionTypes } from "./action-types";
import { UserMutationTypes } from "./mutation-types";

interface UserInfo {
  username: string;
  password: string;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<UserState, RootState>, "commit">;

export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: UserInfo
  ): void;
}

export const actions: ActionTree<UserState, RootState> = {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: UserInfo
  ) {
    console.log("userInfo", userInfo);
    setTimeout(() => {
      commit(UserMutationTypes.SET_TOKEN, "bear 123439847589");
    }, 1000);
  },
};
