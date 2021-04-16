export const setSortBy = (name, order) => ({
  type: "SET_SORT_BY",
  name,
  order,
});

export const setCategory = (obj) => ({
  type: "SET_CATEGORY",
  name: obj.name,
  id: obj.id,
});
