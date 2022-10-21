<template>
  <div class="navbar-comp">
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark
    >

      <v-toolbar-title
          style="width: 350px"
      >
        <a @click="$router.push({path: '/'})" class="white--text font-weight-bold d-flex align-center" style="text-decoration: none">
          <v-img
              max-width="44"
              max-height="44"
              src="/img/kou_logo.png"
              class="mr-2"
          >
          </v-img>
          <div>
            KOUCOMPARE
          </div>
        </a>
      </v-toolbar-title>
      <v-text-field
          v-model="search"
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down pl-10 ml-4"
      >
      </v-text-field>
      <v-btn
        outlined
        class="ml-3"
      >
        ARA
      </v-btn>
      <v-spacer/>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge
            content="2"
            value="2"
            color="green"
            overlap
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge
            content="2"
            value="2"
            color="green"
            overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-bottom-navigation
        color="primary"
        horizontal
    >
      <a @click="$router.push({path: '/'})" class="v-btn">
        <span class="navbar-text">Home</span>
      </a>
      <v-divider vertical></v-divider>
      <a @click="$router.push({path: '/shop'})" class="v-btn">
        <span class="navbar-text">Shop</span>
      </a>
      <v-divider vertical></v-divider>
      <a @click="$router.push({path: '/ecommerce'})" class="v-btn">
        <span class="navbar-text pa-3">Ecommerce</span>
      </a>
    </v-bottom-navigation>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "NavbarComp",
  data: () => ({
    search: '',

  }),
  computed: {
    ...mapGetters({
      restApi: 'login/getRestApi',
      accessToken: 'login/getAccessToken'
    }),
    filteredList() {

      return this.products.filter(product => {
        product.name.toLowerCase().includes(this.search.toLowerCase()) || product.model_number.toLowerCase().includes(this.search.toLowerCase()) || product.website.toLowerCase().includes(this.search.toLowerCase())
      })

    }
  }
}
</script>

<style scoped>
  .navbar-text{
    font-size: 1.1rem;
    font-weight: 600;
    color: #159b44;
  }
</style>