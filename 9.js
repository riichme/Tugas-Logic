function minMax(arr) {
    let min = arr[0];
    for (let k = 1; k < arr.length; k++) {
        if (arr[k] < min) {
            min = arr[k];
            }
    }

    let max = arr[0];
    for (let k = 1; k < arr.length; k++) {
        if (arr[k] > max) {
            max = arr[k];
        }
    }

    return `low : ${min}, high : ${max}`
}

console.log(minMax([4,2,6,88,3,11]))