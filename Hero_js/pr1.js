// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

// Example: secondIndexOf('White Rabbit', 'it') should return 10.

function secondIndexOf(s1,s2) {
    let index=s1.indexOf(s2);
    return s1.indexOf(s2,index+1)
}

let result=secondIndexOf('White Rabbit', 'it')
console.log(result)