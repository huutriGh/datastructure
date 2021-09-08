class Stack {
  constructor() {
    this.value = [];
  }

  peek() {
    if (this.value.length === 0) {
      return null;
    }
    this.value[this.value.length - 1];
  }

  push(value) {
    this.value.push(value);
  }

  pop(value) {
    this.value.pop();
  }
}
