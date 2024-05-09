/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return undefined;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let first_node = this.head.val;
    if(!this.head){
      throw new Error("ERROR: queue is empty");
    }
    this.head = this.head.next;
    this.size--;
    return first_node;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.head;
  }
}

module.exports = Queue;
