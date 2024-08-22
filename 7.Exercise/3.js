// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email

// ● Example :
    // Array1 → [
        // { name: ‘Student 1’, email : ‘student1@mail.com’ },
        // { name: ‘Student 2’, email : ‘student2@mail.com’ }
        // ]

    // Array2 → [
        // { name: ‘Student 1’, email : ‘student1@mail.com’ },
        // { name: ‘Student 3’, email : ‘student3@mail.com’ }
        // ]

// ● Result :
    // ArrayResult → [
        // { name: ‘Student 1’, email : ‘student1@mail.com’ },
        // { name: ‘Student 2’, email : ‘student2@mail.com’ },
        // { name: ‘Student 3’, email : ‘student3@mail.com’ }
        // ]

let  array1 = [
        { name: 'Student 1', email : 'student1@mail.com' },
        { name: 'Student 2', email : 'student2@mail.com' }
        ]
let array2 = [
        { name: 'Student 1', email : 'student1@mail.com' },
        { name: 'Student 3', email : 'student3@mail.com' }
        ]

// function myFunc(ar1, ar2){
//     let arrRes = []

// }

function mergeAndRemoveDuplicates(array1, array2) {
    const uniqueEmails = new Set();
    const mergedArray = [];

    // Function to check if email is unique and add to mergedArray if so
    const addUniqueEmail = (student) => {
        if (!uniqueEmails.has(student.email)) {
            uniqueEmails.add(student.email);
            mergedArray.push(student);
        }
    };

    // Merge array1
    array1.forEach(addUniqueEmail);

    // Merge array2
    array2.forEach(addUniqueEmail);

    return mergedArray;
}

const arrayResult = mergeAndRemoveDuplicates(array1, array2);
console.log(arrayResult);






