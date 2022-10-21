<template>
  <div class="check-box">
    <v-container>
      <v-checkbox v-for="type in cpuBrand" :key="type.id" :label="type.name" v-model="selected"
                  :value="type.name" @change="checkBox"  dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBoxCPU",
  props: {
    filtered: {
      type: Function,
      required: false
    },
  },
  data: () => ({
    selectedArrays: [],
    selected: [],
    cpuBrand: [
      {
        id: 1,
        name: "Intel"
      },
      {
        id: 2,
        name: "AMD"
      },
      {
        id: 3,
        name: "Apple"
      }
    ],
  }),

  methods: {
    checkBox() {
      this.selectedArrays = this.cpuBrand.filter((item) => {
        return this.selected.includes(item.name)
      });
      this.$store.state.selectedCPUs = this.selectedArrays
      this.filtered()
    },
  },
}
</script>

<style scoped>

</style>