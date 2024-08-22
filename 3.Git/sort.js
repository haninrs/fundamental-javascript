let a = 42;
let b = 27;
let c = 18;

if (a>b){   // 42 > 27
    let d=a; // d= 42
    a = b;  // a = 27
    b = d;  // b =42
}

if (b>c){       // 42 > 18
    let d = b;  // d = 42
    b = c ;     // b = 18
    c = d;      // c = 42
}

if (a>b){       // 27 > 18
    let d=a;    // d = 27
    a = b;      // a = 18
    b = d;      // b = 27
}

console.log(a, b, c);