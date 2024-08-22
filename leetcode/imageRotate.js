var rotate = function(matrix) {
    let res = []
    for (let i = 0 ; i<matrix.length; i++){
        let arr = []
        for (let j = matrix[i].length-1; j>=0; j--){
            arr.push(matrix[j][i])
        }
        res.push(arr)
    }
    return res
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))



console.log(BigInt('0b'+a)+BigInt("0b" + b).toString(2))