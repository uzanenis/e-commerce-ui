import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemList from "@/components/ItemList";
import Login from "@/components/Login";
import ProductDetail from "@/components/ProductDetail";
import Layout from "@/components/Layout";

Vue.use(VueRouter)

const routes = [
  // eslint-disable-next-line vue/multi-word-component-names
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/shop',
        name: 'shop',
        component: ItemList
      },
      {
        path: '/product',
        name: 'product',
        component: ProductDetail
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
