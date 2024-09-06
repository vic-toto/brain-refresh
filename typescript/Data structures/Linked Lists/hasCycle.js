"use strict";
// Exercise 3: Implement a method that detects whether a linked list has a cycle 
// (i.e., a node points back to a previous node in the list). Return true if a cycle is detected, false otherwise.
Object.defineProperty(exports, "__esModule", { value: true });
var AddAndPrintNode_1 = require("./AddAndPrintNode");
function hasCycle(head) {
    // Implement here
    if (head.next != null)
        return (true);
    return (false);
}
var list1 = new AddAndPrintNode_1.LinkedList;
var list2 = new AddAndPrintNode_1.LinkedList;
var node1 = new AddAndPrintNode_1.ListNode(1);
var node2 = new AddAndPrintNode_1.ListNode(2);
var node3 = new AddAndPrintNode_1.ListNode(3);
list1.addNode(node1);
list2.addNode(node1);
list2.addNode(node2);
list2.addNode(node3);
console.log("list 1 " + hasCycle(list1.head));
console.log("list 2 " + hasCycle(list2.head));
// run with "npx tsc hasCycle.ts && node hasCycle.js"
