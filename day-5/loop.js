const prompt = require('prompt-sync')();
//*! here we solve some problem based on loop
//! so we can understand the loop in depth
//! problem 1:
//* write a while loop that calculate the sum 
//* all number from 1 to 5 and store the result
//* in a varibale named sum.
let i = 1;
let sum = 0;
while(i<=5){
    sum+=i;
    i++;
}
//! problem 2:
//* write a while loop that counts down from 5 to 1
//* and stores the number in an array named countdown.
let start = 5;
let countdown = [];
while(start>=1){
    countdown.push(i);
    start--;
}
//! problem 3:
//* write a do while loop that prompts a user to enter
//* their favorite tea type until they enter "stop".
//*  store each tea type in an array named 'teaCollection'.
let teaCollection = [];
let tea;
do{
    tea = prompt("enter the tea name = ")
    if(tea!=="stop") teaCollection.push(tea);
}while(tea!=="stop");

//! probelm 4:
//* write a do while loop that adds number from 1 to 3
//* and stores the result in a variable named total.
let j = 1;
let total = 0;
do{
    total+=j;
    j++;
}while(j<=3);

//! problem 5:
//* write a for loop that multiply each element in the Array
//* [2,4,6] by 2 and store the result in a new array named multipledNumber.
let number = [2,4,6];
let multipledNumber = [];
for(let i=0;i<number.length;i++){
    let temp_number = number[i]*2;
    multipledNumber.push(temp_number);
}
//! problem 6:
//* write a for loop that lists all the cities in the array 
//* ["paries","new york","tokyo","london"] and store each 
//* city in a new array named cityList.

let cities = ["paries","new york","tokyo","london"];
let city = [];
for(let i = 0;i<cities.length;i++){
    city.push(cities[i]);
}
