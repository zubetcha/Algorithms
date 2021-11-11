// 프로그래머스 - 이상한 문자 만들기

// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
// "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.


// split을 활용해서 공백을 기준으로 하는 단어 하나 하나를 요소로 가지는 배열 생성
// map 메소드를 활용해서 배열의 각각의 요소들 (한 단어)를 돌면서 콜백함수 실행
// 콜백함수는 각 요소 (문자열 한 단어) 의 i번째가 짝수 또는 홀수인지에 따라 i번째 문자를 대/소문자로 치환
// 콜백함수 실행을 완료한 요소 (문자열 한 단어)를 다시 배열에 업데이트
// 배열의 각 요소 (한 단어) 씩 탐색하며 콜백함수 실행을 마쳐서 만들어진 배열의 각 요소를
// join 을 통해서 연결하여 문자열로 만들어 줌


function solution(s) {
    let wordList = s.split(" ");
    return wordList.map(function(el) {
        let word = '';
        for (let i = 0; i < el.length; i++) {
            i % 2 == 0 ? word += el[i].toUpperCase() : word += el[i].toLowerCase();
        }
        return word;
    }).join(" ");
};


// s = "try hello world"
// let wordList = s.split.(" ");
// wordList = ['try', 'hello', 'world']
// map 대소문자 치환 콜백함수
// 1-1. 'try' => 'TrY'
// 1-2. wordList = ['TrY', 'hello', 'world']
// 2-1. 'hello' => 'HeLlO'
// 2-2. wordList = ['TrY', 'HeLlO', 'world']
// 3-1. 'world' => 'WoRlD'
// 3-2. wordList = ['TrY', 'HeLlO', 'WoRlD']
// wordList = ['TrY', 'HeLlO', 'WoRlD']
// wordList.join(" ") = 'TrY HeLlO WoRlD'