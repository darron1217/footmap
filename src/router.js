import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: function () { 
        return import('./views/Admin.vue')
      },
    },
    {
      path: '/admintruck',
      name: 'adminTruck',
      component: function () {
        return import('./views/AdminTruck.vue')
      },
    },
    {
      path: '/admintruck/:id',
      name: 'adminTruckDetail',
      props: true,
      component: function () {
        return import('./views/AdminTruckDetail.vue')
      },
    },
  ]
})
