// 1. Function Declaration
function square (number){
    return number*number
}
console.log(square(4));

// dua parameter
function multiple (number1, number2){
    return number1*number2
}
console.log(multiple(10,5))



// 2. Function Expression
const square2 = function(number){
    return number*number
}
console.log(square2(6));


// 3. Function Scope
function greeting(name){
    let hello = 'hello';
    return hello + ' ' + name;
}
// console.log(hello);  | eror karna variable hello ada didalam function greeting
console.log(greeting('budi'));
// note 
// name : parameter
// budi : argument


// 4.Default Parameter

function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5,2)) // 10
console.log(multiply(5))  // 5  | b defaultnya 1


// 5. Rest Parameter
function myfunc (a,b, ...etc){
    console.log('a', a);
    console.log('b', b);
    console.log('etc', etc); // dalam bentuk array
}
myfunc(1,2,3,4)   // a 1, b 2, etc [3, 4]


// 6. Nested Function
function getMassage(firstName){
    function sayHalo(){
        return 'Hello ' + firstName + '!';
    }
    function welcomeMassage (){
        return 'Welcome to purwadhika';
    }
    return sayHalo() + ' ' +welcomeMassage();
}

const massage =getMassage('Hani');
console.log(massage);


// 7. Closure
function greeting1(name){
    const defaultMassage = 'hello ';

    return function(){
        return defaultMassage + name;
    };
}

const pesan = greeting1('Hani Cantik');
console.log(pesan());


// 8. Currying function  ==  f(a,b,c) -> f(a)(b)(c)
//  ini f(a, b)
function multiplier (factor, number){
    return factor * number
}
console.log(multiplier(10,3));
console.log(multiplier(5,3));

// ini f(a)(b)
function multiplyr (factor){
    return function(number){
        return factor * number
    }
}
const mul = multiplyr(3)
console.log(mul(5));
console.log(mul(10));

console.log(multiplyr(5)(3))    // f(a)(b)
// console.log(multiplier(5,3)); | f(a, b)


// 9. Recursive function
function countDown (fromNumber){
    console.log(fromNumber)
    
    let nextNumber =fromNumber-1
    if (nextNumber>0){
        countDown(nextNumber)
    }
}

countDown(5);



// 10. Arrow Function
//  one line
const kotak = (number) => number * number;
console.log(kotak(4))

// multi line
const kotaq = (number) => {
    return number * number
}
console.log(kotaq(7))