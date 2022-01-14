// 프로그래머스 - 폰켓몬

function solution(nums) {
  const arr = []
  nums.map((num, i) => {
    if (arr.length < nums.length / 2 && !arr.includes(num)) {
      arr.push(num)
    }
  })
  return arr.length
}

// 가져갈 폰켓몬이 모두 들어 있는 배열 arr
// arr에는 최대한 nums의 중복 요소가 없게, 그리고 길이는 nums의 반
