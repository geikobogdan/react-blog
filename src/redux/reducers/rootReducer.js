import { authReducer } from "./authReducer";
import { categoriesReducer } from "./categoriesReducer";
import { filterReducer } from "./filterReducer";
import { galeryItemsReducer } from "./galeryItemsReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  filters: filterReducer,
  items: galeryItemsReducer,
});
