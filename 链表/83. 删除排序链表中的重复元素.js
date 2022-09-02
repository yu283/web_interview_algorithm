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
const deleteDuplicates = function (head) {
  if (!head){
    return head
  }
  let cur = head
  while (cur){
    /*if (cur.val===cur.next.val){
      cur.next = cur.next.next
    }else {
      cur = cur.next
    }*/
    while (cur.next!==null&&cur.val===cur.next.val){
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
};
