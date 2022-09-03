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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
  if (preorder.length === 0) return null
  let head = preorder[0]
  let root = new TreeNode(head)
  let i = postorder.indexOf(preorder[1])
/*  let pre = 0
  let back = 0
  for (i = 0; i <postorder.length - 1; i++) {
    pre += preorder[i+1]
    back += postorder[i]
    if (pre === back) {
      break
    }
  }*/

  root.left = constructFromPrePost(preorder.slice(1,i+2),postorder.slice(0,i+1))
  root.right = constructFromPrePost(preorder.slice(i+2),postorder.slice(i+1,postorder.length-1))


  return root
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
