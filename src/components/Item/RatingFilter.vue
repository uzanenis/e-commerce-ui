<template>
  <div class="rating-filter">
    <v-card-title class="pb-0">Ürün Skoru</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-model="selected" append-icon="mdi-star" label="4 ve üstü" value="4" hide-details dense></v-checkbox>
      <v-checkbox v-model="selected" append-icon="mdi-star" label="3 ve üstü" value="3" hide-details dense></v-checkbox>
      <v-checkbox v-model="selected" append-icon="mdi-star" label="2 ve üstü" value="2" hide-details dense></v-checkbox>
      <v-checkbox v-model="selected" append-icon="mdi-star" label="1 ve üstü" value="1" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RatingFilter",
  data: () => ({
    selected:'',

  }),
  computed:{
    filterByRating(){
      return this.products.filter(product => {
        product.rating > this.selected
      })
    }
  }
}
</script>

<style scoped>

</style>