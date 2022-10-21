<template>
  <v-container>
    <div class="carousel-container mx-auto">
      <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
      >
        <v-carousel-item
        >

          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-img
                contain
                width="100%"
                height="100%"
                src="https://tasarimcantasi.com/uploads/posts/2016-10/1475518751_kocaeli_universitesi-1-copy.png"
            >

            </v-img>
          </v-row>
        </v-carousel-item>

        <v-carousel-item
        >

          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-img
                contain
                width="100%"
                height="100%"
                src="https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?w=1380&t=st=1666349668~exp=1666350268~hmac=7ca66a5e2000872791d2a03ee5ee90de1d2bd553247fb69244867c795b495590"
            >

            </v-img>
          </v-row>
        </v-carousel-item>

        <v-carousel-item
        >

          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <v-img
                contain
                width="100%"
                height="100%"
                src="https://www.technopat.net/wp-content/uploads/2017/08/Hepsiburada-Kampanya-A%C4%9Fustos-2017-640x459.jpg"
            >

            </v-img>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>

  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel"
}
</script>

<style scoped>
  .carousel-container{
    width: 80%;
  }
</style>