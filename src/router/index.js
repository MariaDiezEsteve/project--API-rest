import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Fetch',
    component: () => import('../views/FetchView.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import( '../views/AxiosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
