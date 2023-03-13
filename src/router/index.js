import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'FetchView',
    component: () => import('../views/FetchView.vue')
  },
  {
    path: '/axios',
    name: 'AxiosView',
    component: () => import( '../views/AxiosView.vue')
  },
  {
    path: '/updateFetch',
    name: 'UpdateDataFetch',
    component: () => import( '../views/UpdateDataFetchView.vue')
  },
  {
    path: '/updateAxios',
    name: 'UpdateDataAxios',
    component: () => import( '../views/UpdateDataAxiosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

