import produce from "immer";

const initialAuthState = {
  authorized: false,
  users: [],
  activeUser: null,
};

export const authReducer = produce((draft, action) => {
  switch (action.type) {
    case "IS_AUTHORIZED":
      draft.authorized = action.authorized;
      draft.activeUser = action.activeUser;
      break;
    case "SET_USERS":
      draft.users = action.payload;
      break;
      case "IS_LOGOUT":
        draft.authorized = action.authorized;
        draft.activeUser = action.activeUser;
        break;
   
    default:
      break;
  }
}, initialAuthState);
