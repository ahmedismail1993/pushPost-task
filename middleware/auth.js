export default function({ store, redirect, route }) {
  if (store.state.user.token) {
    if (route.query.redirect) {
      return redirect(route.query.redirect)
    } else {
      return redirect('/')
    }
  }
}
