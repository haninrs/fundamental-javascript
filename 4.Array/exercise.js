// Example
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ● Parameters : height → triangle height
// ● Example input: 5

function triangle(height){
    for(let i = 1 ; i<=height; i++){
        let segitiga = '';
        for (let j = 1 ; j <= i ; j++){
            segitiga += j + ' ';
        }
        console.log(segitiga);
    }   
}

triangle(3);

console.log('\n');
// 1. Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters : height → triangle height

function triangle2 (height){
    let count = 0
    for (let i = 0 ; i<=height ;i++){
        let res = '';
        for (let j =1; j<= i; j++){
            count++ ; 
            res += `${count < 10 ? '0' : ''}${count} `;
        }
        console.log(res);
    }
}
triangle2(6);


console.log('\n');
// 2. Create a function that can loop the number of times according to the input we provide, and will 
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function FizzBuzz(n){
    let result = [];
    for (let i = 1; i<=n ; i++){
        if(i%3 === 0 && i%5 === 0){
            result.push('FizzBuzz');
        } else if(i%5 === 0){
            result.push('Buzz');
        } else if (i%3 === 0 ){
            result.push('Fizz');
        } else {
            result.push(i);
        }
    }
    return result.join(', ')
}

console.log((FizzBuzz(15)));



console.log('\n')
// 3. Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function BMI(weight, height){
    let score = weight / (height **2)
    let res = '';
    if (score < 18.5){
        res = "Less weight";
    } else if (score >= 18.5 && score <=24.9){
        res = 'Ideal';
    }else if(score >= 25 && score <=29.9){
        res="Overweight";
    }else if (score>=30 && score <=39.9){
        res = 'Very overweight';
    }else {
        res = 'Obesity'
    }
    return res;
}
console.log(BMI(70,1.65));



console.log('\n')
// ● Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

let numbers = [1,2,3,4,5,6,7,8,9,10];

let given = numbers.filter(function (x){
    return x % 2 == 0
})
console.log(given);


console.log('\n');
// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]

let string = 'Hello World';
let string2 = string.split(' ')

console.log(string2)

