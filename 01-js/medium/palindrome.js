/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // trim and convert to lower case
  cleanStr = str.replace(/[\s]|[^a-zA-Z0-9]/g, '').toLowerCase();
//   console.log("cleanStr: ", cleanStr);

  reverseStr = cleanStr.split('').reverse().join('');
//   console.log("reverseStr: ", reverseStr);
  
  return cleanStr == reverseStr
}

const str = "Able, was I ere I saw Elba!";
console.log(isPalindrome(str));

module.exports = isPalindrome;

