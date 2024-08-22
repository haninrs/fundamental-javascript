const user = {
    firstName : 'Jarjit',
    lastName : "Smith",

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value){
        const splitName = value.split(' ')
        this.firstName = splitName[0]
        this.lastName = splitName[1] +" "+ splitName[splitName.length-1]
    }
}


// cara ganti isi tanpa function

console.log(user.firstName)

user.fullName = 'Mail Bin Mail'
console.log(user.firstName)
console.log(user.lastName)
console.log(user.fullName)

console.log(typeof Infinity)
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(undefined))
