// LISTEN:
// Given a string, compress it in the following manner "aabbccccdAAaa" => 'a2b2c4d1A2a2'.
// If the compressed version is longer than the original, return the original.

// EXAMPLE:
// "aabbccccdAAaa" => 'a2b2c4d1A2a2'
// 'cccca' => 'c4a1'
// 'abcdee' => 'abcdee'

// BRUTE:
// same as DIY, go through the string and count the current char until it changes

// OPTIMIZE: 
// briefly talked about possible unnecessary work when the string compression is longer
// - but that operation would probably be linear

// WALKTHROUGH: 
// use current and next => if current != next, append to the string with the count

// IMPLEMENT: 


let stringCompression = function(inputString) {
  let compressedString = "";
  let counter = 0;
  
  for (let i = 0; i < inputString.length; i++) {
    const current = inputString[i];
    const next = inputString[i+1];
    counter++;

    if (current !== next) {
      compressedString += current + counter;
      counter = 0;
    }
  }

  return compressedString.length < inputString.length ? compressedString : inputString;
}

// console.log(stringCompression("aabbccccdAAaa")) // => 'a2b2c4d1A2a2'
// console.log(stringCompression("cccca"))//  => 'c4a1'
// console.log(stringCompression("abcdee"))//  => 'abcdee' ('abcdee'.length < 'a1b1c1d1e2'.length)

console.time('string +=');
stringCompression("aabbccccdAAaa") // => 'a2b2c4d1A2a2'
console.timeEnd('string +=');

stringCompression = function(inputString) {
  const compressed = [];
  let counter = 0;

  for (let i = 0; i < inputString.length; i++) {
    const current = inputString[i];
    const next = inputString[i + 1];
    counter++;

    if (current !== next) {
      compressed.push(`${current + counter}`);
      counter = 0;
    }
  }

  const compressedString = compressed.join('');
  return compressedString.length < inputString.length ? compressedString : inputString;
}

console.log(stringCompression("aabbccccdAAaa"))
console.time('array joins');
stringCompression("aabbccccdAAaa") // => 'a2b2c4d1A2a2'
console.timeEnd('array joins');
