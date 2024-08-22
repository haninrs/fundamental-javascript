const fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Melon'];

// 1. Looping Array
console.log('\nLooping Array')
for(let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}

console.log('\nforEach')
// 2. forEach()
// fruits.forEach((fruit) => console.log((fruit)))

console.log('\n')
fruits.forEach((fruit) => {
    if (fruit === 'Banana'){
        console.log('Pisang');
    } else {
        console.log(fruit);
    }
})

// 3. map
console.log('\nmap')
fruits.map((fruit) => console.log(fruit))

// 4. for.. of
console.log('\nfor.. of')
for (let fruit of fruits){
    console.log(fruit);
}