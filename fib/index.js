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
const fib = (n) => {
  const array = [0,1]
  for(let i = 2; i <= n; i++){
    const a = array[i-1]
    const b = array[i-2]
    array.push(a+b)
  }
  console.log(array)
  return array[n]
}

fib(8)
// const fibonacci = (n) => {
//   if(n<2){
//     return n
//   }
//   return fibonacci(n-1) + fibonacci(n-2) 
// }
function fib(n) {}

module.exports = fib;
