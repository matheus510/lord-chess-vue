<template>
  <div>
    <div id="board">
      <div>
        <div class="board">
          <div class="row" v-for="row in 8" v-bind:key="row">
            <div class="square" v-for="square in boardRow(row)" v-bind:key="square.id">
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

export default {
  name: 'LCBoard',
  data () {
    return {
      boardMap: [
        {
          id: 1,
          y: '1',
          x: 'a',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 2,
          y: '1',
          x: 'b',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 3,
          y: '1',
          x: 'c',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 4,
          y: '1',
          x: 'd',
          piece: {
            player: 1,
            class: 'queen'
          }
        },
        {
          id: 5,
          y: '1',
          x: 'e',
          piece: {
            player: 1,
            class: 'king'
          }
        },
        {
          id: 6,
          y: '1',
          x: 'f',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 7,
          y: '1',
          x: 'g',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 8,
          y: '1',
          x: 'h',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 9,
          y: '2',
          x: 'a',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 10,
          y: '2',
          x: 'b',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 11,
          y: '2',
          x: 'c',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 12,
          y: '2',
          x: 'd',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 13,
          y: '2',
          x: 'e',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 14,
          y: '2',
          x: 'f',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 15,
          y: '2',
          x: 'g',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 16,
          y: '2',
          x: 'h',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 17,
          y: '3',
          x: 'a'
        },
        {
          id: 18,
          y: '3',
          x: 'b'
        },
        {
          id: 19,
          y: '3',
          x: 'c'
        },
        {
          id: 20,
          y: '3',
          x: 'd'
        },
        {
          id: 21,
          y: '3',
          x: 'e'
        },
        {
          id: 22,
          y: '3',
          x: 'f'
        },
        {
          id: 23,
          y: '3',
          x: 'g'
        },
        {
          id: 24,
          y: '3',
          x: 'h'
        },
        {
          id: 25,
          y: '4',
          x: 'a'
        },
        {
          id: 26,
          y: '4',
          x: 'b'
        },
        {
          id: 27,
          y: '4',
          x: 'c'
        },
        {
          id: 28,
          y: '4',
          x: 'd'
        },
        {
          id: 29,
          y: '4',
          x: 'e'
        },
        {
          id: 30,
          y: '4',
          x: 'f'
        },
        {
          id: 31,
          y: '4',
          x: 'g'
        },
        {
          id: 32,
          y: '4',
          x: 'h'
        },
        {
          id: 33,
          y: '5',
          x: 'a'
        },
        {
          id: 34,
          y: '5',
          x: 'b'
        },
        {
          id: 35,
          y: '5',
          x: 'c'
        },
        {
          id: 36,
          y: '5',
          x: 'd'
        },
        {
          id: 37,
          y: '5',
          x: 'e'
        },
        {
          id: 38,
          y: '5',
          x: 'f'
        },
        {
          id: 39,
          y: '5',
          x: 'g'
        },
        {
          id: 40,
          y: '5',
          x: 'h'
        },
        {
          id: 41,
          y: '6',
          x: 'a'
        },
        {
          id: 42,
          y: '6',
          x: 'b'
        },
        {
          id: 43,
          y: '6',
          x: 'c'
        },
        {
          id: 44,
          y: '6',
          x: 'd'
        },
        {
          id: 45,
          y: '6',
          x: 'e'
        },
        {
          id: 46,
          y: '6',
          x: 'f'
        },
        {
          id: 47,
          y: '6',
          x: 'g'
        },
        {
          id: 48,
          y: '6',
          x: 'h'
        },
        {
          id: 49,
          y: '7',
          x: 'a',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 50,
          y: '7',
          x: 'b',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 51,
          y: '7',
          x: 'c',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 52,
          y: '7',
          x: 'd',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 53,
          y: '7',
          x: 'e',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 54,
          y: '7',
          x: 'f',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 55,
          y: '7',
          x: 'g',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 56,
          y: '7',
          x: 'h',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 57,
          y: '8',
          x: 'a',
          piece: {
            player: 2,
            class: 'rook'
          }
        },
        {
          id: 58,
          y: '8',
          x: 'b',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 59,
          y: '8',
          x: 'c',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 60,
          y: '8',
          x: 'd',
          piece: {
            player: 2,
            class: 'king'
          }
        },
        {
          id: 61,
          y: '8',
          x: 'e',
          piece: {
            player: 2,
            class: 'queen'
          }
        },
        {
          id: 62,
          y: '8',
          x: 'f',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 63,
          y: '8',
          x: 'g',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 64,
          y: '8',
          x: 'h',
          piece: {
            player: 2,
            class: 'rook'
          }
        }
      ],
      piecesOut: [],
      turnPlayer: 1,
      turnNumber: 1,
      turnInfo: {
        from: '',
        to: '',
        isCapture: false,
        isCheck: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'getGameLog',
      'getCurrentBoard'
    ])
  },
  methods: {
    ...mapActions([
      'turnFinished'
    ]),
    startMove (square) {
      this.turnInfo.from = square
    },
    endMove (square) {
      this.turnInfo.to = square
      this.nextTurn()
    },
    consolidateMove () {
      let previousSquare = this.turnInfo.from
      let intendedSquare = this.turnInfo.to

      this.boardMap = this.boardMap.map(square => {
        if (square.id === intendedSquare.id) {
          square.piece = previousSquare.piece
          previousSquare.piece = undefined
        }
        return square
      })
      this.$forceUpdate()
    },
    nextTurn () {
      this.consolidateMove()
      let stateUpdateObj = {
        currentBoardMap: this.boardMap,
        turnInfo: {
          player: this.turnPlayer,
          movement: `${this.turnInfo.from.x}${this.turnInfo.from.y}-${this.turnInfo.to.x}${this.turnInfo.to.y}`,
          check: this.turnInfo.isCheck
        }
      }
      console.log(this.$store.state.gameLog)
      this.turnFinished(stateUpdateObj)
      this.turnPlayer === 1 ? this.turnPlayer = 2 : this.turnPlayer = 1
      this.turnNumber++
    },
    boardRow (row) {
      return this.boardMap.filter((square) => {
        let squareRow = parseInt(square.y)
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
.board .row:nth-child(odd) .square:nth-child(even) {
  background: #3ba0d9;
  color: white;
}
.board .row:nth-child(even) .square:nth-child(odd) {
  background: #3ba0d9;
  color: white;
}
</style>
