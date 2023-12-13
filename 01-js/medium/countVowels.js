/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // convert string to lowercase
    lowerCaseStr = str.trim().toLowerCase();
    
    // use a regular expression to vount vowels in a string
    const vowelCount = lowerCaseStr.match(/[aeiou]/g);
    // console.log("vowelCount: ", vowelCount)
    
    return vowelCount ? vowelCount.length : 0; 
}

const str = "aeiou";

console.log(countVowels(str));

module.exports = countVowels;