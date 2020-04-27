const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let temp;
  let current;
  let current_next;
  for(let index = 0; index < array.length; index++){
    for(let index_plus_one = index +1; index_plus_one < array.length; index_plus_one++){
      if(array[index] > array[index_plus_one]){
        temp = array[index_plus_one];
        array[index_plus_one] = array[index];
        array[index] = temp;

      }
    }
  }

}

bubbleSort(numbers);
//[0,1,2,4,5,6,44,63,87,99,283]
console.log(numbers);