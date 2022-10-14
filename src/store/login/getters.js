export default {
    getRestApi(state) {
        return state.restApi
    },
    getAccessToken(state) {
        return state.accessToken
    },
    getRefreshToken(state) {
        return state.refreshToken
    }
}