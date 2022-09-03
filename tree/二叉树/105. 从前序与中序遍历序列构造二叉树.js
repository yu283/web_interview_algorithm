/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  let head = preorder[0]
  //左子树的长度
  let leftSz = inorder.indexOf(head)
  let root = new TreeNode(head)
  root.left = buildTree(preorder.slice(1,leftSz+1),inorder.slice(0,leftSz))
  root.right = buildTree(preorder.slice(leftSz + 1),inorder.slice(leftSz + 1))

  return root
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
