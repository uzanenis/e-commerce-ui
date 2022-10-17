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
              <range-slider />
              <v-divider></v-divider>
              <rating-filter />
              <v-divider></v-divider>
              <check-box :brands="brands"></check-box>
            </template>
          </v-card>
        </v-col>

        <v-col class="col-md-9">


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
import {mapGetters} from "vuex";
import axios from "axios";
import CheckBox from "@/components/Item/CheckBox";
import ProductCard from "@/components/Product/ProductCard";
import RangeSlider from "@/components/Item/RangeSlider";
import RatingFilter from "@/components/Item/RatingFilter";

export default {
  name: "ItemList",
  components: {
    RatingFilter,
    RangeSlider,
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