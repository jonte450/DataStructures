// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {

  if(number === 1){
     return number
  }

  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for(let fact = 1; fact <=number; fact++){
    answer *= fact;
  }
  return answer;
}

console.log("Recursive function: " +findFactorialRecursive(6));
console.log("Iterative function: " +findFactorialIterative(6));