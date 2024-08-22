//  export & import

const users = ['mail' , 'susanti', 'jarjit']

function sum(a,b){
    return a+b
}

module.exports = {users, sum}

const fruits = require('./exercise/exec')
console.log(fruits)