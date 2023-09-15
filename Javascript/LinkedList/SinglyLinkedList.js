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
    // 1  2   3
    // 2  1   3
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
  reversev2() {
    if (!this.head.next) {
      return;
    }
    // null 10  1  5   16
    let previous = null;
    let current = this.head;
    let next;
    const tail = this.head;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
    this.tail = tail;
    console.log(this.printlist());
  }
  recursiveReverse(head) {
    let first;

    if (head == null || head.next == null) {
      return head;
    }

    first = this.recursiveReverse(head.next);
    head.next.next = head;
    head.next = null;
    this.head = first;
    return first;
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
// 1 --> 2 --> 3
const FindMiddle = (head) => {
  let count = 0;
  let mid = head;

  while (head != null) {
    // Update mid, when 'count'
    // is odd number
    if (count % 2 == 1) {
      mid = mid.next;
    }

    ++count;
    head = head.next;
  }

  // If empty list is provided
  if (mid != null) {
    console.log(mid);
  }
};

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);

FindMiddle(myLinkedList.head);


// myLinkedList.recursiveReverse(myLinkedList.head);
//myLinkedList.reverse();
//console.log(myLinkedList.printlist());
