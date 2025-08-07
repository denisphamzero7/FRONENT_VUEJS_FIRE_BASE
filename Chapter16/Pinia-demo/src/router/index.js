
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Info from '@/components/Infor.vue'

const routes = [
  { path: '/',      name: 'Home', component: Home },
  { path: '/infor', name: 'Info', component: Info }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
