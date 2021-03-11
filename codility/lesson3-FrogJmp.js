/**
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

class Solution { public int solution(int X, int Y, int D); }

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
 */

/**
 * 재귀로 짯으나 당연히 많은 점프를 요하는 경우 느려짐
 */
function solution_recursion(X, Y, D, count = 0) {
  if (X >= Y) {
    return count;
  } else {
    return solution(X + D, Y, D, count + 1);
  }
}

/**
 * 갈수 있는 수, 가야할 거리가 있기 때문에
 * 가야할 거리 / 갈수 있는수 해서 도착거리가 같거나 이상 이니까 Math.ceil로 올림처리
 * https://app.codility.com/demo/results/trainingX72DSG-9MC/
 */
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
