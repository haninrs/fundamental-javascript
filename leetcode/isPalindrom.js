// 
/**
@param {number} x
@return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString()
    let strReserve = str.split('').reverse().join('');

    return str === strReserve;
};

console.log(isPalindrome(1231))