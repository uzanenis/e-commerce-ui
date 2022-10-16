import getters from "@/store/login/getters";
import mutations from "@/store/login/mutations";
import actions from "@/store/login/actions";
export default {
    namespaced: true,
    state: {
        restApi: 'http://localhost:8000',
        accessToken: null,
        refreshToken: null,
    },
    getters,
    mutations,
    actions,
}