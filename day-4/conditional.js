//! condition checking and 
//! performing operation on the basic of conditon
//! this will do it by if else statement
//! quesiton 1:
//* checking if a number is greater then another number:
let first_number = 7;
let second_number = 7;
if(first_number > second_number){
    console.log(`Number ${first_number} is greater then ${second_number}`);
}
else if(first_number === second_number){
    console.log(`Number ${first_number} is equal to ${second_number}`);
}
else{
    console.log(`Number ${first_number} is lesser then ${second_number}`);
}
//! problem 2:
//! check whether a string is equal to another string or not.
let str1 = "harsh";
let str2 = "kumar";
if(str1==str2) console.log("yup.. it is equal.");
else console.log("Nope, str1 is not equal to str2");
//! verity 2nd
let str3 = "101";
let num = 101;
if(str3==num) console.log("yep.. it is equal.");
else console.log("Nope, str1 is not equal to str2");
//? this is showing yes beacuse we have use == this symbol 
//? only check the value not the data type

//! if we use === this will check data type also

if(str3===num) console.log("yup.. it is equal.");
else console.log("Nope, str1 is not equal to str2");
//* it is running fine.

//! probelm 3:
//! check whether the array is empty or not.
let iteam = ["iteam1"];
if(iteam.length===0) console.log("yes it is empty..");
else console.log("no it it not empty!")