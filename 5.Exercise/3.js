// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
function primitive(arr){
    return arr.filter((item) => typeof item !='object');
}

console.log(primitive([1, [], undefined, {}, "string", {}, []]));
// console.log(typeof [])



console.log('\n');
// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

let numbers = [5, 3, 1, 7, 2, 6] ;
function secSmall (arr) {
    arr.sort((a,b)=> a-b)
    return arr[1];
}
console.log(secSmall(numbers));


console.log('\n');
// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function mixArr (arr) {
    return arr.filter((item)=> typeof item == 'number').reduce((a,b)=> a+b);
}
console.log(mixArr(["3", 1, "string", null, false, undefined, 2]));




console.log('\n');
// 4. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// function sumDuplicate ()

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'