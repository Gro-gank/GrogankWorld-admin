import axiosApi from ".";

export const getAllGameApi = () => {
  return axiosApi.get("/item");
};
export const updateItemApi = (item) => {
  return axiosApi.put(`/item/${item.itemId}`, item);
};
export const addItemApi = (item) => {
  return axiosApi.post("/item", item);
};
export const getItembySearchApi = (keyword) => {
  return axiosApi.get(`/item?name=${keyword}`);
};
