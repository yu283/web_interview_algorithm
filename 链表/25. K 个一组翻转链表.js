/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// const reverseLinkedList = (head) => {
//   let pre = null;
//   let cur = head;
//
//   while (cur) {
//     const next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
// }



/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  const len = getListLength(head);
  let count = Math.floor(len / k);
  let hair = new ListNode();
  hair.next = head;
  let pre = hair,
    cur = pre.next;
  while (count--) {
    reverse(pre, cur, k);
    // 每反转一组，要更新 pre 和 cur
    pre = cur;
    cur = cur.next;
  }
  return hair.next;
};
const getListLength = head => {
  let cur = head;
  let i = 0;
  while (cur) {
    cur = cur.next;
    i++;
  }
  return i;
};

const reverse = (pre, cur, k) => {
  //k个点，反转 k-1 次相邻两个节点
  while (--k) {
    // 反转相邻两个节点
    let nxt = cur.next;
    cur.next = nxt.next;
    nxt.next = pre.next;
    pre.next = nxt;
  }
};





// const reverseKGroup = function (head, k) {
//   let resNode = new ListNode(0)
//   let res = resNode
//   let nodeArr = []
//   while (head) {
//     for (let i = 0; i< k;i++){
//       nodeArr.push(head)
//       head = head.next
//       if (head === null) break
//     }
//     if (nodeArr.length < k) break
//     let tempNode = nodeArr[0]
//     let midNode = nodeArr[k-1]
//     nodeArr[k-1].next = null
//     reverseLinkedList(tempNode)
//     resNode.next = tempNode
//     nodeArr = []
//     head = midNode.next
//   }
//   resNode.next = nodeArr[0]
//   return res.next
// };

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

