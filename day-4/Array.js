//! Array:
//* Arrray is a non-premative data type that store similar
//*type of data in the contigues memory allocation.

//! problem 1:
//* Declare an array named 'teaFlavors' that contains the 
//* strings "green tea","black tea", and "oolong tea".
//*      Access the first element of the array and store it in a
//*      variable named 'firstTea'.
let teaFlavors = ["green_tea","black_tea","oolong_tea"]
let firstTea = teaFlavors[0];

//! probelm 2:
//* You have an array name 'teaTypes' containing 
//* "herbalTea","whiteTea", and "masala_Chai".
//*      change the second element of the array to "jasmineTea"
let teaTypes = ["herbalTea","whiteTea","masala_Chai"];
teaTypes[1] = "jasmineTea";

//! problem 3:
//* Declare an array named 'citiesVisited' containing "Mumbai"
//* and "Sydney"
//*     Add "Berlin" to the array using the push method
let citiesVisited = ["Mumbai","Sydney"]
citiesVisited.push("Berlin")

//! problem 4:
//* You have an array named 'teaOrders' with 'chai','iced tea'
//* ,'matcha',and 'earl grey'.
//*     Remove the last element of the array using the 'pop'
//*     method and store it in a varibale named 'lastOrder'.
let teaOrders = ["chai","iced tea","matcha","earl grey"]
let lastOrder = teaOrders.pop()

//! problem 5:
//* Declare an array named 'ceties' that contains the 
//* strings "London","Tokyo","Paris", and "New York".
//*      Access the first element of the array and store it in a
//*      variable named 'favoriteCity'.
let ceties = ["London","Tokyo","Paris","NewYork"]
let favoriteCity = teaFlavors[0];

//! problem 6:
//* You have an array named 'popularTeas' containing "green tea",
//* "oolong tea", and "chai".
//*     Create a soft copy of this array named 'softCopyTeas'.
let popularTeas = ["green tea","oolong tea","chai"]
let softCopyTeas = popularTeas;

//! problem 7:
//* You have an array named 'topCities' containing "Berlin",
//* "Singapore", and "New York".
//*     Create a soft copy of this array named 'hardCopyTeas'.
let topCities = ["Berlin","Singapore","New York"]
let hardCopyTeas = [...topCities];

//! problem 8:
//* You have an array named 'europeanCities' containing "Paris",
//* "Rome", and "asianCities" containing "Tokyo" and "Bangkok"
//*     Merge these two arrays into a new array named 'wordCities'.
let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
let wordCities = europeanCities.concat(asianCities);
console.log(wordCities)

//! problem 9:
//* You have an array named 'teaMenu' containing "masala chai","oolong tea",
//* "green tea","earl grey".
//*     Find the length of the array and store it in a variable named 'menuLength'.
let teaMenu = ["masala chai","oolong tea","green tea","earl grey"]
let menuLength = teaMenu.length

//! problem 10:
//* You have an array named 'cityBucketList' containing "Kyoto","London","Cap town",
//* "Vancouver".
//*     Check if the "London" is in the array and store the result in a varibale
//*     named 'isLondonInList'
let cityBucketList = ["Kyoto","London","Cap town","Vancouver"]
let isLondonInList = cityBucketList.includes("London") //* boolean value
// let isLondonInList = cityBucketList.indexOf("London") for index
console.log(isLondonInList);