// 프로그래머스 - 완주하지 못한 선수

// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
//단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 
// 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.


// 완주하지 못한 사람의 이름 name
// name은 completion 리스트에 있을 수도, 없을 수도 있음
// completion.length = participant.length - 1;


// 1) name이 동명이인이 아닌 경우, participant[i] !== completion[j]
// 2) name이 동명이인인 경우, participant 배열의 name 중복 개수와, completion 배열의 name 중복 개수가 다름


function solution(participant, completion) {
    // 동명이인이 있는 경우를 위해서 두 배열을 정렬해줌
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        // 두 배열은 요소 1개만 다르기 때문에 인덱스 i번째 요소의 값이 서로 다를 경우 participant의 i번째가 완주하지 못 한 사람이 됨
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}