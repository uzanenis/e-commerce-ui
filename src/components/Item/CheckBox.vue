<template>
  <div class="check-box">
    <v-card-title class="pb-0">Marka</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="brand in brands" :key="brand.id" :label="brand.name" v-model="selected" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    brands: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    selected: [],
  }),
  computed: {
    selectedBrand(){
      let filteredItems;
      let filteredBrands = [];
      for(let i = 0; i < this.selected.length; i++){
         filteredItems = this.products.filter(product => {
          product.brand.toLowerCase().includes(this.selected[i])
           filteredBrands.append(filteredItems)
        })
      }
      return filteredBrands;


    }
  }

}
</script>

<style scoped>

</style>