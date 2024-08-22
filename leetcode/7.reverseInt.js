// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21
let x = -120000;

var reverse = function (x) {
  // let res = []
  let bit = Math.pow(2, 31) - 1;

  let rev = x.toString().split("").reverse().join("");
  let res = parseInt(rev);
  if (res >= bit || res <= -bit) {
    return 0;
  }
  for (let i = 0; i < x.length; i++) {
    if (res[i] == 0) {
      res.slice(i + 1, i.length - 1);
      return res;
    }
  }
  if (x < 0) {
    return "-" + res;
  } else {
    return res;
  }
};

console.log(reverse(x));
