import { takeEvery, put,call } from "redux-saga/effects";

import  {FETCH_USERS_REQUESTED}  from "../actionTypes";

import fetchUsers from '../services/fetchUsers';
import { fetchUserSuccess, fetchUserFailure } from "../actions";

function* getUsers(): any {
 try
    {let users = yield call(fetchUsers);
  yield put(fetchUserSuccess(users));
}
catch(e:any){
    yield put(fetchUserFailure(e.message));
}
}

function* showUsers() {
  yield takeEvery(FETCH_USERS_REQUESTED, getUsers);
}

export default showUsers;
