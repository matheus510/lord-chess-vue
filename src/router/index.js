import Vue from 'vue'
import Router from 'vue-router'
import LCBoard from '@/components/LCBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LCBoard',
      component: LCBoard
    }
  ]
})
