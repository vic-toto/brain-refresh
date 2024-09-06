"use strict";
// Implement a singly linked list in TypeScript. Include methods for a
//dding a node to the end of the list and printing all elements.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        // Implement add and print methods here
    }
    LinkedList.prototype.addNode = function (newbie) {
        if (this.head != null) {
            var node = this.head;
            while (node.next != null) {
                node = node.next;
            }
            newbie.prev = node;
            newbie.next = null;
            node.next = newbie;
        }
        else
            this.head = newbie;
    };
    ;
    LinkedList.prototype.print = function () {
        if (this.head != null) {
            var node = this.head;
            while (node.next != null) {
                console.log(node.value);
                node = node.next;
            }
            console.log(node.value + "\n");
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//  const node1 = new ListNode(1);
//  const node2 = new ListNode(2);
//  const node3 = new ListNode(3);
//  const node4 = new ListNode(4);
//  const list = new LinkedList();
//  list.head = node1;
//  list.addNode(node2);
//  list.addNode(node3);
//  list.addNode(node4);
//  list.print();
// run with "npx tsc addAndPrintNode.ts && node addAndPrintNode.js"
