<template>
  <div>
      <v-container style="height: 100vh">
        <div class="welcome-text font-weight-bold white--text text-center mb-8 rounded">
          Hoş Geldin {{ $store.state.ecommerceUsername }}
        </div>
        <div>
          <v-row>
            <v-col cols="12" md="12">
              <v-sheet
                  class="d-flex justify-center align-center rounded font-weight-bold"
                  color="#82ccdd"
                  elevation="2"
                  dark
                  style="height: 158px;font-size: 2rem;text-transform: uppercase"
              >
              Toplam ürün sayısı: {{ productCount}}
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-btn
                  x-large
                  block
                  style="height: 158px;font-size: 2rem;"
                  color="#38ada9"
                  elevation="2"
                  dark
                  @click="$router.push({path: '/ecommerce/products'})"
              >
                Ürünlere Git
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-btn
                  x-large
                  block
                  color="#b8e994"
                  style="height: 158px;font-size: 2rem;"
                  elevation="2"
                  dark
                  @click="$router.push({path: '/ecommerce/product/edit'})"
              >
                Ürünlerini Düzenle
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "EcommerceHomeView",
  computed:{
    ...mapGetters({
      products: 'product/getProducts',
    }),
    productCount(){
      return this.products.filter(product => product.website === "KOUTech").length
    }
  }
}
</script>

<style scoped>
  .welcome-text{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    background-color: #78e08f;
    font-size: 2.5rem;
  }
</style>