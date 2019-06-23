function binarySearch(array, target) {
    if (array.length === 0) return false;

    const midIdx = Math.floor(array.length / 2);
    const left = array.slice(0, midIdx);
    const right = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(left, target);
    } else if (target > array[midIdx]) {
        return binarySearch(right, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    const midIdx = Math.floor(array.length / 2);
    const left = array.slice(0, midIdx);
    const right = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
       return binarySearchIndex(left, target);
    } else if (target > array[midIdx]) {
        let searchRight = binarySearchIndex(right, target);
        if (searchRight === -1) return -1;
        return midIdx + 1 + searchRight;
    } else {
        return midIdx;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};