// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal"

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

var expect = (val) => {
   return {
    toBe: function(val2) {
        if (val2 !== val) {
            throw new Error('Not Equal');
        } else {
            return true;
        }
    },
    notToBe: function(val2) {
      if (val === val2) {
        throw new Error('Equal');
      } else {
        return true;
      }
    }
   };
};

let res = expect(5).toBe(5); // true
let res2 = expect(5).notToBe(5); // throws "Equal"
console.log(res);
console.log(res2);
