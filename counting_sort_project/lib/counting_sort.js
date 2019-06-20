function countingSort(arr, max) {
    const counterArray = new Array(max+1).fill(0);
    for (let idx = 0; idx < arr.length; idx++) {
        const num = arr[idx];
        counterArray[num] += 1;
    }

    const sortedArray = [];
    for (let idx = 0; idx < counterArray.length; idx++) {
        while (counterArray[idx] > 0) {
            sortedArray.push(idx);
            counterArray[idx] -= 1;
        }
    }

    return sortedArray;
}


module.exports = {
    countingSort
};