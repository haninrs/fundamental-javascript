// ● Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.

// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4
// ● Example 3:
// ○ Input: nums = [1]
// ○ Output: 1

let nums = [2, 2, 1];

function myFunc(arr) {
  let a = arr.sort((a, b) => a - b);
  let b = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] != (a[i-1]) && a[i] != (a[i + 1]) ) {
      b.push(a[i])
    }
  }
  return b;
}

console.log(myFunc(nums));
