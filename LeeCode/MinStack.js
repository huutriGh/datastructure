/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.proTop = null;
  this.bottom = null;
  this.min = null;
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let newNode = { val: val, next: null };
  if (this.proTop === null) {
    this.proTop = newNode;
    this.bottom = newNode;
  } else {
    let holdingPoiter = this.proTop;
    this.proTop = newNode;
    this.proTop.next = holdingPoiter;
  }
  if (this.min === null) {
    this.min = val;
  } else {
    this.min = this.min > val ? val : this.min;
  }
  this.length++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.length === 0) {
    return;
  }

  if (this.proTop === this.bottom) {
    this.bottom = null;
    this.min = null;
  }

  this.proTop = this.proTop.next;
  this.length--;

  if (this.length > 0) {
    this.min = this.proTop.val;
    let holdingPoiter = this.proTop;
    while (holdingPoiter) {
      if (this.min > holdingPoiter.val) {
        this.min = holdingPoiter.val;
      }
      holdingPoiter = holdingPoiter.next;
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.proTop.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

//["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
//[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]

let obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
console.log(obj.top());
obj.pop();
console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());
obj.pop();
obj.push(2147483647);
console.log(obj.top());
console.log(obj.getMin());
obj.push(-2147483648);
console.log(obj.top());
console.log(obj.getMin());
obj.pop();
console.log(obj.getMin());
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.proTop()
 * var param_4 = obj.getMin()
 */
