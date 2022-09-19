import {FETCH_USERS_FAILURE,FETCH_USERS_REQUESTED,FETCH_USERS_SUCCESS,SIGNUP} from "../actionTypes";
// import actionTypes from './../actionTypes/index';
import { UsersFetchType } from "../reducer/githubUsers/types";

interface DetailsType {
  name: string;
  userName: string;
  password: string;
};

export const signUp = (details: DetailsType) => {
  return {
    type: SIGNUP,
    payload: {
      name: details.name,
      userName: details.userName,
      password: details.password,
    },
  };
};

export const fetchUserRequest = () => {
  return {
    type:FETCH_USERS_REQUESTED,
  }
}

export const fetchUserSuccess = (users:UsersFetchType[]) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      data: users,
    },
  };
}

export const fetchUserFailure = (msg:string) =>{
  return {
    type: FETCH_USERS_FAILURE,
    payload: {
      message: msg,
    },
  };
}
