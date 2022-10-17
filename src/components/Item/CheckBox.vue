<template>
  <div class="check-box">
    <v-card-title class="pb-0">Marka</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="brand in brands" :key="brand.id" :label="brand.name"  hide-details dense></v-checkbox>
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
  }
}
</script>

<style scoped>

</style>