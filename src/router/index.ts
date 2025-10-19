import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AccountsView from '../views/AccountsView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: AccountsView
  }
]

const router = new VueRouter({
  routes
})

export default router
