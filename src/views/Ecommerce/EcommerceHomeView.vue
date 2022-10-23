<template>
  <div>
      <v-container style="height: 100vh">
        <div class="welcome-text font-weight-bold primary white--text text-center mb-8 rounded">
          Hoş Geldin Username
        </div>
        <div>
          <v-btn
              class="mx-4"
              @click="$router.push({path: '/ecommerce/products'})"
          >
            Ürünlere Git
          </v-btn>
          <v-btn
              class="mx-4"
              @click="$router.push({path: '/ecommerce/product/edit'})"
          >
            Ürünlerini Düzenle
          </v-btn>
        </div>
      </v-container>
  </div>
</template>

<script>
export default {
  name: "EcommerceHomeView"
}
</script>

<style scoped>
  .welcome-text{
    font-size: 3rem;
  }
</style>