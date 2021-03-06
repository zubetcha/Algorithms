// 프로그래머스 - x만큼 간격이 있는

// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

// x씩 증가.. x++? x += x?
// n개의 값을 가지는 리스트
// 


function solution(x, n) {
    let answer = [];
    const X = x; // 최초 x 값 상수로 고정
    for (let i = 0; i < n; i++) {
        answer.push(x);
        x += X; // x는 상수 X만큼 증가
    } 
    return answer;
}


// 두 번째 풀었을 때


function solution(x, n) {
    let result = [];
    let num = 0;
    for (let i = 0; i < n; i++) {
        num += x;
        result.push(num);
    }
    return result;
}

// x 값 고정
// x += x 고정 값
// loop n까지
// 빈 배열에 push
