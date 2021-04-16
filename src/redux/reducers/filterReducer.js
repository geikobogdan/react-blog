import produce from "immer";

const initialState = {
  categoryName: null,
  categoryIndex: null,
  sortBy: null,
  order: null
};

export const filterReducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      draft.categoryName = action.name;
      draft.categoryIndex = action.id;
      break;
    case "SET_SORT_BY":
      draft.sortBy = action.name;
      draft.order = action.order;
      break;
    default:
      break;
  }
}, initialState);
