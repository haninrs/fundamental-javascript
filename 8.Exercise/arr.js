let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

console.log(arr1 === arr2) // false | kalo object bandingin object pasti false
console.log(arr1.length === arr2.length) // true
console.log(arr1[0]=== arr2[0])  //true



console.log('\n')
let obj1 = {
    name : 'andi'
}

let obj2 = {
    name : 'andi'
}

console.log(obj1 === obj2);


// hoisting : var & function declaration

console.log(a)  // undifined -> var = 
var a = 10
let b = 5

console.log(sum(1,2))  //3
function sum (a,b){
    return a+b
}

// console.log(console) //| object{func}
console.log(typeof console)   // object