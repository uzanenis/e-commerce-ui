<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
            class="col-md-3"
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
              <v-divider></v-divider>
              <v-card-title class="pb-0">Ürün Skoru</v-card-title>
              <v-container class="pt-0" fluid>
                <v-checkbox append-icon="mdi-star" label="4 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="3 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="2 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="1 ve üstü" hide-details dense></v-checkbox>
              </v-container>
              <v-divider></v-divider>
              <check-box :brands="brands"></check-box>
            </template>
          </v-card>
        </v-col>

        <v-col class="col-md-9">
          <v-card
              class="pa-2"
              outlined
              tile
              justify="space-around"
          >
            <v-btn class="mx-4">En Düşük Fiyat</v-btn>
            <v-btn class="mx-4">En Yüksek Fiyat</v-btn>
            <v-btn class="mx-4">En Yüksek Puan</v-btn>
          </v-card>

          <v-divider></v-divider>

          <div class="pa-2">

             <ProductCard/>

          </div>

        </v-col>
        <v-divider></v-divider>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import CheckBox from "@/components/Item/CheckBox";
import ProductCard from "@/components/Product/ProductCard";
import {mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "ItemList",
  components: {
    ProductCard,
    CheckBox
  },
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    })
  },
  data: () => ({
    brands: []
  }),
  mounted() {
    const checkBoxURL = this.getRestApi + '/default/brandlistcreate/';
    axios.get(checkBoxURL, {
      headers: {
        'Authorization': 'Bearer ' + this.getAccessToken
      }
    }).then(response => {
      if (response.status === 200) {
        this.brands = response.data;
      } else console.log(response);
    })
        .catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>