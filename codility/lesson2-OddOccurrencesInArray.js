/**
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
 */

/**
 * O(N**2)
 * set말고 array를 조회하고, 자르고 하는 형태가 느려서
 * 일부 테스트를 통과하지 못함
 */
function solution_array(A) {
  const result = [];

  A.forEach((number) => {
    const index = result.indexOf(number);
    if (index >= 0) {
      result.splice(index, 1);
    } else {
      result.unshift(number);
    }
  });

  return result[0];
}

/**
 * O(N) or O(N*log(N))
 * 속도는 나오지만, IE11에서 동작 안하는 SET 안쓰는 코드를 구상하러 감
 */
function solution_set(A) {
  const result = new Set([]);

  A.forEach((number) => {
    if (result.has(number)) {
      result.delete(number);
    } else {
      result.add(number);
    }
  });

  return result.values().next().value;
}

/**
 * O(N) or O(N*log(N))
 * 찾아보니 비트 계산으로 처리 할 수 도 있지만,
 * 최대한 내가 쉽게 이해 될 만한 코드를 생각해보니
 * 카운트 된 배열 가져와서 홀짝 구분 후 return
 * 홀수가 아닌걸 만나면 바로 반환하지만, 그렇기 때문에 더 늦어질수도 있음
 * https://app.codility.com/demo/results/training35J7RJ-784/
 */
function solution(A) {
  const total = A.reduce((counter, number) => {
    counter[number] = counter[number] ? counter[number] + 1 : 1;
    return counter;
  }, {});

  for (index in total) {
    if (total[index] % 2) {
      return Number(index);
    }
  }
}
