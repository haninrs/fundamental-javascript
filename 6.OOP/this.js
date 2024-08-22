const person = {
    firstName : 'Franky',
    lastName : 'sihombing',
    greet (){
        console.log(`hello ${this.firstName}`)
    }
}

// person.greet()
const person1 = {...person} // bedaa sm yg dibawah
const person2 = person;
person2.firstName = 'jhon';

console.log(person);
console.log(person1);
console.log(person2);


// Object Method built-in
