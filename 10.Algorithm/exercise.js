let input = [2,1,4,3,5] // 1,2,3,4,5 => 1, 5 ,3 ,4, 2 => 1, 5, 2, 3, 4 => 1,5,2,4,3
let output = [1,5,2,4,3] // [min1, max1, min2, max2, min3]

let input1 = [10,11,12,13,14,15,16]

// function minMax (arr){
//     let c = arr.sort((a,b)=>a-b);
//     let b = c.length-1;
//     for(let a = 1 ; a < c.length ; a++){
//         if (c[a] < c[b]){
//             [c[a], c[b]] = [c[b], c[a]]
//         } else if (c[a] > c[b]){
//             [c[a], c[b]] = [c[b], c[a]]   
//         }
//     }
//     return c
// }

function minMax2 (arr){
    let res = [];
    let a = arr.sort((a,b) => a-b);
    // for(let i = 0 , j = a.length-1; i<a.length , j>=i ; i++ , j--){
    //     res.push(a[i], a[j])
    // }  -> cara 1

   // cara 2 
    for (let i =0 ; i < Math.ceil(arr.length/2); i++){
        res.push(arr[i])
        res.push(arr[arr.length-1 - i])
    }

    // hilangan element duplicate
    // const res1 = new Set(res) -> cara 1
    // res = res.slice(0, arr.length) -> cara 2
    res.length = arr.length  // cara 3
    return res
}

console.log(minMax2(input))
console.log(minMax2(input1))