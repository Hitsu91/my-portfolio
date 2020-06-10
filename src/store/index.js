import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: localStorage.getItem("darktheme") === "true"
  },
  mutations: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("darktheme", state.darkTheme);
    }
  },
  actions: {
  },
  modules: {
  }
})
