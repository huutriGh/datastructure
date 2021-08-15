//Lookup O(1)
//Push O(1)
//Insert O(n)
//Delete O(n)
// Store some data and iterate over it, that is go one by one, step by step array is the best choise
// Static array: specigfy the number of elemnts your arrry will hold
//Dynamic array: copy and rebuild an array at a new location, which more memory, if we wanted more memory


//Pros: Fast lookup, Fast push/pop, ordered.
//Cons: slow insert, slow deletes, fixed size if static array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // 0 , 1, 2, 3, 4, 5
  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }
  shiftItem(index) {
    for (let i = index; i < this.length; i++) {
      const element = this.data[i + 1];
      this.data[i] = element;
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

newArray.push('hi');
newArray.push('you');
newArray.push('!');
// console.log(newArray);
// newArray.pop();
console.log(newArray);
newArray.delete(1);
console.log(newArray);
