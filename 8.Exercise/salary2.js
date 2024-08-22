class Employee{
    name = ''
    type = ''
    hour = 0

    constructor(name,type,hour){
        this.name = name
        this.type = type
        this.hour = hour
    }

    // addWorkingHour(hour){
    //     this.hour = hour
    // }
}

class FullTime extends Employee {
    constructor(name, hour){
        super(name, 'Full-time', hour) 
    }

    getSalary(){
        if(this.hour <=6 ){
            console.log(100000*this.hour)
        } else{
            console.log(600000 + (this.hour-6)*75000)
        }
    }
}

const fulltime1 = new FullTime('andi', 7)
// fulltime1.addWorkingHour(7)
fulltime1.getSalary()

console.log(fulltime1)