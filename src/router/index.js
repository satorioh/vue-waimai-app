import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Rate from '@/pages/rate/Rate'
import Seller from '@/pages/seller/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
