import { all } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { categoriesSaga } from "./categoriesSaga";
import { itemsSaga } from "./galeryItemsSaga";

export  function* rootSaga() {
  yield all([authSaga(),categoriesSaga(),itemsSaga()]);
}