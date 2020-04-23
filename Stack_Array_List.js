class Stack {

  constructor(){
    this.stack_list = [];
  }
  peek() {
    return this.stack_list[0];
  }

  push(value){
    this.stack_list.unshift(value)
  return this;
  }
  pop(){
    this.stack_list.shift();
    return this;
  }
   isEmpty(){
     return this.stack_list.length === 0;
   }
}

const myStack = new Stack();
myStack.peek();
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
//myStack.pop();
//myStack.pop();


//Discord
//Udemy
//google
