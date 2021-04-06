import produce from "immer";

const initialItemsState = {
  items: [],
  allItems: [],
};

export const galeryItemsReducer = produce((draft, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      draft.items = action.payload;
      break;
    case "SET_ALL_ITEMS":
      draft.allItems = action.payload;
      break;
    default:
      break;
  }
}, initialItemsState);
