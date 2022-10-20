<template>
  <div>
    <v-app>
      <v-main class="pa-0">
        <navbar-comp />
        <router-view/>
        <footer-comp  />
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

  }
};
</script>
