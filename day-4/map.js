// let arr = [10,2,3,5,4]
// const map = new Map();
// for(let i=0;i<arr.length;i++){
//     map.set(arr[i],i);
// }
// for(let i=0;i<arr.length;i++){
//     let double = arr[i]*2;
//     if(map.has(double) && map.get(double) !== i) console.log("true");
// }
// console.log("false")

const harsh = require('prompt-sync')();
let arr = [];
let n = parseInt(harsh("enter the size of the arrray = "));
function take_input(arr){
    for(let i=0;i<n;i++){
        let num = parseInt(harsh("enter the element of array = "));
        arr.push(num);
    }
}
function to_print(arr){
    for(let i=0;i<n;i++){
        console.log(arr[i]);
    }
}
take_input(arr);
to_print(arr);
function to_print_freq(arr){
    const map = new Map();
    for(const num of arr){
        map.set(num , (map.get(num) || 0) + 1);
    }
    for(const num of arr){
        console.log(`${num} => ${map.get(num)}`)
    }
    console.log(map);
}
to_print_freq(arr);

