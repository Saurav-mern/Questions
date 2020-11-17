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
// const fib = (n) => {
//   const array = [0,1]
//   for(let i = 2; i <= n; i++){
//     const a = array[i-1]
//     const b = array[i-2]
//     array.push(a+b)
//   }
//   console.log(array)
//   return array[n]
// }


const slowFib = (n) => {
  if(n<2){
    return n
  }
  return slowFib(n-1) + slowFib(n-2) 
}

const memoizer = (fn) => {
   const cache = {}
   return function (...args) {
      if(cache[args]) {
        return cache[args]
      } 

      const result = fn.apply(this, args)
      cache[args] = result

      return result
   }
}

const fib = memoizer(slowFib)

// const fib = (n) => {
//   if(n<2){
//     return n
//   }
//   return fib(n-1) + fib(n-2) 
// }

//Another Way Of Memoization

function fib (n, prevValues = []) {
  if(prevValues[n] != null){
    return prevValue[n]
  }
  let result 
  if (n <= 2){
    result = 1
  } else {
    result = fib(n-1, prevValues) + fib(n-2, prevValues)
  }
  prevValues[n] = result
  return result
}

module.exports = fib;
