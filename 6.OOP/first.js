// 1. Cara Buat Object
// cara 1
let u = {} 
// cara 2
let us = new Object ()

// kita bisa simpan Properti & Method
let user ={
    // ini properti  | key : value
    name : 'David',
    usia : 19,      
    // ini method
    greet (){
        // console.log(`hello!`)
        return 'hallo!'
    }
}

// 2. accessing value of object
console.log(user.name);     // value -> name : david <-key
console.log(user['name']);  // david
console.log(user.greet());  // hallo!

console.log('\n');
// kita bikin baru
let person = {
    name : 'franky',
    age : 26
}
person.hoby = 'Ngedrakor';  // add peroperty hoby
person.hobby = 'Ngedrakor';  // add property hobby
person.age = 20              // edit property age/replace
delete person.hoby          // delete property hoby
console.log(person);

console.log('\n');
// ======================================================================================
// 3. optional chaining  ?

let orang = {
    nama : 'budi',
    age : 25,
    address : {
        city : 'Bandung',
        country : 'Indonesia'
    }
}
// console.log(orang.address)
// console.log(orang.address.city?.country)   // optional chaining  ?   // ini aman
// console.log(orang.address.city.country)    | ini eror
// console.log(Object.keys(orang))

// 4. for ..in
// ambil value (naama, age, address)
for (let key in orang){
    console.log(key)
}

// ambil item / key dr value (budi, 25, {city : 'bandung' , country : 'Indonesia'})
for (let value in orang){
    console.log(orang[value])
}
//  ambil isi address (Bandung , Indonesia)
for (let value in orang.address){
    console.log(orang.address)
}
for (let value in orang.address){
    console.log(orang.address[value])
}

console.log('\n' , "tes") ;
for (const key in orang) {
    if (Object.hasOwnProperty.call(orang, key)) {
        const element = orang[key];
        console.log(element);
    }
}
//  ini undifined .value jadi maksudnya cari keynya namanya value
// for (let value in orang){
//     console.log(orang.value)
// } 






