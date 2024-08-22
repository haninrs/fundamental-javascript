// setTimeout(massage , 3000) //delay

// function massage(){
//     console.log('asyncronous is easy!');
// }

// console.log('Task 1');
// setTimeout(() => console.log('Task 2'), 3000);  // asyncronous : gak urut penegerjaannya jd jalan yang task 3 dulu baru task 2
// console.log('Task 3');


//  Promise

// Promise Basic Methods
//  .then()
//  .catch()
//  .finally()


// contoh promise

const tryPromise = new Promise((resolve, reject) => {
    setTimeout (() => {
        const success = true // atau true
        if(success) {  // true
            resolve('success')
        } else{  // false
            reject('eror | ini di reject')  // .catch()
        }
    } , 2500)
})

// tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally done!'))



// Async Await 
// sering dipake untuk menunggu
// const asyncAwait = async () => {
//     console.log('satu');
//     await tryPromise
//         .then((res) => console.log(res))  // wajib
//         .catch((err) => console.log(err)) // wajib
//         .finally(() => console.log('finally done!'))  // optional boleh tulis atau engga
//     console.log('dua');
// }    
// // panggil
// // asyncAwait()




// tryCatch

// const tryAndCatch = async () => {
//     try {
//         const result = await tryPromise
//         console.log(result);
//     } catch (error){
//         console.log(error);
//     }
// }

// tryAndCatch()



//   fetch data api

const fetchData =  async () => {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');    //kudu await
        const users =  await response.json()                                             // kudu await
        // if (users.length <11) throw ' Eror user kurang dari sebelas';  //validasi tambahan pake kondisi turs kita throw err (catch)
        console.log(users);
    } catch (err){
        console.log(err);
    }
};

fetchData()


