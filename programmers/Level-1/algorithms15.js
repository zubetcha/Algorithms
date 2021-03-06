// 프로그래머스 - 내적

// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2
// 입출력 예 설명
// 입출력 예 #1

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2

// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.


// a.length == b.length
// a의 y번째 인덱스와 b의 y번째 인덱스를 곱한 값을 가지는 새로은 배열 생성
// 새로운 배열의 요소들의 합

function solution(a, b) {
    let resultArr = a.map((x, y) => a[y] * b[y]);
    let sum = 0;
    for (let i = 0; i < resultArr.length; i++) {
        sum += resultArr[i]
    }
    return sum;
}


function solution(a, b) {
    let multi_sum = 0
    for (let i = 0; i < a.length; i++){
          multi_sum += a[i] * b[i]            
    }
    return multi_sum;
}


// 두 번째 풀었을 때


function solution(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum+= (a[i] * b[i]);
    }
    return sum;
}

// a.length === b.length
// 반환되는 값을 담을 변수 sum = 0;