<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
            class="col-md-3"
            cols="12"
            sm="4"
        >
          <v-card
              class="pa-2"
              outlined
              tile
          >
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <!--
               Acilir kapanir menu items  gelicek
              <v-treeview :items="items"  :open="[1]" :active="[5]" :selected-color="'#fff'" activatable open-on-click dense></v-treeview>
               -->
              <v-divider></v-divider>
              <v-card-title>Price</v-card-title>
              <v-range-slider
                  v-model="range"
                  :max="max"
                  :min="min"
                  :height="25"
                  dense
              ></v-range-slider>
              <v-row
                  align="center"
                  justify="center"
                  class="pa-4" dense>
                <v-col cols="12" md="5">
                  <v-text-field
                      label="En Az"
                      outlined
                      dense
                      prefix="₺"
                  ></v-text-field>

                </v-col>
                <v-col cols="12" md="1">
                  <p class="pt-2 text-center">-</p>
                </v-col>
                <v-col cols="12" md="5">
                  <v-text-field
                      label="En Çok"
                      outlined
                      dense
                      prefix="₺"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-card-title class="pb-0">Ürün Skoru</v-card-title>
              <v-container class="pt-0"  fluid>
                <v-checkbox append-icon="mdi-star" label="4 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="3 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="2 ve üstü" hide-details dense></v-checkbox>
                <v-checkbox append-icon="mdi-star" label="1 ve üstü" hide-details dense></v-checkbox>
              </v-container>
              <v-divider></v-divider>
              <v-card-title class="pb-0">Marka</v-card-title>
              <v-container class="pt-0" fluid>
                <v-checkbox  label="HP" hide-details dense></v-checkbox>
              </v-container>
            </template>
          </v-card>
        </v-col>

        <v-col class="col-md-9">
          <v-card
              class="pa-2"
              outlined
              tile
              justify="space-around"
          >
            <v-btn class="mx-4" >En Düşük Fiyat</v-btn>
            <v-btn class="mx-4" >En Yüksek Fiyat</v-btn>
            <v-btn class="mx-4" >En Yüksek Puan</v-btn>
          </v-card>

          <v-divider></v-divider>

          <div class="pa-2">
            <div>
              <v-hover v-slot:default="{  }">
                <v-card
                    color="grey lighten-4"
                    width="100%"
                    class="pa-5"
                    outlined
                    tile
                >
                  <v-row>
                    <v-col
                        cols="12"
                        md="2"
                    >
                      <v-img
                          max-width="220"
                          max-height="170"
                          src="https://iis-akakce.akamaized.net/p.z?%2F%2Fn11scdn%2Eakamaized%2Enet%2Fa1%2F1024%2Felektronik%2Fdizustu%2Dbilgisayar%2Fmonster%2Dtulpar%2Dt7%2Dv204%2Di7%2D11800h%2D16%2Dgb%2D500%2Dgb%2Dssd%2Drtx3060%2D173%2Dfree%2Ddos%2Dfhd%2Ddizustu%2Dbilgisayar%5F%5F0725443025136054%2Epng"
                      >
                      </v-img>
                    </v-col>

                    <v-col
                        cols="12"
                        md="10"
                    >
                      <div>
                        Monster Tulpar T7 V20.4 i7-11800H 16 GB 512GB SSD RTX3060 17.3'' Full HD Notebook
                      </div>

                      <v-row>
                        <v-col>
                          <div class="props">
                            <div>
                              En ucuz
                            </div>
                            <div>
                              Price
                            </div>
                          </div>

                          <v-btn
                            class="rounded-pill"
                          >
                            <v-img
                                max-width="68"
                                max-height="11"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png"
                            >

                            </v-img>
                          </v-btn>

                        </v-col>

                        <v-divider
                            vertical
                        ></v-divider>

                        <v-col>
                          <div class="props">
                            <div>
                              En ucuz
                            </div>
                            <div>
                              Price
                            </div>
                          </div>

                          <v-btn>
                            Site Logo
                          </v-btn>

                        </v-col>

                        <v-divider
                            vertical
                        ></v-divider>

                        <v-col>
                          <div class="props">
                            <div>
                              En ucuz
                            </div>
                            <div>
                              Price
                            </div>
                          </div>

                          <v-btn>
                            Site Logo
                          </v-btn>

                        </v-col>
                      </v-row>

                    </v-col>
                  </v-row>

                </v-card>
              </v-hover>



            </div>
            <v-divider class="mt-2"></v-divider>

            <v-hover v-slot:default="{  }">
              <v-card
                  color="grey lighten-4 mt-2"
                  width="100%"
                  class="pa-3 "
                  outlined
                  tile
              >
                2. kart
              </v-card>
            </v-hover>

          </div>

        </v-col>
        <v-divider></v-divider>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data: () => ({
    range:[0,450000],
    min:0,
    max:450000,
  })
}
</script>

<style scoped>

</style>