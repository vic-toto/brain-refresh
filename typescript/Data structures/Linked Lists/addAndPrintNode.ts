// Implement a singly linked list in TypeScript. Include methods for a
//dding a node to the end of the list and printing all elements.

export class ListNode {
    value: number;
    next: ListNode | null = null;
    prev: ListNode | null = null;
    constructor(value: number) {
        this.value = value;
    }
}

export class LinkedList {
    head: ListNode | null = null;

    addNode(newbie: ListNode) {
        if (this.head != null && newbie != null){
            let node = this.head;
            while (node.next != null){
                node = node.next;
            }
        node.next = newbie;
        newbie.next = null;
        }
    };

    print(){
        if (this.head != null) {
            let node = this.head;
            while (node.next != null){
                console.log(node.value);
                node = node.next;
            }
            console.log(node.value);
        }
    }

    // Implement add and print methods here
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

const list = new LinkedList();
list.head = node1;
list.addNode(node2);
list.print();
console.log("\n");
list.addNode(node3);
list.print();
console.log("\n");
list.addNode(node4);
list.print();

// run with "npx tsc addAndPrintNode.ts && node addAndPrintNode.js"