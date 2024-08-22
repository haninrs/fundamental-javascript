let obj = {
    name : 'hani',
    age : 20
};

let newObj = {
    name : 'hani',
    age : 20
};

function compareObj(obj1, obj2){
    let res = false

    for(key in obj1){
        if(obj1[key] === obj2[key]){
            res = true
        }
    }
    return res

    // return obj1.name === obj2.name && obj1.age === obj2.age
}

console.log(compareObj(obj,newObj))



function simpleArraySum(ar) {
    // Write your code here
    return ar.reduce((a,b)=> a+b)
}

console.log(simpleArraySum([1,2,3]))





console.log('\n');
let kata = 'Kucing'

console.log('A'.charCodeAt(0)-64)


console.log('\n');

let dest = [
    { country: 'Thailand', budget:12000000},
    { country: 'Malaysia', budget:11000000},
    { country: 'Korea Selatan', budget:9000000},
    { country: 'Singapura', budget:10000000}
];

// cara dapetin korsel nya aja
console.log(dest[2].country)
//  ara tambahin budget korsel dan singapor
console.log(dest[2].budget + dest[3].budget)

let money = 10100000 ; 
let selisih = money 
let destinasi = '';

for (let i = 0; i<dest.length; i++){
    if(dest[i].budget <= money && money-dest[i].budget <= selisih){
        destinasi = dest[i].country
        selisih = money - dest[i].budget
    }
}

console.log(destinasi)



person = {
    "name": "John",
    age: 30,
    "city": "New York"
}

console.log(`person = ${person['name']}`);
