


export const fetchAddCategories = () => ({
  type: "FETCH_SET_CATEGORIES"
});

export const addCategories = (payload) => ({
  type: "ADD_CATEGORIES",
  payload,
});

export const setCategories = (payload) => ({
  type: "SET_CATEGORIES",
  payload,
});

export const fetchUpdateCategory = (id,data) => ({
  type: "FETCH_UPDATE_CATEGORIES",
  id,
  data,
});

export const fetchDeleteCategory = (id) => ({
  type: "FETCH_DELETE_CATEGORIES",
  id,
});
