// note 
const num = [1, 2, 3];
const numbe = [...num];  // copy dan bikin array baru

console.log(numbe);
console.log(num);

num[3] = 4;
num[1] = 10;
num[10] = 1;
num[7] = 3;

console.log(num);
