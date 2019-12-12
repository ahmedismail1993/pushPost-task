export const state = () => {
  return {
    snackbar: {
      visible: false,
      text: null,
      timeout: 3000,
      multiline: false,
      color: ''
    },
    serverErrors: []
  }
}

export const mutations = {
  showNotification(state, payload) {
    state.snackbar.text = payload.text
    state.snackbar.color = payload.color
    state.snackbar.timeout = payload.timeout

    if (payload.multiline) {
      state.snackbar.multiline = payload.multiline
    }

    if (payload.timeout) {
      state.snackbar.timeout = payload.timeout
    }

    state.snackbar.visible = true
  },
  closeNotification(state) {
    state.snackbar.visible = false
    state.snackbar.multiline = false
    state.snackbar.timeout = 3000
    state.snackbar.text = null
  },
  getErrors(state, payload) {
    state.errors = payload
  },
  getServerErrors(state, payload) {
    state.serverErrors = payload
  },
  clearServerErrors(state) {
    state.serverErrors = []
  }
}

export const actions = {
  showNotification({ commit }, payload) {
    commit('showNotification', payload)
  },
  closeNotification({ commit }) {
    commit('closeNotification')
  },
  getServerErrors({ commit }, payload) {
    commit('getServerErrors', payload)
  },
  clearServerErrors({ commit }) {
    commit('clearServerErrors')
  }
}

export const getters = {
  getServerErrors(state) {
    const serverErrors = state.serverErrors
    return serverErrors
  },
  notification(state) {
    return state.snackbar
  }
}
