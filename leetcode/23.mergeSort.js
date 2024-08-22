// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

let lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

var mergeKLists = function (lists) {
    // let res = []
    let a = lists.join().replaceAll(',', ' ')
    return a.split(' ').sort((a,b)=> a-b)
};

console.log(mergeKLists(lists));
