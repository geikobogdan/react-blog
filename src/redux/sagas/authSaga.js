
import { call, takeEvery, put } from "redux-saga/effects";
import { UsersApi } from "../../api/usersApi";

export function* fetchUsersRequest() {
  try {
    const users = yield call(UsersApi)
  } catch (error) {
    
  }
}






export function* authSaga() {
  yield takeEvery("FETCH_ADD_USERS", fetchUsersRequest);

}