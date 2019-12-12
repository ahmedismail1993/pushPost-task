<template>
  <v-snackbar
    v-model="snackbar.visible"
    top
    :timeout="snackbar.timeout"
    :multi-line="true"
    :color="snackbar.color"
  >
    <span class="snack"> {{ snackbar.text }}</span>

    <v-btn dark right @click="closeNotification">{{
      $t('buttons.close')
    }}</v-btn>
  </v-snackbar>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  computed: {
    snackbar() {
      return this.$store.getters['notification/notification']
    }
  },
  methods: {
    closeNotification() {
      this.$store.dispatch('notification/closeNotification')
    }
  }
}
</script>
