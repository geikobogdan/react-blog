import axios from "axios";

export const allItemsApi = () => {
  return axios.get(`/items?&_sort=nameU&_order=asc`).then(({ data }) => data);
};
