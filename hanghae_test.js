// 2번. 자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요. 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.
// 제한 조건
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// 12345
// "5+4+3+2+1=15"
// 1532576
// "6+7+5+2+3+5+1=29"
// 지정 입력값
// 718253
// "3+5+2+8+1+7=26"

function solution(n) {
    let str = String(n);
    let arrNum = [];
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      arrNum.push(parseInt(str[i]));
      sum += parseInt(str[i]);
    }
    return arrNum.join('+') + '=' + String(sum);
  }
  
  // arrNum.join('+') = '3+5+2+8+1+7'
  // '='
  // String(sum)
  
  // 718253
  // "3+5+2+8+1+7=26"
  
  // 각 자리의 수를 하나씩 꺼내기 위해 자연수 n을 문자열로 변환 String()
  // 출력할 배열 타입 더하기 식 변수 arrNum = [];
  // 출력할 숫자형 합계 변수 sum = 0;
  // for문으로 loop 하되 자리수를 꺼내는 순서를 반대로
  // i 는 문자열 n의 길이의 -1 부터 0이 될 때까지 1씩 감소하도록
  // arrNum 에 각 자리의 수를 정수형으로 변환하여 배열의 요소로 push
  // sum += 각 자리의 수를 정수형으로 변환하여 더해주기 parseInt()
  // return sumProcess.join('+') + '=' + String(sum);
