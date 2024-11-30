//! problem 1:
//* write a function named makeTea that takes one parameter,
//* 'tyoeOfTea', and returns a string like "Making green tea"
//* when called with "green tea". store the result in a variable
//* named 'teaOrder'.

function makeTea(typeOfTea){
    return (`making ${typeOfTea}`)
}
let teaOrder = makeTea("black tea");

//! problem 2:
//* create a function named 'orderTea' that takeks one parameter
//* 'TeaType'. inside this function,create another function named
//* 'confirmOrder' that returns a message like "order confirmed
//* for chai". cell 'confirmOrder' from within 'OrderTea' and return
//* the result. 
function orderTea(TeaType){
    function confirmOrder(){
        return `order confirmed for ${TeaType}`
    }
    return confirmOrder();
}
let teaConfirmation = orderTea("black tea")

//! problem 3:
//* write an arrow function named 'calculateTotal' that takes
//* two parameter 'price' and 'quantity'. The function sholud return 
//* the total cost by multiplying the 'price' and 'quantity'. 
//* store the result in a variable named 'totalCost'.

//* arrow function syntex
//! const function_name = (parameter) => {process}
const calculateTotal = (price,quantity)=>{
    return price*quantity;
}
let totalCost = calculateTotal(4,7);
// console.log(totalCost);
//! problem 4:
//* Write a function named 'processTeaOrder' that takes another
//* function 'makeTea' as a parameter and calls it with the 
//* argument "early gray".
//* return the result of calling 'makeTea'. 

//! this is higher order function or first class function
function makeTea(typeOfchai){
    return `${typeOfchai} is in the process`
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}
let watching = processTeaOrder(makeTea);
console.log(watching);

//! problem 5:
//* write a function named 'createTeaMaker' that returns another
//* function. The return function sholud take one parameter,
//* 'teaType', and return a message like "Making green tea". 
//* Store the returned function in a varibale named 'teaMaker' 
//* and call it with "green tea". 
function createTeaMaker(){
    return function returnFunction (teaType){
        return `Making ${teaType}`
    }
    
}
let teaMaker = createTeaMaker();
let result = teaMaker("green Tea")
console.log(result)