import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import LCBoard from '@/components/LCBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'Game',
      component: LCBoard
    }
  ]
})
