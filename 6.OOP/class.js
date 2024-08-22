let person = {
    name : 'pranki',
    age : 25,
    hobby : 'coding',
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

// class is template
// class declaration & class expression
// ada constructor / special method

class User {
    nama = ''
    #age = 0    //private
    hobby = ''
    static species = 'Human' // buat properti yang ga berhubungan sm object 

    constructor(nama,age,hobby){
        this.nama = nama;   //public
        this.#age = age;    // private # gak bisa diakses keluar
        this.hobby = hobby; //public
    }

    greet(){
        console.log(`hello ${this.nama}`)
    }
    //bikin akses buat ambil | fungsinya buat data yg sensitif kita private#
    getAge (){
        return this.#age
    }
}

let person1 = new User('Hani', 20, 'Wathcing kdrama');
let person2 = new User('Adnan', 21, 'game');

console.log(person1)
person1.greet()
// cara ambil age 
console.log(person2.getAge())


console.log('\nClass bult-in js ')
// contoh class bultin js
console.log(Math.PI)
console.log(date = new Date)


console.log('\nSatic properties')
console.log(User.species)   // nama-class.namastatic tanpa berhubungan dgn object (person1, person2)

// contoh lain 
let now = new Date();
console.log(now.getTime()); // now.getTime ini static properties klo kita obrak abriik dalamnya
