import cookie from 'js-cookie'

export const state = () => ({
  token: '' || cookie.get('token'),
  user: {}
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  },
  LOG_OUT(state) {
    state.token = null
  }
}
export const actions = {
  SET_LOGIN({ commit }, data) {
    return new Promise((resolve) => {
      this.$axios
        .post('/login', data)
        .then((res) => {
          const { token } = res.data
          cookie.set('token', token)
          commit('SET_TOKEN', token)
          resolve(true)
        })

        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    })
  },
  GetUserInfo({ commit }) {
    this.$axios
      .get('/api/me')
      .then((res) => {
        commit('SET_USER', res.data)
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('LOG_OUT')
      cookie.remove('token')
      resolve()
    })
  }
}

export const getters = {
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  },
  isAuth(state) {
    return state.token
  }
}
