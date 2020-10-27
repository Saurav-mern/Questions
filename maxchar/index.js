// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var obj ={}
  var maxValue = 0
  var maxChar = ''
  for(let i of str){
    if(obj.hasOwnProperty(i)){
      obj[i]++
    } else {
      obj[i] = 1
    }
  }
  for(let j in obj){
    if(obj[j]>maxValue){
      maxValue = obj[j];
      maxChar = j
    }
  }
  return maxChar
}

module.exports = maxChar;
