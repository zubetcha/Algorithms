
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

// 배열의 요소의 전체 합 / 배열의 길이

function solution(arr) {
    let result = arr.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    return result / arr.length;
}