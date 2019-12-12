<template>
  <v-app>
    <SideBar />
    <v-content>
      <nuxt />
    </v-content>

    <!-- <Footer /> -->
  </v-app>
</template>

<script>
export default {
  name: 'Default',
  components: {
    // Footer: () => import('@/components/Footer'),
    SideBar: () => import('@/components/SideBar')
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
