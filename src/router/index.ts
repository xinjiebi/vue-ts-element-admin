import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'dashboard',
    component: HomeView,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          isShow: true,
          title: 'Dashboard',
          icon: 'Odometer'
        },
        component: () => import('@/views/DashboardView.vue')
      },
      {
        path: '/tableList',
        name: 'tableList',
        meta: {
          isShow: true,
          title: 'Table List',
          icon: 'Odometer'
        },
        component: () => import('@/views/TableListView.vue')
      },
      {
        path: '/operateList',
        name: 'operateList',
        meta: {
          isShow: true,
          title: 'Operate List',
          icon: 'Odometer'
        },
        component: () => import('@/views/OperateListView.vue')
      }, 
      {
        path: '/formList',
        name: 'formList',
        meta: {
          isShow: true,
          title: 'Form List',
          icon: 'Odometer'
        },
        component: () => import('@/views/FormListView.vue')
      },
      {
        path: '/itemList',
        name: 'itemList',
        meta: {
          isShow: true,
          title: 'Item List',
          icon: 'Odometer'
        },
        component: () => import('@/views/ItemListView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
