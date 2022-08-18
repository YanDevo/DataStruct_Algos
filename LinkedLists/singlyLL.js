//node class

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// singly linked list class
class SinglyLinkedList {
  constructor() {
    this.head;
  }

  // setting the head if no head is present or assigning a new head if a head already exists
  setHead(data) {
    // check to see if there is an existing head
    if (!this.head) {
      this.head = new Node(data);
      return this.head;
    } else {
      // redefine the head and the references
      let tempHead = this.head;
      //set new head
      this.head = new Node(data);
      // define the new head's next reference pointing to the old head(tempHead)
      this.head.next = tempHead;
      return this.head;
    }
  }

  appendNode(data) {
    // starting at the beginnig of the LinkedList
    let currentNode = this.head;
    // create a condition to check if we are at the end of the linked list
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
  }
}

// const node1 = new Node('Irene');
// const node2 = new Node('Amanda');
// const node3 = new Node('Kasem');

// node1.next = node2;
// node2.next = node3;

// console.log('This is node1:', node1);
// console.log('This is node2:', node2);
// console.log('This is node3:', node3);
