import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('../views/Notes')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
