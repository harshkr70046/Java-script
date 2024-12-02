//! object in js
let car = {
    make:"Toyota",
    model:"Camry",
    year: 2022,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
};
// console.log(car)
//!method
function person(name, age){
    this.name = name;
    this.age = age;
}
let Harsh = new person("Harsh",20.5);
// console.log(Harsh);
// console.log(Harsh.name)
// console.log(Harsh.age)

function Animal (type){
    this.type = type
}
//! method
Animal.prototype.speak = function(){
    return `${this.type} can make a sound`;
}
Array.prototype.Harsh = function(){
    return `custom method ${this}`
}
let dog = new Animal("Dog");
// console.log(dog.speak())
let myArray = [1,2,3,4]
let mynewArray = [1,2,3,4]
class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make}:this is an inheritance example`
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start())
// console.log(myCar.drive())


