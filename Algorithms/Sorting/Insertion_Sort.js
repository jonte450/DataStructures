const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let len = array.length;
  for(let index = 1; index < len; index++){
    let tmp_var = array[index];
    let begin_index = index-1;
    while(begin_index >= 0 && array[begin_index] > tmp_var ){
      array[begin_index+1] = array[begin_index];
      begin_index--;
    }
    array[begin_index+1] = tmp_var;
    console.log("Array: " + array);
  }

}

insertionSort(numbers);
console.log(numbers);