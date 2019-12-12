<template>
  <div>
    <Card />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Card: () => import('@/components/card')
  },
  mounted() {
    if (this.$store.getters['user/isAuth']) {
      this.$store.dispatch('user/GetUserInfo')
    }
  }
}
</script>
