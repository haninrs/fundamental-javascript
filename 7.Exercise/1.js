// ● Create a function to check if two objects are equal

// ● Example
    // ○ Input : { a: 2 } & { a: 1 }
    // ○ Output: false
// ● Example
    // ○ Input : { a: “Hello” } & { a: 1 }
    // ○ Output: false
// ● Example
    // ○ Input : { a: 1 } & { a: 1 }
    // ○ Output: true

    function myFunc(obj1, obj2){
        let res = false

        for (key in obj1){
            if (obj1[key] === obj2[key]){
                res = true
            }
        }
        return res
    }

    console.log(myFunc({a:1}, {a:1}))       //true
    console.log(myFunc({a:1}, {a: 'hello'})) // false