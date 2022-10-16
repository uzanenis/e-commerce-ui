<template>
  <div>
    <v-card
        v-for="index in 3" :key="index"
        color="grey lighten-4"
        width="100%"
        class="pa-5"
        outlined
        tile
    >
      <v-row>
        <v-col
            cols="12"
            md="2"
        >
          <v-img
              max-width="220"
              max-height="170"
              :src="products[index] ? products[index].image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png'"
          >
          </v-img>
        </v-col>

        <v-col
            cols="12"
            md="10"
        >
          <div>
            {{
              getProductTitle(products, index)
            }}
          </div>
          <v-row>
            <v-col>
              <div class="props">
                <div>
                  En ucuz
                </div>
                <div>
                  Price
                </div>
              </div>
              <v-btn
                  class="rounded-pill"
              >
                <v-img
                    max-width="68"
                    max-height="11"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png"

                >
                </v-img>
              </v-btn>
            </v-col>

            <v-divider
                vertical
            ></v-divider>

            <v-col>
              <div class="props">
                <div>
                  En ucuz
                </div>
                <div>
                  Price
                </div>
              </div>

              <v-btn>
                Site Logo
              </v-btn>

            </v-col>

            <v-divider
                vertical
            ></v-divider>

            <v-col>
              <div class="props">
                <div>
                  En ucuz
                </div>
                <div>
                  Price
                </div>
              </div>

              <v-btn>
                Site Logo
              </v-btn>

            </v-col>
          </v-row>

        </v-col>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "ProductCard",
  computed: {
    ...mapGetters({
      restApi: 'login/getRestApi',
      accessToken: 'login/getAccessToken'
    }),
    getSameProducts() {
      return this.products.filter(product => product.computer === this.computers.filter(computer => computer.id !== null))
    }
  },
  data: () => ({
    products: [],
    computers: [],
  }),
  mounted() {
    this.getProductList()
  },
  methods: {
    getProductList() {
      console.log(this.accessToken)
      const fetchProductURL = this.restApi + '/product/productlistcreate/';
      axios.get(fetchProductURL, {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken,
          'Content-Type': 'application/json',
        }

      })
          .then(response => {
            if (response.status === 200) {
              this.products = response.data
              this.getComputersList()
            }
          })
    },
    getComputersList() {
      const fetchComputersURL = this.restApi + '/computer/computerlistcreate/'
      axios.get(fetchComputersURL, {
        headers: {
          'Authorization': 'Bearer ' + this.accessToken,
          'Content-Type': 'application/json',
        }
      })
          .then(response => {
            if (response.status === 200) {
              this.computers = response.data
              this.computers.map(computer => {
                this.sameProductMethod(computer)
              })
              console.log("Computers Added")
              console.log(this.computers)

            } else console.log(response)
          })
          .catch(err => console.log(err))
    },

    sameProductMethod(computer) {
      let sameProducts = this.products.filter(product => product.computer_data.model_number.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "") ===
          computer.model_number.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g, ""))
      if (sameProducts.length > 1)
        console.log(sameProducts)
    },

    getProductTitle(products, index) {
      let productTitle = products[index].computer_data.brand_data.name + " " + products[index].computer_data.model_number + " "
          + products[index].computer_data.cpu_data.cpu_type + " " + products[index].computer_data.cpu_data.cpu_generation +
          " RAM " + products[index].computer_data.memory_data.memory_size
          + " " + products[index].computer_data.disk_data.disk_type + " " + products[index].computer_data.disk_data.disk_size
      if (products.length !== 0)
        return productTitle
      else
        return ''


    }
  }
}
</script>

<style scoped>

</style>