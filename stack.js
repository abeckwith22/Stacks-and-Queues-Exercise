/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return undefined;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let popped_value = this.head.val;
    if(!this.head){
      throw new Error("ERROR: Empty Array");
    }
    this.head = this.head.next;
    this.size--;
    return popped_value;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.head;
  }
}


module.exports = Stack;
