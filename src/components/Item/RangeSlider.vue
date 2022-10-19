<template>
<div class="range-slider">
  <v-card-title>Price</v-card-title>
  <v-range-slider
      v-model="range"
      :max="max"
      :min="min"
      :height="25"
      dense
  ></v-range-slider>
  <v-row
      align="center"
      justify="center"
      class="pa-4" dense>
    <v-col cols="12" md="5">
      <v-text-field
          :value="range[0]"
          label="Min"
          outlined
          dense
          @change="$set(range, 0, $event)"
          prefix="₺"
      ></v-text-field>

    </v-col>
    <v-col cols="12" md="1">
      <p class="pt-2 text-center">-</p>
    </v-col>
    <v-col cols="12" md="5">
      <v-text-field
          :value="range[1]"
          label="Max"
          outlined
          dense
          @change="$set(range, 1, $event)"
          prefix="₺"
      ></v-text-field>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: "RangeSlider",
  data: () => ({
    range: [0, 100000],
    min:0,
    max:100000,
  }),
  computed:{
    filterByRange(){
      return this.productBrands.filter(product => {
        if(product.price >= parseFloat(this.range[0]) && product.price <= parseFloat(this.range[1]))
          return product;
      })
    }
  }
}
</script>

<style scoped>

</style>