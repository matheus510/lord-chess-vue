<template>
  <div>
    <div id="board">
      <div>
        <div class="board">
          <div class="row" v-for="row in 8" v-bind:key="row">
            <drag :id="square.id" v-if="square.piece" class="square" v-for="square in boardRow(row)" v-bind:key="square.id" @dragstart="startMove(square, ...arguments)">
              <img :src="`../../static/${square.piece.player}/${square.piece.class}/${square.piece.player}.png`"/>
            </drag>
            <drop :id="square.id" v-if="!square.piece" class="square" v-for="square in boardRow(row)" v-bind:key="square.id" @drop="endMove(square, ...arguments)">
            </drop>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LCBoard',
  data () {
    return {
      boardMap: [
        {
          id: 11,
          y: '1',
          x: 'a',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 12,
          y: '1',
          x: 'b',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 13,
          y: '1',
          x: 'c',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 14,
          y: '1',
          x: 'd',
          piece: {
            player: 1,
            class: 'queen'
          }
        },
        {
          id: 15,
          y: '1',
          x: 'e',
          piece: {
            player: 1,
            class: 'king'
          }
        },
        {
          id: 16,
          y: '1',
          x: 'f',
          piece: {
            player: 1,
            class: 'knight'
          }
        },
        {
          id: 17,
          y: '1',
          x: 'g',
          piece: {
            player: 1,
            class: 'bishop'
          }
        },
        {
          id: 18,
          y: '1',
          x: 'h',
          piece: {
            player: 1,
            class: 'rook'
          }
        },
        {
          id: 21,
          y: '2',
          x: 'a',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 22,
          y: '2',
          x: 'b',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 23,
          y: '2',
          x: 'c',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 24,
          y: '2',
          x: 'd',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 25,
          y: '2',
          x: 'e',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 26,
          y: '2',
          x: 'f',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 27,
          y: '2',
          x: 'g',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 28,
          y: '2',
          x: 'h',
          piece: {
            player: 1,
            class: 'pawn'
          }
        },
        {
          id: 31,
          y: '3',
          x: 'a'
        },
        {
          id: 32,
          y: '3',
          x: 'b'
        },
        {
          id: 33,
          y: '3',
          x: 'c'
        },
        {
          id: 34,
          y: '3',
          x: 'd'
        },
        {
          id: 35,
          y: '3',
          x: 'e'
        },
        {
          id: 36,
          y: '3',
          x: 'f'
        },
        {
          id: 37,
          y: '3',
          x: 'g'
        },
        {
          id: 38,
          y: '3',
          x: 'h'
        },
        {
          id: 41,
          y: '4',
          x: 'a'
        },
        {
          id: 42,
          y: '4',
          x: 'b'
        },
        {
          id: 43,
          y: '4',
          x: 'c'
        },
        {
          id: 44,
          y: '4',
          x: 'd'
        },
        {
          id: 45,
          y: '4',
          x: 'e'
        },
        {
          id: 46,
          y: '4',
          x: 'f'
        },
        {
          id: 47,
          y: '4',
          x: 'g'
        },
        {
          id: 48,
          y: '4',
          x: 'h'
        },
        {
          id: 51,
          y: '5',
          x: 'a'
        },
        {
          id: 52,
          y: '5',
          x: 'b'
        },
        {
          id: 53,
          y: '5',
          x: 'c'
        },
        {
          id: 54,
          y: '5',
          x: 'd'
        },
        {
          id: 55,
          y: '5',
          x: 'e'
        },
        {
          id: 56,
          y: '5',
          x: 'f'
        },
        {
          id: 57,
          y: '5',
          x: 'g'
        },
        {
          id: 58,
          y: '5',
          x: 'h'
        },
        {
          id: 61,
          y: '6',
          x: 'a'
        },
        {
          id: 62,
          y: '6',
          x: 'b'
        },
        {
          id: 63,
          y: '6',
          x: 'c'
        },
        {
          id: 64,
          y: '6',
          x: 'd'
        },
        {
          id: 65,
          y: '6',
          x: 'e'
        },
        {
          id: 66,
          y: '6',
          x: 'f'
        },
        {
          id: 67,
          y: '6',
          x: 'g'
        },
        {
          id: 68,
          y: '6',
          x: 'h'
        },
        {
          id: 71,
          y: '7',
          x: 'a',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 72,
          y: '7',
          x: 'b',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 73,
          y: '7',
          x: 'c',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 74,
          y: '7',
          x: 'd',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 75,
          y: '7',
          x: 'e',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 76,
          y: '7',
          x: 'f',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 77,
          y: '7',
          x: 'g',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 78,
          y: '7',
          x: 'h',
          piece: {
            player: 2,
            class: 'pawn'
          }
        },
        {
          id: 81,
          y: '8',
          x: 'a',
          piece: {
            player: 2,
            class: 'rook'
          }
        },
        {
          id: 82,
          y: '8',
          x: 'b',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 83,
          y: '8',
          x: 'c',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 84,
          y: '8',
          x: 'd',
          piece: {
            player: 2,
            class: 'king'
          }
        },
        {
          id: 85,
          y: '8',
          x: 'e',
          piece: {
            player: 2,
            class: 'queen'
          }
        },
        {
          id: 86,
          y: '8',
          x: 'f',
          piece: {
            player: 2,
            class: 'knight'
          }
        },
        {
          id: 87,
          y: '8',
          x: 'g',
          piece: {
            player: 2,
            class: 'bishop'
          }
        },
        {
          id: 88,
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
        to: ''
      }
    }
  },
  methods: {
    startMove (square) {
      this.turnInfo.from = `${square.x}${square.y}`
    },
    endMove (square) {
      this.turnInfo.to = `${square.x}${square.y}`
      console.log(`${this.turnInfo.from}-${this.turnInfo.to}`)
    },
    nextTurn () {
      this.turnPlayer === 1 ? this.turnPlayer = 2 : this.turnPlayer = 1
      this.turnNumber++
    },
    boardRow (row) {
      return this.boardMap.filter((square) => {
        let squareRow = square.id.toString().split('').map(Number)[0]
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
  height: 54px;
  width: 12.5%;
}
.board .row .square img {
  width: 50px;
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
