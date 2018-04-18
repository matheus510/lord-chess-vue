export default function (movementInfo) {
  if (movementInfo.class === 'pawn') return pawnMovement(movementInfo)
  if (movementInfo.class === 'knight') return knightMovement(movementInfo)
  if (movementInfo.class === 'bishop') return bishopMovement(movementInfo)
  if (movementInfo.class === 'rook') return rookMovement(movementInfo)
  if (movementInfo.class === 'king') return kingMovement(movementInfo)
  if (movementInfo.class === 'queen') return queenMovement(movementInfo)
}

function pawnMovement (movementInfo) {

}

function knightMovement (movementInfo) {
  let originX = movementInfo.x
  let originY = movementInfo.y
  let result = movementInfo.currentBoardMap.filter(square => {
    if ((Math.abs(square.x - originX) === 2 && Math.abs(square.y - originY) === 1) || (Math.abs(square.x - originX) === 1 && Math.abs(square.y - originY) === 2)) {
      return square
    }
  })
  return result
}

function bishopMovement (movementInfo) {
  let originX = movementInfo.x
  let originY = movementInfo.y
  return movementInfo.currentBoardMap.filter(square => {
    if (Math.abs(square.x - originX) === Math.abs(square.y - originY)) {
      return square
    }
  })
}

function rookMovement (movementInfo) {
  return movementInfo.currentBoardMap.filter(square => {
    if (square.x === movementInfo.x || square.y === movementInfo.y) {
      return square
    }
  })
}

function kingMovement (movementInfo) {

}

function queenMovement (movementInfo) {

}
