//! problem 1:
//* write a for loop that loops through the array ["green tea"
//* ,"black tea","chai","oolong tea"] and stops the loops when it
//* finds chai. Store all the teas before chai in a new array named
//* selectedTeas.
let Tea = ["green tea","black tea","chai","oolong tea"]
let selectedTeas = [];
for(let i=0;i<Tea.length;i++){
    if(Tea[i]==="chai") break;
    selectedTeas.push(Tea[i]);
}
//! problem 2:
//* write a for loop that loops through the array ["London"
//* ,"New York","Paris","Berlin"] and skips the paris
//* Store all the other in a new array named vistiedCities.
let Cities = ["London","New York","Paris","Berlin"]
let vistiedCities = [];
for(let i=0;i<Cities.length;i++){
    if(Cities[i]==="Paris") continue;
    vistiedCities.push(Cities[i]);
}
//! problem 3:
//* use a for of loop to iterate through the array [1,2,3,4,5]
//* and stop when the number 4 is found. 
//* store the numbers before 4 in an array named smallNumbers.
let number = [1,2,3,4,5];
let smallNumbers = [];
for(const num of number){
    if(num===4) break;
    smallNumbers.push(num);
}
//! problem 4:
//* use a for of loop to iterate through the array ["chai",
//* "green tea","herbal tea","black tea"]
//* and skip "herbal tea". 
//* store the other teas in an array named "preferredTeas".
let teaCollection = ["chai","green tea","herbal tea","black tea"]
let preferredTeas = [];
for(const tea of teaCollection){
    if(tea==="herbal tea") continue;
    preferredTeas.push(tea);
}
//! problem 5:
//* use a for in loop to loop through an object containg city 
//* populations.
//*     stop the loop when the populations of "Berlin" is found
//*     and store all previous Cities populations in a new object
//*     named cityPopulations.

//*     let cityPopulations = {
//*         "London":8900000,
//*         "New York":8400000,
//*         "Paris":2200000,
//*         "Berlin":350000
//*     };
let citysPopulations = {
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":350000
}
let cityPopulations = {}
for(const city in citysPopulations){
    if(city==="Berlin") break;
    cityPopulations[city] = citysPopulations[city]
}
//! problem 6:
//* use a for in loop to loop through an object containg city 
//* populations.
//*     stop the loop when the populations below 3 million
//*     and store all previous Cities populations in a new object
//*     named largecity.

//*     let worldCities = {
//*         "Sydney":8900000,
//*         "Tokyo":8400000,
//*         "Berlin":2200000,
//*         "Paris":350000
//*     };

let worldCities = {
    "Sydney":8900000,
    "Tokyo":8400000,
    "Berlin":2200000,
    "Paris":3500000
}
let largecity = {}
for(const population in worldCities){
    if(worldCities[population]<3000000) continue;
    largecity[population] = worldCities[population];
}


//! problem 7:
//* write a forEach loop that itterate through the array ["earl grey",
//*     "green tea","chai", "oolong tea"].
//*     stop the loop when "chai" is found and store all previous
//*     tea types in an array named availabeTeas.
let teaName = ["earl grey","green tea","chai", "oolong tea"]
let availabeTeas = [];
teaName.forEach(function(tea){
    if(tea==="chai"){
        return;
    }
    availabeTeas.push(tea);
})
// console.log(availabeTeas);

//! problem 8:
//* write a for each loop that loops through the array ["Berlin"
//* ,"Tokyo","Sydney","Paris"] and skips the Sydney and
//* Store all the other in a new array named travelledcity.
let CityName = ["Berlin","Tokyo","Sydney","Paris"]
let travelledcity = [];
CityName.forEach((city)=>{
    if(city!=="Sydney"){
        travelledcity.push(city);
    }
    return;
})
// console.log(travelledcity);
//! problem 9:
//* write a for loop that iterates through the array [2,5,7,9]
//* skip the value 7 and multiply the rest by 2. store the results
//* in a new array named doubledNumber.
let numArray = [2,5,7,9];
let doubledNumber = [];
for(let i=0;i<numArray.length;i++){
    if(numArray[i]===7) continue
    doubledNumber.push(numArray[i]*2);
}
//! problem 10:
//* use a for-of loop to iterate through the array ["chai",
//*     "green tea","black tea","jasmine tea","herbal tea"]
//*     and stop when the length of the current tea name is greater
//*     then 10.
//*     store the teas iterated over in an array named shortTeas.
let teaTravell = ["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas = [];
for(const t of teaTravell){
    if(t.length>10) break;
    shortTeas.push(t);
}
