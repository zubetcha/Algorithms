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

function solution(s) {
    // 문자열의 길이는 공백을 무시하기 때문에 공백은 신경쓰지 않아도 됨
    let result = '';
    for (let i = 0; i < s.length; i++) {
        // 짝수인 i번째 알파벳은 대문자로, 홀수인 i번째 알파벳은 소문자로 치환
        i % 2 == 0 ?  result += s[i].toUpperCase() : result += s[i].toLowerCase();
    }
    return result;
}
