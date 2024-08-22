function myFunc(arr){
    let res = []
    for (let i = arr.length-1 ; i >= 0 ; i--){
        for (let j = i-1 ; j >= 0 ; j--){
            res.push(arr[i] - arr[j])
        }
    }
    return Math.max(...res) < 0 ? 0 : Math.max(...res)
}

console.log(myFunc([2,4,1]))
console.log(myFunc([7,6,5,3,1]))