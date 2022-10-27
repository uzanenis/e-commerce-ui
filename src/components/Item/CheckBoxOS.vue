<template>
  <div class="check-box">
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="os in items" :key="os.id" :label="os.name" :value="os.name" v-model="selected" @change="checkBox" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    items: {
      type: Array,
      required: true
    },
    filtered: {
      type: Function,
      required: false
    },
  },
  data: () => ({
    selected: [],
    selectedArrays: [],
  }),
  methods: {
    checkBox() {
      this.selectedArrays = this.items.filter((item) => {
        return this.selected.includes(item.name)
      });
      this.$store.state.selectedOSs = this.selectedArrays
      console.log(this.items)
      this.filtered()
    },
  },
}
</script>

<style scoped>

</style>