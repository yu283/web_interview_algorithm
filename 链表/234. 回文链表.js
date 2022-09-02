/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (!head) return true
  let nodeArr = []
  let reverseArr = []
  while (head) {
    nodeArr.push(head)
    reverseArr.push(head)
    head = head.next
  }
  reverseArr.reverse()
  let n = nodeArr.length
  for (let i = 0; i < n; i++) {
    if (nodeArr[i].val!==reverseArr[i].val) {
      return false
    }
  }
  return true

};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
