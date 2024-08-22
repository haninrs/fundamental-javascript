const number = 123456789;   // Kita mau buat RP.1.234.567
const numberString = number.toString(); // '1234567'
let result = '';
let count = 0

// 1. looping dari bawah
for (let i = numberString.length-1; i>=0 ; i--){
    // 2. kasih . dr bawah ke 3
    if (count%3 === 0  && count > 0){
        result = '.' + result;
    }
    // 3. tambah result tpi dari belakang
    result = numberString.charAt(i) + result;   //1.234.567 
    count++
    console.log(result, count)
}


console.log(`"Rp. ${result},00"`)
