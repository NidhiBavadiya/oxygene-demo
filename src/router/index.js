import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/view/ContactData.vue'),
  },
]
  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
  })

export default router
