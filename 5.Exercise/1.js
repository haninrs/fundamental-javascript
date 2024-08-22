// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

let arr1 = [12, 5, 23, 18, 4, 45, 32];

//  <> code with sort
// 1. urutan dr terkecil ke besar
let arr10 = arr1.sort(function(a,b){
    return a-b;
});

// 2. total / akumulator
let sum = arr1.reduce((a,b)=> a+b);
// console.log(arr10.join(' '));  | 4 5 12 18 23 32 45
// console.log(sum);              | 139

// 3.Cetak
console.log(`1. Lowest : ${arr10[0]}, Highest : ${arr10[arr10.length-1]}, Average : ${sum/(arr1.length)}`);


// ! code without sort
// 1. find min & max
function minMax (arr){
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    const average = arr.reduce((a,b)=>a+b) / arr.length

    return[min, max, average]
}
console.log(minMax(arr1));


console.log('\n')
// 2. Write a function that takes an array of words and returns a string by "concatenating" the words in the array, 
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

let arr2 = ["apple", "banana", "cherry", "date"]

function concatenating (arr){
    // let date = arr[length-1];
    let date = arr.pop();
    return arr.join(', ') + ' and ' + date
}
console.log(`2. ${concatenating(arr2)}`);


console.log('\n');
// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]
function split (str){
    return str.split(' ')
}
console.log(split('Hello Word'));

console.log('\n');
// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
const num1 = [1, 2, 3];
const num2 = [3, 2, 1];
// cara 1
function calculate(arr1, arr2){
    return arr1.map((item,index) => item + arr2[index])
}

// cara 2
function calculate2 (arr1, arr2){
    let res =[];
    for (i =0 ; i< arr1.length ; i++){
        res.push(arr1[i] + arr2[i])
    }
    return res;
}

console.log(calculate(num1,num2));
console.log(calculate2(num1,num2));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is 
console.log('\n');
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function addValue (arr, num){
    // return  arr.includes(num);  true/false
    if (!arr.includes(num)){  // arr.includes(num)  === false
        arr.push(num)
    }
    return arr
}

const arr = [1,2,3,4];
number = 7;

console.log(addValue(arr,number));