const word = "The QuiCk BrOwN Fox";
let result = '';

for (let i = 0; i < word.length ; i++){
    if (word.charAt(i) == word.charAt(i).toUpperCase()){
        result += word.charAt(i).toLowerCase();
    } else if (word.charAt(i) == word.charAt(i).toLowerCase()){
        result += word.charAt(i).toUpperCase();
    }
}

console.log(result);

//  or kita bisa bikin
// const letter = word.charAt(i);

for (let i = 0; i < word.length ; i++){
    const letter = word.charAt(i);
    if (letter == letter.toUpperCase()){
        result += letter.toLowerCase();

    } else if (letter == letter.toLowerCase()){
        result += letter.toUpperCase();
    }
}
