// create a function that checks whether an array contains more
//  occurrences of the number 4 than the number 0

function more4than0(arr){
    const occr4=arr.filter(num=>num===4).length;
    const occr0=arr.filter(num=>num===0).length;
    return occr0<occr4;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 0, 4, 0, 4];

console.log(more4than0(array1));  // Output: false (equal occurrences of 4 and 0)
console.log(more4than0(array2));  // Output: true (more occurrences of 4 than 0)