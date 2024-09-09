import { createRouter, createWebHistory } from 'vue-router'
import UIKitDemo from '../views/UIKitDemo.vue'
import MainLanding from '../views/MainLanding.vue'
import MainLibrary from '../views/MainLibrary.vue'
import AddLibrary from '../views/AddLibrary.vue'
import DetailsLibrary from '@/views/DetailsLibrary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ui-kit',
      name: 'ui-kit',
      component: () => import('../views/UIKitDemo.vue')
    },
    {
      path: '/',
      name: 'root',
      component: () => import('../views/MainLanding.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../views/MainLibrary.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddLibrary.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/DetailsLibrary.vue')
    }
  ]
})

export default router
