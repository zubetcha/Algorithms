// 프로그래머스 - 짝수와 홀수

// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 삼항 연산자 활용 - 1

// '?' 전의 조건문이 True 인 경우, ? 뒤의 왼쪽 값 반환
// '?' 전의 조건문이 False 인 경우, ? 뒤의 오른쪽 값 반환
function solution(num) {
    return num % 2 == 0 ? "Even" : "Odd";
} 

// 삼항 연산자 활용 - 2
function solution(num) {
    return num % 2 ? "Odd" : "Even";
} 


// 두 번째 풀었을 때


function solution(num) {
    return num % 2 === 0? "Even" : "Odd";
}