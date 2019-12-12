<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="primary"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Dashbord
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-btn icon title="logout" @click="handleLogout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-spacer />

      <v-toolbar-items>
        <v-list-item v-if="Object.keys(user).length > 0" two-line>
          <v-list-item-content class="mx-0 text-sm-right">
            <v-list-item-title
              ><span>{{ user.name }}</span></v-list-item-title
            >
            <v-list-item-subtitle>
              <v-chip
                ><v-icon left color="yellow">mdi-crown</v-icon>
                {{ user.plan }}</v-chip
              ></v-list-item-subtitle
            >
          </v-list-item-content>
          <v-list-item-avatar>
            <img :src="user.avatar" />
          </v-list-item-avatar>
        </v-list-item>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
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
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('user/logout').then(() => window.location.reload())
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isAuth: 'user/isAuth'
    })
  }
}
</script>
