/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class NodeItem{
  constructor(next)
  {
    this.next = next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let tar = new NodeItem(head)
  let cur = tar
  while (cur.next!==null && cur.next.next!==null){
    if (cur.next.val === cur.next.next.val){
      let temp = cur.next.val
      while (cur.next&&cur.next.val === temp){
        cur.next=cur.next.next
      }
    }else {
      cur = cur.next
    }
  }
  return tar.next
};


