<template>
  <v-app>
    <notification />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  components: {
    notification: () => import('@/components/notification')
  }
}
</script>
