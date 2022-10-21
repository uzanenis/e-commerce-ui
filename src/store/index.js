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
    selectedCPUs: [],
    selectedPoint: '',
    startPrice: '',
    endPrice: '',
    selectedDiskType: '',
    selectedDiskSize: '',
    selectedCPUType: '',
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
