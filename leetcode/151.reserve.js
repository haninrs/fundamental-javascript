var reverseWords = function(s) {
    s.split(' ')
    delete s ('')
    return 
};
console.log(reverseWords(" the sky            is blue"))


console.log('\n')
function searchVowel(s){
    let vowel = ['a','i','u','e','o']
    let count = 0
    for (let i=0; i< s.length ; i++){
        if(vowel.includes(s[i].toLowerCase())){
            count++
        }
    }
    return count
}
console.log(searchVowel('Apple'))
console.log('\n')


// example [10,10,10,8,9,7,11,11,12,12,12,12] -> output 4
// length maximum element 
function lengthMaximumValue(arr){
    let max = Math.max(...arr)
    // let max = arr.sort((a,b)=> b-a)[0]  | descending gede ke kecil
    // let count = 0 

    // for(let i = 0 ; i < arr.length ; i++){
    //     if(arr[i] == max){
    //         count++
    //     }
    // }
    // return count

    // pakai filter
    
    return arr.filter(item => item == max).length
}
console.log(lengthMaximumValue([10,10,10,8,9,7,11,11,12,12,12,12]))
