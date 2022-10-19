<template>
  <div>
    <v-card
        v-for="myproduct in productsFiltered" :key="myproduct.id"
        color="grey lighten-4"
        width="100%"
        class="pa-5"
        outlined
        tile
        @click="myproduct[0].id"
    >
      <v-row>
        <v-col
            cols="4"
        >
          <v-img
              max-height="200"
              max-width="200"
              :src="myproduct[0].image"
          >
          </v-img>
        </v-col>

        <v-col
            cols="8"
        >
          <v-row>
            {{getProductTitle(myproduct[0])}}
          </v-row>
          <v-row>
            <v-col v-for="subProduct in myproduct" :key="subProduct.website" :cols="12 / myproduct.length" >
              {{ subProduct.website }}
            </v-col>
          </v-row>
        </v-col>

      </v-row>

    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productsFiltered: {
      type: Array,
      required: true
    }
  },
  methods: {
    getProductTitle(products) {
      let productTitle = products.computer_data.brand_data.name + " " + products.computer_data.model_number + " "
          + products.computer_data.cpu_data.cpu_type + " " + products.computer_data.cpu_data.cpu_generation +
          " RAM " + products.computer_data.memory_data.memory_size
          + " " + products.computer_data.disk_data.disk_type + " " + products.computer_data.disk_data.disk_size
      if (products.length !== 0)
        return productTitle
      else
        return ''
    },

  },
}
</script>

<style scoped>

</style>