// I	1 (satu)
// V	5 (lima)
// X	10 (sepuluh)
// L	50 (lima puluh) 
// C	100 (seratus) 
// D	500 (lima ratus) 
// M	1.000 (seribu) 

function roman(num){
    let romawi = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1
    }

    let res = ''

    for (key in romawi){
        while (num >= romawi[key] ){
            res += key
            num -= romawi[key]
        }
    }

    return res
}

console.log(roman(123)); // 'CXXIII'
console.log(roman(999)); // 'CXXIII'