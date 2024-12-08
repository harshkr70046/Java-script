//! write a program that multipy the given data of array by 2
const multiplyEachBY2 = ((arr) => {
    let NewArray = [];
    arr.forEach((item)=>{
        NewArray.push(item*2);
    })
    return NewArray;
})

let NewArray = multiplyEachBY2([2,3,4,5,6]);
console.log(NewArray);
//! map method
const doubleVal = NewArray.map((iteam)=>{
    return iteam*2;
})
console.log(doubleVal);