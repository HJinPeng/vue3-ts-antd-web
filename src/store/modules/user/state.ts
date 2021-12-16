export interface UserState {
  token: string;
  name: string;
  roles: string[];
  depts: string[];
}

export const state: UserState = {
  token: "",
  name: "",
  roles: [],
  depts: [],
};
