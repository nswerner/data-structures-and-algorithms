// Listen, Example, Brute Force, Optimize, Implement, Test

// BUD, DIY, DS, BCR, Base Case, Simplify 

// LISTEN: Check if a string is a permutation of a palindrome

// EXAMPLE: 'acto cat' // => true ('taco cat')
  // Clarification: spaces do not matter

// BRUTE: We should be able to either sort the string and check chars for multiples of 2, or there is only one one

// OPTIMIZE:
  //BUD
    // - Bottleneck, Unnecessary Work, Duplicated Work
    // - Bottleneck => Sort (n log n)
    // - Unnecessary => Sort (take count in hash map)

  // DIY 
    // ???

  // DS
    // Stack for each char?
    // Heap X
    // Tree? Trie? Graph? X
    // HashMap? ✓
  
  // BCR - O(n) touch each element once

  // Base Case? 
    // One letter is a palindrome extends to three -OR-
    // two - extends to four when the letters on the caps are the same
    // Would need to rearrange letters, not a good strat here

  // Simplify? 
    // Don't see a way to simplifiy and generalize off the bat

// IMPLEMENT:

let getCharFrequencies = function(inputString) {
  const freq = {};

  for (let char of inputString) {
    if (char === ' ') continue;
    if (char in freq) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  return freq;
}

// console.log(getCharFrequencies('hello'));
// => { h: 1, e: 1, l: 2, o: 1 }

let permutationOfPalindrome = function(inputString) {
  const charFreq = getCharFrequencies(inputString);
  let isOne = 0;

  for (let char in charFreq) {
    if (charFreq[char] === 1) {
      isOne++;
    } else if (charFreq[char] % 2 !== 0) {
      return false; 
    }
  }

  return isOne <= 1;
}



console.log(permutationOfPalindrome('acto cat')); // => true ('taco cat')
console.log(permutationOfPalindrome('babbadook')); // => false 
console.log(permutationOfPalindrome('babbab')); // => true ('babbab')


