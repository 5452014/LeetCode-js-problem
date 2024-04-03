// There is a collection of input strings and a collection of query strings. 
// For each query string, determine how many times it occurs in the list of input strings. 
// Return an array of the

function matchingStrings(strings, queries) {
    const res = [];
    
    queries.forEach(query => {
        let count = 0;
        strings.forEach(string => {
            if (query === string) {
                count++;
            }
        });
        res.push(count);
    });
  
    return res;
}

// Example usage:
const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]
