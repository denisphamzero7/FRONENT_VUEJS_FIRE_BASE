import { createWebHistory, createRouter } from 'vue-router'

// Route guards
const isAdmin = (to, from, next) => {
    console.log('isAdmin guard')
    next()
}

const isAuthenticated = (to, from, next) => {
    console.log('isAuthenticated guard')
    next()
}

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active btn btn-primary',
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
            beforeEnter: [isAdmin, isAuthenticated],
            component: () => import('../components/Product/ProductList.vue')
        },
        {
            path: '/products/:id',
            name: 'product-detail',
            component: () => import('../components/Product/ProductDetail.vue')
        },
        {
            path: '/old-home',
            redirect: { name: 'home' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../components/Layout/NotFound.vue')
        },
        {
            path: '/no-access',
            name: 'no-access',
            component: () => import('../components/Layout/NoAcccess.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Auhthentication/Login.vue')
        }
    ]
})
// Global navigation guard
router.beforeEach((to, from) => {
    console.log('Navigation guard triggered:', to, from)
    // kiểm tra user đã đăng nhập 
    // nếu chưa thì chuyển đến đăng nhập
    // nếu đã đăng nhập thì chuyển đến trang đó
    // nếu không có quyền thì chuyển đến trang không có quyền
    const isAuthenticated = true
    if(!isAuthenticated && to.name !== 'login'){
        console.log('Redirecting to login')
        return {name: 'login'}
    }
    console.log('Navigation allowed')
    return true
})

export default router;