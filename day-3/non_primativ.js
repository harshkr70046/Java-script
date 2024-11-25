//! object syntext
let UserDetail = {
    firstName:"Harsh",
    //? we can also write key in quotes.
    "email":"harsh.com",
    MobNumber: 12345,
    isLogedIn: true
}
//! for accessing the element with key use dot
//* console.log(UserDetail.firstName); //* Harsh
//! adding element in object
UserDetail.last_name = "Kumar";
//* console.log(UserDetail.last_name); //* Kumar
//! way of accing the key which is written in quotes.
//* console.log(UserDetail["email"]); //* harsh.com
//! printing the UserDetail that is object
//* console.log(UserDetail)
//! Output
//* {
//*     firstName: 'Harsh',
//*     MobNumber: 12345,
//*     isLogedIn: true,
//*     last_name: 'Kumar'
//* }
//! type of UserDetail
//* console.log(typeof UserDetail); //* object

//! Array
let anotherDetail = ["Harsh","kumar",true];

//* accessing the element by index.
//* console.log(anotherDetail[0]); //* Harsh

//! implicet conversion of javaScript
let isVaild = true;
//* console.log(isVaild+1); //* 2
//* console.log(typeof isVaild+1) //* boolean1

//* console.log("1"+2); //* 12
//* console.log(2+"1"); //* 21
//* console.log(typeof 2+"1");//* Number1

let term = "2abc"
//* console.log(Number(term)) //* NaN => Not a Number

//* console.log( typeof Number(null)) //* number
//* console.log( typeof Number(undefined)) //* NaN

//* console.log(Number(null)) //* 0;
//* console.log(Number(undefined)) //* NaN
