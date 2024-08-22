// Array Declaration 2 cara
let arr =[1, 'budi', true, ['budi', 2], 5];
let arr2 =new Array(1,2,3,4,5);

// console.log(arr, arr2);

// akses array
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);

// Array Method


console.log('\n push, pop');
// push , pop
arr.push(7);     // menambah isi ke dalam array
console.log(arr);
arr.pop();       // hapus isi terakhir dari array
console.log(arr);


console.log('\n unshift, shift');
// unshift , shift 
arr.unshift(1);     // manambah isi array dari start arr
console.log(arr);
arr.shift();        // hapus dari awal arr
console.log(arr);

console.log('\n length arr');
console.log(arr.length);


console.log('\n sort');
//  sort

let number = [10, 5, 15, 20];

console.log(number.sort((a,b) => a-b)) // ascending
console.log(number.sort((a,b) => b-a)) // descending


console.log('\n split & reserve & join');
//  split  array  
const word = 'hello';
console.log(word.split('').reverse().join(','))
console.log(arr2.concat(number))


// let number = [10, 5, 15, 20];
console.log('\nfilter');
console.log(number.filter((item)=> item>10));

