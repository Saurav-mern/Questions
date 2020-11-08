// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

   const sanitizeStr = function(str){
        return str.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('')
        }

   function anagrams(stringA, stringB){
     var stringA = sanitizeStr(stringA)
     var stringB = sanitizeStr(stringB)
     if(stringA === stringB){
       return 'True'
     } else {
       return 'False'
     }
   }

module.exports = anagrams;
