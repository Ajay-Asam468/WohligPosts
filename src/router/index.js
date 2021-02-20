import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue'
import Details from "/src/pages/Details.vue"

const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/home/:id',
    name:'Details',
    component:Details
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
