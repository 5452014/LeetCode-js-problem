// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// 1.using for loop with container 
var map=function(arr,fn){
 let newArr=[]
 for (let index = 0; index < arr.length; index++) {
  newArr[index]=fn(arr[index],index)
    
 }
 return newArr;
}

var fn=(n)=>n+1

let arr=[1,2,3]
let res=map(arr,fn)
console.log(res);


// 2.using forloop without using  container  note :but it alters orignal array
var mape = function(arr, fn) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};
 
console.log(mape(arr,fn))

//3. using ForEach method

var map2 = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};

let res2=map2([1,2,3],fn)
console.log(res2);


//4.using reduce method

var map3=(arr,fn)=>{
    arr.reduce((newArr,elem,index)=>{
      newArr[index]=fn(elem,index) 
      return newArr
    },[])
   
}


let res3=map3(arr,fn)
console.log(res2);

