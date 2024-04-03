// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// If the length of the array is 0, the function should return init.

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10

var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

let fn = function(acc, curr) {
    return acc + curr; // Added return statement
};

const arr = [1, 2, 3, 4, 5]; // Define the array before using it
const init = 0;
const res = reduce(arr, fn, init);
console.log(res); // Output: 15
