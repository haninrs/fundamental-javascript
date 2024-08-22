let input = "2811234567";
let input2 = "281654321";
let output = "(281)-123-4567";

function myFunc(num) {
  let a = num.slice(0, 3);
  let b = num.substring(3, 6);
  let c = num.substring(6, 10);

  return "(" + a + ")" + "-" + b + "-" + c;
}

console.log(myFunc(input));
console.log(myFunc(input2));

console.log(input2.slice(3,1))

// bisa gini juga
function phoneNumber (num){
    let format = '(***)-***-***'
    for(let i=0; i <num.length; i++){
        format = format.replace('*', num[i])
    }
    return format
}
console.log(phoneNumber(input2))