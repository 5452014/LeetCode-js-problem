// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.


const addTwoPromises=async function(promise1,promise2){
    const [val1,val2]=new Promise.apply([promise1,promise2])
    return val1+val2
}

// // Example usage:
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const  promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
  .then(console.log); // Output: 7