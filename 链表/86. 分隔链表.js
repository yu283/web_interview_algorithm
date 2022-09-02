/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  let lessCur = new ListNode(0)
  let moreCur = new ListNode(0)
  const lessTar = lessCur
  const moreTar = moreCur
  while (head!==null) {
    if (head.val < x){
      lessCur.next = head
      lessCur = lessCur.next
    }else {
      moreCur.next = head
      moreCur = moreCur.next
    }
    head = head.next
  }
  moreCur.next = null
  lessCur.next = moreTar.next
  return lessTar.next
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

