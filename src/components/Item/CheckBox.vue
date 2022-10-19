<template>
  <div class="check-box">
    <v-card-title class="pb-0">Marka</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="brand in brands" :key="brand.id" :label="brand.name" :value="brand.name" v-model="selected" @change="checkBox" hide-details dense></v-checkbox>
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
    },
    filtered: {
      type: Function,
      required: true
    },
  },
  data: () => ({
    selected: [],
    selectedArrays: [],
  }),
  methods: {
    checkBox() {
      this.selectedArrays = this.brands.filter((item) => {
        return this.selected.includes(item.name)
      });
      this.$store.state.selectedBrands = this.selectedArrays
      this.filtered()
    },
  },
}
</script>

<style scoped>

</style>