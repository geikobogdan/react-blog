export const isAuthorized = (authorized,activeUser) => ({
  type: "IS_AUTHORIZED",
  authorized,
  activeUser
});

export const signUpUser = (payload) => ({
  type: "SIGN_UP_USER",
  payload
});


export const fetchAddUsers = () => ({
  type: "FETCH_ADD_USERS"
});

export const setUsers = (payload) => ({
  type: "SET_USERS",
  payload,
});

export const isLogout = (authorized,activeUser) => ({
  type: "IS_LOGOUT",
  authorized,
  activeUser
});
