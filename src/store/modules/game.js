import {
  addItemApi,
  getAllGameApi,
  updateItemApi,
  getItembySearchApi,
} from "@/api/game";

const state = () => {
  return {
    gameList: [],
  };
};

const mutations = {
  getAllGameMutation(state, payload) {
    state.gameList = payload;
  },
  getItembySearchMutation(state, payload) {
    state.gameList = payload;
  },
  limitItemMutation(state, payload) {
    state.limitItemList = payload;
  },
};
const actions = {
  async getAllGamesAction({ commit }) {
    const data = await getAllGameApi();
    commit("getAllGameMutation", data);
  },
  async getItembySearchAction({ commit }, payload) {
    const data = await getItembySearchApi(payload);
    commit("getItembySearchMutation", data);
  },
  async updateGameAction({ dispatch }, payload) {
    await updateItemApi(payload);
    alert("Update successfully.");
    dispatch("getAllGamesAction");
  },
  async addGameAction({ dispatch }, payload) {
    await addItemApi(payload);
    alert("Add successfully.");
    dispatch("getAllGamesAction");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
