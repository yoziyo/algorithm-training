/**
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 * https://assets.leetcode.com/uploads/2019/07/31/1483_ex1.png
 *
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * Output: 15
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 19
 *
 * DFS!!!!
 * 로 처리하면서, max 깊이 확인해서 제일 깊은거만 더하기
 *
 * array 에 각 node depth 마다 value를 더해서 제일 큰 depth의 값 꺼내기
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const sum = [];
    const dfs = (node, length) => {
        sum.length === length ? sum[length] = node.val : sum[length] += node.val;

        if(node.left) {
            dfs(node.left, length+1);
        }

        if(node.right) {
            dfs(node.right, length+1);
        }
    }

    dfs(root, 0);
    return sum[sum.length-1];
};
