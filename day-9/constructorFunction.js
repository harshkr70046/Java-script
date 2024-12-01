function person(name,age){
    this.name = name;
    this.age = age;
}
function Car(make, model){
    this.make = make;
    this.model = model;
}
let myCar = new Car("toyota","Camry")
console.log(myCar)

let letMyNewCar = new Car("Tata","Safari")
console.log(letMyNewCar)

function Tea(type){
    this.type = type;
    this.description = function (){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("Lemmon Tea");
console.log(lemonTea.description());

function Animal(species){
    this.species = species
}
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("dog")
console.log(dog.sound())

let Cat = new Animal("Cat")
console.log(Cat.sound())

function Drink(name){
    if(!new.target){
        throw new Error ("must use new key word")
    }
    this.name = name

}

let coffee = Drink("black tea")