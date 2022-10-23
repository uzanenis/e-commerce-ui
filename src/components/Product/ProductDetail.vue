<template>
    <v-container>
      <v-row class="mt-8">
        <v-col
          cols="5"
        >
          <v-img
              contain
              max-width="335"
              max-height="435"
              class="mx-auto productImage"
              :src="this.productDetail.image"

          >
          </v-img>
        </v-col>
        <v-col
          cols="7"
        >
          <v-card
            class="pa-6"
          >
            <v-card-title>{{getProductTitle(this.productDetail)}}</v-card-title>
            <v-card-text>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cumque dolorum hic mollitia
                placeat reprehenderit sapiente voluptatibus? Accusamus eaque harum magni maxime officia quisquam. Dicta
                dolorum quis repellat repellendus?
              </div>
            </v-card-text>
            <v-rating
              hover
              half-increments
              readonly
              length="5"
              :value="this.productDetail.score"
            >
            </v-rating>
            <v-card-actions>
              <div class="price-text font-weight-bold">
                {{this.productDetail.price}} TL
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-8">
        <v-simple-table class="tableHead">
          <thead>
            <tr>
              <th>
                Marka
              </th>
              <th>
                Model Numarası
              </th>
              <th>
                İşlemci Tipi
              </th>
              <th>
                İşlemci Nesli
              </th>
              <th>
                Bellek
              </th>
              <th>
                Ekran Boyutu
              </th>
              <th>
                İşletim Sistemi
              </th>
              <th>
                Disk Tipi
              </th>
              <th class="text-left">
                Disk Kapasitesi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ this.productDetail.computer_data.brand_data.name }}
              </td>
              <td>
                {{ this.productDetail.computer_data.model_number }}
              </td>
              <td>
                {{ this.productDetail.computer_data.cpu_data.cpu_type }}
              </td>
              <td>
                {{ this.productDetail.computer_data.cpu_data.cpu_generation }}
              </td>
              <td>
                {{ this.productDetail.computer_data.memory_data.memory_size }}
              </td>
              <td>
                {{ this.productDetail.computer_data.screen_size }}
              </td>
              <td>
                {{ this.productDetail.computer_data.os_data.name }}
              </td>
              <td>
                {{ this.productDetail.computer_data.disk_data.disk_type }}
              </td>
              <td>
                {{ this.productDetail.computer_data.disk_data.disk_size }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "ProductDetail",

  data: () => ({
    productDetail: {},
  }),
  computed:{
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    }),
    productId(){
      return this.$route.params.id
    },
  },
  mounted() {
      const fetchProductURL = this.getRestApi + '/product/productretrieve/' + this.productId + '/?format=json';
      axios.get(fetchProductURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'application/json',
        }
      })
          .then(response => {
            if (response.status === 200) {
              this.productDetail = response.data;
            }
          })
          .catch(error => {
            console.log(error);
          });
  },
  methods:{
    getProductTitle(products) {
      let productTitle = products.computer_data.brand_data.name + " " + products.computer_data.model_number + " "
          + products.computer_data.cpu_data.cpu_type + " " + products.computer_data.cpu_data.cpu_generation +
          " RAM " + products.computer_data.memory_data.memory_size
          + " " + products.computer_data.disk_data.disk_type + " " + products.computer_data.disk_data.disk_size
      if (products.length !== 0)
        return productTitle
      else
        return ''
    },
  }
}
</script>

<style scoped>
 .tableHead{
   width: 100%;
 }
 .productImage{
   border-radius: 10px;
   object-fit: cover;
   object-position: center;
 }
 .price-item{
   background-color: #159b44;
   color: white;
   padding:4px 4px;
   margin-right: 16px;
   border-radius: 10px;
 }

 .price-text{
   font-size: 2rem;
 }
</style>