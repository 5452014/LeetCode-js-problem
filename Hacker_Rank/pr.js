
// Q.write a programe that takes list and return only +ve integer and string

// function newList(l){
// return l.filter(Call);
// }
// function Call(ItemList) {
//     if (ItemList >= 0 && typeof ItemList === 'number' || typeof ItemList == 'string') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const List = [1, 2, 3, -5, 'd', 8];
// newList(List); 


//Q. to remove the same element of A and B and return new arr
//e.g a[]={1,3,3,5,5,6} b={3,5} o/p newarr[]={1,6}
//Approach 
//.if 'a' is empty return null if b then return a(first array)
// declare newArray's as orignal array (newA,newB)
// iterate over original array using foreach loop and check duplicates in following manners
// -> declare copy Arrays for sliceing duplicate part
// -> if second array contains element same as first orignal array 
// filter copy array where elem of copyarr!= orignalarr
// similarly filter second array 
//return first array

function newArr(a, b) {
    if (a === null) {
        return [];
    }
    if (b === null) {
        return a;
    }
    let newA = a;
      let newB = b; 
    
    a.forEach((Arrelement, ArrInndex) => {
        const CopyA = newA.slice();
        const CopyB = newB.slice();
        console.log('CopyA',CopyA);
        console.log('CopyB',CopyB);
        if (b.includes(Arrelement)) {
            newA = CopyA.filter(item => item !== Arrelement);
            console.log('newA',newA);
            newB = CopyB.filter(item => item !== Arrelement);
            console.log('newB',newB);
        }
       
        return newA;
    });
}

const A=[1,3,3,5,5,6] ;
const B=[3,5];
const res=newArr(A,B)
console.log(res);

// Q. write a programe to that takes list as input and produce string in following order formate
// e.g arr=["bmw", "benz","Audi"] o/p =>"bmw ,benze & Audi"

// function list(names) {
//     if (names.length === 1) {
//         return names[0];
//     }

//     let finalString = " ";
//     names.forEach((arrItem, arrIndex) => {
//         const name = arrItem;

//         if (arrIndex === names.length - 1) {
//             finalString += " & " + name;
//         } else if (arrIndex === names.length - 2) {
//             finalString += name + ", ";
//         } else {
//             finalString += name + ", ";
//         }
//     });

//     console.log(finalString);
//     return finalString;
// }

// const cars = ["Saab", "Volvo", "BMW"];
// list(cars);



// Q 

// function mydirec(walks) {
//     if (walks.length !== 10) {
//         return false;
//     }

//     let nOffset = 0;
//     let sOffset = 0;
//     let eOffset = 0;
//     let wOffset = 0;

//     walks.forEach(direction => {
//         switch (direction) {
//             case 's':
//                 sOffset += 1;
//                 break;
//             case 'n':
//                 nOffset += 1;
//                 break;
//             case 'e':
//                 eOffset += 1;
//                 break;
//             case 'w':
//                 wOffset += 1;
//                 break;
//         }
//     });

//     return nOffset - sOffset === 0 && eOffset - wOffset === 0;
// }

// let walks = ['n', 'w', 's', 'e'];
// console.log(mydirec(walks));

// let arr = ['n', 's'];
// console.log(mydirec(arr));


// Q write a function ,persistance that takes in +ve parameter 
// num and retrurn its multiplication persistance which is the number of times you must
// multiply the digit in num until you
// reach a single digit

// method 1. convert number to string 
//  2. from sting to ARRay using split() method 
 
//  3. use reduce method to multiply each other element 


// function SingleDigit(nums)
//  {
//     if(nums<10){
//         return 0;
//     }
//     let tostr=nums.toString();
//     let toarr=tostr.split("");
//     let mynum= toarr.reduce((acc,elem )=>acc*=elem);
//    return mynum < 10;
// }

// let val=201;

// SingleDigit(val);


//Q.Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.If that value has more than one digit, 
// continue reducing in this way until a single - digit number is produced.
// The input will be a non - negative integer.
// function digitalRoot(n) {
//    if (n < 10) {
//       return n;
//    }

//    let arr = n.toString().split("");
//    let res = arr.reduce((acc, elem) => acc + parseInt(elem), 0);
//    return digitalRoot(res);
// }


// Q . ATM machine allow 4 or 6 digit PIN codes
// cannot contain anything but exactly 6 digit
// if the function is passed a valid PIN 
// return true ,else return false
  

// function ATM(pin) {
//     let fourDigitRegex = /(^[0-9]{4}$)/;
//     let sixDigitRegex = /(^[0-9]{6}$)/;
//     let result1 = pin.match(fourDigitRegex);
//     let result2 = pin.match(sixDigitRegex);
//     return !(!result1 &&!result2);
         
// }

// let nums = "1234";  // Pass a string instead of a number
// console.log(ATM(nums));

// Q to count number of lower case letter in string

// function Lcount(str) {
//     let result=str.match(/[a-z]/g) 
//     return result ? result.length : 0;
// }

// let mystr="Nadeem";
// console.log(Lcount(mystr));


// q
// function captelize(s) {
//     let res1 = s.split("");
//     let res2 = s.split("");

//     res1.forEach((item, index, original) => {
//         if (index % 2 === 0) {
//             original[index] = item.toUpperCase();
//         }
//     });

//     res2.forEach((item, index, original) => {
//         if (index % 2 !== 0) {
//             original[index] = item.toUpperCase();
//         }
//     });
//     const newstr1 = res1.join("");
//     const newstr2 = res2.join("");
//     return [newstr1, newstr2];
// }

// const str = "abcdef";
// captelize(str);

// Q. sort numer in grrates for e.g 123->321
// function SortNum(n ){ 
//    return Number(String(n).split("").sort().reverse().join(""));
    
// }

// let numb=123;
// console.log(SortNum(numb));

