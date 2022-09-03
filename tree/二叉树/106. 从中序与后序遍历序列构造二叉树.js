/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null
  let head = postorder[postorder.length - 1]
  let sz = inorder.indexOf(head)
  let root = new TreeNode(head)
  root.left = buildTree(inorder.slice(0,sz),postorder.slice(0,sz))
  root.right = buildTree(inorder.slice(sz+1),postorder.slice(sz,postorder.length-1))

  return root
};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
