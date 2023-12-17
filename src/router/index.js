import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/movie',
      name:'movie',
      component: ()=> import('@/views/Movie.vue')
    },
    {
      path:'/tv',
      name:'tv',
      component: ()=> import('@/views/Tv.vue')
    },
    {
      path:'/search',
      name:'search',
      component: ()=> import('@/views/Search.vue')
    },
  ]
})

export default router
