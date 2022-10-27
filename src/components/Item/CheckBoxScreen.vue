<template>
  <div class="check-box">
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="screen in screen_sizes" :key="screen.id" :label="screen.size" :value="screen.size" v-model="selected" @change="checkBox" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBoxScreen",
  methods: {
    checkBox() {
      this.selectedArrays = this.screen_sizes.filter((item) => {
        return this.selected.includes(item.size)
      });
      console.log(this.selectedArrays)
      this.$store.state.selectedSizes = this.selectedArrays
      this.filtered()
    },
  },
  props: {
    filtered: {
      type: Function,
      required: false
    },
  },
  data: () => ({
    selected: [],
    sizeArray: [],
    selectedArrays: [],
    screen_sizes: [
      {id: 1, size: '15.6"'},
      {id: 2, size: '13.6"'},
      {id: 3, size: '12"'},
      {id: 4, size: '13"'},
      {id: 5, size: '14.1"'},
      {id: 6, size: '15"'},
      {id: 7, size: '13.3"'},
      {id: 8, size: '17.3"'},
      {id: 9, size: '13.4"'},
      {id: 10, size: '10.1"'},
      {id: 11, size: '10"'},
      {id: 12, size: '16.2"'},
      {id: 13, size: '16"'},
      {id: 14, size: '16.1"'},
      {id: 15, size: '13.5"'},
      {id: 16, size: '14.5"'},
      {id: 17, size: '14"'},
      {id: 18, size: '17"'},
      {id: 19, size: '11.6"'},
      {id: 20, size: '14.2"'},
    ],
  })
}
</script>

<style scoped>

</style>