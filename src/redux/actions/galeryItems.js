export const fetchAddItems = (id, sortBy, order) => ({
  type: "FETCH_SET_ITEMS",
  id,
  sortBy,
  order,
});

export const addItems = (payload) => ({
  type: "ADD_ITEMS",
  payload,
});
export const setAllItems = (payload) => ({
  type: "SET_ALL_ITEMS",
  payload,
});

export const setItems = (payload) => ({
  type: "SET_ITEMS",
  payload,
});

export const fetchUpdateItem = (id, data) => ({
  type: "FETCH_UPDATE_ITEMS",
  data,
  id,
});
export const fetchAddAllItems = () => ({
  type: "FETCH_SET_ALL_ITEMS",
});
export const fetchDeleteItem = (id) => ({
  type: "FETCH_DELETE_ITEM",
  id,
});
