import { call, takeEvery, put } from "redux-saga/effects";
import {
  CatApi,
  updateCategories,
  deleteCategory,
  AddCategory,
} from "../../api/categoriesApi";
import { setCategory } from "../actions/filters";
import { deleteCategoryItems } from "../../api/itemsApi";
import { setCategories } from "../actions/categories";
//import { fetchAddAllItems } from "../actions/galeryItems";
import { fetchAllItemsRequest, fetchItemsRequest } from "./galeryItemsSaga";
export function* fetchCategoriesRequest() {
  try {
    const categories = yield call(() => CatApi());
    yield put(setCategories(categories));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchUpdateCategory({ id,data }) {
  try {
    yield call(() => updateCategories(id,data));
    yield call(() => fetchCategoriesRequest());
    //yield put(fetchAddAllItems());
  } catch (error) {}
}
export function* fetchDeleteCategory({ id }) {
  try {
    yield call(() => deleteCategory(id));
    yield call(() => fetchCategoriesRequest());
    yield call(() => deleteCategoryItems(id));
  } catch (error) {
  } finally {
    yield call(() => fetchAllItemsRequest());
    yield put(setCategory({ name: null, id: null }));
    yield call(() => fetchItemsRequest({ id: "", sortBy: "", order: "" }));
  }
}
export function* fetchAddCategory({ payload }) {
  try {
    yield call(() => AddCategory(payload));
    yield call(() => fetchCategoriesRequest());
  } catch (error) {}
}

export function* categoriesSaga() {
  yield takeEvery("FETCH_SET_CATEGORIES", fetchCategoriesRequest);
  yield takeEvery("ADD_CATEGORIES", fetchAddCategory);
  yield takeEvery("FETCH_UPDATE_CATEGORIES", fetchUpdateCategory);
  yield takeEvery("FETCH_DELETE_CATEGORIES", fetchDeleteCategory);
}
