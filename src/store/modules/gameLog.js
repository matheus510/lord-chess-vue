const gameLog = {
  state: {
    movementLog: [],
    playersLog: {
      1: [],
      2: []
    }
  },
  mutations: {
    newMovement (state, payload) {
      state.gameLog.movementLog.push(payload.movementString)
    }
  },
  actions: {
    newMovement ({ commit }) {
      commit('newMovement')
    }
  },
  getters: {
    getGameLog (state) {
      return state.movementLog
    }
  }
}

export default {
  gameLog
}
