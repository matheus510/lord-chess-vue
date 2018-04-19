export default function (movementInfo) {
  if (movementInfo.class === 'pawn') return pawnMovement(movementInfo)
  if (movementInfo.class === 'knight') return knightMovement(movementInfo)
  if (movementInfo.class === 'bishop') return bishopMovement(movementInfo)
  if (movementInfo.class === 'rook') return rookMovement(movementInfo)
  if (movementInfo.class === 'king') return kingMovement(movementInfo)
  if (movementInfo.class === 'queen') return queenMovement(movementInfo)
}

function pawnMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  const turnPlayer = movementInfo.player
  let result = movementInfo.currentBoardMap.filter(square => {
    let deltaX = Math.abs(square.x - originX)
    let deltaY = square.y - originY
    const notHorizontal = deltaX === 0
    const isFirstMove = ((turnPlayer === 1 && originY === 2) || (turnPlayer === 2 && originY === 7))
    if (turnPlayer === 1) {
      if ((notHorizontal && isFirstMove && (deltaY === 2 || deltaY === 1)) || (notHorizontal && deltaY === 1)) {
        return square
      }
    } else if (turnPlayer === 2) {
      if ((notHorizontal && isFirstMove && (deltaY === -2 || deltaY === -1)) || (notHorizontal && deltaY === -1)) {
        return square
      }
    }
  })
  return result
}

function knightMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  let result = movementInfo.currentBoardMap.filter(square => {
    const deltaX = Math.abs(square.x - originX)
    const deltaY = Math.abs(square.y - originY)
    if ((deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2)) {
      return square
    }
  })
  return result
}

function bishopMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  return movementInfo.currentBoardMap.filter(square => {
    const deltaX = Math.abs(square.x - originX)
    const deltaY = Math.abs(square.y - originY)
    if (deltaX === deltaY) {
      return square
    }
  })
}

function rookMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  return movementInfo.currentBoardMap.filter(square => {
    const deltaX = Math.abs(square.x - originX)
    const deltaY = Math.abs(square.y - originY)
    if (deltaX === 0 || deltaY === 0) {
      return square
    }
  })
}

function kingMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  return movementInfo.currentBoardMap.filter(square => {
    const deltaX = Math.abs(square.x - originX)
    const deltaY = Math.abs(square.y - originY)
    if (deltaX <= 1 && deltaY <= 1) {
      return square
    }
  })
}

function queenMovement (movementInfo) {
  const originX = movementInfo.x
  const originY = movementInfo.y
  return movementInfo.currentBoardMap.filter(square => {
    const deltaX = Math.abs(square.x - originX)
    const deltaY = Math.abs(square.y - originY)
    if ((deltaX <= 1 && deltaY <= 1) || (deltaX === deltaY) || (deltaX === 0 || deltaY === 0)) {
      return square
    }
  })
}
