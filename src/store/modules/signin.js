import { userLoginApi } from "@/api/signin";

const state = () => {
  return {
    userLogin: [],
  };
};

const mutations = {
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },
};
const actions = {
  async signInAction({ commit }, { userLogin, router }) {
    const onLoginUser = await userLoginApi(userLogin.email);
    if (onLoginUser[0].password == userLogin.password) {
      alert("Sign in successfully");
      router.push("/dash-board");
      commit("setUserLoginMutation", onLoginUser);
    } else {
      alert("Wrong email or password");
      localStorage;
    }
  },
  loadUserLoginFromLocalStorageAction({ commit }) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    commit("setUserLoginFromLocalStorage", userLogin);
  },
  logOutAction(context, router) {
    localStorage.removeItem("userLogin");
    console.log(context);
    router.push("/");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
