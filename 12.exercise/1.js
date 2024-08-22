// ● Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2

let nums = [3, 2, 3];
let nums2 = [2,2,1,1,1,2,2];
// console.log(Math.floor(nums2.length/2))

function myFunc(nums) {
  let num = nums.sort((a,b)=>a-b)
  let a = Math.floor(nums.length/2);
  let element = 0 ;
  let count = 0;


  //  2, 3, 3  | 1,1,1,2,2,2,2  | 2,2,1,1,1,2,2
  for (let i = 0 ; i < num.length ; i++){
    if(count == 0 ){
      element = num[i]
      count += 1
    }

    if( num[i] == element){
      count += 1
    } else if (num[i] != element){
      count = 0
    }
    // console.log(count) 

  }

  if(count > a) {
    return element
  }
}

console.log(myFunc(nums))
console.log(myFunc(nums2))