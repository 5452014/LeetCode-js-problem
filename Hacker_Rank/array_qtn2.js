// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.

//Approach 
// 1.push last elemenet of array in emapty array as leader
//2 .iterate from second last element and compare with maxright[leader] push it in leader if its true
// 3.update maxright element

function Leader(arr,n){
    let leader=[]
    let maxRight=arr[n-1]
    leader.unshift(maxRight)
    for (let i = n-2; i >=0; i--) {
        if (maxRight <= arr[i]) {
            leader.unshift(arr[i])
            maxRight+=arr[i];
        }
        
    }
     return leader;
}


let arr=[16,17,4,5,3,2];
let n=arr.length-1;
let res=Leader(arr,n)
console.log(res);