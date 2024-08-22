// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000

let nums1 = [1,3], nums2 = [2,4]
console.log(nums1.concat(nums2).sort((a,b)=> a-b))

var findMedianSortedArrays = function(nums1, nums2) {
    let merge = nums1.concat(nums2).sort((a,b)=>a-b)
    // let res = 0;
    if(merge.length % 2 != 0){
        return merge[Math.ceil(merge.length/2)-1]
    } else{ // 1,2,3,4
        let mid = Math.floor(merge.length/2)
        return (merge[mid-1]+merge[mid])/2
    }
};

console.log(findMedianSortedArrays(nums1,nums2))