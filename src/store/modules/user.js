import {
  getAllUserApi,
  deleteUserApi,
  updateUserApi,
  addUserApi,
} from "@/api/user";

const state = () => {
  return {
    userList: [],
  };
};

const mutations = {
  getAllUserMutation(state, payload) {
    state.userList = payload;
  },
};
const actions = {
  async getAllUserAction({ commit }) {
    const data = await getAllUserApi();
    commit("getAllUserMutation", data);
  },
  async deleteUserAction({ dispatch }, userId) {
    await deleteUserApi(userId);
    dispatch("getAllUserAction");
  },
  async updateUserAction({ dispatch }, newUser) {
    await updateUserApi(newUser);
    alert("Update successfully.");
    dispatch("getAllUserAction");
  },
  async addUserAction({ dispatch }, newUser) {
    await addUserApi(newUser);
    alert("Add successfully.");
    dispatch("getAllUserAction");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
