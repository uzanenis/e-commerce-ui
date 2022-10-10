<template>
  <div>
    <v-app>
      <v-main class="pa-0">
        <router-view/>
      </v-main>
    </v-app>
  </div>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
