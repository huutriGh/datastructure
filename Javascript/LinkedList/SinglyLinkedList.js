// It's a list that is linked
// Contain a set of Node. Each node have two element: value of data you want to store and pointer to the next node in line
// First node is head and the last is tail.
// Why linked List:

// Iterate lower than array, However, these inserts that we can do in the middle of a link list is a lot better than an array.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //1 --> 10 -->5 --> 16
  //1 --> 10 --> 99 --> 5 --> 16
  insert(index, value) {
    if (index >= this.length - 1) {
      this.append(value);
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let newNode = new Node(value);
    let leader = this._traverseToIndex(index - 1);
    const holdingPoiter = leader.next;
    leader.next = newNode;
    newNode.next = holdingPoiter;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    }
    const currentNode = this._traverseToIndex(index - 1);
    const holdingPoiter = currentNode.next.next;
    currentNode.next = holdingPoiter;
    if (index === this.length - 1) {
      this.tail.value = currentNode.value;
    }
    this.length--;
  }

  reverse() {
    if (!this.head.next) {
      return;
    }
    // 1  10  5   16
    this.tail = this.head;
    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      
    }
    this.head.next = null;
    this.head = first;
    console.log(this.printlist());
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printlist() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.reverse();
//console.log(myLinkedList.printlist());
