<template>
  <div>
    <v-container class="fill-height">
      <v-row>
        <v-col
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
                  contain
                  height="179px"
                  width="179px"
                  src="/img/trendyol_logo.png"
              >
              </v-img>
              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">A715-42G-R016</div>
                  <h3 class="productCardTitle">Acer Aspire 7 5.Nesil Ryzen 5 5500U-8Gb-512Gb Ssd-15.6inc-Rtx3050 4Gb-Freedos</h3>
                </div>
                <div class="productCardCost mt-7">
                  <div class="productCardPrice">15.999 TL</div>
                  <div class="productCardCargo">Kargo Bedava</div>
                </div>
              </div>
            </v-card>
          </v-hover>

        </v-col>
        <v-col
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
                  contain
                  height="179px"
                  width="179px"
                  src="/img/trendyol_logo.png"
              >
              </v-img>
              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">A715-42G-R016</div>
                  <h3 class="productCardTitle">Acer Aspire 7 5.Nesil Ryzen 5 5500U-8Gb-512Gb Ssd-15.6inc-Rtx3050 4Gb-Freedos</h3>
                </div>
                <div class="productCardCost mt-7">
                  <div class="productCardPrice">15.999 TL</div>
                  <div class="productCardCargo">Kargo Bedava</div>
                </div>
              </div>
            </v-card>
          </v-hover>

        </v-col>
        <v-col
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
                  contain
                  height="179px"
                  width="179px"
                  src="/img/trendyol_logo.png"
              >
              </v-img>
              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">A715-42G-R016</div>
                  <h3 class="productCardTitle">Acer Aspire 7 5.Nesil Ryzen 5 5500U-8Gb-512Gb Ssd-15.6inc-Rtx3050 4Gb-Freedos</h3>
                </div>
                <div class="productCardCost mt-7">
                  <div class="productCardPrice">15.999 TL</div>
                  <div class="productCardCargo">Kargo Bedava</div>
                </div>
              </div>
            </v-card>
          </v-hover>

        </v-col>
        <v-col
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
                  contain
                  height="179px"
                  width="179px"
                  src="/img/trendyol_logo.png"
              >
              </v-img>
              <div class="productCardContainer">
                <div>
                  <div class="productCardModel">A715-42G-R016</div>
                  <h3 class="productCardTitle">Acer Aspire 7 5.Nesil Ryzen 5 5500U-8Gb-512Gb Ssd-15.6inc-Rtx3050 4Gb-Freedos</h3>
                </div>
                <div class="productCardCost mt-7">
                  <div class="productCardPrice">15.999 TL</div>
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