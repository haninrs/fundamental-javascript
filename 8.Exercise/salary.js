// ● Specifications :
    // ○ Create a program to calculate total salary based on employee type
    // ○ There are two types of employee : full-time & part-time
    // ○ Salary for full-time employee :
        // ■ IDR 100.000 / hour
        // ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours === 75%
    // ○ Salary for part-time employee :
        // ■ IDR 50.000 / hour
        // ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours == 60%

// ● Requirements :
    // ○ Create an Employee as a parent class
    // ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
        // ■ Create a method in that class to add working hour per day
        // ■ Create a method in that class to calculate total salary
    // ○ Use inheritance concept


class Employee {
    name = ''
    type = ''
    hour = 0

    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    addWorkingHour(hour){
        this.hour = hour
    }
}

class FullTime extends Employee{
    constructor(name){
        super(name, 'Full-time')
    }

    getSalary(){
        if(this.hour <= 6){
            console.log(100000*this.hour)
        } else{
            console.log(600000 + (this.hour-6)*75000)
        }
    }
}


class PartTime extends Employee{
    constructor(name){
        super(name, 'Part-time')
    }

    getSalary(){
        if(this.hour <= 6){
            console.log(50000*this.hour)
        } else{
            console.log(300000 + (this.hour-6)*30000)
        }
    }
}

const staff1 = new FullTime('hani')
staff1.addWorkingHour(3)
staff1.getSalary()


console.log(staff1)