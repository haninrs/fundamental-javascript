// ● Given an integer numRows, return the first numRows of Pascal's triangle.
// ● In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →

// ● Example 1:
    // ○ Input: numRows = 5
    // ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// ● Example 2:
    // ○ Input: numRows = 1
    // ○ Output: [[1]]

    /* output
    [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ]
    */

    let numRows = 5 ;
    // let a = [[1], [1,1], [1,2,1]]
    // let b =[]
    // b.push(a[-1][0])

    function myFunc(numRows){
        if (numRows === 0) return []
        if(numRows === 1) return [[1]]
        let res = []

        // 1,1,1
        for( let row = 0 ; row < numRows ; row++){
        let arr = []
            for(let col = 0 ; col <= row ; col++){
                if(col == 0 || col == row){
                    arr.push(1)
                } else {
                    let previous = res[row-1]
                    let sum = previous[col-1] + previous[col]
                    arr.push(sum)
                }
            }
            res.push(arr)
        }
        return res
    }

console.log(myFunc(5))


