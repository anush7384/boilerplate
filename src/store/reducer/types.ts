export interface signUpType {
  type: "SIGNUP";
  payload: {
    name: string;
    userName: string;
    password: string;
  };
}

export interface stateType {
  signedUpUsers: {
    name: string;
    userName: string;
    password: string;
  }[];
}
