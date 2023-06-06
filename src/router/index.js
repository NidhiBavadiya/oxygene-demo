import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/view/contacts/ContactData.vue'),
  },
  {
    path: '/contact/leave',
    name: 'leave',
    component: () => import('@/view/contacts/AllLeave.vue'),
  },
  {
    path: '/contact/sign',
    name: 'signature',
    component: () => import('@/view/contacts/SignatureSpecimens.vue'),
  },
  {
    path: '/contact/instructor',
    name: 'instructor',
    component: () => import('@/view/contacts/InstructorBlocks.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('@/view/reports/CashReport.vue'),
  },
]
  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
  })

export default router
