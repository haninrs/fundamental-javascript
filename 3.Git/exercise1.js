// 1. Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

let number = 9;
let limit = 10;
console.log(`\n 1.Perkalian 9`);

for(let i = 1; i<=limit ; i++){
    console.log(`${number} x ${i} = ${number * i}`);
};


// 2. Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome

let str = 'malam';
let reserv =''; // malam |masukan string kosong

console.log('\n');
console.log(`2. ${str} is palindrome or not?`)

// console.log(reserv);
// console.log(str)
for (let i = str.length-1; i >= 0 ; i--){ 
    reserv +=  str.charAt(i);
}
console.log(reserv);    


if(str===reserv){
    console.log(`${reserv} is a palindrom`);
} else{
    console.log(`${reserv} isn't a palindrom`);
}



console.log('\n')
// 3. Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”
let angka = 100000;
let newAngka = 0;

if(angka>0){
    newAngka += angka /100000;
    console.log(`3. ${angka} cm -> ${newAngka} km`);
}


console.log('\n');
// 4. Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let angka1 = 100000000000;
// first step
let curr = angka1.toString(); //'1000000000'
let rev0 = "";      // 0000000001
let revTitik = "";  // 000.000.000.1
let realCurr ='';   // 1.000.000.000

// step 2 reserve
for (let i = curr.length; i >= 0 ; i--){
    rev0 +=  curr.charAt(i);
}
console.log(rev0);   // 0000000001

// titik per index ke-3
for (let a = 0; a<= rev0.length+1; a++){
    revTitik += rev0.charAt(a);
    if((a+1)% 3 === 0 && a < (rev0.length-1)){
        revTitik += '.';
}
}
console.log(revTitik);   // 000.000.000.1

// step 4 reserve lagi
for(let u = revTitik.length; u >=0 ; u--) {
    realCurr += revTitik.charAt(`${[u]}`)
}
console.log(`${angka1} -> "Rp.${realCurr},00"`);
console.log('\n')




console.log('\n');
// 5. Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

// untuk cari ell
// kita pakai string method text.match(/textkamuMau/gi); 

// untuuk replace ell
// kita gunakan method text.replace("Microsoft","W3Schools")

let hello ="Hello Worrld";
let search = "ell";
let strSearch = hello.match(`${search}`);
// console.log(strSearch.toString());  // ell

if( strSearch == search){    
    console.log(`5. ${search} -> ` + hello.replace(`${strSearch}`, ''))
}else {
    console.log(`5. Kata ${search} yang anda cari tidak ada dalam kata ${hello}`)
}

console.log('\n')
// 6. Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”

// cari ' ' 
//  [i] - [?]' ' .uppercase()

let lowerStr = 'hello world hani cantik';
let capitalizeCase = '';


for (let o = 0 ; o <=lowerStr.length ; o++){
    if (lowerStr[o] == ' '){
        capitalizeCase = lowerStr[o+1].toUpperCase();
        lowerStr = lowerStr.replace(lowerStr[o+1] , capitalizeCase) ;
    } else if(o == 0){
        capitalizeCase = lowerStr[o].toUpperCase();
        lowerStr = lowerStr.replace(lowerStr[o] , capitalizeCase);

    }
}

// console.log(capitalizeCase);
console.log(`6. ${lowerStr}`);
// console.log(lowerStr[0]);



console.log(`\n`);
// 7. Write a code to reverse a string.
// ○ Example : “hello” → “olleh”

let hello2 = "hellow";
let olleh ='';

for (let i = hello2.length ; i >=0 ; i--){
    olleh += hello2.charAt(i);
}
console.log(`7. Reserve word ${hello2} is ${olleh}`);


