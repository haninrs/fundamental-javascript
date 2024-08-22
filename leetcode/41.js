var firstMissingPositive = function(nums) {
    let a = nums.sort((a,b) => a-b)
    let b = []
    for(let i =0 ; i < a.length ; i++){
        if(a[i] >0) b.push(a[i])
    }


    // return b

    for(let k = 0 ; k <= b.length ; k++){
        let o = b[k]+b[k+1]
        let p = b[k]+1

        return o

    //     if( o != p ){
    //         return p
    //     }
    }

    // return b
};

console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([1,2,0]));