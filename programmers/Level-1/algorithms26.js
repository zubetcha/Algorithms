// 프로그래머스 - 제일 작은 수 제거하기

// 문제 설명
// 정수를 저장한 배열, arr 에서 
// 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// if arr.length 가 1보다 크면 처리, else return [-1]
// arr에는 중복 숫자가 없음
// 배열의 요소 중 최소값 찾기 > Math.min.apply(null, arr)

// 배열의 요소를 삭제하는 방법은 splice(), delete 두 가지 방법이 있음
// splice()는 배열의 요소를 삭제하면서 자동으로 배열의 길이도 줄어듦
// delete는 배열의 요소 내용은 삭제하지만 배열이 차지하는 자리는 그대로 유지되어 길이는 변하지 않음. 빈 배열


// Math.min(a, b) 는 a 와 b 라는 각각의 개별 요소를 인자로 받아서 작은 값을 반환하는 메소드인데,
// arr 은 ['a', 'b'] 와 같이 배열이기 때문에 이를 Math.min() 을 실행하기 위해서는 
// 배열의 요소를 Math.min()함수가 필요로 하는 인자의 형태로 넘겨줘야 함
// spread 연산자 (...arr) 사용 
// spread 연산자 (...) 는 배열, 문자열 등을 개별 요소로 분리해줌
// Math.min(...['5', '8', '2']) = Math.min(5, 8, 2)
// abcd 'a', 'b'


function solution(arr) {
    let answer = [];
    let min = Math.min(...arr); 
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== min) {
                answer.push(arr[i])
            }
        }
        return answer;
    } else {
        return [-1];
    }
}

