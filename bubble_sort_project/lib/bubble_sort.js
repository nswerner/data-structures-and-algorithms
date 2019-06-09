function swap(array, idx1, idx2) {
    const placeholder = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = placeholder;
    return array;
}

function bubbleSort(array) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let idx = 0; idx < array.length - 1; idx++) {
            if (array[idx] > array[idx + 1]) {
                swap(array, idx, idx + 1);
                swapped = true;
            }
        } 
    }

    return array;
}


module.exports = {
    bubbleSort,
    swap
};