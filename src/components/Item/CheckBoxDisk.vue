<template>
  <div class="check-box">
    <v-container>
      <v-checkbox v-for="type in diskTypes" :key="type.id" :label="type.name" v-model="selectedDiskType" :value="type.id" hide-details dense></v-checkbox>
    </v-container>
    <v-divider/>
    <v-card-title>Disk Boyutu</v-card-title>
    <v-container class="pt-0" fluid>
      <v-checkbox v-for="disk in getOnlyGB" :key="disk.id" :label="getSize(disk.disk_size)" :value="disk.id" v-model="selected" hide-details dense></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CheckBoxDisk",
  methods: {
    getSize(size) {
      let diskGB = (size.slice(0, size.length - 2))
      return diskGB + " GB"
    }
  },
  computed: {
    getOnlyGB() {
      return this.items.filter(item => !(item.disk_size.includes('+')) && !(item.disk_type === "eMMC"))
    }
  },
  data: () => ({
    selected: [],
    selectedDiskType: '',
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
        name: "HDD + SSD"
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
}
</script>

<style scoped>

</style>