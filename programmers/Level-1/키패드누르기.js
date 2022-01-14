// 프로그래머스 - 키패드 누르기

function solution(numbers, hand) {
  const whichHand = hand.substring(0, 1).toUpperCase()
  const answer = []
  const leftLoca = { x: -1, y: 0 }
  const rightLoca = { x: 1, y: 0 }
  numbers.map((num, i) => {
    if (num === (1 || 4 || 7)) {
      answer.push('L')
      if (num === 1) {
        leftLoca = { ...leftLoca, y: 3 }
      } else if (num === 4) {
        leftLoca = { ...leftLoca, y: 2 }
      } else if (num === 7) {
        leftLoca = { ...leftLoca, y: 1 }
      }
    } else if (num === (3 || 6 || 9)) {
      answer.push('R')
      if (num === 3) {
        rightLoca = { ...leftLoca, y: 3 }
      } else if (num === 6) {
        rightLoca = { ...leftLoca, y: 2 }
      } else if (num === 9) {
        rightLoca = { ...leftLoca, y: 1 }
      }
    } else {
      if (num === 2) {
        if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) > Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('L')
          leftLoca = { x: 0, y: 3 }
        } else if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) < Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('R')
          rightLoca = { x: 0, y: 3 }
        } else {
          answer.push(whichHand)
        }
      } else if (num === 5) {
        if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) > Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('L')
          leftLoca = { x: 0, y: 3 }
        } else if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) < Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('R')
          rightLoca = { x: 0, y: 3 }
        } else {
          answer.push(whichHand)
        }
      } else if (num === 8) {
        if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) > Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('L')
          leftLoca = { x: 0, y: 3 }
        } else if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) < Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('R')
          rightLoca = { x: 0, y: 3 }
        } else {
          answer.push(whichHand)
        }
      } else if (num === 0) {
        if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) > Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('L')
          leftLoca = { x: 0, y: 3 }
        } else if (Math.abs(rightLoca.x - 0) + Math.abs(rightLoca.y - 3) < Math.abs(leftLoca.x - 0) + Math.abs(leftLoca.y - 3)) {
          answer.push('R')
          rightLoca = { x: 0, y: 3 }
        } else {
          answer.push(whichHand)
        }
      }
    }
  })
}

// 오른손이 움직인 거리 카운트
// 왼손이 움직인 거리 카운트
// numbers 리스트를 차례대로 도는데
// if (i번째가 1 || 4 || 7일 경우) => 오른손 위치 = num, answer.push('R')
// if (i번째가 3 || 6 || 9일 경우) => 왼손 위치 = num, answer.push('L')
// if (i번째가 2 || 5 || 8 || 0 인 경우) => 거리가 가까운 손 위치 = num, answer.push('가까운 손')
// 어느 손의 거리가 가까운지 계산하는 로직을 짜는 일이 관건 (거리 활용?)
// ㄴ if (두 손의 거리가 같다면 ?) => hand에 따라 right 또는 left +1, answer.push(whichHand)
