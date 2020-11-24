// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// Solutin 1
// const reverseInt = (n) => {
//  return parseInt(n.toString().split('').reverse().join(''))*Math.sign(n)
// }

function reverseInt(n){
  return parseFloat([...n.toString()].reverse().join(''))*Math.sign(n)
}

module.exports = reverseInt;
