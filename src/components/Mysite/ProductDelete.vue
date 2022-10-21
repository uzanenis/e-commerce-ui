<template>
  <v-dialog
      v-model="dialog"
      width="500"
  >
    <template
        v-slot:activator="{ on, attrs }"

    >
      <v-btn
          icon
          rounded
          outlined
          color="red"
          class="mr-1"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text class="text-center pa-3">
        Are you really want to delete this company?
      </v-card-text>
      <v-card-text class="grey--text caption text-center">
        This company will not delete. It will be only inactive.
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
            rounded
            outlined
            color="red"
            class="mx-3"
            @click="companyDelete"
        >
          Yes
        </v-btn>
        <v-btn
            rounded
            outlined
            color="blue"
            class="mx-3"
            @click="dialog=false"
        >
          No
        </v-btn>
        <v-spacer/>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
  name: "ProductDelete",
  data: () => ({
    dialog: false,
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getRestApi: 'login/getRestApi',
      getAccessToken: 'login/getAccessToken',
    })
  },
  methods: {
    companyDelete() {
      const deleteURL = this.getRestApi + '/product/productretrieveupdatedestroy/' + this.product.id + '/';
      const config = {
        headers: {
          'Authorization': 'Bearer ' + this.getAccessToken,
          'Content-Type': 'application/json',
        }
      };
      axios.delete(deleteURL, config)
          .then(response => {
            if (response.status === 204) {
              console.log('Product deleted');
              this.dialog = false;
            }
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

</style>