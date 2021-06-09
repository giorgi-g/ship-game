import Vue from "vue";
import Vuex from "vuex";
import game from "./game";
import gameRoom from "./gameRoom";
import modal from "./modal";
import login from "./login";
import auth from "./auth";
import createPersistedState from "vuex-persistedstate";
import settings from "@/store/settings";

Vue.use(Vuex);

const sessionStorageState = createPersistedState({
  paths: ["auth", "game"]
  // storage: window.sessionStorage
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    game,
    gameRoom,
    modal,
    login,
    auth,
    settings
  },
  plugins: [sessionStorageState]
});
