import { SIGNUP } from "../actionTypes";
import { signUpType, stateType } from "./types";

const initialState: stateType = {
  signedUpUsers: [],
};
export const reducer = (state = initialState, action: signUpType) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signedUpUsers: [
          ...state.signedUpUsers,
          {
            name: action.payload.name,
            userName: action.payload.userName,
            password: action.payload.password,
          },
        ],
      };
    default:
      return state;
  }
};
