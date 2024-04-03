// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    const uniqueElement = a.reduce((acc, n) => acc ^ n, 0);
    return [uniqueElement];
}

console.log(lonelyinteger([1, 2, 2, 3, 3,4])); // Output: [1]

