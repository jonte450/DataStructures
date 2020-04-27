const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
 
function quickSort(array) {
 
 //Base Case
 if(array.length === 0){
   return [];
 }
 
//Take a Random Value to optimize the function
const pivot = array[Math.floor(Math.random() * array.length)];
 
//Create The Right Side and The Left Side
 let right = [];
 let left = [];
  for(let index = 0; index < array.length; index++){
 
   //Push the lesser value to the Left Array
   if(pivot > array[index]){
     left.push(array[index]);
   }
  
   //Push the higher value to the Right Value
   if(pivot < array[index]){
     right.push(array[index]);
   }
 }
 array = quickSort(left).concat(pivot,quickSort(right));
 return array;
}
 
sorted_numbers = quickSort(numbers);
console.log(sorted_numbers);
