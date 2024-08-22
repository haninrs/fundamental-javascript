let arr1 = [
    'apple',
    () => ['melon'] ,
    {name : 'orange'}
]

console.log(arr1[0]);
console.log(arr1[1]()[0]);
console.log(arr1[1]()[0]);