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
        <a  @click="$router.push({path: '/'})" class="white--text" style="text-decoration: none"><v-icon>mdi-basket</v-icon>&nbsp;KOU</a>
      </v-toolbar-title>
      <v-text-field
          v-model="search"
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
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
    <v-content>
      <v-bottom-navigation
          color="primary"
          horizontal
      >
        <a @click="$router.push({path: '/'})" class="v-btn">
          <span>Home</span>
        </a>
        <a  @click="$router.push({path: '/shop'})" class="v-btn">
          <span>Shop</span>
        </a>
        <a  @click="$router.push({path: '/product'})" class="v-btn">
          <span>Product</span>
        </a>
        <a  @click="$router.push({path: '/ecommerce'})" class="v-btn">
          <span>Ecommerce</span>
        </a>
      </v-bottom-navigation>
    </v-content>

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

</style>