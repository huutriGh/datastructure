// It's a list that is linked
// Contain a set of Node. Each node have two element: value of data you want to store and pointer to the next node in line
// First node is head and the last is tail.
// Why linked List:

// Iterate lower than array, However, these inserts that we can do in the middle of a link list is a lot better than an array.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.prev = null;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    newNode.prev = leader;
    holdingPoiter.prev = newNode;

    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.prev = null;
    }
    //1 --> 10 --> 99 --> 5 --> 16
    const currentNode = this._traverseToIndex(index - 1);
    const holdingPoiter = currentNode.next.next;
    currentNode.next = holdingPoiter;
    holdingPoiter.prev = currentNode;
    if (index === this.length - 1) {
      this.tail.value = currentNode.value;
    }
    this.length--;
  }

  removeLast(){
   
    this.tail = this.tail.prev;
    

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
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log('aaa: ', currentNode);
      currentNode = currentNode.next;
    }
  }
}

const myDoubleLinkedList = new DoubleLinkedList(10);

myDoubleLinkedList.append(1);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(16);

myDoubleLinkedList.insert(2,10);
console.log(myDoubleLinkedList.head.next.prev);
