import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    theme: "light",
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },

    setTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },

    setTheme({ commit }, payload) {
      commit("setTheme", payload);
    },
  },
});
