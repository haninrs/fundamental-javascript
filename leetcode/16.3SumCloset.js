// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

let nums = [-1, 2, 1, -4],
  target = 1;

var threeSumClosest = function (nums, target) {
    let a = nums[target] + nums[target+1] + nums[target-1]
    return a
};


console.log(threeSumClosest(nums, target));

// blom celar