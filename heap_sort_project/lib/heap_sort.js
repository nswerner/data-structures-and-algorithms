const { MaxHeap } = require('./max_heap');


// Easy implementation:

// time complexity - O(n*logn)
//    O(n) insert time
//    O(n * logn) to delete each max (n) and sift down (logn)
// ∴  O(n + n*logn) => O(n*logn)

// space complexity - O(n)
//    O(n) for the Heap
//    O(n) for the Result Array
// ∴  O(n + n) => O(n)

const heap_sort = function(array) {
  const heap = new MaxHeap();
  array.forEach( ele => heap.insert(ele));

  const size = array.length;
  const result = [];

  for (let idx = 0; idx < size; idx++) {
    result.push(heap.deleteMax());
  }
  
  return result;
}


//////////////////////////////
// Inplace operations can lead to O(1) space complexity!


const swap = function(array, i, j) {
  [ array[i], array[j] ] = [ array[j], array[i] ];
}


const heapify = function(array, n, i) {
  const leftIDX = i * 2 + 1;
  const rightIDX = i * 2 + 2;

  let leftVal = array[leftIDX];
  let rightVal = array[rightIDX];

  if (leftIDX >= n) leftVal = -Infinity;
  if (rightIDX >= n) rightVal = -Infinity;
    
  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIDX;
  if (leftVal > rightVal) {
    swapIDX = leftIDX;
  } else {
    swapIDX = rightIDX;
  }

  swap(array, i, swapIDX);
  heapify(array, n, swapIDX);
}

const heapSort = function(array) {
  
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, endOfHeap, 0);
    heapify(array, endOfHeap, 0);
  }
}


module.exports = {
  heap_sort
};