// Exercise
// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6] 
let numbers = [1, 2, 3, 4, 5, 6];

function even (arr){
    // let res =[]
    return arr.filter(index => index % 2 == 0)

}
console.log(even(numbers));


// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
// array can only contain 5 elements). 
// a. Example : 
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
//  The function will return [5, 10, 24, 3, 6]

// function myFunc (int, maxSize){
//     let a = int.toString()
//     return a
// }
// console.log(myFunc((5, 10, 24, 3, 6, 7, 8 ),5));

// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 
function concat (arr1, arr2){
    return arr1.concat(arr2)
}
console.log(concat([1, 2, 3],[4, 5, 6]));

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 
function duplicate(arr){
    arr.sort((a,b)=>a-b)
    
}
console.log(duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]





