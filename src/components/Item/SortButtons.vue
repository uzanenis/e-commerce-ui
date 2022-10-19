<template>
  <div class="sorting">
    <v-card
        class="pa-2"
        outlined
        tile
        justify="space-around"
    >
      <v-btn class="mx-4" >En Düşük Fiyat</v-btn>
      <v-btn class="mx-4" >En Yüksek Fiyat</v-btn>
      <v-btn class="mx-4" >En Yüksek Puan</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  data: () => ({

  }),
  computed:{

  }
}
</script>

<style scoped>

</style>