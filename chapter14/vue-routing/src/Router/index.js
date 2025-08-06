import { createWebHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home/HomePage.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../components/Home/Contact.vue')
        },
        {
            path: '/products',
            name: 'product-list',
            component: () => import('../components/Product/ProductList.vue')
        },
        {
            path: '/products/:id',
            name: 'product-detail',
            component: () => import('../components/Product/ProductDetail.vue')
        }
    ]
})

export default router;