// 프로그래머스 - K번째 수

function solution(array, commands) {
  const answer = []
  commands.map((command) => {
    const i = command[0]
    const j = command[1]
    const k = command[2]
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
  })
  return answer
}
