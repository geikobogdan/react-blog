import { call, takeEvery, put } from "redux-saga/effects";
import { itemsApi, AddItem, deleteItem, updateItem } from "../../api/itemsApi";
import { allItemsApi } from "../../api/testApi";
import { setItems, setAllItems } from "../actions/galeryItems";
import { setCategory } from "../actions/filters";

export function* fetchItemsRequest({ id, sortBy, order }) {
  try {
    const items = yield call(() => itemsApi(id, sortBy, order));
    yield put(setItems(items));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchAllItemsRequest() {
  let items
  try {
     items = yield call(allItemsApi);
    
  } catch (error) {
    console.log(error);
  }
  finally{
    yield put(setAllItems(items));
  }
}

export function* fetchAddItem({ payload }) {
  try {
    yield call(() => AddItem(payload));
  } catch (error) {
    console.log(error);
  } finally {
    yield call(() => fetchAllItemsRequest());
    yield put(setCategory({ name: null, id: null }));
    yield call(() => fetchItemsRequest({ id: "", sortBy: "", order: "" }));
  }
}
export function* fetchDeleteItem({ id }) {
  try {
    yield call(() => deleteItem(id));
    yield call(() => fetchAllItemsRequest());
    yield put(setCategory({ name: null, id: null }));
    yield call(() => fetchItemsRequest({ id: "", sortBy: "", order: "" }));
  } catch (error) {
    console.log(error);
  }
}
export function* fetchUpdateItem({ id, data }) {
  try {
    yield call(() => updateItem(id, data));
  } catch (error) {
  } finally {
    yield call(() => fetchAllItemsRequest());
    yield put(setCategory({ name: null, id: null }));
    yield call(() => fetchItemsRequest({ id: "", sortBy: "", order: "" }));
  }
}

export function* itemsSaga() {
  yield takeEvery("FETCH_SET_ITEMS", fetchItemsRequest);
  yield takeEvery("FETCH_SET_ALL_ITEMS", fetchAllItemsRequest);
  yield takeEvery("ADD_ITEMS", fetchAddItem);
  yield takeEvery("FETCH_DELETE_ITEM", fetchDeleteItem);
  yield takeEvery("FETCH_UPDATE_ITEMS", fetchUpdateItem);
}
