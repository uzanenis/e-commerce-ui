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
    selectedSizes: [],
    selectedPoint: '',
    startPrice: '',
    endPrice: '',
    selectedDiskType: '',
    selectedDiskSize: '',
    selectedCPUType: '',
    searchedProducts: [],
    searchValue: '',
    productTempImage: 'https://media.istockphoto.com/photos/laptop-with-blank-screen-on-white-picture-id479520746?k=20&m=479520746&s=612x612&w=0&h=vrxDqBMLe1zqcwIFY0f1SdAjKjOKhEno4HtlyKwSHO4=',
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
