<template>
  <div>
    <v-app>
      <v-main class="pa-0">
        <router-view/>
      </v-main>
    </v-app>
  </div>

</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      accessToken: 'login/getAccessToken'
    })
  },
  mounted() {
    if (!this.accessToken) {
      this.$router.push({path: '/login', replace: true})
    }
  }
};
</script>
