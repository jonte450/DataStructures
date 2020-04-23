class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value){
    let new_queue_element = new Node(value);
    if(this.length === 0){
      this.first = new_queue_element;
      this.last = new_queue_element;
      this.length++;
      return this;
    }else {
      this.last.next = new_queue_element;
      this.last = new_queue_element;
      this.length++;
      return this;
    }

  }

  dequeue(){
    if(this.length === 0){
      return null;
    }

    if(this.length === 1){
      this.first = null;
      this.last =  null;
      return null;
    }
  
    this.first = this.first.next;
    this.length--;
    return this;
  }
  
  isEmpty(){
    return this.length === 0;
  }
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);