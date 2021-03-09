/**
 Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
  let numbers = A.filter((num) => num >= 0);
  if (numbers.length === 0) return 1;

  let checker = Array(numbers.length).fill(false);
  for (let num of numbers) {
    checker[num - 1] = true;
  }

  const findResult = checker.indexOf(false) + 1;
  return findResult ? findResult : numbers.length + 1;
}
