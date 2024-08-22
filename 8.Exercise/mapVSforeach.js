arr = [1, 2, 3].f
console.log(arr)

// console.log(arr.forEach((element) => element * 2))  // tidak membuat array baru jd undifined
// console.log(arr.map((element)=> element *2))  // buat array baru


console.log(1 + undefined) // NaN
console.log(typeof NaN) //Number
console.log(true + true + false) // 1 + 1 + 0
console.log(true + 'true' + true) // truetruetrue
console.log(true + true + 'true') // 2true
console.log('true' + true + true) // truetruetrue
console.log('true' * true + true) // NaN
console.log('\n')

console.log([].length + Boolean(0))
console.log([].length + Boolean(-2))
console.log(!false == Boolean(1))
console.log(Boolean([])+ 1) // 1 + 1 = 2

console.log('\n')
console.log(false == 0)
console.log(true == 1)
console.log(true == 0)
console.log(null == null)

console.log('\n')

let i = 0
console.log(i++ == 0) // true
console.log(++i == 0) // false


console.log('\n')
console.log(typeof typeof 25) // string

let word = typeof 25  // number
console.log(word.length) // number -> 6
console.log(word.split(''))

console.log(console.log("Hello World"))
console.log(typeof console.log)