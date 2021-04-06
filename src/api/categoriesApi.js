import axios from "axios";

export const CatApi = (category) => {
  return axios
    .get(
      `/categories?${category ? `name=${category}` : ""}&_sort=nameU&_order=asc`
    )
    .then(({ data }) => data);
};

export  const updateCategories = (id,data) => {

  return axios.patch(`/categories/${id}`, data);
};

export const deleteCategory = (id) => {
  return axios.delete(`/categories/${id}`);
};
export const AddCategory = (payload) => {
  return axios.post("/categories", payload);
};
