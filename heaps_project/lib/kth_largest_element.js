/*
  Leet Code #215
    - https://leetcode.com/problems/kth-largest-element-in-an-array/
*/

const { MaxHeap } = require('./max_heap');


// class MaxHeap {
//   constructor() {
//     this.array = [null];
//   }

//   getParent(idx) {
//     return Math.floor(idx / 2);
//   }

//   getLeftChild(idx) {
//     return idx * 2;
//   }

//   getRightChild(idx) {
//     return idx * 2 + 1;
//   }

//   siftUp(idx) {
//     if (idx === 1) return;

//     const parentIDX = this.getParent(idx);
//     const parent = this.array[parentIDX];

//     if (this.array[idx] > parent) {
//       [this.array[parentIDX], this.array[idx]] = [this.array[idx], this.array[parentIDX]];
//       this.siftUp(parentIDX);
//     }
//   }

//   insert(val) {
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);
//   }

//   siftDown(idx) {
//     const leftIDX = this.getLeftChild(idx);
//     const rightIDX = this.getRightChild(idx);

//     const leftChild = this.array[leftIDX] ? this.array[leftIDX] : -Infinity;
//     const rightChild = this.array[rightIDX] ? this.array[rightIDX] : -Infinity;

//     if (this.array[idx] > leftChild && this.array[idx] > rightChild) return;

//     let swapIDX;
//     if (leftChild > rightChild) {
//       swapIDX = leftIDX;
//     } else {
//       swapIDX = rightIDX;
//     }

//     [this.array[idx], this.array[swapIDX]] = [this.array[swapIDX], this.array[idx]]
//     this.siftDown(swapIDX);
//   }

//   deleteMax() {
//     if (this.array.length === 2) return this.array.pop();
//     if (this.array.length === 1) return null;

//     const max = this.array[1];
//     this.array[1] = this.array.pop();
//     this.siftDown(1);

//     return max;
//   }

// }

var createHeap = function (array) {
  const heap = new MaxHeap();
  array.forEach(ele => heap.insert(ele));
  return heap;
}

var findKthLargest = function (nums, k) {
  const heap = createHeap(nums);

  for (let idx = k; idx > 1; idx--) {
    heap.deleteMax();
  }

  return heap.deleteMax();

};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 