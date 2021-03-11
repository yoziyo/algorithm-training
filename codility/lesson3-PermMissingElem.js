/**
 An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */

/**
 * O(N) or O(N * log(N))
 * 1~n 까지의 합을 더해서 수를 뺌
 * 문제에서 n+1이라고 했기 떄문에 A.length + 2 를 해줌
 * 실제 공식은 n * (n+1) /2
 * https://app.codility.com/c/close/trainingG3ZKT5-YFJ/?final_task_completed=1
 */
function solution(A) {
  let all = ((A.length + 1) * (A.length + 2)) / 2;

  A.forEach((number) => {
    all -= number;
  });

  return all;
}
