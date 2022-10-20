<template>
  <div class="check-box">
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="memory in getOnlyGB" :key="memory.id" :label="getList(memory.memory_size)" :value="memory.memory_size" v-model="selected" @change="checkBox" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBoxMemory",
  methods: {
    getList(memorySize) {
      let memoryGB = (memorySize.slice(0, memorySize.length - 2))
      return memoryGB + " GB"
    },
    checkBox() {
      this.selectedArrays = this.items.filter((item) => {
        return this.selected.includes(item.memory_size)
      });
      console.log(this.selectedArrays)
      this.$store.state.selectedMemories = this.selectedArrays
      this.filtered()
    },
  },
  computed: {
    getOnlyGB() {
      return this.items.filter(item => !(item.memory_size.includes('x')))
    }
  },
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
    sizeArray: [],
    selectedArrays: [],
  }),
}
</script>

<style scoped>

</style>