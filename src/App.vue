<template>
  <div>
    <v-app>
      <v-main className="pa-0">
        <navbar-comp v-if="accessToken"/>
        <router-view/>
        <footer-comp v-if="accessToken"/>
      </v-main>
    </v-app>
  </div>

</template>

<script>

import {mapGetters} from "vuex";
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: 'App',
  components: {
    NavbarComp,
    FooterComp,
  },
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
