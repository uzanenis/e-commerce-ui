<template>
  <div>
    <v-app>
      <v-main>
        <navbar-comp v-if="accessToken"/>
        <router-view/>
        <footer-comp v-if="accessToken"/>
      </v-main>
    </v-app>
  </div>

</template>

<script>

import {mapActions, mapGetters} from "vuex";
import NavbarComp from "@/components/NavbarComp";
import FooterComp from "@/components/FooterComp";
import axios from "axios";

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
      accessToken: 'login/getAccessToken',
      refreshToken: 'login/getRefreshToken',
      restApi: 'login/getRestApi',
    })
  },
  methods: {
    ...mapActions({
      setAccessToken: 'login/setAccessToken',
    })
  },
  created() {
    if (!this.accessToken) {
      this.$router.push({path: '/login', replace: true})
    }
    setInterval(() => {
      if (this.refreshToken) {
        const refresh_url = this.restApi + '/api/token/refresh/'
        const formData = new FormData()
        formData.append('refresh', this.refreshToken)
        axios.post(refresh_url, formData)
            .then((response) => {
              if (response.status === 200) {
                this.setAccessToken({access: response.data.access})
              }
            })
      }
    }, 250000)
  },
};
</script>
