// const chai = require('chai');
// chai.use(require('chai-spies'));
// const { expect, spy } = chai;
// const sinon = require('sinon');

// const { MaxHeap } = require('../lib/max_heap');
// const { heap_sort } = require('../lib/heap_sort')


// describe('heap_sort', () => {
// 
 
//   describe('#deleteMax()', () => {
//     it('should delete the maximum element from the heap', () => {
//       let heap = new MaxHeap();
//       heap.array = [null, 100, 50, 27, 32, 42, 24];
//       heap.deleteMax();
//       expect(heap.array.includes(100)).to.equal(false);
//     });


//     context('when the heap contains a single element', () => {
//       it('should remove and return that element', () => {
//         let heap = new MaxHeap();
//         heap.array = [null, 42];
//         expect(heap.deleteMax()).to.equal(42);
//         expect(heap.array).to.eql([null]);
//       });
//     });



