import produce from "immer";


const initialCetegoriesState = {
  categories :[],
};

export const categoriesReducer = produce(
  (draft, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
          draft.categories = action.payload;
          break;
      
      default:
        break;
    }
  },
  initialCetegoriesState
);