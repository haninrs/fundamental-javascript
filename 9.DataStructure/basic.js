//  DATA STURCTURE

// 1. STACK (LI-FO) push-pop
// contoh : undo(abc), back/forward stack on browser, reverse a string 

// 2. QUEUE (FI-FO) push - shift
// contoh : ngantri

// 3. SET (tak bisa terima data yg duplicate)
const fruits = ['banana', 'apple', 'melon', 'apple'];
//remove duplicate
const newFruits = new Set(fruits);
console.log(newFruits);  // {'banana', 'apple', 'melon'}
console.log(typeof newFruits);

console.log('\n')
// Set Built-in method

// forEach
newFruits.forEach((item)=>{console.log(item)}) // banana apple melon
console.log(typeof newFruits); //object

console.log('\n')
// delete
newFruits.delete('banana') // {'apple', 'melon'}
console.log(newFruits)

console.log('\n')
// entries 
console.log(newFruits.entries()) // {['apple', 'apple'], ['melon','melon']}

console.log('\n')
// has
console.log(newFruits.has('banana')) //false



