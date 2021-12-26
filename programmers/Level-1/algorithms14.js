// 프로그래머스 - 나누어 떨어지는 숫자 배열

// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

// if arr[i] % divisor == 0 > arr[i].sort 오름차순 answer.push(arr[i])
// arr.sort() > 오름차순
// if (arr[i] % divisor == 0).length == 0 > answer.push(-1)


// 채점 시 일부 오답 >> 제한사항 하나 적용 안 함
function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
        if (answer.length === 0) {
            answer.push(-1)
        }g
    }
    return answer.sort(function(a, b) {
        return a-b;
    });
}

// 숫자는 아스키 코드를 기준으로 정렬하기 때문에 일반적인 숫자 크기대로 정렬되지 않음
// .sort(function(a,b){return a-b;}); >> 오름차순
// .sort(function(a,b){return b-a;}); >> 내림차순

function solution(arr, divisor) {
    let answer = [];
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0 && arr.length == set.size) {
            answer.push(arr[i]);   
        }        
    }
         if (answer.length === 0) {
            answer.push(-1);
        }
    return answer.sort(function(a, b) {
        return a-b;
    });
}

// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// arr.length 배열의 길이와 set 객체의 크기도 일치해야 함 arr[i] ≠ arr[j]
// new Set([literable]); >> 중복을 허용하지 않는 값을 모아놓은 collection 객체
// new 연산자를 사용하여 생성


// arr.length 배열의 길이와 set 객체의 크기도 일치해야 함 arr[i] ≠ arr[j]


// 두 번째 풀었을 때


function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    return answer.length === 0 ? [-1] : answer.sort(function(a, b) {return a - b;});
}

// if arr[i] % divisor === 0 ? answer.push(arr[i]).오름차순 정렬
// if answer.length === 0 ? answer.push(-1)
// arr 배열에는 중복되는 값 X
