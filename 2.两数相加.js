/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  let first = true
  let head = null
  let list = null;
  let nextValue = 0;
  while (l1 !== null || l2 !== null) {
    const n1 = l1!==null ? l1.val : 0;
    const n2 = l2!==null ? l2.val : 0;
    const sum = n1 + n2 + nextValue;
    if (first) {
      list = new ListNode(sum % 10);
      head = list
      first = !first
    } else {
      list.next = new ListNode(sum % 10);
      list = list.next;
    }
    nextValue = sum >= 10 ? 1 : 0
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (nextValue === 1) {
    list.next = new ListNode(nextValue);
  }
  return head;
};
