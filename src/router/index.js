import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ItemList from "@/views/ProductView";
import Login from "@/components/Login";
import ProductDetail from "@/components/ProductDetail";
import HomeView from "@/views/HomeView";

Vue.use(VueRouter)

const routes = [
    // eslint-disable-next-line vue/multi-word-component-names
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/shop', // ne var diye bakıyorum
        name: 'itemlist',
        component: ItemList
    },
    {
        path: '/product/:id',
        name: 'productdetail',
        component: ProductDetail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
