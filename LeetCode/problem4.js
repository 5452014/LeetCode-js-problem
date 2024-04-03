// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. 
// The three functions are:

// 1.increment() increases the current value by 1 and then returns it.
// 2. decrement() reduces the current value by 1 and then returns it.
// 3.reset() sets the current value to init and then returns it

var createCounter = function(init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
      return --presentCount;
  }

  function reset() {
      return (presentCount = init);
  }

  return { increment, decrement, reset };
};


const counter = createCounter(5);
let res1 = counter.increment(); // 6
let res2 = counter.reset();     // 5
let res3 = counter.decrement(); // 4

console.log(res1); // Output: 6
console.log(res2); // Output: 5
console.log(res3); // Output: 4

//using class
console.log('using class');

class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}

var createCounter2 = function(init) {
  return new Counter(init);
};


let counter2 = createCounter2(5);
let res = counter2.increment(); // 6
let res4 = counter2.reset();     // 5
let res5 = counter2.decrement(); // 4

console.log(res1); // Output: 6
console.log(res4); // Output: 5
console.log(res5); // Output: 4


