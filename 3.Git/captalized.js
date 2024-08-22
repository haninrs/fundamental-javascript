const word = 'hallo purwadhika bandung'; // Hello Purwadhika Bandung
let isCapital = true;  // karna setiap huruf pertama true capital
let result ='';

// looping dari atas
for (let i = 0; i<=  word.length ; i++){
    if (isCapital==true  || word.charAt(i-1)== ' '){
        result += word.charAt(i).toUpperCase()
        isCapital = false;
    }else {
        result +=word.charAt(i).toLocaleLowerCase()
    }

    // (OPSI LAIN)
    // if(word.charAt(i)==' '){
    //     isCapital =true;
    // }
}
console.log(result);



//  CARA SAMA KAYAK exercise1.js tpi lebih make it simple

let kata = 'hello world hani';
let hasil = '';

for (a=0 ; a<kata.length ; a++){
    if(a == 0 || kata.charAt(a-1)==' '){
        hasil += kata.charAt(a).toUpperCase()
    } else {
        hasil += kata.charAt(a).toLowerCase()
    }
}
console.log(hasil);