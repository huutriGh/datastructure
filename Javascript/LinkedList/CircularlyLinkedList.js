// It's a list that is linked
// Contain a set of Node. Each node have two element: value of data you want to store and pointer to the next node in line
// First node is head and the last is tail.
// Why linked List:

// Iterate lower than array, However, these inserts that we can do in the middle of a link list is a lot better than an array.

class Node {
  constructor(value, next) {
    this.setValue(value);
    this.setNext(next);
  }
  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}

class CircularlyLinkedList {
  constructor() {
    this.tail = new Node(null, null);
    this.length = 0;
  }

  append(value) {
    this.prepend(value);
    this.tail = this.tail.next;
  }
  prepend(value) {
    if (this.length === 0) {
      let newNode = new Node(value, null);
      this.tail = newNode;
      this.tail.next = newNode;
    } else {
      let newNode = new Node(value, this.tail.getNext());

      this.tail.setNext(newNode);
      //  this.tail.next.next = newNode;
    }

    this.length++;
  }
}

const myLinkedList = new CircularlyLinkedList();

myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.prepend(3);
