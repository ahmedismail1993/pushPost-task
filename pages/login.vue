<template>
  <v-container fluid class="p-0">
    <v-row no-gutters>
      <v-col md="6">
        <div class="left-side">
          <h2>
            <v-icon color="white">mdi-android-debug-bridge</v-icon>pushBots
          </h2>
        </div>
      </v-col>
      <v-col md="6">
        <section align="center" justify="center" class="right-side">
          <form @submit.prevent="handleLogin">
            <v-card width="500px" class="mx-sm-auto">
              <v-card-title class="text-center">{{
                $t('heading.login')
              }}</v-card-title>
              <v-card-text>
                <formWrapper :validator="$v.form">
                  <v-row>
                    <v-col
                      v-for="keyName in formKeys"
                      :key="keyName.index"
                      cols="12"
                    >
                      <form-group :name="keyName">
                        <template slot-scope="{ attrs, listeners }">
                          <v-text-field
                            v-model="form[keyName]"
                            :type="keyName"
                            v-bind="attrs"
                            :label="$t(`label.${keyName}`)"
                            outlined
                            v-on="listeners"
                          ></v-text-field>
                        </template>
                      </form-group>
                    </v-col>
                    <v-col>
                      <v-btn
                        type="submit"
                        color="primary"
                        block
                        :disabled="$v.form.$invalid"
                        >login</v-btn
                      >
                    </v-col>
                  </v-row>
                </formWrapper>
              </v-card-text>
            </v-card>
          </form>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'LogIn',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    formKeys() {
      return Object.keys(this.form)
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('user/SET_LOGIN', this.form).then(() => {
        window.location.reload()
      })
    }
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(20)
        }
      }
    }
  },
  layout: 'login',
  middleware: ['auth']
}
</script>

<style scoped>
.left-side {
  background-color: #009687;
  height: 100vh;
}
.right-side {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-side .v-card {
  margin: auto;
}
.container {
  height: 100vh;
  padding: 0;
}
h2 {
  color: #fff;
  text-transform: capitalize;
  padding: 15px;
  font-weight: bold;
}
i {
  color: #fff !important;
}
</style>
