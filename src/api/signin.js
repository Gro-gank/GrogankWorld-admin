import axiosApi from ".";

export const userLoginApi = (email) => {
  return axiosApi.get(`/users?email=${email}`);
};
