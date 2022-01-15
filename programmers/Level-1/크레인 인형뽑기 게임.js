// 프로그래머스 - 크레인 인형뽑기 게임

function solution(board, moves) {
  let basket = []
  let newBoard = []
  let count = 0

  board.reverse().map((row) => {
    row.map((num, j) => {
      if (num !== 0) {
        newBoard[j] === undefined ? newBoard.push([num]) : newBoard[j].push(num)
      }
    })
  })

  moves.map((move) => {
    const tempArr = newBoard[move - 1]
    if (tempArr.length > 0) {
      if (basket[basket.length - 1] === tempArr[tempArr.length - 1]) {
        count += 2
        basket.pop()
      } else {
        basket.push(tempArr[tempArr.length - 1])
      }
      tempArr.pop()
    }
  })
  return count
}

// 인형 바구니 배열 = []
// 새로운 2D array

// 90도 돌린 새로운 2D 어레이 만들기
// [
//  [3, 4],
//  [5, 2, 2],
//  [1, 4, 5, 1],
//  [3, 4],
//  [1, 2, 1, 3]
// ]

// moves.map(el =>  2Darr[el]의 마지막 인덱스를 바구니 배열에 push하고, 원본 배열에서 제거)
// basket: [4, 3, 1, 1, 4, 3, 4]
