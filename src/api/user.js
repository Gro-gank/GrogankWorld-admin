import axiosApi from ".";

export const getAllUserApi = () => {
  return axiosApi.get("/users");
};
export const deleteUserApi = (userId) => {
  return axiosApi.delete(`users/${userId}`);
};
export const updateUserApi = (newUser) => {
  return axiosApi.put(`users/${newUser.userId}`, newUser);
};
export const addUserApi = (newUser) => {
  return axiosApi.post(`users/`, newUser);
};
