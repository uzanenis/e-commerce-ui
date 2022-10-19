import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from "@/store/login/login";
export default new Vuex.Store({
  state: {
    search: '',
    selectedBrands: [],
    selectedPoint: '',
    startPrice: '',
    endPrice: '',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
  }
})
