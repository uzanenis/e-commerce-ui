<template>
  <v-dialog
      v-model="dialog"
      min-width="1100px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          dark
          class="mb-2"
          v-bind="attrs"
          v-on="on"
      >
        Yeni Ürün
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Ürün Ekle</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>

            <v-col
                cols="4"
            >
              <v-autocomplete
                  filled
                  rounded
                  solo
                  dense
                  label="Brand"
                  :items="brands"
                  item-text="name"
                  item-value="id"
                  v-model="product_data.brand"
              ></v-autocomplete>
            </v-col>

            <v-col
                cols="4"
            >
              <v-autocomplete
                  filled
                  rounded
                  solo
                  dense
                  label="Operation System"
                  :items="os"
                  item-text="name"
                  item-value="id"
                  v-model="product_data.os"
              ></v-autocomplete>
            </v-col>

            <v-col
                cols="4"
            >
              <v-autocomplete
                  filled
                  rounded
                  solo
                  dense
                  label="Memory"
                  :items="memories"
                  item-text="memory_size"
                  item-value="id"
                  v-model="product_data.memory"
              ></v-autocomplete>
            </v-col>

          </v-row>
          <v-row>
            <v-col
                cols="6"
            >
              <v-autocomplete
                  filled
                  rounded
                  solo
                  dense
                  label="CPU"
                  :items="cpus"
                  item-text="full_cpu"
                  item-value="id"
                  v-model="product_data.cpu"
              ></v-autocomplete>
            </v-col>

            <v-col
                cols="6"
            >
              <v-autocomplete
                  filled
                  rounded
                  solo
                  dense
                  label="Disk"
                  :items="disks"
                  item-text="full_disk"
                  item-value="id"
                  v-model="product_data.disk"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Model Number"
                  v-model="product_data.model_number"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Serial Number"
                  v-model="product_data.serial_number"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  type="number"
                  label="Screen Size"
                  v-model="product_data.screen_size"
                  hint="Sadece sayı giriniz"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Price"
                  type="number"
                  v-model="full_product_data.price"
                  hint="Sadece sayı giriniz"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Website"
                  v-model="full_product_data.website"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-file-input
                  filled
                  rounded
                  solo
                  dense
                  label="Image"
                  v-model.number="full_product_data.image"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="createComputer"
            :loading="btnLoading"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "CreateProduct",
  data: () => ({
    btnLoading: false,
    dialog: false,
    brands: [],
    os: [],
    disks: [],
    memories: [],
    cpus: [],
    product_data: {
      brand: null,
      os: null,
      memory: null,
      cpu: null,
      disk: null,
      model_number: null,
      serial_number: null,
      screen_size: null,
    },
    full_product_data: {
      price: null,
      image: null,
      website: null,
      computer_id: null
    }
  }),
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    }),
  },
  mounted() {
    this.getOSList()
    this.getBrandList()
    this.getMemoryList()
    this.getDiskList()
    this.getCPUList()

  },
  methods: {
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

    getCPUList() {
      const cpuListURL = this.getRestApi + '/computer/cpulistcreate/';
      axios.get(cpuListURL, {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken
        }
      }).then(response => {
        if (response.status === 200) {
          this.cpus = response.data;
        } else console.log(response);
      })
          .catch(err => console.log(err))
    },

    createComputer() {
      this.btnLoading = true;
      const computerCreateURL = this.getRestApi + '/computer/computerlistcreate/';
      const computerData = new FormData();
      computerData.append('brand', this.product_data.brand);
      computerData.append('os', this.product_data.os);
      computerData.append('memory', this.product_data.memory);
      computerData.append('cpu', this.product_data.cpu);
      computerData.append('disk', this.product_data.disk);
      computerData.append('model_number', this.product_data.model_number);
      computerData.append('serial_number', this.product_data.serial_number);
      computerData.append('screen_size', this.product_data.screen_size);
      const config = {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      };
      axios.post(computerCreateURL, computerData, config)
          .then(response => {
            if (response.status === 201) {
              this.createProduct(response.data.id)
              console.log("Computer created");
              setTimeout(() => {
                this.btnLoading = false;
                this.dialog = false;
              }, 1000);
            } else console.log(response);
          })
          .catch(err => console.log(err))
    },

    createProduct(id) {

      const createProductURL = this.getRestApi + '/product/productcreate/';
      this.full_product_data.computer_id = id;
      const productData = new FormData()
      productData.append('computer', this.full_product_data.computer_id);
      productData.append('price', this.full_product_data.price)
      productData.append('post_image', this.full_product_data.image)
      productData.append('website', this.full_product_data.website)
      const config = {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        }
      };
      axios.post(createProductURL, productData, config)
          .then(response => {
            if (response.status === 201) {
              console.log("Product Created")
              this.btnLoading = false;
              this.dialog = false;
            } else console.log(response);
          })
          .catch(err => console.log(err))
    }

  }
}
</script>

<style scoped>

</style>