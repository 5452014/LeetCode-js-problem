function missingElement(arr, n) {
    let sumWithMissingElement = 0;
    for (let i = 0; i < n - 1; i++) {
        sumWithMissingElement += arr[i];
    }
    let totalSum = (n * (n + 1)) / 2;
    console.log(totalSum);
    console.log(sumWithMissingElement);
    let missingElement = totalSum - sumWithMissingElement;
    return missingElement;
}

let arr = [1, 2, 4, 6, 3, 7, 8];
let n = arr.length + 1;

let res = missingElement(arr, n);
console.log(res);


