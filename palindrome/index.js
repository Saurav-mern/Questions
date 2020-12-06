// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = (str) => {
//   str1 = str.split('').reduce((a,c)=>{
//     return c + a
//   },'')
//   if(str1 == str){
//     return true
//   } else {
//     return false
//   }
// }

//  const palindrome = (str) => {
//   str1 = str.split('').reverse().join('')
//   // return str1 === str;  will return boolean value
//   if(str1 == str){
//     return true
//   } else {
//     return false
//   }
// }

 const palindrome = (str) => {
  return [...str].every((char, index) => {
      return char === str[str.length - index -1]
  })
}

const palindrome = (str) => {
  str1 = str.split('').reduce((a,c)=>{
    return c + a
  },'')
  if(str1 == str){
    return true
  } else {
    return false
  }
}


module.exports = palindrome;
