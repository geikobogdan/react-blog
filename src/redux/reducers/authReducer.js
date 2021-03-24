import produce from "immer";


const initialAuthState = {
  authorized :false,
  users :[],
};

export const authReducer = produce(
  (draft, action) => {
    switch (action.type) {
      case "IS_AUTHORIZED":
        draft.authorized = action.authorized;
        break;
        case "SET_USERS":
          draft.users = action.users;
          break;
      default:
        break;
    }
  },
  initialAuthState
);