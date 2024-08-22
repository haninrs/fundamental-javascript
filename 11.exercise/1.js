// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// ● Example :

// function myFunc(str) {
//   let res = 0;
//   if (str.length == 1) {
//     res += str.charCodeAt(0) - 64;
//   } else if (str.length == 2 && str[0].charCodeAt(0) - 64 == 1) {
//     res += str[str.length - 1].charCodeAt(0) - 64 + 26;
//   } else if (str.length == 2 && str[0].charCodeAt(0) - 64 == 2) {
//     res += str[str.length - 1].charCodeAt(0) - 64 + 52;
//   }
//   return res;
// }
// console.log(`${input} -> ${myFunc(input)}`);


let input = "ZZZZ";

function convert(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res = str.charCodeAt(i) - 64 + res * 26;
  }
  return res;
} 

console.log(convert('A'));
console.log(convert('AB'));
console.log(convert('BCA'));
console.log(convert('ZZZZ'));
