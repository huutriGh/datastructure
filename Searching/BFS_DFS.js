class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //         10
  //     9        11
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          return;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // option 1: No right chile
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          // option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }

    return false;
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      console.log(currentNode);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchRecursive(queue = [], list = []) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    console.log(currentNode);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }

  DFSInorder() {
    return this.traverInOrder(this.root, []);
  }
  DFSPostorder() {
    return this.traverPostOrder(this.root, []);
  }

  DFSPreorder() {
    return this.traverPreorder(this.root, []);
  }

  traverInOrder(node, list = []) {
    if (node.left) {
      this.traverInOrder(node.left, list);
    }
    list.push(node.value);

    if (node.right) {
      this.traverInOrder(node.right, list);
    }
    return list;
  }

  traverPreorder(node, list = []) {
    list.push(node.value);
    if (node.left) {
      this.traverPreorder(node.left, list);
    }

    if (node.right) {
      this.traverPreorder(node.right, list);
    }
    return list;
  }

  traverPostOrder(node, list) {
    if (node.left) {
      this.traverPostOrder(node.left, list);
    }

    if (node.right) {
      this.traverPostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

// console.log(tree);
// console.log(JSON.stringify(tree.root));
// tree.lookup(9);
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchRecursive([tree.root], []));

console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
