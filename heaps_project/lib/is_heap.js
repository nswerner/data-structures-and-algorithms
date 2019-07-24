// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx >= array.length) return true;
    if (array[idx] === null) return false;
    const leftIDX = idx * 2;
    const rightIDX = idx * 2 + 1;

    const leftChild = array[leftIDX] ? array[leftIDX] : -Infinity;
    const rightChild = array[rightIDX] ? array[rightIDX] : -Infinity;

    const leftHeap = isMaxHeap(array, leftIDX);
    const rightHeap = isMaxHeap(array, rightIDX);

    return (array[idx] > leftChild && array[idx] > rightChild 
            && leftHeap
            && rightHeap
        );
}

console.log(isMaxHeap([null, 10, null, 8, null, null, 6]))
console.log(isMaxHeap([null, 10, 8, null, 6, 6]))
console.log(isMaxHeap([null, 10, 8, 4, null, 6]))
    


module.exports = {
    isMaxHeap
};


//            5
//          /   \
//        4       4
//      /   \
//    3       3

//  true: 
//  1) because everything is filled in except the bottom layer
//  2) filled in from left to right
//  3) each idx is a max over idx * 2, idx * 2 + 1

//  [ null, 5, 4, 4, 3, 3] => true

// ------------------------

//          5
//        /
//       4
//     /   \
//    3     3

// false: 
// 1) every layer is not fill beside the leaf layer
// [ null, 5, 4, null, 3, 3] => false
// ∴ elements came after a null

// -----------------------

// [5, 4, 4, 5] => false
// 1) each node is not a max of its local heap

