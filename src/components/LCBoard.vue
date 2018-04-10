<template>
  <div>
    <div id="board">
      <div>
        <table width="100%" border="solid" align="center">
          <tr v-for="row in 8" v-bind:key="row">
            <td height="20px" width="20px" v-for="square in boardRow(row)" v-bind:key="square.id">{{ square.piece ? `${square.piece.class}-${square.piece.color}` : '&nbsp;' }}</td>
          </tr>
      </table>
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
          y: 1,
          x: 1,
          piece: {
            color: 'white',
            class: 'tower'
          }
        },
        {
          id: 12,
          y: 1,
          x: 2,
          piece: {
            color: 'white',
            class: 'bishop'
          }
        },
        {
          id: 13,
          y: 1,
          x: 3,
          piece: {
            color: 'white',
            class: 'knight'
          }
        },
        {
          id: 14,
          y: 1,
          x: 4,
          piece: {
            color: 'white',
            class: 'queen'
          }
        },
        {
          id: 15,
          y: 1,
          x: 5,
          piece: {
            color: 'white',
            class: 'king'
          }
        },
        {
          id: 16,
          y: 1,
          x: 6,
          piece: {
            color: 'white',
            class: 'knight'
          }
        },
        {
          id: 17,
          y: 1,
          x: 7,
          piece: {
            color: 'white',
            class: 'bishop'
          }
        },
        {
          id: 18,
          y: 1,
          x: 8,
          piece: {
            color: 'white',
            class: 'tower'
          }
        },
        {
          id: 21,
          y: 2,
          x: 1,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 22,
          y: 2,
          x: 2,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 23,
          y: 2,
          x: 3,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 24,
          y: 2,
          x: 4,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 25,
          y: 2,
          x: 5,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 26,
          y: 2,
          x: 6,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 27,
          y: 2,
          x: 7,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 28,
          y: 2,
          x: 8,
          piece: {
            color: 'white',
            class: 'pawn'
          }
        },
        {
          id: 31,
          y: 3,
          x: 1
        },
        {
          id: 32,
          y: 3,
          x: 2
        },
        {
          id: 33,
          y: 3,
          x: 3
        },
        {
          id: 34,
          y: 3,
          x: 4
        },
        {
          id: 35,
          y: 3,
          x: 5
        },
        {
          id: 36,
          y: 3,
          x: 6
        },
        {
          id: 37,
          y: 3,
          x: 7
        },
        {
          id: 38,
          y: 3,
          x: 8
        },
        {
          id: 41,
          y: 4,
          x: 1
        },
        {
          id: 42,
          y: 4,
          x: 2
        },
        {
          id: 43,
          y: 4,
          x: 3
        },
        {
          id: 44,
          y: 4,
          x: 4
        },
        {
          id: 45,
          y: 4,
          x: 5
        },
        {
          id: 46,
          y: 4,
          x: 6
        },
        {
          id: 47,
          y: 4,
          x: 7
        },
        {
          id: 48,
          y: 4,
          x: 8
        },
        {
          id: 51,
          y: 5,
          x: 1
        },
        {
          id: 52,
          y: 5,
          x: 2
        },
        {
          id: 53,
          y: 5,
          x: 3
        },
        {
          id: 54,
          y: 5,
          x: 4
        },
        {
          id: 55,
          y: 5,
          x: 5
        },
        {
          id: 56,
          y: 5,
          x: 6
        },
        {
          id: 57,
          y: 5,
          x: 7
        },
        {
          id: 58,
          y: 5,
          x: 8
        },
        {
          id: 61,
          y: 6,
          x: 1
        },
        {
          id: 62,
          y: 6,
          x: 2
        },
        {
          id: 63,
          y: 6,
          x: 3
        },
        {
          id: 64,
          y: 6,
          x: 4
        },
        {
          id: 65,
          y: 6,
          x: 5
        },
        {
          id: 66,
          y: 6,
          x: 6
        },
        {
          id: 67,
          y: 6,
          x: 7
        },
        {
          id: 68,
          y: 6,
          x: 8
        },
        {
          id: 71,
          y: 7,
          x: 1,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 72,
          y: 7,
          x: 2,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 73,
          y: 7,
          x: 3,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 74,
          y: 7,
          x: 4,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 75,
          y: 7,
          x: 5,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 76,
          y: 7,
          x: 6,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 77,
          y: 7,
          x: 7,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 78,
          y: 7,
          x: 8,
          piece: {
            color: 'black',
            class: 'pawn'
          }
        },
        {
          id: 81,
          y: 8,
          x: 1,
          piece: {
            color: 'black',
            class: 'tower'
          }
        },
        {
          id: 82,
          y: 8,
          x: 2,
          piece: {
            color: 'black',
            class: 'bishop'
          }
        },
        {
          id: 83,
          y: 8,
          x: 3,
          piece: {
            color: 'black',
            class: 'knight'
          }
        },
        {
          id: 84,
          y: 8,
          x: 4,
          piece: {
            color: 'black',
            class: 'king'
          }
        },
        {
          id: 85,
          y: 8,
          x: 5,
          piece: {
            color: 'black',
            class: 'queen'
          }
        },
        {
          id: 86,
          y: 8,
          x: 6,
          piece: {
            color: 'black',
            class: 'knight'
          }
        },
        {
          id: 87,
          y: 8,
          x: 7,
          piece: {
            color: 'black',
            class: 'bishop'
          }
        },
        {
          id: 88,
          y: 8,
          x: 8,
          piece: {
            color: 'black',
            class: 'tower'
          }
        }
      ],
      piecesOut: [],
      turnPlayer: 1,
      turnNumber: 1
    }
  },
  methods: {
    nextTurn () {
      this.turnPlayer === 1 ? this.turnPlayer = 2 : this.turnPlayer = 1
      this.turnNumber++
    },
    boardRow (row) {
      return this.boardMap.filter((square) => {
        if (square.x === (row)) {
          return square
        }
      })
    }
  }
}
</script>

<style>
</style>
