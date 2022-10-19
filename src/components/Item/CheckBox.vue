<template>
  <div class="check-box">
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="brand in items" :key="brand.id" :label="brand.name" :value="brand.name" v-model="selected" @change="checkBox" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    items: {
      type: Array,
      required: true
    },
    filtered: {
      type: Function,
      required: false
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