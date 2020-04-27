const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4,0];
 
function mergeSort (array) {
 if (array.length === 1) {
   return array
 }
 
 // Split Array in into right and left
 let half_number = Math.ceil(array.length / 2);
 let left = array.slice(0,half_number);
 let right = array.slice(half_number);
  return merge(mergeSort(left),mergeSort(right));
 
}
 
function merge(left, right){
let left_index = 0;
let right_index = 0;
let merged = [];
 
while(left_index < left.length && right_index < right.length){
 
 console.log("Console.log: "+"merge arrays!")
 console.log("Left array: " + left);
 console.log("Right array: " + right);
 
 if(left[left_index] > right[right_index]){
   merged.push(right[right_index]);
   right_index++;
 }
 
 if (right[right_index] > left[left_index]){
   merged.push(left[left_index]);
   left_index++;
 }
 }
 
console.log("Merged Array below: ");
console.log(merged);
return merged.concat(right.slice(right_index).concat(left.slice(left_index)));
}
 
const answer = mergeSort(numbers);
console.log(answer);
 
 
