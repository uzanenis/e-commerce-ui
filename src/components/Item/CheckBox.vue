<template>
  <div class="check-box">
    <v-card-title class="pb-0">Marka</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="brand in productBrands" :key="brand.id" :label="brand.name" :value="brand.name" v-model="selected" hide-details dense></v-checkbox>
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
      return this.productBrands.filter((item) => {
        return this.selected.includes(item.name)
      })
    }
  }

}
</script>

<style scoped>

</style>