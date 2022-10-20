<template>
      <v-container class="py-6">
        <v-row justify="center" align="center" dense>
          <v-col cols="12" md="6">
            <v-card class="d-flex justify-center align-center fill-height logoColumn" style="height: 95vh;" elevation="0" color="primary">
              <a href="/" title="Kou Logo" target="_blank">
                <v-img
                  src="https://www.freelogovectors.net/wp-content/uploads/2018/03/kocaeli-universitesi-logo.png"
                  alt="koulogo"
                  max-height="300"
                  max-width="300"
                ></v-img>
              </a>
            </v-card>

          </v-col>
          <v-col
              cols="12" md="6"
          >
            <v-card
                elevation="2"
                class="d-flex justify-center align-center pa-4"
                style="height: 95vh;"
            >
              <v-card-text>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                  <div class="d-flex align-center flex-column">
                    <v-text-field v-model="username" :rules="usernameRules"  label="Enter your Username" name="email" prepend-inner-icon="mdi-email" type="username" class="rounded textField mb-2" required outlined></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules"  label="Enter your Password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded textField" required outlined></v-text-field>
                    <v-btn class="rounded white--text" outlined large color="primary" @click="login">Login</v-btn>
                  </div>
                  <v-card-actions>
                    <v-checkbox color="#159b44" label="Remember Me"></v-checkbox>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>

          </v-col>
        </v-row>
      </v-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  computed: {
    ...mapGetters({
      restApi: 'login/getRestApi',
    })
  },
  data: () => ({
    valid: true,
    username: '',
    password: '',
    usernameRules: [
        v => !!v || "Username is required",
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 5 || "Password cannot be less then 5",
    ]
  }),
  methods: {
    ...mapActions({
      setAccessToken: 'login/setAccessToken',
      setRefreshToken: 'login/setRefreshToken',
    }),
    login() {
      this.$refs.form.validate()
      const loginUrl = this.restApi + '/api/token/';
      const loginForm = new FormData();
      loginForm.append('username', this.username);
      loginForm.append('password', this.password);
      axios.post(loginUrl, loginForm)
          .then(response => {
            if (response.status === 200) {
              this.setAccessToken(response.data);
              this.setRefreshToken(response.data);
              this.$router.push({path: '/', replace: true});
            } else console.log(response);
          })
          .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
.textField{
  width: 100%;
}

@media screen and (max-width: 600px) {
  .logoColumn{
    display: none !important;
  }
}
</style>