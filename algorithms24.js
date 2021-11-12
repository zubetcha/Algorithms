// 프로그래머스 - 정수 내림차순으로 배치하기

// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211


// 정수 n을 문자열로 변환 String
// 문자열의 문자를 하나씩 돌면서 nList에 각각의 문자열 요소로 push
// 반복을 다 돈 nList를 내림차순으로 정렬 후 sort b-a
// join한 문자열을 정수형으로 변환한 값을 return

// '234235' * 1 > 234235
// 문자열이 숫자로만 되어 있는 경우 +, * 연산자로 데이터 타입을 숫자형
// 단, 문자가 섞여 있는 경우 NaN 반환

function solution(n) {
    let str = String(n);
    let nList = [];
    for (let i = 0; i < str.length; i++) {
        nList.push(str[i]);
    }
    return parseInt(nList.sort(function(a, b) {return b - a;}).join(''));
}

function solution(n) {
    let str = String(n);
    let nList = [];
    for (let i = 0; i < str.length; i++) {
        nList.push(str[i]);
    }
    return parseInt(nList.sort(function(a, b) {return b - a;}).join(''));
}