// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
   let before_one = 1;
   let before_two = 0;
   let fibonacci_number = 1;
   for(let loop = 0; loop < n; loop++){
        before_two = before_one;
        before_one = fibonacci_number;
        fibonacci_number = before_one + before_two;
   }
   return (fibonacci_number-before_one);

}
console.log("Fibonacci Iterative: " +fibonacciIterative(7));

function fibonacciRecursive(n) {
  if(n === 1){
    return n;
  }
  if(n === 0){
    return n;
  }
   
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log("Fibonacci Recursive: "+ fibonacciRecursive(7));