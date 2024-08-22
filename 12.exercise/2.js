// ● Create a function to convert roman numeral to integer.

// ● Example 1:
    // ○ Input: s = "III”
    // ○ Output: 3
    // ○ Explanation: III = 3.
// ● Example 2:
    // ○ Input: s = "LVIII"
    // ○ Output: 58
    // ○ Explanation: L = 50, V= 5, III = 3.
// ● Example 3:
    // ○ Input: s = "MCMXCIV"
    // ○ Output: 1994
    // ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

    let s = "III"
    let s2 = "LVIII"
    let s3 = "MCMXCIV"

// I	1 (satu)
// V	5 (lima)
// X	10 (sepuluh)
// L	50 (lima puluh) 
// C	100 (seratus) 
// D	500 (lima ratus) 
// M	1.000 (seribu) 


function myFunc(s){
    let romawi = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
    
    let res ;

    //  III
    for(let i = 0 ; i < s.length ; i++){
        // s[i]
        // console.log(romawi[s[i]])
        if(romawi[s[i]] < romawi[s[i+1]]){
            res -= romawi[s[i]]
        } else{
            res += romawi[[i]]
        }
    }
    return res
}

console.log(myFunc('III'))
