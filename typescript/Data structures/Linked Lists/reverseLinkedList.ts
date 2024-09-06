// Write a function that reverses a singly linked list. 
// The function should modify the linked list in place and return the new head.

import { ListNode, LinkedList } from "./AddAndPrintNode";

function reverseLinkedList(head: ListNode | null): ListNode | null {
    // Implement here
    if (head != null){
        const newList = new LinkedList();

        let tmp = head;
        tmp.prev = null;
        while (tmp.next != null){
            tmp.next.prev = tmp;
            tmp = tmp.next;
        }
        newList.head = tmp;
        while (tmp.prev != null) {
            newList.addNode(tmp);
            tmp = tmp.prev
        }
        newList.addNode(tmp);
        newList.print();
        return (newList.head);
    }
    return (null);
}

// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);

// const list = new LinkedList();
// list.head = node1;
// list.addNode(node2);
// list.addNode(node3);
// list.addNode(node4);
// list.print();

// reverseLinkedList(list.head);

// run with"npx tsc reverseLinkedList.ts && node reverseLinkedList.js"