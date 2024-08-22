// 1.
function number (arr){
    let sortArr = arr.sort((a,b) => a-b);
    const lower = sortArr[0];
    const highest = sortArr[sortArr.length-1];
    const sumArr = sortArr.reduce((a,b)=>a+b);
    const average = sumArr/sortArr.length;

    return {lower, highest, average}
}

let arr = [12, 5, 23, 18, 4, 45, 32];
console.log(number(arr));


console.log('\n');
// 2.
function concat (arr){
    // const date = arr[arr.length-1]
    // arr.pop();
    // atau
    const date = arr.pop()
    return arr.join(', ') + ' and ' + date
}

let arr2 = ["apple", "banana", "cherry", "date"]
console.log(concat(arr2));