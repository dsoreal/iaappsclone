import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/list.vue'
import Details from '../views/details.vue'
import Add from '../views/add.vue'
import AppsHome from '../views/appshome.vue'

const routes = [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/',
    name: 'appshome',
    component: AppsHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
