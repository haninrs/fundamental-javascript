// pembungkus 
// 

class Employee {
    constructor(){
        this.employeeName
    }

    setEmployeeName(newName){
        // biar ga sembarang masukin data
        //  klo gak pake ini kita msukin num,array dll nya jadi bisa masuk
        if(typeof newName !== 'string'){
            throw new Error('name should be a string')
        }
        this.employeeName = newName
    }
    getEmployeeName (){
        return this.employeeName;
    }
}

let employee1 = new Employee()
// employee1.setEmployeeName([123]);
employee1.setEmployeeName("hani")


console.log(employee1.getEmployeeName())
console.log(employee1);


// setPrice(harga){
//     this.price = harga
// }