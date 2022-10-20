import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from "@/store/login/login";
export default new Vuex.Store({
  state: {
    search: '',
    selectedBrands: [],
    selectedOSs: [],
    selectedMemories: [],
    selectedPoint: '',
    startPrice: '',
    endPrice: '',
    selectedDiskType: '',
    selectedDiskSize: '',
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
