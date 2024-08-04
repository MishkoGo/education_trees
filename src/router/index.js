import { createRouter, createWebHistory } from 'vue-router'
import UIKitDemo from '../views/UIKitDemo.vue'
import MainLanding from '../views/MainLanding.vue'

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
    }
  ]
})

export default router
