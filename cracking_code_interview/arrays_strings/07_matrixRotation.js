// LISTEN: 
// Rotate a N x N matrix ninety degrees clockwise. BONUS: Can you do it in constant space?

// EXAMPLE: 
// [                    [
//  [1, 2, 3],            [7, 4,1 ],
//  [4, 5, 6],   =>       [8, 5, 2],
//  [7, 8, 9]             [9, 6, 3]
// ]                    ]

// ** also demonstrated with 4 x 4

// BRUTE: 
// Pattern recognition => you can grab the bottom element of each column and then traverse upwards to grab (this builds each row in the new matrix)
// Push the new sub arr into a matrix arr

let rotateMatrix = function(matrix) {
  const rotatedMatrix = [];

  for (let col = 0; col < matrix.length; col++) {
    const rotatedSubArr = [];

    for (let row = matrix.length - 1; row >= 0; row--) {
      const ele = matrix[row][col];
      rotatedSubArr.push(ele);
    }

    rotatedMatrix.push(rotatedSubArr);
  }

  return rotatedMatrix;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateMatrix(matrix));
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(rotateMatrix(matrix));

// OPTIMIZE: 
  // BUD:
    //  BOTTLENECK: O(N^2) TIME && SPACE
    //  UNNECESSARY: 

