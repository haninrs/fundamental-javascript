// array descruturing

let arr = [1, 2, 3];
let [a, b, c] = arr; //proses descruturing / alias

console.log(c);

//  object descruturing

let person = {
  name: "jhon",
  age: 20,
};

let { age, name } = person; // alias

console.log(name);
console.log(age);

// spread operator |... -> copy value
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1, 4, 5];
console.log(arr3);
console.log(arr4);

const data1 = {
  name: "andi",
};

const data2 = {
  email: "andi@gmail.com",
};

const data3 = {
  ...data1,
  ...data2,
};

console.log(data3);
