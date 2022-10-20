<template>
  <div>
    <v-row
      class="mx-auto"
    >
      <v-col
        cols="12"
        md="3"
        sm="6"
        xs="12"
        class="py-8"
      >
          <v-card
              class="mx-auto"
              color="pa-5 rounded"
              max-width="600"
              @click="$router.push({path: `/ecommerce/product/${product.id}`})"
          >
            <v-img
                contain
                height="200px"
                src="/img/trendyol_logo.png"
            >
            </v-img>
            <v-card-text class="text--primary white--text">
              <div>Name</div>
              <div>Price</div>
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EcommerceView",
  data: () => ({
    newProd: [
      {
        id:1
      },
      {
        id:2
      }
  ]
  }),
  computed:{
    productId(){
      return parseInt(this.$route.params.id)
    },
    product(){
      return this.products.find(product => product.id === this.productId)
    }
  }
}
</script>

<style scoped>

</style>