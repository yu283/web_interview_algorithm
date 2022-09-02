/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (head === null) {
    return head
  }
  let nodeArr = []
  while (head) {
    nodeArr.push(head)
    head = head.next
  }
  let length = nodeArr.length
  let resNode = nodeArr[0]
  const res = resNode
  for (let i = 1,j=length-1; i <= j; i++,j--) {
    if (i === j){
      resNode.next = nodeArr[i]
      resNode = resNode.next
    }else {
      resNode.next = nodeArr[j]
      resNode.next.next = nodeArr[i]
      resNode = resNode.next.next
    }
  }
  resNode.next = null
  return res
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
