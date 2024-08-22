//  Inheritance

// kita kan mau buat gini nih:
// const std1 = {
//     school : 'Purwadhika',
//     program : 'Web Development',
//     name : 'Hani',
//     age : 20,
// }

// ayok kita  bikin templatenya make class

//  Parent nya School
class Purwadhika {
    school = 'Purwadhika'
    // // klo ada constructor (perhatikan super)
    // School = ''

    // constructor(sekolah){
    //     this.School = sekolah
    // }

    // ini kalo mau ganti di bawah panggil func setProfile ga penting sebenernya
    setProfile(nilai, kunci){
        this[kunci] = nilai
    }
}


// anak Purwadhika di bandung
class PurwadhikaBandung extends Purwadhika{
    location = 'Bandung'
}
// anak Purwadhika di BSD
class PurwadhikaBsd extends Purwadhika{
    location = 'BSD'
}


// Turunan , child PurwadhikaBandung, cucu Purwadhika
class WdPurwadhikaBandung extends PurwadhikaBandung {
    program = 'Web Development'
    
    constructor(name,age){
        super()
        // super('Purwadhika')
        this.name = name
        this.umur= age
        this.program ='Web Development'
    }
}


// Turunan , child PurwadhikaBsd, cucu Purwadhika
class WdPurwadhikaBsd extends PurwadhikaBsd {
    program = 'Web Development'

    constructor(name,age){
        super()
        // super('Purwadhika')
        this.name = name
        this.umur= age
        this.program ='Web Development'
    }
}



//Panggil

const std1 = new WdPurwadhikaBandung('Hani', 20)
console.log(std1)

console.log('\n')


// set profile buat ganti
std1.setProfile('mail', 7)
console.log(std1)
console.log('\n')

const std2 = new WdPurwadhikaBsd('MEI MEI', 20)
console.log(std2)