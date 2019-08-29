// Listen, Example, Brute, Optimize, Walk Through, Implement, Test
// BUD (bottle neck, unnecessary work, duplicated work), DIY, Simplify and Generalize, Base Case and Build, Data Structures, Best Case Runtime

// Listen: 
// Given two strings, write an algorithm to decide if one is a permutation of the other

// Examples: 
// "abc", "bac" // => true
// 'abc', 'abca' // => false
// 'cat', 'dog' // => false

// Brute: 
// use the letters of the second string to try and build the first string, then check for equality - O(n*m)

// Optimize: 
//  1)  a.length === b.length
//  2)  put all the letters of first string into hash
//  3)  decrement the hash for each letter of second string
//  4)  make sure each key of the hash has a value of 0
//  O(3N), with some early returns if hash values go below 0

// could I make that more modular be reusing step 2 for the second string?
// a & b = {a: 1, b: 1, c: 1}
// check for equality of the values

// Walk Through: 
// s1 = 'abc', s2 = 'bac'
// length check
// a = {a: 1, b: 1, c: 1}
// b = {a: 1, b: 1, c: 1}
// Check both hashes for the same letter
// a[s1[0]] === b[s1[0]]
// a[s1[1]] === b[s1[1]]
// a[s1[2]] === b[s1[2]]
// true

const getCharFrequencies = function(string) {
  const freq = {};

  for (let char of string) {
    if (char in freq) {
      freq[char]++
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}


let checkPermutation = function(string1, string2) {
  if (string1.length !== string2.length) return false;

  const s1Freq = getCharFrequencies(string1);
  const s2Freq = getCharFrequencies(string2);

  const s1Set = new Set(string1);

  for (let char of s1Set) {
    if (s1Freq[char] !== s2Freq[char]) return false;
  }

  return true;
}


console.log(checkPermutation("abc", "bac")) // => true
console.log(checkPermutation('abc', 'abca')) // => false
console.log(checkPermutation('cat', 'dog')) // => false


console.time('set iteration');
checkPermutation("abcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbd",
  "bacccccbbbddcbdcaabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbd"); 
console.timeEnd('set iteration');

// 0.453ms with set creation and iteration

checkPermutation = function (string1, string2) {
  if (string1.length !== string2.length) return false;

  const s1Freq = getCharFrequencies(string1);
  const s2Freq = getCharFrequencies(string2);

  for (let char of string1) {
    if (s1Freq[char] !== s2Freq[char]) return false;
  }

  return true;
}

console.time('string iteration');
checkPermutation("abcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbd",
 "bacccccbbbddcbdcaabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbdabcccccccccbbbbbd"); 
console.timeEnd('string iteration');

// 0.236 ms with string iteration



// ∴ String Iteration faster when string is small or double values are not present, 
// but what about when a lot of dupes are present???
// string iteration still faster by 50%!!!

