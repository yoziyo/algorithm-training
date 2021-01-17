/*
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant	completion	return
[leo, kiki, eden]	[eden, kiki]	leo
[marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
[mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

입출력 예 설명
예제 #1
leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}

function solution2(participant, completion) {
  completion.map((name) => {
    completion[name] = (completion[name] ? completion[name] : 0) + 1;
  });

  return participant.find((name) => {
    const notFinded = !completion[name];
    if (!notFinded) {
      completion[name] -= 1;
    }
    return notFinded;
  });
}

function solution3(participant, completion) {
  return participant.find(
    (name) => {
      const notFinded = !completion[name];
      if (!notFinded) {
        completion[name] -= 1;
      }
      return notFinded;
    },
    completion.map((name) => {
      completion[name] = (completion[name] ? completion[name] : 0) + 1;
    }),
  );
}

/*
COMMENT:
- 기본적인 검증을 통해서 값을 도출해내는 코드를 짰더니 속도 이슈에 걸림
- 그래서 정렬 후 정렬된 데이터로만 비교했을 때 통과가 됨
  - 하지만 이건 전혀 확장성이 없는 거라.. 문제를 떠나 버리면 의미가 없어짐.
- 그래서 다른 코드를 찾다 발견한건 2번 처럼 숫자를 부여하고 (중복확인을 위해), 돌아다니면서 숫자를 체크하고, 찾았을경우 하나씩 빼주는 방법도 있음
  - 3번 같은경우 thisArg가 find callback보다 먼저 실행 되므로 코드를 줄인 형태
*/
