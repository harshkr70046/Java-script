//!Number
let Score = 100
//! we can also define number using new key word
let accountBalance = new Number(200);

//* console.log(Score); //* 100
//* console.log(accountBalance); //* 200

//* console.log(typeof(Score)) //* number
//* console.log(typeof(accountBalance)); //* object

//! boolean
let isActive = true;
let isReallyActive = new Boolean(true);

//* console.log(typeof(isActive)); //* boolean
//* console.log(typeof(isReallyActive)); //* object

//! null and undefine

let balance; //? this means undefine now may be in future it may get anything.
let currentBalance = null; //? this means the value is null, null means nothing.

//* console.log(typeof(balance)); //* undefine
//* console.log(typeof(currentBalance)); //* object

//! string
let userName = "Harsh";
let Name = new String("Kumar");

//* console.log(typeof(userName)); //*string
//* console.log(typeof(Name)); //* object
//! normal printing of string
//* console.log(userName); //* Harsh
//! use of backtik modern way
//* console.log(`Hii ${userName} ${Name}, How are you ?`)
//* Hii Harsh Kumar, How are you ?

let sm1 = Symbol("Harsh");
let sm2 = Symbol("Harsh");

//* console.log(sm1); //* Symbol(Harsh)
//* console.log(typeof(sm1)); //* symbol
//! symbol genearte uniqueness. 
//* console.log(sm1==sm2) //*false

