// 프로그래머스 - 자연수 뒤집어 배열로 만들기

// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]


// 자연수 n을 문자열로 변환 후 String
// 하나씩 돌면서 배열 변수에 다시 정수형으로 변환하여 push
// 하나씩 돌 때 0부터 문자열의 길이까지 ++가 아니라
// 문자열의 길이부터 0까지 --

// map(Number);

function solution(n) {
    let answer = [];
    let str = String(n);
    for (let i = str.length - 1; i >= 0; i--) {
        answer.push(parseInt(str[i]))
    }
    return answer;
}