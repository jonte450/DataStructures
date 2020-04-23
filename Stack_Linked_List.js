class Node {
 constructor(value){
   this.value = value;
   this.next = null;
 }
}
 
class Stack {
 constructor(){
   this.top = null;
   this.bottom = null;
   this.length = 0;
 }
 
 peek() {
   if(this.top === null){
     return undefined;
   }
   return this.top.value;
 }
 
 push(value){
   //If the top is empty
   if(this.top === null){
     const new_node = new Node(value);
     this.top = new_node;
     this.bottom = new_node;
     this.length++;
     return this;
   }
 
   //If the top is not empty
   const new_node = new Node(value);
   new_node.next = this.top;
   this.top = new_node;
   this.length++;
   return this;
 }
 
 pop(){
   if(this.top === null){
     console.log("Hello");
     return undefined;
   }

   if(this.top === this.bottom){
     this.bottom = null;
   }
 
   let remove_node = this.top;
   let get_node = remove_node.next;
   this.top = get_node;
   this.length--;
   return this;
}
 
isEmpty(){
 return this.length === 0;
}
 
}
 
 
const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push('google');
myStack.push('Udemy');
console.log(myStack.push('Discord'));
console.log("Peek method: "+myStack.peek());
console.log(myStack.isEmpty());
 
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());

console.log(myStack.isEmpty());

