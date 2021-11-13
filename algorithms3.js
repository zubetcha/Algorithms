// 프로그래머스 - 가운데 글자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// 문자열의 문자 개수 세기
// 조건문
// 문자의 개수가 짝수라면 (문자 개수/2)-1 번째와 (문자 개수/2 + 1) 번째의 문자 반환
// 문자의 개수가 홀수라면 문자 개수/2의 반내림 정수 번째의 문자 반환

function solution(text) {
    let cnt = text.length;
    let index = cnt/2;
    if (cnt % 2 == 0) {
      result = text.slice(index-1, index+1);
    } else {
      result = text.charAt(Math.floor(cnt/2));
    }
    return result;
};

function solution(text) {
  let cnt = text.length;
  let index = cnt/2;
  if (cnt % 2 == 0) {
    return text.slice(index-1, index+1);
  } else {
    return text.charAt(Math.floor(cnt/2));
  }
};


function solution(text) {
    let cnt = text.length;
    let index = cnt/2;
    return cnt % 2 == 0 ? text.slice(index-1, index+1) : text.charAt(Math.floor(cnt/2))
}


// 두 번째 풀었을 때


function solution(s) {
    return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[s.length / 2 - 0.5];
}


// if s.length % 2 === 0 => 가운데 두 글자 반환
// s[s.length/2 - 1], s[s.length/2] 글자 반환하면 됨
// else => 가운데 한 글자 반환
// s[s.length/2 - 0.5] 글자 반환


