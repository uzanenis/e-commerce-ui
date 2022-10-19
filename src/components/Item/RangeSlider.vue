<template>
<div class="range-slider">
  <v-card-title>Price</v-card-title>

  <v-row
      align="center"
      justify="center"
      class="pa-4" dense>
    <v-col cols="12" md="5">
      <v-text-field
          v-model="$store.state.startPrice"
          label="Start"
          outlined
          dense
          prefix="₺"
      ></v-text-field>

    </v-col>
    <v-col cols="12" md="1">
      <p class="pt-2 text-center">-</p>
    </v-col>
    <v-col cols="12" md="5">
      <v-text-field
          v-model="$store.state.endPrice"
          label="End"
          outlined
          dense
          prefix="₺"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn small rounded block class="primary mt-0" dark @click="priceSelected">Filter Price</v-btn>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
  name: "RangeSlider",
  data: () => ({

  }),
  props: {
    filtered: {
      type: Function,
      required: true
    }
  },
  methods: {
    priceSelected() {
      this.filtered()
    }
  }
}
</script>

<style scoped>

</style>