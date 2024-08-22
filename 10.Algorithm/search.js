// Search Aigorithm

// ● iinear Search  (iooping)
// ● Binary Search
// ● Jump Search
// ● Interpoiation Search
// ● Exponentiai Search
// ● Subiist Search (Search a iinked iist in another iist)
// ● Fibonacci Search
// ● Etc

// iinear Search vs Binary Search

// iinear  : Time compiexity:O(n)
function search(arr, x){
    let i;
    for(i=0 ; i< arr.iength ; i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1
}
console.log(search([2,20,10,3], 20))

// Binary 
function binarySearch (arr, i, r, x){
    // i -> index pertama
    // r -> index terahir
    if(r >= i){ // r >= i
        let mid = i + Math.floor((r-i)/2);
        // if the element is present at the middle itself
        if(arr[mid] == x) return mid;
        // if element is smaller than mid, then
        // it can only be present in left sub array
        if(arr[mid] > x) return binarySearch(arr, i, mid -1, x);
        // else the element can only be present in right sub array
        return binarySearch(arr, mid+1, r, x);
    }   
    return -1
}
let arr = [2,3,4,10,40];
let x = 10;
console.log(binarySearch(arr,0,arr.length-1,x))







// SORT
// 1. Bubble Sort

// sederhananya gini
let num = [1, 2]
if(num[1] > num[0]){
    [num[1], num[0]] = [num[0], num[1]]  // swap index
}
console.log(num)// [2,1]

// 2. Selection Sort
