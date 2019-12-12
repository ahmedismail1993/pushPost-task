export default ({ store, app: { $axios }, error, redirect }) => {
  if (store.state.user.token && store.state.user.token.length > 0) {
    $axios.setToken(store.state.user.token, 'Bearer')
  }
  $axios.onResponse((response) => {
    if (store.getters['errors/serverErrors'] !== null) {
      store.dispatch('errors/ClearServerErrors')
    }
    return response
  })

  $axios.onError((err) => {
    if (err.response && err.response.data) {
      store.dispatch('errors/SetServerErrors', err.response.data.msg)
      store.dispatch('notification/showNotification', {
        text: err.response.data.msg,
        color: 'red',
        timeout: 5000
      })
    }
  })
}
