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
import { useAuthStore } from '@/stores/authSore'
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
      component:ContactUs,
       beforeEnter:[isAuthenticated]
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
      component:ProductList,
       beforeEnter:[isAdmin]
    },
    {
      path:'/product-create',
      name:APP_ROUTE_NAMES.PRODUCT_CREATE,
      component:ProductUpsert,
       beforeEnter:[isAdmin]
    },
    {
      path:'/product-edit/:id',
      name:APP_ROUTE_NAMES.PRODUCT_UPDATE,
      component:ProductUpsert,
      beforeEnter:[isAdmin]
    },
  ],
})

router.beforeEach(async(toString,from)=>{
  const authStore = useAuthStore()
  if(!authStore.initialize.value){
    await authStore.initializeAuth()
  }
})
function isAdmin(){
  const authstore = useAuthStore()
  console.log("auth store:",authstore.isAuthenticated)
  if(authstore.isAuthenticated){
    if(authstore.isAdmin){
      return true 
    }else{
      return{name: APP_ROUTE_NAMES.ACCESS_DENIED}
    }
  }else{
    return{name:APP_ROUTE_NAMES.SIGN_IN}
  }
}
function isAuthenticated(){
  const authstore = useAuthStore()
  if(authstore.isAuthenticated){
  return true
  }else{
    return{name:APP_ROUTE_NAMES.SIGN_IN}
  }
}

export default router
