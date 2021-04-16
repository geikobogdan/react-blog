import axios from "axios";

export const itemsApi = (category, sortBy, order) => {
  return axios
    .get(
      `/items?${category ? `category_id=${category}` : ``}${
        sortBy ? `&_sort=${sortBy}` : ""
      }&${order ? `_order=${order}` : `_order=asc`}`
    )
    .then(({ data }) => data);
};

export const deleteCategoryItems = async (id) => {
  const items = await axios.get(`/items`).then(({ data }) => data);
  items.map(async (item) => {
    if (item.category_id === id) {
      await axios.delete(`/items/${item.id}`);
    }
    return item;
  });
};
export const AddItem = (payload) => {
  return axios.post("/items", payload);
};

export const deleteItem = (id) => {
  return axios.delete(`/items/${id}`);
};
export const updateItem = (id, data) => {
  return axios.patch(`/items/${id}`, data);
};
