/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
  if (head === null) return head
  let nodeArr = []
  while (head) {
    nodeArr.push(head)
    head = head.next
  }
  let n = nodeArr.length
  nodeArr.sort((aNode,bNode) => {
      return aNode.val - bNode.val
  })
  let resNode = nodeArr[0]
  const res = resNode
  for (let i = 1; i < n; i++) {
    resNode.next = nodeArr[i]
    resNode = resNode.next
  }
  resNode.next = null
  return res
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
