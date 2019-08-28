// Listen, Example, Brute Force, Optimize, Walk Through, Implement, Test
// BUD, DIY, DS, BCR, Simplify, Base Case

// Listen:
// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional characters and that you are given the 'true' length of the string. 
// Why are they giving me the 'true' length?

// Example: 
// 'Mr John Smith    ', 13
// 'Mr%20John%20Smith'

// Brute:
// Truncate trailing white space, .split() on space, .join() on %20

// O(2n)
// O(n) - spacesIDX [2 + 2*0, 7+(2*1), next + (2*x)] /// Mr%20John___
// O(n) Splice all spaces with '%20'

// Optimize
// BUD  - Bottleneck ? Splicing; Unneccesary Work ? spacesIDX; Duplicate Work ? Finding all the spaces and then splicing separately;

// DIY  - come across space, replace with %20 and shift everything else over

// DS   - Stack or Queue? overkill
//      - HashMap? how do we get value from this?
//      - LinkedList? No
//      - Tree, Tries, Graph? No

// BCR  - O(1n) - have to touch every element
// could do it in O(n) space in one pass

// Mr John...
// Mr%20hn...
// Mr%20John...

let URLify = function(inputString, trueLength) {
  let url = "";

  for (let i = trueLength - 1; i >= 0; i--) {
    const char = inputString[i];

    if (char === ' ') {
      url = '%20' + url;
    } else {
      url = char + url;
    }
  }

  return url;
}

console.log(URLify('Mr John Smith    ', 13));