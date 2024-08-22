var mergeTwoLists = function(list1, list2) {
    var list3 = list1.concat(list2)

    return list3.sort((a,b)=>a-b)
};

console.log(mergeTwoLists([1,2,3], [1,2,3,4]))

var divide = function(dividend, divisor) {
    let a = (dividend/divisor);

    if (a < 0 ){
        return Math.ceil(a)
    }else{
        return Math.floor(a)
    }
};
console.log(divide(1, 2))





// 415.AddString
var addStrings = function(num1, num2) {
    let res = BigInt(num1) + BigInt(num2)
    return res.toString()
};
console.log(addStrings("9333852702227987", "85731737104263")) // betol


// 541
var reverseStr = function(s, k) {
    let a = s.split('');
    let b =[]
    for (let i = 0 ; i<a.length ; i++ ){
        b.push(a[i])
        if ((i+1) % 2 == 0 ) {

        }
    }
    return b
};

console.log(reverseStr('abcdef', 2))


//557. reverse III
console.log('\n');
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
var reverseWords = function(s) {
    let a = s.split(' ')
    let b = []
    for ( let i = 0 ; i <a.length ; i++){
        b.push(a[i].split('').reverse().join(''))
    }
    // return a
    return b.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))