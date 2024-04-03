// Write a function argumentsLength that returns the count of arguments passed to it.
// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

var argumentsLength = function(...args) {
    return args.length
};

const res=argumentsLength(1, 2, 3)
console.log(res); // output: 3