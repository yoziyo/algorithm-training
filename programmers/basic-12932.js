/**
 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 
 제한 조건
 n은 10,000,000,000이하인 자연수입니다.

 입출력 예
 n	return
 12345	[5,4,3,2,1]
*/
function solution(n, resultArray = []) {
  if (n <= 0) return resultArray;

  resultArray.push(n % 10);
  return solution(parseInt(n / 10), resultArray);
}

/**
 * COMMENT:
 *  - resultArray 를 만들어서 재귀로 작성
 *  - ES6 환경이 아니라면, typeof 로 resultArray 를 체크해서 초기화 해 주면 될 듯
 */
