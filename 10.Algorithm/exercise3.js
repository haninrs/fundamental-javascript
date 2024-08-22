let sensor = ["anjing", "babi", "monyet"];
let udhSensor = ["a****g", "b**i", "m****t"];

let input = "anjing sedang bermain dengan babi dan monyet";

function myFunc(str) {
  let rest = [];
  let res = str.split(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i] == sensor[0]) {
      rest.push(res[i].replace(res[i], "a****g"));
    } else if (res[i] == sensor[1]) {
      rest.push(res[i].replace(res[i], udhSensor[1]));
    } else if (res[i] == sensor[2]) {
      rest.push(res[i].replace(res[i], udhSensor[2]));
    } else {
      rest.push(res[i]);
    }
  }
  return rest;
}
console.log(myFunc(input));
// console.log(input.replace("anjing", "a***g"));
