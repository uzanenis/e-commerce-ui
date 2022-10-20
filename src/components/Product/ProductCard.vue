<template>
  <div id="product-card">
    <v-card
        v-for="myproduct in productsFiltered" :key="myproduct.id"
        width="100%"
        color="grey-lighten-4"
        class="card-container rounded pa-7 my-2"
        elevation="1"
        outlined
        tile
    >
      <v-row>
        <v-col
            cols="3"
        >
          <v-img
              class="rounded card-image"
              max-height="200"
              max-width="200"
              :src="myproduct[0].image"
              @click="$router.push({path: `/product/${myproduct[0].id}`})"
          >
          </v-img>
        </v-col>

        <v-divider vertical class="mr-5"></v-divider>

        <v-col
            cols="8"
        >
          <v-row>
            <div class="card-title font-weight-bold mt-3" @click="$router.push({path: `/product/${myproduct[0].id}`})">
              {{ getProductTitle(myproduct[0]) }}
            </div>
          </v-row>
          <v-row>
            <v-col class="mt-3" v-for="subProduct in myproduct" :key="subProduct.id" :cols="12 / myproduct.length">
                <v-btn
                    max-width="85"
                    class="rounded-pill pa-4"
                    :href="subProduct.url"
                    target="_blank"
                >
                  <v-img
                      max-width="70"
                      :src="getWebsite(subProduct.website)"
                  ></v-img>
                </v-btn>
              <div class="card-price mt-4 ml-3 font-weight-bold mt-2">
                {{ subProduct.price }} TL
              </div>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

    </v-card>
    <v-divider></v-divider>
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
    getWebsite(subProduct){
      if(subProduct === 'Trendyol')
        return '/img/trendyol_logo.png'
      else if(subProduct === 'n11')
        return '/img/n11_logo.png'
      else if(subProduct === 'Vatan Bilgisayar')
        return '/img/vatan_logo.png.jpeg'
      else if(subProduct === 'Teknosa')
        return '/img/teknosa_logo.png'
      else if(subProduct === 'Kou Ecommerce')
        return ''
    }
  },

}
</script>

<style scoped>
  .card-container{
  }

  .card-website{

  }
  .card-score{

  }

  .card-price{

  }

  .card-image{
  }
</style>