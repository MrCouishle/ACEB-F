import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import usuario from "./modules/usuario";

export default new Vuex.Store({
    state: {
      empresa: "ACEB",
      loading: false,
    },
    getters: {
      stateLoading(state) {
        return state.loading;
      },
    },
    mutations: {
      loadingState(state) {
        state.loading = !state.loading;
      },
    },
    modules: {
      usuario,
    },
  });