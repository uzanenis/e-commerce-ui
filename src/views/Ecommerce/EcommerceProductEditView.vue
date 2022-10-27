<template>
  <div style="height: 100vh">
    <v-snackbar
      v-model="$store.state.snackbar.status"
      :color="$store.state.snackbar.color"
      absolute
      top
      right
    >
      {{ $store.state.snackbar.text }}
    </v-snackbar>
    <v-data-table
        :headers="headers"
        :items="getMyItems"
        item-key="name"
        class="elevation-1"
        :search="search"
        :items-per-page="getMyItems.length"
    >
      <template v-slot:top>
        <v-toolbar
            flat
        >
          <v-toolbar-title>Ürünlerim</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <create-product/>
        </v-toolbar>
        <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
        ></v-text-field>
      </template>


      <template v-slot:[`item.edit`]="{ item }">
        <product-update
            :product="item">
        </product-update>
        <product-delete
            :product="item">
          >
        </product-delete>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CreateProduct from "@/components/Mysite/CreateProduct";
import ProductDelete from "@/components/Mysite/ProductDelete";
import ProductUpdate from "@/components/Mysite/ProductUpdate";
import {mapGetters} from "vuex";

export default {
  name: "EcommerceProductEditView",
  components: {
    CreateProduct,
    ProductUpdate,
    ProductDelete,
  },
  data: () => ({
    search: '',
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
      fetchProducts: 'product/getProducts',
    }),
    getMyItems() {
      return this.fetchProducts.filter(product => product.website === 'KOUTech')
    },
    headers() {
      return [
        {
          text: "Ürün Adı",
          align: "start",
          sortable: true,
          value: "computer_data.model_number"
        },
        {
          text: "Website",
          align: "start",
          sortable: true,
          value: "website"
        },
        {
          text: "Fiyat",
          align: "start",
          sortable: true,
          value: "price"
        },
        {
          text: "Değerlendirmeler",
          align: "start",
          sortable: true,
          value: "score"
        },
        {text: "Düzenle", value: "edit", sortable: false}
      ]
    },
  },

  created() {
    this.initialize()
  },

}
</script>

<style scoped>

</style>