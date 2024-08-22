/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let arr = s.split(' ');
    console.log(arr);
    console.log(arr.length)
    // let str2 = []

    return arr[arr.length-1].toString().length
};

console.log(lengthOfLastWord(' hello world '))


// var lengthOfLastWord = function(s) {
//     let arr = s.split(' ');
//     let str = []
//     for (let i = arr.length-1 ; i == arr.length-1 ; i--){
//         // if (!arr[i].includes(' ')){
//         //     arr.pop()
//         // }
//         str.push(arr[i])
//     }
//     return str.toString();
// }
// console.log(lengthOfLastWord('Hello word  '))