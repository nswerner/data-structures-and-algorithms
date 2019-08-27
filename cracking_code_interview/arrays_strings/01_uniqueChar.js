// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

// Listen, Example, Brute, Optimize, Walk Through, Implement, Test
// BUD (bottlenecks, unnecessary work, duplicated work), DIY, Simplify and Generalize, Base Case, DS, BCR

// Brute => 0(n^2) - inner loop returns false if second occurence of char is found, return true @ the end
// Optimize => set.has(char) ? return false : set.add(char)
// No additional data structures => sacrifice time for space => sort and look for repeats

let hasUniqueChar = function(string) {
  const charSet = new Set();

  for (let i = 0; i < string.length; i++) {
    if (charSet.has(string[i])) return false;
    charSet.add(string[i]);
  }

  return true;
}

console.log(hasUniqueChar("hello")) //  => false
console.log(hasUniqueChar("James")) // => true
console.log(hasUniqueChar("Jj")) // => true


hasUniqueChar = function(string) {
  const sortedString = string.split('').sort();
  
  for (let i = 0; i < sortedString.length; i++) {
    const char = sortedString[i];
    const next = sortedString[i+1];

    if (char === next) return false;
  }

  return true;
}

console.log(hasUniqueChar("hello")) //  => false
console.log(hasUniqueChar("James")) // => true
console.log(hasUniqueChar("Jj")) // => true




