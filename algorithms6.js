// 프로그래머스 - 없는 숫자 더하기

// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 수 ≤ 9
// numbers의 모든 수는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// 매개변수 numbers의 숫자 범위 선언이 필요한 지?? x
// 뱐수 numList = numbers 배열에 없는 숫자들의 리스트
// return numList의 각 숫자들의 합
// for문


function solution(numbers) {
    let totalSum = 0;
    for (let i = 0; i < 10; i++) {
        totalSum += i;
    }
    let numbersSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbersSum += numbers[i];
    }
    return totalSum - numbersSum;
}

// .reduce 메소드 사용해서도 작성 가능


// 두 번째 풀었을 때


function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.includes(i) == false) {
            sum += i;
        }
    }
    return sum;
}

// numbers에 없는 숫자 모두 더한 값 sum
// loop > i 가 0부터 9까지 돌면서 i 가 numbers 배열에 없으면 sum에 i 더하기
// arr.include() > 배열 속에 해당 원소가 있으면 true, 없으면 false 반환