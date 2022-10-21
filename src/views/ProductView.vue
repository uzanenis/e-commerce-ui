<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
            cols="12"
            md="3"
            sm="6"
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
              <range-slider :filtered="getFilteredProductaToPrices"/>
              <v-divider></v-divider>
              <rating-filter  :filtered="getFilteredProductsaToPoint" />
              <v-divider></v-divider>
              <v-card-title>Markalar</v-card-title>
              <check-box
                  :items="brands"
                  :filtered="getFilteredProductsaToBrand"
              ></check-box>
              <v-divider/>
              <v-card-title>İşletim Sistemleri</v-card-title>
              <check-box-o-s :items="os" :filtered="getFiltredProductaToOS"></check-box-o-s>
              <v-divider/>
              <v-card-title>RAM Bellek</v-card-title>
              <check-box-memory :items="memories" :filtered="getFiltredProductaToMemory"></check-box-memory>
              <v-divider/>
              <v-card-title>İşlemci Markası</v-card-title>
              <check-box-c-p-u :filtered="getFiltredaToCPU"></check-box-c-p-u>
              <v-divider/>
              <v-card-title>Disk Türü</v-card-title>
              <check-box-disk :items="disks" :filtered="getFiltredProductsaToDisk"></check-box-disk>

            </template>
          </v-card>
        </v-col>

        <v-col
          md="9"
        >
          <sort-buttons :cheap="getFiltredCheapest" :expensive="getFiltredExpensive" :score="getFiltredScore" />
          <v-divider></v-divider>

          <div class="pa-2">

            <ProductCard :productsFiltered="getProductArrays"/>

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
import RangeSlider from "@/components/Item/RangeSlider";
import RatingFilter from "@/components/Item/RatingFilter";
import CheckBoxMemory from "@/components/Item/CheckBoxMemory";
import CheckBoxDisk from "@/components/Item/CheckBoxDisk";
import CheckBoxOS from "@/components/Item/CheckBoxOS";
import CheckBoxCPU from "@/components/Item/CheckBoxCPU";
import {mapGetters} from "vuex";
import axios from "axios";
import SortButtons from "@/components/Item/SortButtons";

export default {
  name: "ItemList",
  components: {
    SortButtons,
    RatingFilter,
    RangeSlider,
    ProductCard,
    CheckBox,
    CheckBoxMemory,
    CheckBoxDisk,
    CheckBoxOS,
    CheckBoxCPU,
  },
  computed: {
    ...mapGetters({
      fetchProducts: 'product/getProducts',
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    }),
      getProductArrays() {
        return this.productJSONArray.filter(product => product.length !== 0)
    },
  },
  data: () => ({
    brands: [],
    os: [],
    memories: [],
    disks: [],
    productJSONArray: [],
    productsJSON: {},
  }),
  mounted() {
    this.getBrandList();
    this.getProductList()
    this.getOSList()
    this.getMemoryList()
    this.getDiskList()
    // this.getProductList()
  },
  methods: {
    getProductList() {
      this.fetchProducts.forEach(product => {
        if (this.fetchProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
          this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.fetchProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
        }
      })
      this.getCleanedProducts()
    },


    getFilteredProductsaToBrand() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithbrands/?brands=' + this.$store.state.selectedBrands.map(brand => brand.name).join('+');
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFilteredProductsaToPoint() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithpoints/?points=' + this.$store.state.selectedPoint;
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFilteredProductaToPrices() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithprices/?price_start=' + this.$store.state.startPrice + '&price_end=' + this.$store.state.endPrice;
      console.log(filteredURL)
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFiltredProductaToOS() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithos/?os=' + this.$store.state.selectedOSs.map(os => os.name).join('+');
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },


    getFiltredProductaToMemory() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithmemory/?memory=' + this.$store.state.selectedMemories.map(memory => memory.memory_size).join('+');
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFiltredProductsaToDisk() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamswithdisk/?disk_type=' + this.$store.state.selectedDiskType + '&disk_size=' + this.$store.state.selectedDiskSize;
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFiltredaToCPU() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      console.log(this.$store.state.selectedCPUs.map(cpu => cpu.name).join('+'))
      const filteredURL = this.getRestApi + '/product/productparamswithcpu/?cpu=' + this.$store.state.selectedCPUs.map(cpu => cpu.name).join('+');
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },

    getFiltredCheapest() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamscheap/?cheap=true';
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },


    getFiltredExpensive() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamsexpensive/?expensive=true';
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },


    getFiltredScore() {
      this.productsJSON = {}
      this.productJSONArray = []
      console.log("It works")
      const filteredURL = this.getRestApi + '/product/productparamsscore/?score=true';
      axios.get(filteredURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      })
          .then(response => {
            if(response.status === 200) {
              this.filtredProducts = response.data
              this.filtredProducts.forEach(product => {
                if (this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number)).length > 1) {
                  this.productsJSON[this.formatModelNumber(product.computer_data.model_number)] = this.filtredProducts.filter(p => this.formatModelNumber(product.computer_data.model_number) === this.formatModelNumber(p.computer_data.model_number))
                }
              })
              this.getCleanedProducts()
            }
          })
    },



    getBrandList() {
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
    },

    getOSList() {
      const osListURL = this.getRestApi + '/default/oslistcreate/';
      axios.get(osListURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      }).then(response => {
        if (response.status === 200) {
          this.os = response.data;
        } else console.log(response);
      })
          .catch(err => console.log(err))
    },

    getMemoryList() {
      const memoryListURL = this.getRestApi + '/computer/memorylistcreate/';
      axios.get(memoryListURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      }).then(response => {
        if (response.status === 200) {
          this.memories = response.data;
        } else console.log(response);
      })
          .catch(err => console.log(err))
    },

    getDiskList() {
      const diskListURL = this.getRestApi + '/computer/disklistcreate/';
      axios.get(diskListURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      }).then(response => {
        if (response.status === 200) {
          this.disks = response.data;
        } else console.log(response);
      })
          .catch(err => console.log(err))
    },


    formatModelNumber(modelNumber) {
      return modelNumber.toLowerCase().replace(/[^\w\s']|_/g, "").replace(/\s+/g, "")
    },

    getCleanedProducts(){
      for(let key in this.productsJSON){
        this.productJSONArray.push(this.productsJSON[key])
      }
      return this.productJSONArray;
    }

  }
}
</script>

<style scoped>

</style>