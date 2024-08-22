// Understand
// 1. The most essential things you need to understand in a problem, are its inputs and expected outputs.
// 2. After that, understand what conditions and/or parameters are given.

// Brute Force



// Optimixe with Extra Memory

function checkDuplicate(arr){
    const uniqueData = new Set();
    for (let i = 0; i<arr.length; i++){
        if(uniqueData.has(arr[i])) return true
        else uniqueData.add(arr[i])
    }
    return false
}

console.log(checkDuplicate([1,2,3,1]));  // true

// Optimize Without Extra Memory
function checkDuplicate2(arr){
    arr.sort();
    for(let i =0; i<arr.length-1 ; i++){
        if(arr[i] === arr[i+1]) return true
    }
    return false
}
console.log(checkDuplicate2([5,3,5,2])) // true














let arr1 = [30,1,3,2,12,9,-1, 0.3]
let std =['main', 'mei-mei', 'susanti', 'ehsan', 'adnan']

console.log(std.sort())
console.log(arr1.sort())            // -1,0.3, 1,12,2,3,30,9
console.log(arr1.sort((a,b)=> a-b)) // -1,0.3, 1,2, 3, 9, 12, 30


