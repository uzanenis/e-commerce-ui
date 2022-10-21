<template>
  <div class="sorting">
    <v-card
        class="pa-4 d-flex justify-lg-space-around align-center"
        outlined
        tile
    >
      <div>
        <v-btn class="mx-4" outlined elevation="1" color="primary" @click="cheap" >En Düşük Fiyat</v-btn>
        <v-btn class="mx-4" outlined elevation="1" color="primary" @click="expensive">En Yüksek Fiyat</v-btn>
        <v-btn class="mx-4" outlined elevation="1" color="primary" @click="score">En Yüksek Puan</v-btn>
      </div>

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