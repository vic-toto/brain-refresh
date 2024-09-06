// Exercise 3: Implement a method that detects whether a linked list has a cycle 
// (i.e., a node points back to a previous node in the list). Return true if a cycle is detected, false otherwise.

import { LinkedList, ListNode } from "./AddAndPrintNode";

function hasCycle(head: ListNode | null): boolean {
    // Implement here
    if (head.next != null)
        return (true);
    return (false);
}

const list1 = new LinkedList;
const list2 = new LinkedList;
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

list1.addNode(node1);

list2.addNode(node1);
list2.addNode(node2);
list2.addNode(node3);

console.log("list 1 " + hasCycle(list1.head));
console.log("list 2 " + hasCycle(list2.head));

// run with "npx tsc hasCycle.ts && node hasCycle.js"