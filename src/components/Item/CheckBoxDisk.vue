<template>
  <div class="check-box">
    <v-container>
      <v-checkbox v-for="type in diskTypes" :key="type.id" :label="type.name" v-model="$store.state.selectedDiskType" :value="type.name"  hide-details dense></v-checkbox>
    </v-container>
    <v-divider/>
    <v-container class="pt-0" fluid>
      <v-card-title>Disk Boyutu</v-card-title>
      <v-card-subtitle v-if="!($store.state.selectedDiskType)" >Lütfen önce disk türü seçin.</v-card-subtitle>
      <v-checkbox v-for="disk in getOnlyGB" :key="disk.id" :label="disk.disk_size" :value="disk.disk_size" v-model="$store.state.selectedDiskSize" @change="checkBox"  hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBoxDisk",
  computed: {
    getOnlyGB() {
      return this.items.filter(item => !(item.disk_type === "eMMC") && this.$store.state.selectedDiskType === item.disk_type)
    }
  },
  data: () => ({
    diskTypes: [
      {
        id: 1,
        name: "SSD"
      },
      {
        id: 2,
        name: "HDD"
      },
      {
        id: 3,
        name: "HDD-SSD"
      }
    ]
  }),
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
  methods: {
    checkBox() {
      this.filtered()
    },
  },
}
</script>

<style scoped>

</style>