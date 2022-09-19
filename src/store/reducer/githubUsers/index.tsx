import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "../../actionTypes";
// import actionTypes from "../../actionTypes";
import { GithubUsersActions, GithubUsersState } from "./types";

const initialState: GithubUsersState = {
  users: [],
  error: "",
  spinner: true,
};
export const githubUsers = (state = initialState, action: GithubUsersActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload.data],
        spinner: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        spinner:false,
      };
    default:
      return state;
  }
};
