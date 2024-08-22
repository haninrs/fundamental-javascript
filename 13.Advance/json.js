//  JavaScript Object Notation

//  sama kayak object tpi json key nya pakai kutip

// ini object
const obj = {
    name : 'jason',
    age : 20,
    addres : 'Jakarata'
}


// 1. cara ubah js ke json
let objString = JSON.stringify(obj)
console.log(obj);   // -> type nya object

console.log(objString); // -> typenya string
// output = {'name' : 'jason', 'age' : 20, 'addres' : 'jakarta'}

// 2. cara ubah json ke obj
console.log(JSON.parse(objString));  // -> object

