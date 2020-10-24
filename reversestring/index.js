// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//   var arr = []
//   var ar1 = str.split('')
//   for(var i = ar1.length-1; i >=0; i--){
//     arr.push(ar1[i])
//   }
//   return arr.join('')
// }

//   function reverse(str){
//   return [...str].reverse().join('')} 

function reverse(str){
  return str.split('').reduce((acc,crv)=>{
   return crv + acc
  },'')
}

// function reverse(str){
//     let reversedStr = ''
//     for(let character of str){
//        reversedStr = character + reversedStr;
//     }
//     return reversedStr
// }



module.exports = reverse;
