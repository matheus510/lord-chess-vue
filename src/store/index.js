import Vue from 'vue'
import Vuex from 'vuex'
import gameLog from './modules/gameLog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    gameLog
  },
  strict: debug
})
