const gameLog = {
  state: {
    currentBoardMap: [],
    movementLog: [],
    playersLog: {
      1: [],
      2: []
    }
  },
  mutations: {
    turnFinished (state, payload) {
      state.movementLog.push(payload.turnInfo.movement)
      state.currentBoardMap = payload.currentBoardMap
    }
  },
  actions: {
    turnFinished ({ commit }, payload) {
      commit('turnFinished', payload)
    }
  },
  getters: {
    getGameLog (state) {
      return state.movementLog
    },
    getCurrentBoard (state) {
      return state.currentBoardMap
    }
  }
}

export default gameLog
