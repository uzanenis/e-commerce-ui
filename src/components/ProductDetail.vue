<template>
    <v-container>
      <v-row class="mt-8">
        <v-col
          cols="5"
        >
          <v-img
              contain
              max-width="435"
              max-height="635"
              class="mx-auto productImage"
              :src="productsNew[0].image"

          >
          </v-img>
        </v-col>
        <v-col
          cols="7"
        >
          <v-card
            class="pa-6"
          >
            <v-card-title>Ürün Adı</v-card-title>
            <v-card-text>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum cumque dolorum hic mollitia
                placeat reprehenderit sapiente voluptatibus? Accusamus eaque harum magni maxime officia quisquam. Dicta
                dolorum quis repellat repellendus?
              </div>
            </v-card-text>
            <v-rating
              hover
              half-increments
              readonly
              length="5"
              :value="productsNew[0].score"
            >
            </v-rating>
            <v-card-actions>
              <div class="price-item">
                En ucuz
              </div>
              <div class="price-text font-weight-bold">
                {{productsNew[0].price}} TL
              </div>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                class="rounded-pill pa-4"

              >
                <v-img
                  max-width="70"
                  src="/img/trendyol_logo.png"
                ></v-img>
              </v-btn>
              <v-btn
                  class="rounded-pill pa-4"

              >
                <v-img
                    max-width="70"
                    src="/img/trendyol_logo.png"
                ></v-img>
              </v-btn>
              <v-btn
                  class="rounded-pill pa-4"

              >
                <v-img
                    max-width="70"
                    src="/img/trendyol_logo.png"
                ></v-img>
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-8">
        <v-simple-table class="tableHead">
          <thead>
            <tr>
              <th>
                Marka
              </th>
              <th>
                Model Numarası
              </th>
              <th>
                İşlemci Tipi
              </th>
              <th>
                İşlemci Nesli
              </th>
              <th>
                Bellek
              </th>
              <th>
                Ekran Boyutu
              </th>
              <th>
                İşletim Sistemi
              </th>
              <th>
                Disk Tipi
              </th>
              <th class="text-left">
                Disk Kapasitesi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ productsNew[0].computer_data.brand_data.name }}
              </td>
              <td>
                {{ productsNew[0].computer_data.model_number }}
              </td>
              <td>
                {{ productsNew[0].computer_data.cpu_data.cpu_type }}
              </td>
              <td>
                {{ productsNew[0].computer_data.cpu_data.cpu_generation }}
              </td>
              <td>
                {{ productsNew[0].computer_data.memory_data.memory_size }}
              </td>
              <td>
                {{ productsNew[0].computer_data.screen_size }}
              </td>
              <td>
                {{ productsNew[0].computer_data.os_data.name }}
              </td>
              <td>
                {{ productsNew[0].computer_data.disk_data.disk_type }}
              </td>
              <td>
                {{ productsNew[0].computer_data.disk_data.disk_size }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "ProductDetail",

  data: () => ({
    productsNew: [
      {
        "id": 1416,
        "computer": 1300,
        "score": 4.0,
        "price": 22118.47,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1300,
          "model_number": "Z15JM1PVG161-TQ6",
          "serial_number": "3216556461",
          "brand": 6,
          "cpu": 208,
          "disk": 2,
          "memory": 7,
          "os": 1,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 6,
            "name": "DELL"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 2,
            "disk_type": "SSD",
            "disk_size": "256GB"
          },
          "memory_data": {
            "id": 7,
            "memory_size": "32GB"
          }
        },
        "url": "https://www.teknosa.com/dell-latitude-3520-n027l3520158gemau54-intel-core-i7-1165g7-156-fhd-32-gb-ram-256-gb-ssd-windows-10-pro-laptop-p-786282494",
        "computer_id": 1300
      },
      {
        "id": 1417,
        "computer": 1301,
        "score": 0.0,
        "price": 25975.19,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1301,
          "model_number": "20TAS0CXTA41",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 208,
          "disk": 1,
          "memory": 3,
          "os": 1,
          "screen_size": "14\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-thinkpad-e14-gen-2-20tas0cxta41-intel-core-i7-1165g7-14-16-gb-ram-512-gb-ssd-mx450-w11-pro-fhd-tasinabilir-bilgisayar-p-786282351",
        "computer_id": 1301
      },
      {
        "id": 1418,
        "computer": 1302,
        "score": 0.0,
        "price": 15459.0,
        "website": "Teknosa",
        "image": "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/786282537/786282537_0_MC/65912921.png",
        "post_image": null,
        "computer_data": {
          "id": 1302,
          "model_number": "6Z256EA",
          "serial_number": "3216556461",
          "brand": 7,
          "cpu": 210,
          "disk": 1,
          "memory": 1,
          "os": 2,
          "screen_size": "17.3\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 7,
            "name": "HP"
          },
          "cpu_data": {
            "id": 210,
            "cpu_type": "Intel Core i5",
            "cpu_generation": "Yok"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 1,
            "memory_size": "8GB"
          }
        },
        "url": "https://www.teknosa.com/hp-17cn2004nt-6z256ea-intel-core-i51235u-173-8-gb-ram-512-gb-ssd-fhd-freedos-tasinabilir-bilgisayar-p-786282537",
        "computer_id": 1302
      },
      {
        "id": 1419,
        "computer": 1303,
        "score": 0.0,
        "price": 20351.61,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1303,
          "model_number": "82NX00ECTXA33",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 208,
          "disk": 1,
          "memory": 1,
          "os": 1,
          "screen_size": "17.3\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 1,
            "memory_size": "8GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-v17-g2-itl-82nx00ectxa33-intel-core-i7-1165g7-173-8-gb-ram-512-gb-ssd-2gb-mx350-fhd-w11pro-tasinabilir-bilgisayar-p-786282379",
        "computer_id": 1303
      },
      {
        "id": 1420,
        "computer": 1304,
        "score": 0.0,
        "price": 15099.99,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1304,
          "model_number": "82KB00GQTX-16",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 217,
          "disk": 2,
          "memory": 3,
          "os": 2,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 217,
            "cpu_type": "Intel Core i5",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 2,
            "disk_type": "SSD",
            "disk_size": "256GB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-v15-g2-itl-82kb00gqtx16-intel-core-i5-1135g7-156-16-gb-ram-256-gb-ssd-mx350-fhd-freedos-tasinabilir-bilgisayar-p-786282625",
        "computer_id": 1304
      },
      {
        "id": 1421,
        "computer": 1305,
        "score": 0.0,
        "price": 49999.0,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1305,
          "model_number": "Z15GM1PVG161-TQ6",
          "serial_number": "3216556461",
          "brand": 4,
          "cpu": 272,
          "disk": 4,
          "memory": 3,
          "os": 3,
          "screen_size": "14\"",
          "os_data": {
            "id": 3,
            "name": "MacOS"
          },
          "brand_data": {
            "id": 4,
            "name": "APPLE"
          },
          "cpu_data": {
            "id": 272,
            "cpu_type": "Apple M1 Pro",
            "cpu_generation": "Yok"
          },
          "disk_data": {
            "id": 4,
            "disk_type": "SSD",
            "disk_size": "1TB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/apple-macbook-pro-m1-pro-10c-cpu-14c-gpu-14-16-gb-ram-1-tb-ssd-qhd-macos-tasinabilir-bilgisayar-z15gm1pvg161tq6-p-786282311",
        "computer_id": 1305
      },
      {
        "id": 1422,
        "computer": 1306,
        "score": 0.0,
        "price": 20248.55,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1306,
          "model_number": "B1500CEAE-BQ2664AB10",
          "serial_number": "3216556461",
          "brand": 1,
          "cpu": 208,
          "disk": 1,
          "memory": 10,
          "os": 2,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 1,
            "name": "ASUS"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 10,
            "memory_size": "40GB"
          }
        },
        "url": "https://www.teknosa.com/asus-expertbook-b1500ceaebq2664ab10-intel-core-i7-1165g7-156-40-gb-ram-512-gb-ssd-freedos-tasinabilir-bilgisayar-p-786282573",
        "computer_id": 1306
      },
      {
        "id": 1423,
        "computer": 1307,
        "score": 0.0,
        "price": 23333.92,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1307,
          "model_number": "B1500CEAE-BQ2664AB40",
          "serial_number": "3216556461",
          "brand": 1,
          "cpu": 208,
          "disk": 9,
          "memory": 10,
          "os": 1,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 1,
            "name": "ASUS"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 9,
            "disk_type": "SSD",
            "disk_size": "2TB"
          },
          "memory_data": {
            "id": 10,
            "memory_size": "40GB"
          }
        },
        "url": "https://www.teknosa.com/asus-expertbook-b1500ceaebq2664ab40-intel-core-i7-1165g7-156-40-gb-ram-2-tb-ssd-w10home-tasinabilir-bilgisayar-p-786282578",
        "computer_id": 1307
      },
      {
        "id": 1424,
        "computer": 1308,
        "score": 0.0,
        "price": 18839.0,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1308,
          "model_number": "6S742EA",
          "serial_number": "3216556461",
          "brand": 7,
          "cpu": 228,
          "disk": 1,
          "memory": 3,
          "os": 2,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 7,
            "name": "HP"
          },
          "cpu_data": {
            "id": 228,
            "cpu_type": "AMD Ryzen 7",
            "cpu_generation": "Yok"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/hp-elitebook-655-g9-6s742ea-amd-ryzen-7-5825u-156-16-gb-ram-512-gb-ssd-fhd-freedos-tasinabilir-bilgisayar-p-786282613",
        "computer_id": 1308
      },
      {
        "id": 1425,
        "computer": 1309,
        "score": 0.0,
        "price": 26910.15,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1309,
          "model_number": "20TAS0CXTA44",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 208,
          "disk": 4,
          "memory": 3,
          "os": 1,
          "screen_size": "14\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 4,
            "disk_type": "SSD",
            "disk_size": "1TB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-thinkpad-e14-gen-2-20tas0cxta44-intel-core-i7-1165g7-14-16-gb-ram-1-tb-ssd-mx450-w11-pro-fhd-tasinabilir-bilgisayar-p-786282354",
        "computer_id": 1309
      },
      {
        "id": 1426,
        "computer": 1310,
        "score": 0.0,
        "price": 23754.65,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1310,
          "model_number": "20TAS0CXTA44",
          "serial_number": "3216556461",
          "brand": 6,
          "cpu": 208,
          "disk": 9,
          "memory": 8,
          "os": 1,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 6,
            "name": "DELL"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 9,
            "disk_type": "SSD",
            "disk_size": "2TB"
          },
          "memory_data": {
            "id": 8,
            "memory_size": "20GB"
          }
        },
        "url": "https://www.teknosa.com/dell-latitude-3520-n027l3520158gemau94-intel-core-i7-1165g7-156-fhd-20-gb-ram-2-tb-ssd-windows-11-pro-laptop-p-786282500",
        "computer_id": 1310
      },
      {
        "id": 1427,
        "computer": 1311,
        "score": 0.0,
        "price": 14299.99,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1311,
          "model_number": "82KB00GQTX",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 217,
          "disk": 2,
          "memory": 1,
          "os": 2,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 217,
            "cpu_type": "Intel Core i5",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 2,
            "disk_type": "SSD",
            "disk_size": "256GB"
          },
          "memory_data": {
            "id": 1,
            "memory_size": "8GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-v15-g2-itl-82kb00gqtx-intel-core-i5-11357-156-8-gb-ram-256-gb-ssd-mx350-fhd-freedos-tasinabilir-bilgisayar-p-786282626",
        "computer_id": 1311
      },
      {
        "id": 1428,
        "computer": 1312,
        "score": 0.0,
        "price": 11599.0,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1312,
          "model_number": "4P3K9ES01",
          "serial_number": "3216556461",
          "brand": 7,
          "cpu": 225,
          "disk": 1,
          "memory": 1,
          "os": 1,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 1,
            "name": "Windows"
          },
          "brand_data": {
            "id": 7,
            "name": "HP"
          },
          "cpu_data": {
            "id": 225,
            "cpu_type": "AMD Ryzen 5",
            "cpu_generation": "AMD Ryzen 5.Nesil"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 1,
            "memory_size": "8GB"
          }
        },
        "url": "https://www.teknosa.com/hp-255-g8-4p3k9es01-amd-ryzen-5-5500u-156-8-gb-ram-512-gb-ssd-fhd-w10h-tasinabilir-bilgisayar-p-786282290",
        "computer_id": 1312
      },
      {
        "id": 1429,
        "computer": 1313,
        "score": 0.0,
        "price": 25040.23,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1313,
          "model_number": "20TAS0CXTA5",
          "serial_number": "3216556461",
          "brand": 3,
          "cpu": 208,
          "disk": 1,
          "memory": 3,
          "os": 2,
          "screen_size": "14\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 3,
            "name": "LENOVO"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 1,
            "disk_type": "SSD",
            "disk_size": "512GB"
          },
          "memory_data": {
            "id": 3,
            "memory_size": "16GB"
          }
        },
        "url": "https://www.teknosa.com/lenovo-thinkpad-e14-gen-2-20tas0cxta5-intel-core-i7-1165g7-14-16-gb-ram-512-gb-ssd-mx450-fhd-freedos-tasinabilir-bilgisayar-p-786282333",
        "computer_id": 1313
      },
      {
        "id": 1430,
        "computer": 1314,
        "score": 0.0,
        "price": 20879.65,
        "website": "Teknosa",
        "image": "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
        "post_image": null,
        "computer_data": {
          "id": 1314,
          "model_number": "20TAS0CXTA5",
          "serial_number": "3216556461",
          "brand": 6,
          "cpu": 208,
          "disk": 4,
          "memory": 5,
          "os": 2,
          "screen_size": "15.6\"",
          "os_data": {
            "id": 2,
            "name": "Freedos"
          },
          "brand_data": {
            "id": 6,
            "name": "DELL"
          },
          "cpu_data": {
            "id": 208,
            "cpu_type": "Intel Core i7",
            "cpu_generation": "Intel Core 11.Nesil"
          },
          "disk_data": {
            "id": 4,
            "disk_type": "SSD",
            "disk_size": "1TB"
          },
          "memory_data": {
            "id": 5,
            "memory_size": "12GB"
          }
        },
        "url": "https://www.teknosa.com/dell-latitude-3520-n027l3520158gemau14-intel-core-i7-1165g7-156-fhd-12-gb-ram-1-tb-ssd-freedos-laptop-p-786282495",
        "computer_id": 1314
      },

    ],
  })
}
</script>

<style scoped>
 .tableHead{
   width: 100%;
 }
 .productImage{
   border-radius: 10px;
   object-fit: cover;
   object-position: center;
 }
 .price-item{
   background-color: #159b44;
   color: white;
   padding:4px 4px;
   margin-right: 16px;
   border-radius: 10px;
 }

 .price-text{
   font-size: ;
 }
</style>