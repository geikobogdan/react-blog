
import { call, takeEvery, put } from "redux-saga/effects";
import { UsersApi,SignUpUser } from "../../api/usersApi";
import {setUsers} from "../actions/auth"

export function* fetchUsersRequest() {
  try {
    const users = yield call(UsersApi)
    yield put(setUsers(users));

  } catch (error) {
    console.log(error)
  }
}

export function* fetchSignUpUser({payload}) {
  try {


     yield call(SignUpUser,payload)
     yield call( fetchUsersRequest)
  } catch (error) {
    
  }
}





export function* authSaga() {
  yield takeEvery("FETCH_ADD_USERS", fetchUsersRequest);
  yield takeEvery("SIGN_UP_USER", fetchSignUpUser);
}