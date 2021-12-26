// 프로그래머스 - 문자열 다루기 기본

// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 
// 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// 문자열 s의 status > 숫자로만 되어 있음 
// (s.length == 4 || 6) && s의 status => true
// else false
// output => boolean

function solution(s) {
    if (s.match(/[^0-9]/)) {
        return false;
    } else if (s.length === 4 || s.length === 6) {
        return true;
    } else {
        return false;
    }
}

function solution(s) {
    if (s.match(/^[0-9]/)) { 
        if (s.length === 4 || s.length === 6) {
            return true;
        } else {
            return fa
        }
    } else {
        return false;
    }
}

function solution(s) {
    if ( (s.match(/^[0-9]/)) && (s.length === 4 || s.length === 6)) { 
        return true;
    } else {
        return false;
    }
}

function solution(s) {
    if (isNaN(s)) {
        return false;
    } else if ((s.match(/^[0-9]/)) && (s.length === 4 || s.length === 6)) {
        return true;
    } else {
        return false;
    }
}


// 두 번째 풀었을 때


function solution(s) {
    if (s.match(/[^0-9]/)) {
        return false;
    } else if (s.length === 4 || s.length === 6) {
        return true;
    } else {
        return false;
    }
}

// s.length === 4 || 6 && 숫자로만
// return boolean
// 숫자로만 되어 있는지 확인하는 방법
// typeof(Number(s)) !== number ?  false : true;

// loop if isNaN(s) == false && s[i] !== ' ' &&