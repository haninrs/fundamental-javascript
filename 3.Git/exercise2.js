// 8. Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// let RandomStr = 'The QuiCk BrOwN Fox';
let RandomStr ='The QuiCk BrOwN Fox';
let upperCase = 'ASDFGHJKLQWERTYUIOPZXCVBNM';
let lowerCase = 'asdfghjklqwertyuiopzxcvbnm';
let RandomStr1 ='';

for (let i=0 ; i< RandomStr.length ; i++){
    if(upperCase.indexOf(RandomStr[i]) !== -1){
        RandomStr1 += RandomStr[i].toLowerCase();

    }else if(lowerCase.indexOf(RandomStr[i]) !== -1){
        RandomStr1 += RandomStr[i].toUpperCase();
    }
}
console.log(`8. "${RandomStr}" Swap -> "${RandomStr1}"`);


console.log('\n')
// 9. Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42

let num1 = 42;
let num2 = 27;

if (num1 > num2){
    console.log(`9. The largest of ${num1} & ${num2} is ${num1}`);
}else {
    console.log(`9. The largest of ${num1} & ${num2} is ${num2}`);
}

// or pakai ternary operator
console.log(num1 > num2 ? num1 : num2);


console.log(`\n`);
// 10. Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num10 = 42;
let num11 = 27;
let num12 = 18; 

let firstPosition = 0;
let secondP = 0;
let third =  0;


if (num10<num11 && num10<num12){
    firstPosition += num10;
} else if(num11<num10 && num11<num12){   
    firstPosition += num11;
}else if(num12<num10 && num12<num11){
    firstPosition += num12;
}

if (num10<num11 && num10>num12){
    secondP +=num10;
} else if (num11<num10 && num11>num12){ // 27<42 && 27 >18  
    secondP +=num11;
}else if (num12<num10 && num12>num11){
    secondP +=num12;
}

if (num10>num11 && num10>num12){
    third += num10;
} else if (num11>num10 && num11>num12){
    third += num11;
}else if (num12>num10 && num12>num10){
    third += num12;
}

let sort = `${firstPosition}, ${secondP}, ${third}`;
console.log(`10. Sort 42, 27, 18 -> ${sort}`);



console.log('\n');
// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1

let input = 450348;
let typeInput = typeof(input);
// console.log(typeInput);

if (typeInput ==="string"){
    console.log(`11. ${input} -> 1`);
} else if (typeInput === "number"){
    console.log(`11. ${input} -> 2`);
} else {
    console.log(`11. ${input} -> 3`)
}


console.log(typeInput === 'string' ? 1 : typeInput === 'number' ? 2 : 3);



console.log('\n');
// 12. Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

let letter = 'An apple a day keeps the doctor away' ;
let letter1 = letter.toLowerCase().replaceAll('a', "*");
// console.log(letter);
// console.log(letter1);
console.log(`12. ${letter} -> ${letter1}`);
// or
console.log(letter.replace(/a/gi, '*'));
// or 
console.log(letter.replace(/a|A/g, '*'));
