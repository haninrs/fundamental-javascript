function myFunc(nums){
    let num = new Set(nums)   
    let med = Math.floor(nums.length/num.size);  // size punya nya set
    let res = 0

    num.forEach(item =>{
        // console.log(res = nums.filter(val => val == item))
        if (nums.filter(val => val == item).length > med) {
            res = item
        }
    })

    return  res
}

console.log(myFunc([3,2,3]))
// console.log(myFunc([2,2,1,1,1,2,2,]))

