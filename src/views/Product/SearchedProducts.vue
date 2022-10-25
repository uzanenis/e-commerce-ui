<template>
  <div>
    <div v-if="!isSearchWrong($store.state.searchValue,formatModelNumber($store.state.searchValue))">
      {{ $store.state.searchValue }} yerine {{ formatModelNumber($store.state.searchValue) }} aratıldı.
    </div>
    <v-container class="fill-height">
      <v-row>
        <v-col v-for="product in $store.state.searchedProducts" :key="product.id"
               cols="12"
               md="3"
               sm="6"
        >
          <v-hover
              v-slot="{ hover }">

            <v-card
                :elevation="hover ? 16: 2"
                class="productListCard"
                @click="$router.push({path: `/ecommerce/product/${product.id}`})"
            >
              <v-img
                  contains
                  height="179px"
                  width="179px"
                  :src="product.image ? product.image : product.post_image"
              >
              </v-img>
              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">{{ product.computer_data.model_number }}</div>
                  <h3 class="productCardTitle">{{ getProductTitle(product) }}</h3>
                </div>
                <div class="productCardCost mt-7">
                  <div class="productCardPrice">{{ product.price }} TL</div>
                  <div class="productCardCargo">{{ product.website }}</div>
                </div>
              </div>
            </v-card>
          </v-hover>

        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SearchedProducts",
  data: () => ({

  }),
  computed:{
    productId(){
      return parseInt(this.$route.params.id)
    },
    product(){
      return this.products.find(product => product.id === this.productId)
    },
    ...mapGetters({
      fetchProducts: 'product/getProducts',
    })
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
    isSearchWrong(search, formattedSearch){
      return search === formattedSearch;
    },
    formatModelNumber(text) {
      return text.toLowerCase().replace(/[^\w\s']|_/g, "").replace(/\s+/g, "")
    },
  }
}
</script>

<style scoped>
.productListCard{
  max-width: 100%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #d0d0d0;
  padding: 40px 35px 20px 35px;
  font-size: 14px;
  overflow-x: hidden;
}
.productCardContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.productCardModel{
  font-family: Arial,Helvetica,sans-serif;
  font-size: 11px;
  color: #858585;
  max-height: 15px;
  overflow: hidden;
}
.productCardTitle{
  font-size: 12px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 18px;
}

.productCardPrice{
  font-size: 32px;
  color: #159b44;
  font-family: Roboto,Arial,sans-serif;
  font-weight: 700;
}
</style>