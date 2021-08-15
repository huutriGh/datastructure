//Hash function: simply function that generate a value of fiexed length for each input that it gets.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    let address = this._hash(key);

    const currentBucket = this.data[address];

    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          keysArray.push(currentBucket[j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
