<template>
  <div style="height: 100vh">
    <v-data-table
        :headers="headers"
        :items="products"
        item-key="name"
        class="elevation-1"
        :search="search"
        :custom-filter="filterSearchBar"
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
        <!--        <product-delete
                    :product="item">
                ></product-delete>-->
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CreateProduct from "@/components/Mysite/CreateProduct";
//import ProductDelete from "@/components/Mysite/ProductDelete";
import ProductUpdate from "@/components/Mysite/ProductUpdate";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "EcommerceProductEditView",
  components: {
    CreateProduct,
    ProductUpdate,
  },
  data: () => ({
    search: '',
    dialog: false,
    products: [],
  }),
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    }),
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

  mounted() {
    this.getProductList();
  },
  created() {
    this.initialize()
  },

  methods: {
    getProductList() {
      const fetchProductURL = this.getRestApi + '/product/productlistcreate/';
      axios.get(fetchProductURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'application/json',
        }
      })
          .then(response => {
            if (response.status === 200) {
              this.products = response.data
            } else console.log(response)
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>