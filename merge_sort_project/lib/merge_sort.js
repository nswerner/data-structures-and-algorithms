function mergeSort(array) {
    if (array.length <= 1) return array;
    const midIdx = Math.floor(array.length / 2);

    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}


function merge(array1, array2) {
    const merged = [];

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        if (ele1 < ele2) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }
    }

    return merged;
}


module.exports = {
    merge,
    mergeSort
};