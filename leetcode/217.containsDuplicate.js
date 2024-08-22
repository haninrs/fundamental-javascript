// Input: nums = [1,2,3,1]
// Output: true

// // Example 2:
// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Found a duplicate
        }
        seen.add(num);
    }
    return false; 
};