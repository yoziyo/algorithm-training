/**
 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
 (1은 소수가 아닙니다.)

 제한 조건
 n은 2이상 1000000이하의 자연수입니다.

 입출력 예
 n	result
 10	4
 5	3

 입출력 예 설명
 입출력 예 #1
 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

 입출력 예 #2
 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
 */

function solution(n) {
  const result = new Array(n + 1).fill(true);
  result[0] = result[1] = false;

  for (let i = 2; i < n; i++) {
    if (result[i]) {
      // i의 제곱부터 시작하고, j에 배수를 한개씩 추가
      for (let j = 2 * i; j <= n; j += i) {
        result[j] = false;
      }
    }
  }

  return result.filter((n) => n).length;
}

/**
 * COMMENT:
 * - 일반적인 식은 전체를 순회 해야 하는 것이므로, 에라토스테네스의 체를 이용
 *  - 에라토스테네스 체는 특정 숫자의 배수는 소수가 아니라는 법칙에 착안하여 2 ~ N까지의 숫자에서 숫자들의 배수를 모두 제거한 뒤 제거되지 않은 숫자를 소수로 판별하는 방식
 *  - https://coding-factory.tistory.com/600
 */
