let sensor = ["anjing", "babi", "monyet"];
// let udhSensor = ["a****g", "b**i", "m****t"];

let input = "anjing sedang bermain dengan babi dan monyet";


function myFunc (str){
    const res = []
    str.split(' ').forEach((item) => {
        if(sensor.includes(item)){
            res.push(item[0] + '*'.repeat(item.length - 2) + item[item.length-1])
        }else {
            res.push(item)
        }
    });
    return res.join(' ')
}

console.log(myFunc(input))