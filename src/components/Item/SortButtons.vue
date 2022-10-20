<template>
  <div class="sorting">
    <v-card
        class="pa-2"
        outlined
        tile
        justify="space-around"
    >
      <v-btn class="mx-4" @click="cheap" >En Düşük Fiyat</v-btn>
      <v-btn class="mx-4" @click="expensive">En Yüksek Fiyat</v-btn>
      <v-btn class="mx-4" @click="score">En Yüksek Puan</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: {
    cheap: {
      type: Function,
      required: false
    },
    expensive: {
      type: Function,
      required: false
    },
    score: {
      type: Function,
      required: false
    },
  },
}
</script>

<style scoped>

</style>