<template>
    <div class="mx-auto">
      <div class="home-subtitle font-weight-bold">
        Öne Çıkarılan Ürünler
        <v-btn
          text
          class="all-items-button ml-2"
          @click="$router.push({path: '/shop'})"
        >
            Tüm Ürünler >
        </v-btn>
      </div>
      <v-carousel>
        <template v-for="(item, index) in 50">
          <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1"
                           :key="index"
          >
            <v-row class="flex-nowrap" style="height:100%">
              <template v-for="(n,i) in columns">
                <template v-if="(+index + i) < 50">
                  <v-col :key="i">
                      <v-row class="fill-height mr-2"
                             align="center"
                             justify="center"
                      >
                        <v-img
                            contain
                            width="250"
                            height="100%"
                            :src="products[+index + i].image"
                            @click="$router.push({path: `/product/${products[+index + i].id}`})"
                        >

                        </v-img>
                      </v-row>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CarouselAll",

  computed: {
    ...mapGetters({
      products: "product/getProducts",
    }),
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },
}
</script>

<style scoped>
  .home-subtitle{
    font-size: 2rem;
  }
  .all-items-button{
    color: #159b44;
  }
</style>