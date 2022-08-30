export interface signUpType {
  type: "SIGNUP";
  payload: {
    name: string;
  };
}

export interface stateType {
  signedUpUsers: {
    name: string;
  }[];
}
