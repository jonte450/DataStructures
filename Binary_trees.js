class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }


  insert(value){
    //If the root is null
    //Then make the value as an root.
    const new_node = new Node(value);

    if(this.root === null){
      //console.log("Hello");
      this.root = new_node;
      return this;
    }

    let search = this.root;

    while(true){

      if(search.value < value){

        if(search.right === null){
           search.right = new_node;
           return this;
         }

         search = search.right;

       }

       else if(search.value > value){

          if(search.left === null){
            search.left = new_node;
            return this;
          }

          search = search.left;
       }
    }
  }

  lookup(value){

    if(this.root === null){
      return null;
    }

   let search_node = this.root;

   while(true){

     if(search_node === null){
       return false;
     }

     if(search_node.value === value){
       return search_node;
     }

     if(search_node.value > value){

       if(search_node.left === null){
         return false;
       }
       search_node = search_node.left;
     }

     if(search_node.value < value){

       if(search_node.right === null){
         return false;
       }

       search_node = search_node.right;
     }

   }
  }
  findMinRight() {
    let find_min = this.root.right;
    while(find_min.left != null){
      find_min = find_min.left;
    }
    return find_min;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        } else {

          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

}

const tree = new BinarySearchTree();

//Tests for insert method in the Binary Tree
tree.insert(9);
tree.insert(4);
tree.insert(6)
console.log(tree.root);
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root));

//Tests for lookup-method in Binary Search Trees
console.log("1 in tree: ");
console.log(tree.lookup(1));
console.log("3 in tree: ");
console.log(tree.lookup(3));
console.log("6 in tree: ");
console.log(tree.lookup(6));
console.log("10 in tree: ");
console.log(tree.lookup(10));
console.log("170 in tree: ");
console.log(tree.lookup(170));
console.log("15 in tree: ")
console.log(tree.lookup(15));
console.log("7 in tree: ")
console.log(tree.lookup(7));

console.log("20 in tree: ")
console.log(tree.lookup(20));

tree.remove(20);

console.log("20 in tree: ")
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

//Help function to help visualize the builded tree.
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}