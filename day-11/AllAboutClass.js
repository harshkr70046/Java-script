//! Encapsulation
class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance+=amount
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
// console.log(account.getBalance())
//! Abstraction
class CoffeMachine{
    start(){
        // call DB
        // filter Value
        return `starting the machine...`;
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} \n ${msgTwo}`
    }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());
//! polymorphism
class Bird{
    fly(){
        return `flying...`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`
    }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());
//! static method
class calculator{
    static add(a,b){
        return a+b;
    }
}
//this is not allowed
// let miniCalc =new calculator();
// console.log(miniCalc.add());
//*this is allowed
console.log(calculator.add(2,5));
//! Getter and setter
class Employee{
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw error("Salary can't be negative")
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return `you are not allowd to see salary`;
    }
    set salary(value){
        if(value<0){
            console.error("Invalid sallary")
        }
        else{
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice",500000)
console.log(emp.salary);