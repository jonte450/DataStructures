// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
 
class LinkedList {
 constructor(value) {
   this.head = {
     value: value,
     next: null
   };
   this.tail = this.head;
   this.length = 1;
 }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
loop_linked_list(index) {
    let search = 0;
    let get_node = this.head;
    while(get_node != null){
      if(search == index){
        return get_node;
      }
      search++;
      get_node = get_node.next;
    }
}

    insert(index, value){

    //If the insert value is more than the actual length
    if(index > this.length){
      return this.append(value)
    }

    //Get the requsted node that is after the Requested
    //Putting this in a Loop because of DRY
    let get_node = this.loop_linked_list(index-1);
    let node_after = get_node.next
    const new_node = {value: value , next: null};
    get_node.next = new_node;
    new_node.next = node_after;
    this.length++;
    return this.printList();
  }

  remove(index){
    let get_node = this.loop_linked_list(index);
    let get_node_after = this.loop_linked_list(index-1);
    get_node_after.next = get_node.next;
    this.length--;
  }

  prepend(value){
    if(this.head === undefined){
      this.head.value = value;
      this.head.next = null;
      this.length = 1;
    }else{
      var new_node = {value: value , next: null};
      new_node.next = this.head;
      this.head = new_node;
      this.length++;
      return this;
    }
  }

 append(value) {
   if(this.head === undefined){
     this.head.value = value;
     this.head.next = null;
     this.tail = this.head;
     this.length = 1;
   }else{
     var new_node = {value: value ,next: null};
     this.tail.next = new_node;
     this.tail = new_node;
     this.length++;
     return this;
   }
 }
 reverse(){
   if(this.length === 1){
     return this.head;
   }

   let first = this.head;
   this.tail = this.head;
   let second = first.next;
   while(second != null){
     const third = second.next;
     second.next = first;
     first = second;
     second = third;
   }
   this.head.next = null;
   this.head = first;
 }
}
 

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.length);
myLinkedList.printList();
//myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();