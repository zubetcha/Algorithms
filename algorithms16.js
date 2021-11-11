// 프로그래머스 - 문자열 내 p와 y의 개수

// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

// 대문자는 소문자로 치환 string.toLowerCase()
// 문자열에서 특정 문자의 개수 찾기
// 조건문 if 'p'.length === 'y'.length => true
// 'p'.length === 0 && 'y'.length === 0 => true
// else => false

// 문자열에 찾는 문자가 없는 경우 null 을 반환해서 에러 발생 가능성 
// 위의 경우 비어 있는 배열 [] 로 대체해서 length를 0으로 만들어 줌

function solution(s){
    let pLength = (s.toLowerCase().match(/p/g) || []).length;
    let yLength = (s.toLowerCase().match(/y/g) || []).length;
    if (pLength === yLength) {
        return true;
    }
    else {
        return false;
    }
}