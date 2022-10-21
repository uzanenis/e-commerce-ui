import getters from "@/store/product/getters";
import mutations from "@/store/product/mutations";
import actions from "@/store/product/actions";
export default {
    namespaced: true,
    state: {
        products: [],
    },
    getters,
    mutations,
    actions,
}