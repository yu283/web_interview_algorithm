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
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null
  let midOrder = [...preorder].sort((a,b)=>a-b)
  let head = preorder[0]
  let root = new TreeNode(head)
  let sz = midOrder.indexOf(head)

  root.left = bstFromPreorder(preorder.slice(1,sz+1))
  root.right = bstFromPreorder(preorder.slice(sz + 1))

  return root
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
