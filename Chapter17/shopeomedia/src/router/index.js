import { createRouter, createWebHistory } from 'vue-router'
import AccessDenied from '@/views/auth/AccessDenied.vue'
import NotFound from '@/views/auth/NotFound.vue'
import SignIn from '@/views/auth/SignIn.vue'
import SignUp from '@/views/auth/SignUp.vue'
import ContactUs from '@/views/home/ContactUs.vue'
import ProductList from '@/views/product/ProductList.vue'
import ProductUpsert from '@/views/product/ProductUpsert.vue'
import { APP_ROUTE_NAMES } from '@/constants/routeName'
import Home from '@/views/home/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:APP_ROUTE_NAMES.HOME,
      component:Home
    },
      {
      path:'/sign-in',
      name:APP_ROUTE_NAMES.SIGN_IN,
      component:SignIn
    },
      {
      path:'/sign-up',
      name:APP_ROUTE_NAMES.SIGN_UP,
      component:SignUp
    },
      {
      path:'/contact-up',
      name:APP_ROUTE_NAMES.CONTACT_US,
      component:ContactUs
    },
      {
      path:'/access-denied',
      name:APP_ROUTE_NAMES.ACCESS_DENIED,
      component:AccessDenied
    },
      {
      path:'/not-found',
      name:APP_ROUTE_NAMES.NOT_FOUND,
      component:NotFound
    },
      {
      path:'/product-list',
      name:APP_ROUTE_NAMES.PRODUCT_LIST,
      component:ProductList
    },
    {
      path:'/product-create',
      name:APP_ROUTE_NAMES.PRODUCT_CREATE,
      component:ProductUpsert
    },
    {
      path:'/product-edit/:id',
      name:APP_ROUTE_NAMES.PRODUCT_UPDATE,
      component:ProductUpsert
    },
  ],
})

export default router
