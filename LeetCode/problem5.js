// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

var filter = (arr, fn) => {
    return arr.reduce((newArr, elem, index) => {
        if (fn(elem, index)) {
            newArr.push(elem);
        }
        return newArr;
    }, []);
};

function fn(element) {
    return element > 10;
}

const res = filter([10, 20, 30], fn);
console.log(res); // Output: [20, 30]

// using foreach loop
var filter2=(arr,fn)=>{
    let newArr=[]
    arr.forEach((element,index) => {
        if(fn(element,index)){
            newArr.push(element)
        }
    });
    return newArr;
}

let res2=filter2([20,10,30],fn)
console.log(res2);