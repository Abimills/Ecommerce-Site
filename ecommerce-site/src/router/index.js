import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutSection.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/ContactSection.vue')
  },

  {
    path: '/admin/add-products',
    name: 'addProduct',
    component: () => import('../components/AddProductContainer.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../components/NavigationPayment.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/NavigationLoginPage.vue')
  },
  {
    path: '/give-review',
    name: 'give-review',
    component: () => import('../components/NavigationGiveReview.vue')
  },
  {
    path: '/all-review',
    name: 'all-review',
    component: () => import('../components/NavigationReview.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/NavigationRegister.vue')
  },
  {
    path: '/admin/profile',
    name: 'profile',
    component: () => import('../components/AdminProfile.vue')
  },
  {
    path: '/admin/view-products',
    name: 'view-products',
    component: () => import('../components/ViewProducts.vue')
  },
  {
    path: '/brand-products',
    name: 'brand-products',
    component: () => import('../components/NewProducts.vue')
  },
  {
    path: '/admin/view-users',
    name: 'view-users',
    component: () => import('../components/ViewUser.vue')
  },
  {
    path: '/admin/category',
    name: 'category',
    component: () => import('../components/Categories.vue')
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NavigationContainer.vue')
  },
 
  {
    path: '/wishlist',
    name: 'wishlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Wishlist.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/NavigationCart.vue')
  },
  {
    path:"/product/:id",
    name:"product",
    component: () => import(/* webpackChunkName: "about" */ '../components/NavigationItem.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
