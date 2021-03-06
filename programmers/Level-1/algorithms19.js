// 프로그래머스 - 수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 
// 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

// answer 은 문자열이며, answer.length = n
// n % 2 === 0 => '수박'을 n/2 만큼 반복
// n % 2 === 1 => '수박'을 n/2 의 몫만큼 반복 + 수

// + 연산자로 문자열을 병합할 수 있음


function solution(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? result += '수' : result += '박';
    }
    return result;
}

console.log(solution(5))


// 두 번째 풀었을 때


function solution(n) {
    let str = '';
    for (let i = 1; i < n + 1; i++) {
        i % 2 === 0 ? str += '박' : str += '수';
    }
    return str;
}

// 빈 문자열 변수 str = '';
// loop i = 1;  n.length + 1 만큼 돌면서
// i % 2 === 0 ? str += '박' : str += '수';
