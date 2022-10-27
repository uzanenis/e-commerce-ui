<template>
  <div>
    <v-container class="fill-height">
      <v-row>
        <v-col v-for="product in getMyProducts" :key="product.id"
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
              <div class="d-flex justify-center align-center">
                <v-img
                    contain
                    height="179px"
                    width="179px"
                    :src="product.image ? product.image : emptyImage(product)"
                >
                </v-img>
              </div>

              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">{{ product.computer_data.model_number }}</div>
                  <h3 class="productCardTitle">{{ getProductTitle(product) }}</h3>
                </div>
                <div class="productCardCost">
                  <div class="productCardPrice">{{ product.price }} TL</div>
                  <div class="productCardCargo">Kargo Bedava</div>
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
  name: "EcommerceView",
  data: () => ({

  }),
  computed:{
    ...mapGetters({
      fetchProducts: 'product/getProducts',
    }),
    productId(){
      return parseInt(this.$route.params.id)
    },
    product(){
      return this.products.find(product => product.id === this.productId)
    },
    getMyProducts() {
      return this.fetchProducts.filter(product => product.website === 'KOUTech')
    }
  },
  methods: {
    emptyImage(product) {
      let brand = product.computer_data.brand_data.name
      if (brand === 'APPLE') {
        return 'https://cdn.dsmcdn.com/ty537/product/media/images/20220920/19/177543929/574138741/1/1_org_zoom.jpg'
      } else if (brand === 'ASUS') {
        return 'https://cdn.dsmcdn.com/ty37/product/media/images/20210323/12/74641944/156489115/0/0_org_zoom.jpg'
      } else if (brand === 'DELL') {
        return 'https://cdn.dsmcdn.com/ty438/product/media/images/20220523/13/115087487/485907190/1/1_org_zoom.jpg'
      } else if (brand === 'HP') {
        return 'https://cdn.dsmcdn.com/ty532/product/media/images/20220912/18/174534496/568285518/1/1_org_zoom.jpg'
      } else if (brand === 'LENOVO') {
        return 'https://cdn.dsmcdn.com/ty487/product/media/images/20220721/16/147164647/525083729/1/1_org_zoom.jpg'
      } else if (brand === 'MSI') {
        return 'https://cdn.dsmcdn.com/ty562/product/media/images/20221013/9/192385279/595120142/1/1_org_zoom.jpg'
      } else if (brand === 'MONSTER') {
        return 'https://cdn.dsmcdn.com/ty510/product/media/images/20220819/11/162740181/538198125/1/1_org_zoom.jpg'
      } else if (brand === 'ACER') {
        return 'https://cdn.dsmcdn.com/ty554/product/media/images/20221006/11/187509478/590468369/1/1_org_zoom.jpg'
      }
    },
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
   height: 65px;
   font-size: 12px;
   margin: 0;
   padding: 0;
   font-weight: 400;
   line-height: 18px;
 }

.productCardCost{
  margin-top: 20px;
}
 .productCardPrice{
   font-size: 32px;
   color: #159b44;
   font-family: Roboto,Arial,sans-serif;
   font-weight: 700;
 }
</style>