export default {
    setAccessToken(state, payload) {
        state.accessToken = payload.access
    },
    setRefreshToken(state, payload) {
        state.refreshToken = payload.refresh
    }
}