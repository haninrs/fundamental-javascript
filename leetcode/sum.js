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
 * 
Example
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */

// ANEH MASA INI EROR DI LEETCODE TPI DISINI BENER YA NJIR
var addTwoNumbers = function(l1, l2) {
    let l1Reserve = l1.reverse().join('')
    let l2Reserve = l2.reverse().join('')
    let intL1 = parseInt(l1Reserve)
    let intL2 = parseInt(l2Reserve)
    let calculate = (intL1 + intL2).toString().split('').reverse();
    console.log(calculate);

};


// INI BERHASIL DI LEETCODE TPI DISINI EROR HAHAHAHAHSFSFB
// var addTwoNumbers = function(l1, l2) {
// let dummy = new ListNode(0); // Dummy node to store the result
// let curr = dummy; // Pointer to the current node in the result linked list
// let carry = 0; // Variable to store the carry

// // Traverse both linked lists until one of them becomes null
// while (l1 !== null || l2 !== null) {
//     let sum = carry; // Initialize sum with the carry
    
//     // Add the values of the current nodes and the carry
//     if (l1 !== null) {
//         sum += l1.val;
//         l1 = l1.next;
//     }
//     if (l2 !== null) {
//         sum += l2.val;
//         l2 = l2.next;
//     }
    
//     // Update the carry and create a new node with the sum % 10
//     carry = Math.floor(sum / 10);
//     curr.next = new ListNode(sum % 10);
//     curr = curr.next; // Move the pointer to the next node
// }

// // If there is a remaining carry, create a new node with the carry
// if (carry > 0) {
//     curr.next = new ListNode(carry);
// }

// return dummy.next;
// }


addTwoNumbers([2,4,3],[5,6,4])

console.log(typeof("-123"))