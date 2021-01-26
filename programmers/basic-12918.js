/**
 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

 제한 사항
 s는 길이 1 이상, 길이 8 이하인 문자열입니다.

 입출력 예
 s	return
 a234	false
 1234	true
 */

function solution(s) {
  return (s.length !== 4 && s.length !== 6) || s.length !== s.match(/[0-9]/gi).length ? false : true;
}

/**
 * COMMENT
 * - parseInt(s) 를 해서 처리 할 수 있지만, e와 같은 지수가 오면 그것도 변환 되버리는 문제가 있음
 * - 그래서, 4~6 길이 확인 후 정규식으로 length와 원본 문자열 length 비교처리
 *  - 전체 정규식도 가능 할 것으로 보임.
 */
