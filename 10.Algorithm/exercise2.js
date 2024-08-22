let input = 'Pig latin is cool !'
// let output = 'igPay altinay '

function myFunc (str){
    // let str2 = str.split(' ');
    // let res =[]
    // let res2 = []

    // for(let i = 0 ; i<str2.length ; i++){
    //     res.push((str2[i]).split(''))
    // }
    // for (let j =0 ; j <str2.length ; j++){
    //     res2.push(res[j].join('').substr(0,2).split('').reverse())
    // }
    // return res2
}


// console.log(myFunc(input))


function ayFunc(str){
    let res = str.split(' ').map(item => item.substring(1) + item[0]+ 'ay')
    return res.join(' ')
}

console.log(ayFunc(input))