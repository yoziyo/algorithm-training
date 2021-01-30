/**
 * 함수 solution은 정수 n을 매개변수로 입력받습니다.
 * n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
 * 예를들어 n이 118372면 873211을 리턴하면 됩니다.
 *
 * 제한 조건
 * n은 1이상 8000000000 이하인 자연수입니다.
 * 입출력 예
 * n	return
 * 118372	873211
 */

function solution(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((numberA, numberB) => numberB - numberA)
      .join(''),
  );
}

function solution2(n) {
  const returnArray = [];
  console.log(n);
  do {
    n = n % 10;
    console.log(n);
  } while (n > 0);
}

console.log(solution2(118372));

/**
 * COMMENT:
 *  - 함수를 써서 푸는 형태는 그냥 일반적
 *    - 조심해야 할 부분은 sort 에게 명확하게 숫자를 인식 시켜야 한다는점
 *  - 문자열 변경 방법 말고 일반적 알고리즘 으로 푸는것도 도움이 될듯 (solution2 작성중)
 */
