// Write a function that reverses a singly linked list. 
// The function should modify the linked list in place and return the new head.

import { ListNode, LinkedList } from "./AddAndPrintNode";

function reverseLinkedList(head: ListNode | null): ListNode | null {
    // Implement here
    if (head != null){
        const newList = new LinkedList();
        let readNode = head;
        let tmp = readNode;

        while (readNode != null){
            tmp = readNode;
            tmp.prev = readNode.next;
            tmp.next = readNode.prev;
            newList.addNode(tmp);
            readNode = readNode.next;

    }
    return (head)
}

// if the first has to be the last, then the tmp.next = null; tmp.value = node.value; tmp.before = node.next;


head  null
next  next  
Node  node
next  next
node  node 
next  next
null head