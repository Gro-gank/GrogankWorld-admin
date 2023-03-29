import { createStore } from "vuex";
import signin from "./modules/signin";
import user from "./modules/user";
import game from "./modules/game";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    signin,
    user,
    game,
  },
});
