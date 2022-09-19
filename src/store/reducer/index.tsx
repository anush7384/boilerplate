// import  {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS} from "../actionTypes";
// import { Actions, StateType } from "./types";

// const initialState: StateType = {
//   users: [],
//   error: "",
//   spinner:true,
// };
// export const reducer = (state = initialState, action: Actions) => {
//   switch (action.type) {
//     case FETCH_USERS_SUCCESS:
//       return {
//         ...state,
//         users: [...action.payload.data],
//         spinner: false,
//       };
//     case FETCH_USERS_FAILURE:
//       return {
//         ...state,
//         error: action.payload.message,
//       };
//     default:
//       return state;
//   }
// };

import { combineReducers } from "redux";

import {userAuth} from "./userAuth/index";
import {githubUsers} from './githubUsers/index';

export default combineReducers({
  userAuth,
  githubUsers
});