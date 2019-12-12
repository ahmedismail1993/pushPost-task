import cookie from 'cookie'
export const actions = {
  nuxtServerInit({ commit, dispatch }, context) {
    const cookies = cookie.parse(context.req.headers.cookie || '')

    if (cookies.hasOwnProperty('token')) {
      context.app.$axios.setToken(cookies.token, 'Bearer')
      commit('user/SET_TOKEN', cookies.token)
      //   dispatch('user/GetUserInfo')
    }
  }
}
