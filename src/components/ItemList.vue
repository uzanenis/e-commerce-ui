<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
            class="col-md-3"
            :key="n"
            cols="12"
            sm="4"
        >
          <v-card
              class="pa-2"
              outlined
              tile
          >
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <!--
               Acilir kapanir menu items  gelicek
              <v-treeview :items="items"  :open="[1]" :active="[5]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
               -->
              <v-divider></v-divider>
              <v-card-title>Price</v-card-title>
              <v-range-slider
                  v-model="range"
                  :max="max"
                  :min="min"
                  :height="25"
                  dense
              ></v-range-slider>
              <v-row
                  align="center"
                  justify="center"
                  class="pa-4" dense>
                <v-col cols="12" md="5">
                  <v-text-field
                      label="En Az"
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
                      label="En Çok"
                      outlined
                      dense
                      prefix="₺"
                  ></v-text-field>
                </v-col>
              </v-row>

            </template>
            1st col
          </v-card>
        </v-col>
        <v-col class="col-md-9">
          <v-card
              class="pa-2"
              outlined
              tile
          >
            2. col
            2. col
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data: () => ({
    range:[0,450000],
    min:0,
    max:450000,
  })
}
</script>

<style scoped>

</style>