import { signUp } from "../actions";

export interface stateType {
  signedUpUsers: {
    name: string;
    userName: string;
    password: string;
  }[];
}

export type Actions = ReturnType<typeof signUp>;
