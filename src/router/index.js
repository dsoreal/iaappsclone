import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/list.vue'
import DetailsPage from '../views/detailspage.vue'
import Add from '../views/add.vue'
import AppsHome from '../views/appshome.vue'
import Edit from '../views/edit.vue'

const routes = [
  {
    path: '/corp_assoc_announcement/list',
    name: 'list',
    component: List
  },
  {
    path: '/corp_assoc_announcement/details/:id',
    name: 'details',
    component: DetailsPage,
    props: true
  },
  {
    path: '/corp_assoc_announcement/add',
    name: 'add',
    component: Add
  },
  {
    path: '/',
    name: 'appshome',
    component: AppsHome
  },
  {
    path: '/corp_assoc_announcement/:id/edit',
    name: 'edit',
    component: Edit,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
