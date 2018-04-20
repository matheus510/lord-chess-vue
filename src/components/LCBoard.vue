<template>
  <div>
    <div id="board">
      AGORA O TURNO É DO {{ this.turnPlayer }}<br />
      TURNO {{ this.turnNumber }}
      <div>
        {{ this.getGameLog }}
      </div>
      <div>
        <div class="board">
          <div class="row" v-for="row in 8" v-bind:key="row">
            <div class="square" v-for="square in boardRow(row)" v-bind:key="square.id" @click="selectPiece(square)" v-bind:class="{'possible': square.possible === true}">
              <drag :transfer-data="square" :id="square.id" v-if="square.piece"  @dragstart="startMove(square, ...arguments)">
                <drop @drop="endMove(square, ...arguments)">
                  <img :src="`../../static/${square.piece.player}/${square.piece.class}/${square.piece.player}.png`"/>
                </drop>
              </drag>
              <drop class="empty" :id="square.id" v-if="!square.piece" @drop="endMove(square, ...arguments)">
              </drop>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import movementCheck from './pieceRuleHandler'

export default {
  name: 'LCBoard',
  data () {
    return {
      boardMap: [
        {
          id: 1,
          y: 1,
          x: 1,
          positionString: '1a',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 2,
          y: 1,
          x: 2,
          positionString: '1b',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 3,
          y: 1,
          x: 3,
          positionString: '1c',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 4,
          y: 1,
          x: 4,
          positionString: '1d',
          piece: {
            player: 1,
            class: 'queen'
          }
        },
        {
          id: 5,
          y: 1,
          x: 5,
          positionString: '1e',
          piece: {
            player: 1,
            class: 'king'
          }
        },
        {
          id: 6,
          y: 1,
          x: 6,
          positionString: '1f',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 7,
          y: 1,
          x: 7,
          positionString: '1g',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 8,
          y: 1,
          x: 8,
          positionString: '1h',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 9,
          y: 2,
          x: 1,
          positionString: '2a',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 10,
          y: 2,
          x: 2,
          positionString: '2b',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 11,
          y: 2,
          x: 3,
          positionString: '2c',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 12,
          y: 2,
          x: 4,
          positionString: '2d',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 13,
          y: 2,
          x: 5,
          positionString: '2e',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 14,
          y: 2,
          x: 6,
          positionString: '2f',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 15,
          y: 2,
          x: 7,
          positionString: '2g',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 16,
          y: 2,
          x: 8,
          positionString: '2h',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 17,
          y: 3,
          x: 1,
          positionString: '3a'
        },
        {
          id: 18,
          y: 3,
          x: 2,
          positionString: '3b'
        },
        {
          id: 19,
          y: 3,
          x: 3,
          positionString: '3c'
        },
        {
          id: 20,
          y: 3,
          x: 4,
          positionString: '3d'
        },
        {
          id: 21,
          y: 3,
          x: 5,
          positionString: '3e'
        },
        {
          id: 22,
          y: 3,
          x: 6,
          positionString: '3f'
        },
        {
          id: 23,
          y: 3,
          x: 7,
          positionString: '3g'
        },
        {
          id: 24,
          y: 3,
          x: 8,
          positionString: '3h'
        },
        {
          id: 25,
          y: 4,
          x: 1,
          positionString: '4a'
        },
        {
          id: 26,
          y: 4,
          x: 2,
          positionString: '4b'
        },
        {
          id: 27,
          y: 4,
          x: 3,
          positionString: '4c'
        },
        {
          id: 28,
          y: 4,
          x: 4,
          positionString: '4d'
        },
        {
          id: 29,
          y: 4,
          x: 5,
          positionString: '4e'
        },
        {
          id: 30,
          y: 4,
          x: 6,
          positionString: '4f'
        },
        {
          id: 31,
          y: 4,
          x: 7,
          positionString: '4g'
        },
        {
          id: 32,
          y: 4,
          x: 8,
          positionString: '4h'
        },
        {
          id: 33,
          y: 5,
          x: 1,
          positionString: '5a'
        },
        {
          id: 34,
          y: 5,
          x: 2,
          positionString: '5b'
        },
        {
          id: 35,
          y: 5,
          x: 3,
          positionString: '5c'
        },
        {
          id: 36,
          y: 5,
          x: 4,
          positionString: '5d'
        },
        {
          id: 37,
          y: 5,
          x: 5,
          positionString: '5e'
        },
        {
          id: 38,
          y: 5,
          x: 6,
          positionString: '5f'
        },
        {
          id: 39,
          y: 5,
          x: 7,
          positionString: '5g'
        },
        {
          id: 40,
          y: 5,
          x: 8,
          positionString: '5h'
        },
        {
          id: 41,
          y: 6,
          x: 1,
          positionString: '6a'
        },
        {
          id: 42,
          y: 6,
          x: 2,
          positionString: '6b'
        },
        {
          id: 43,
          y: 6,
          x: 3,
          positionString: '6c'
        },
        {
          id: 44,
          y: 6,
          x: 4,
          positionString: '6d'
        },
        {
          id: 45,
          y: 6,
          x: 5,
          positionString: '6e'
        },
        {
          id: 46,
          y: 6,
          x: 6,
          positionString: '6f'
        },
        {
          id: 47,
          y: 6,
          x: 7,
          positionString: '6g'
        },
        {
          id: 48,
          y: 6,
          x: 8,
          positionString: '6h'
        },
        {
          id: 49,
          y: 7,
          x: 1,
          positionString: '7a',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 50,
          y: 7,
          x: 2,
          positionString: '7b',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 51,
          y: 7,
          x: 3,
          positionString: '7c',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 52,
          y: 7,
          x: 4,
          positionString: '7d',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 53,
          y: 7,
          x: 5,
          positionString: '7e',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 54,
          y: 7,
          x: 6,
          positionString: '7f',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 55,
          y: 7,
          x: 7,
          positionString: '7g',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 56,
          y: 7,
          x: 8,
          positionString: '7h',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 57,
          y: 8,
          x: 1,
          positionString: '8a',
          piece: {
            player: 2,
            class: 'rook'
          }
        },
        {
          id: 58,
          y: 8,
          x: 2,
          positionString: '8b',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 59,
          y: 8,
          x: 3,
          positionString: '8c',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 60,
          y: 8,
          x: 4,
          positionString: '8d',
          piece: {
            player: 2,
            class: 'king'
          }
        },
        {
          id: 61,
          y: 8,
          x: 5,
          positionString: '8e',
          piece: {
            player: 2,
            class: 'queen'
          }
        },
        {
          id: 62,
          y: 8,
          x: 6,
          positionString: '8f',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 63,
          y: 8,
          x: 7,
          positionString: '8g',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 64,
          y: 8,
          x: 8,
          positionString: '8h',
          piece: {
            player: 2,
            class: 'rook'
          }
        }
      ],
      selectedTile: null,
      turnPlayer: 1,
      turnNumber: 1,
      turnInfo: {
        from: '',
        to: '',
        isCapture: false,
        isCheck: false
      },
      possibleTiles: []
    }
  },
  computed: {
    ...mapGetters([
      'getGameLog',
      'getCurrentBoard'
    ])
  },
  methods: {
    movementCheck,
    selectPiece (square) {
      this.selectedTile = square
      if (this.selectedTile.piece) {
        let movementInfo = {
          class: this.selectedTile.piece.class,
          x: this.selectedTile.x,
          y: this.selectedTile.y,
          currentBoardMap: this.boardMap,
          player: this.turnPlayer
        }

        this.possibleTiles = this.movementCheck(movementInfo)
        this.colorTiles(this.possibleTiles)
      }
    },
    ...mapActions([
      'turnFinished'
    ]),
    startMove (square) {
      this.turnInfo.from = square
    },
    endMove (square) {
      this.turnInfo.to = square
      this.endTurn()
    },
    endTurn () {
      let previousSquare = this.turnInfo.from
      let intendedSquare = this.turnInfo.to
      let isValidMovement = this.possibleTiles.includes(intendedSquare)
      if (isValidMovement) {
        this.boardMap = this.boardMap.map(square => {
          if (square.id === intendedSquare.id) {
            square.piece = previousSquare.piece
            previousSquare.piece = undefined
          }
          this.selectedTile = undefined
          this.colorTiles([])
          return square
        })
      } else {
        alert('movimento invalido')
      }

      let stateUpdateObj = {
        currentBoardMap: this.boardMap,
        turnInfo: {
          player: this.turnPlayer,
          movement: `${previousSquare.positionString}-${intendedSquare.positionString}`,
          check: this.turnInfo.isCheck
        }
      }

      this.turnPlayer === 1 ? this.turnPlayer = 2 : this.turnPlayer = 1
      this.turnNumber++

      this.turnFinished(stateUpdateObj).then(() => this.$forceUpdate())
    },
    colorTiles (possibleTiles) {
      this.boardMap.map(square => {
        square.possible = false
      })
      possibleTiles.map(possibleSquare => {
        this.boardMap.map(square => {
          if (possibleSquare.id === square.id) {
            square.possible = true
          }
        })
      })
      this.$forceUpdate()
    },
    boardRow (row) {
      return this.boardMap.filter((square) => {
        let squareRow = square.y
        if (squareRow === (row)) {
          return square
        }
      })
    }
  }
}
</script>

<style>
.board {
  width: 450px;
  height: fit-content;
}
.board .row .square {
  display: inline-block;
  height: 100%;
  min-height: 50px;
  width: 12.5%;
}
.board .row .square img {
  width: 50px;
}
.empty {
  width: 50px !important;
  height: 50px !important;
}
.possible {
  background-color: rgba(100,100,100,0.9) !important;
}
.board .row:nth-child(odd) .square:nth-child(even) {
  background: #3ba0d9;
  color: white;
}
.board .row:nth-child(even) .square:nth-child(odd) {
  background: #3ba0d9;
  color: white;
}
</style>
