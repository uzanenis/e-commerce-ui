import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ItemList from "@/views/ProductView";
import Login from "@/components/Login";
import ProductDetail from "@/components/ProductDetail";
import HomeView from "@/views/HomeView";
import EcommerceView from "@/views/EcommerceView";
import EcommerceHomeView from "@/views/EcommerceHomeView";
import EcommerceProductEditView from "@/views/EcommerceProductEditView";
import ecommerceProductDetailView from "@/views/EcommerceProductDetailView";

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
        path: '/shop',
        name: 'itemlist',
        component: ItemList
    },
    {
        path: '/product/:id',
        name: 'productdetail',
        component: ProductDetail
    },
    {
        path: '/ecommerce',
        name: 'ecommerce',
        component: EcommerceHomeView
    },
    {
        path: '/ecommerce/products',
        name: 'ecommerce',
        component: EcommerceView
    },
    {
        path: '/ecommerce/product/edit',
        name: 'ecommerceProductEditView',
        component: EcommerceProductEditView
    },
    {
        path: '/ecommerce/product/:id',
        name: 'ecommerceProductDetailView',
        component: ecommerceProductDetailView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
