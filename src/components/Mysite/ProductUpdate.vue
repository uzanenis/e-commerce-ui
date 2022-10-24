<template>
  <v-dialog
      v-model="dialog"
      width="1100"
  >
    <template
        v-slot:activator="{ on, attrs }"

    >
      <v-btn
          icon
          rounded
          outlined
          color="blue"
          class="mr-1"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Product Edit</span>
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
                  v-model="computerData.brand"
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
                  :items="oss"
                  item-text="name"
                  item-value="id"
                  v-model="computerData.os"
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
                  v-model="computerData.memory"
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
                  v-model="computerData.cpu"
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
                  v-model="computerData.disk"
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
                  v-model="computerData.model_number"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Score"
                  v-model="productData.score"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  filled
                  rounded
                  solo
                  dense
                  label="Screen Size"
                  v-model="computerData.screen_size"
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
                  v-model="productData.price"
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
                  v-model="productData.website"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-file-input
                  filled
                  rounded
                  solo
                  dense
                  label="Image"
                  v-model="productData.image"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-col cols="6"></v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                  min-width="90px"
                  class="mr-2"
                  outlined
                  rounded
                  color="red"
                  @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  min-width="90px"
                  dark
                  rounded
                  color="success"
                  @click="editCompany"
              >
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "ProductUpdate",
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    }),
  },
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  mounted() {
    this.getOSList()
    this.getBrandList()
    this.getMemoryList()
    this.getCPUList()
    this.getDiskList()
  },
  data: () => ({
    save_btn_loading: false,
    dialog: false,
    oss: [],
    memories: [],
    cpus: [],
    disks: [],
    brands: [],
    productData: {
      price: null,
      image: null,
      website: null,
      score: null,
    },
    computerData: {
      brand: null,
      os: null,
      memory: null,
      cpu: null,
      disk: null,
      screen_size: null,
      model_number: null,
      serial_number: null,
    }
  }),
  created() {
    this.productData = JSON.parse(JSON.stringify(this.product))
    this.computerData = JSON.parse(JSON.stringify(this.product.computer_data))
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
          this.oss = response.data;
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

    editCompany() {
      console.log(this.productData)
      console.log(this.product.id)
      const myUrl = this.getRestApi + '/product/productretrieveupdatedestroy/' + this.product.id + '/';
      const myFormData = new FormData();
      myFormData.append('price', this.productData.price);
      myFormData.append('post_image', this.productData.image);
      myFormData.append('website', this.productData.website);
      myFormData.append('score', this.productData.score);
      myFormData.append('brand', this.computerData.brand);
      myFormData.append('os', this.computerData.os);
      myFormData.append('memory', this.computerData.memory);
      myFormData.append('cpu', this.computerData.cpu);
      myFormData.append('disk', this.computerData.disk);
      myFormData.append('model_number', this.computerData.model_number);
      myFormData.append('serial_number', this.computerData.serial_number);
      myFormData.append('screen_size', this.computerData.screen_size);
      const config = {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'multipart/form-data'
        }
      };
      axios.patch(myUrl, myFormData, config)
          .then(response => {
            if (response.status === 200) {
              console.log("success");
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