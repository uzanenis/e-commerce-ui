<template>
  <div class="sorting">
    <v-card
        class="pa-2"
        outlined
        tile
        justify="space-around"
    >
      <v-btn class="mx-4" @click="sortPriceAsc">En Düşük Fiyat</v-btn>
      <v-btn class="mx-4" @click="sortPriceDesc">En Yüksek Fiyat</v-btn>
      <v-btn class="mx-4" @click="sortRatingDesc">En Yüksek Puan</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  data: () => ({

  }),
  computed:{
    sortPriceAsc(){
      this.products.price.sort((a, b) => a.price - b.price);
    },
    sortPriceDesc(){
      this.products.price.sort((a, b) => b.price - a.price);
    },
    sortRatingDesc(){
      this.products.rating.sort((a, b) => b.rating - a.rating);
    },
  }
}
</script>

<style scoped>

</style>