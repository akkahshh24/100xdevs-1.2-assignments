/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
/: Delimiters used to define the start and end of the regular expression literal.
[^a-zA-Z]: This is a character class denoted by square brackets []. It matches any character that is not in the specified range or set. In this case, it matches any character that is not a lowercase letter (a to z) or an uppercase letter (A to Z).
/g: This is a flag that stands for "global," indicating that the regular expression should be applied globally to the entire string, rather than stopping after the first match.
*/

function isAnagram(str1, str2) {
  // check if length is same or not
  if (str1.length != str2.length) {
    return false;
  }

  // remove non-alphabetic characters from the string and convert it to lower case
  const cleanedStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const cleanedStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // convert string to array, sort the string and then join array to convert to string
  const sortedStr1 = cleanedStr1.split('').sort().join('');
  const sortedStr2 = cleanedStr2.split('').sort().join('');
  // console.log("sortedStr1: ", sortedStr1);
  // console.log("sortedStr2: ", sortedStr2);

  return sortedStr1 == sortedStr2
}

const str1 = "hello";
const str2 = "world";

console.log(isAnagram(str1, str2));

module.exports = isAnagram;
