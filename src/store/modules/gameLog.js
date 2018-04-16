const gameLog = {
  state: {
    currentBoardMap: [],
    movementLog: [],
    playersLog: {
      playerOne: [],
      playerTwo: [],
      gameStart: false
    }
  },
  mutations: {
    gameStart (state, payload) {
      state.playersLog.playerOne = payload.playerOne
      state.playersLog.playerTwo = payload.playerTwo
      state.playersLog.gameStart = true
    },
    turnFinished (state, payload) {
      state.movementLog.push(payload.turnInfo.movement)
      state.currentBoardMap = payload.currentBoardMap
    }
  },
  actions: {
    gameStart ({ commit }, payload) {
      commit('gameStart', payload)
    },
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
