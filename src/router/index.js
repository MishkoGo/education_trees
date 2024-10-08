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
      name: '',
      component: () => import('../views/MainLanding.vue'),
      meta: {
        breadcrumbs: [{ text: 'Главная', to: '/' }]
      }
    },
    {
      path: '/library',
      name: '',
      component: () => import('../views/MainLibrary.vue'),
      meta: {
        breadcrumbs: [{ text: 'Мои библиотеки', to: '/library' }]
      }
    },
    {
      path: '/add',
      name: '> Добавить библиотеку',
      component: () => import('../views/AddLibrary.vue'),
      meta: {
        breadcrumbs: [{ text: 'Мои библиотеки', to: '/library' }]
      }
    },
    {
      path: '/details',
      name: '> Название библиотеки',
      component: () => import('../views/DetailsLibrary.vue'),
      meta: {
        breadcrumbs: [{ text: 'Мои библиотеки', to: '/library' }]
      }
    }
  ]
});


export default router
