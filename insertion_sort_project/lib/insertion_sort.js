function insertionSort(arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        let currentElement = arr[idx];

        for (let jdx = idx - 1; jdx >= 0 && currentElement < arr[jdx]; jdx--) {
            arr[jdx + 1] = arr[jdx];
            arr[jdx] = currentElement;
        }

    }

    return arr;
}

module.exports = {
    insertionSort
};