// ● Create a function to find a factorial number using recursion

// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function countDown (fromNumber){
    console.log(fromNumber)
    
    let nextNumber = fromNumber-1
    if (nextNumber>0){
        countDown(nextNumber)
    }
}

countDown(5);


console.log('\n');

function factor (n){
    if (n===0) return 1;
    return  n*factor(n-1)
}

console.log(factor(5));