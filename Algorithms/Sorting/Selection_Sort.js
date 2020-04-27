const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
let length = array.length;
let temp_var;
for(let index = 0; index < length; index++){

  let min = index;
  let temp_var = array[index];

  for(let index_plus_one = index + 1; index_plus_one < length; index_plus_one++){

    if(array[index_plus_one] < array[min]){
      min = index_plus_one
    }
  }
  
  array[index] = array[min];
  array[min] = temp_var; 
}
  
}

selectionSort(numbers);
console.log(numbers);