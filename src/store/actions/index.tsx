import { SIGNUP } from "../actionTypes";

interface detailsType {
  name: string;
  userName: string;
  password: string;
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
