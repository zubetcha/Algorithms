// 프로그래머스 - 행렬의 덧셈

// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]  [[]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

// 배열 합치기
// 배열 안의 요소의 length가 일치하는 경우에만 합칠 수 있음 if문
// arr1의 의 요소 안의 요소와 arr2의 요소 안의 요소를 합쳐서 새로운 배열 resultArr 만들기 > push
// 동일한 인덱스의 arr1 과 arr2만 병합 가능
// map > 배열의 모든 요소에 function을 실행, 보통 배열 전체의 값을 변경할 때 사용
// 원래의 배열을 변경하는 것이 아닌 새로 바뀐 배열을 반환함
// 배열을 새로 만든다면 map, 그냥 반복만 한다면 forEach
// map 메소드의 형태 > arr.map((요소, 인덱스, 배열) => {return 요소}) / 3개의 매개변수를 가짐
// 요소 > 필수 입력, 인덱스, 배열 > 선택

function solution(arr1, arr2) {
    let answer = [];
    if ( arr1.length == arr2.length && arr1.length.length == arr2.length.length) {
        for (let i = 0; i < arr1.length; i++) {
            answer.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]));
        }
        return answer;
    }
}

function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        if ( arr1.length == arr2.length && arr1[i].length == arr2[i].length) {
            answer.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]));
        }
    }
    return answer;
}

// 오답 > arr1이 아닌 arr1[i]에서 map을 사용했기 때문에 for문 arr1의 i번째를 둘러줘야 함
function solution(arr1, arr2) {
    let resultArr = [];
    if ( arr1.length == arr2.length && arr1.length.length == arr2.length.length) {
         resultArr.push(arr1[i].map((x, y) => arr1[i][y] + arr2[i][y]));
    }
    return resultArr;
}


// 두 번째 풀었을 때


function solution(arr1, arr2) {
    let result = [[4, 6], [4, 6]];
    for (let i = 0; i < arr1.length; i++) {
        let arr3 = [];
        result.push(arr3);
        for (let j = 0; j < arr1[i].length; j++) {
            arr3.push(arr1[i][j] + arr2[i][j]);
        }
    }
    return result;
}

// arr1[i][j] + arr2[i][j]
//