/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root) {
  let res = []
  const recursion = (root,res) => {
    if (!root) return res
    res.push(root.val)
    for (const kid of root.children) {
      recursion(kid,res)
    }
    return res
  }
  return recursion(root,res)
};

function Node(val, children) {
  this.val = val;
  this.children = children;
};
