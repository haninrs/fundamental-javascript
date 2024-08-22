// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// ● Example 1:
    // ○ Input: s = "anagram", t = "nagaram"
    // ○ Output: true
    
// ● Example 2:
    // ○ Input: s = "rat", t = "car"
    // ○ Output: false

let s = "gula";
let t = "lagu";

function myFunc(s, t) {
    let a = s.split('').sort().join()
    let b = t.split('').sort().join()

    // console.log(a,b)
    return a==b
}

console.log(myFunc(s, t))
console.log(myFunc('rat', 'car'))



console.log(s.split("").sort());
