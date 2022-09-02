/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  let set = new Set()
  while (head!== null) {
    if (set.has(head)){
      return head
    }
    set.add(head)
    head = head.next
  }
  return null
};
