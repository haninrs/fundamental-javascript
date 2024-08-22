// Hash Table / Map

// Hash Table Implementation

const myMap = new Map();

myMap.set('David', '001');
myMap.set('Buchanan', '002');
myMap.set(1, 'jhon');
myMap.set([1], 'Doe');

console.log(myMap)
console.log('\n')
console.log(myMap.get(1))
console.log('\n')

console.log('\n')
for (let [key, value] of myMap){
    console.log(`${key} = ${value}`)
}

console.log('\n')
for (const value of myMap) {
    console.log(value)
}