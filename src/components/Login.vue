<template>
      <v-container class="py-6">
        <v-row justify="center" align="center" dense>
          <v-col cols="12" md="6">
            <v-card class="d-flex justify-center align-center fill-height" elevation="0" color="primary">
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
            >
              <v-card-text>
                <v-form>
                  <div class="d-flex align-center flex-column">
                    <v-text-field label="Enter your E-Mail" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded textField" required outlined></v-text-field>
                    <v-text-field label="Enter your Password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded textField" required outlined></v-text-field>
                    <v-btn class="rounded white--text" outlined x-large color="primary">Login</v-btn>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login"
}
</script>

<style scoped>
.textField{
  width: 70%;
}
</style>