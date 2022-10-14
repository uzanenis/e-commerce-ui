export default {
    setAccessToken(context, payload) {
        context.commit('setAccessToken', payload)
    },
    setRefreshToken(context, payload) {
        context.commit('setRefreshToken', payload)
    }
}