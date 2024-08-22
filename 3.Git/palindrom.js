const word = 'madam';
let reserveWord = '';

// console.log(word.length);

for (let i = word.length-1 ; i>=0 ; i--){
    reserveWord += word[i];
}
console.log(reserveWord);

if(word===reserveWord){
    console.log( `${word} is palindrome`)
}else {
    console.log(`${word} isn't palindrome`)
}
