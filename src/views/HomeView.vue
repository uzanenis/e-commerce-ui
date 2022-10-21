<template>
  <div>
    <v-container>
      <div class="home-title font-weight-bold">En ucuz fiyatları karşılayabileceğiniz adrese Hoş Geldiniz!</div>
      <carousel-offer />
      <carousel-all class="mt-8"/>
    </v-container>

  </div>
</template>

<script>

  import CarouselOffer from "@/components/Item/CarouselOffer";
  import CarouselAll from "@/components/Item/CarouselAll";
  export default {
    name: 'HomeView',

    components: {
      CarouselAll,
      CarouselOffer
    },
  }
</script>

<style scoped>
.home-title{
  text-align: center;
  font-size: 3rem;
  color: #159b44;
}
</style>
