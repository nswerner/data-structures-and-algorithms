
// What digit is at the given place value in num?
function getDigitFrom(num, place) {
   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}


// How many digits are in num?	
function getIntLength(num) {
    return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1    
}


// How many digits does the integer with the most digits have ?
function getMaxDigits(nums) {
    let max = 0;
    for (let idx = 0; idx < nums.length; idx ++) {
        max = Math.max(max, getIntLength(nums[idx]))
    }

    return max;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    let numOfSorts = getMaxDigits(arr);
    
    for (let sortCount = 0; sortCount < numOfSorts; sortCount ++) {
        const buckets = new Array(10).fill().map( bucket => new Array() );
        for (let idx = 0; idx < arr.length; idx ++) {
            let num = arr[idx];
            let digit = getDigitFrom(arr[idx], sortCount);

            buckets[digit].push(num);
        }

      arr = [].concat(...buckets);
    }

    return arr;
}

module.exports = {
    radixSort
};