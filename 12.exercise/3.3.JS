function myFunc(num){
    let res = []

    for (let i = 1 ; i <= num ; i++){
        let arr = []

        for(let j = 0 ; j < i ; j++){
            // buat kulit si 1 [1, .., .., 1]
            if (j==0 || j == i-1){  
                arr.push(1)         
            }else{
                arr.push(res[i-2][j-1] + res[i-2][j])
            }
        }
        res.push(arr)
    }   
        return res
}

console.log(myFunc(5));