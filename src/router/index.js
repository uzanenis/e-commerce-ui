import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ItemList from "@/views/Product/ProductView";
import Login from "@/views/Logins/Login";
import ProductDetail from "@/components/Product/ProductDetail";
import HomeView from "@/views/HomeView";
import EcommerceView from "@/views/Ecommerce/EcommerceView";
import EcommerceHomeView from "@/views/Ecommerce/EcommerceHomeView";
import EcommerceProductEditView from "@/views/Ecommerce/EcommerceProductEditView";
import AdminLogin from "@/views/Logins/AdminLogin";
import SearchedProducts from "@/views/Product/SearchedProducts";

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
        path: '/ecommerce/login',
        name: 'ecommerce-admin',
        component: AdminLogin
    },
    {
        path: '/ecommerce/products',
        name: 'ecommerce-product',
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
        component: ProductDetail
    },
    {
        path: '/search',
        name: 'search',
        component: SearchedProducts
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
