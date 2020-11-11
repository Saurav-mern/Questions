// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//My take on fibonacci series
// const fibonacci = (n) => {
//   const array = [0,1]
//   for(let i = 2; i < n+1; i++){
//     array.push(array[i-2]+array[i-1])
//   }
//   console.log(array[n])
//   console.log(array)
// }
// const fibonacci = (n) => {
//   if(n<2){
//     return n
//   }
//   return fibonacci(n-1) + fibonacci(n-2) 
// }
function fib(n) {}

module.exports = fib;
