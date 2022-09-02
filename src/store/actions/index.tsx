import { SIGNUP } from "../actionTypes";

interface detailsType {
  name: String;
  userName: String;
  password: String;
};
export const signUp = (details: detailsType) => {
  return {
    type: SIGNUP,
    payload: {
      name: details.name,
      userName: details.userName,
      password: details.password,
    },
  };
};
