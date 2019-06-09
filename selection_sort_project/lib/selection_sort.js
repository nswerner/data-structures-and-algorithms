function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minIdx = j;
            }
        }

        swap(arr, i, minIdx);
    }

    return arr;
}

module.exports = {
    selectionSort,
    swap
};