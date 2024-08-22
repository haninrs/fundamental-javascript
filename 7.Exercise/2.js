// ● Create a function to get the intersection of two objects
// ● Example
    // ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    // ○ Output: { a: 1 }

    function myFunc(a,b){
        let res = {};

        for (key in a){
            if (a[key] === b[key]){
                res[key] = a[key]
            }
        }
        return res
    }

    console.log(myFunc({ a: 1, b: 2 } , { a: 1, c: 3 }));  // {a : 1}