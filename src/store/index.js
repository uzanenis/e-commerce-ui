import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from "@/store/login/login";
import product from "@/store/product/product";
export default new Vuex.Store({
  state: {
    ecommerceUsername: '',
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
    searchedProducts: [],
    searchValue: '',
    snackbar:{
      text: '',
      status: false,
      color: ''
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    product,
  }
})
