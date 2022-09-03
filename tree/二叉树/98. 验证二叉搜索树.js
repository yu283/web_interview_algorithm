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
 * @return {boolean}
 */
const isValidBST = function (root) {
  const res = []
  const inorder = (root) => {
    if (!root) {
      return null
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  for (let i = 1; i < res.length; i++) {
    if (res[i]<=res[i-1]) return false
  }
  return true
};

