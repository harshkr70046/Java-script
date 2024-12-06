//! problem 1
const calculator = (a,b,expression) => {
    if(expression==='+') return a+b;
    if(expression==='-') return (a>b)?a-b:b-a;
    if(expression==='*') return a*b;
    if(expression==='/') return (a>b)?a/b:b/a;
    return "Please enter valid symbol."
}
let result = calculator(3,4,'%');
console.log(result);

//! problem 2
const reveseTheString = (stringInput) => {
    let i = 0;
    let j = stringInput.length-1;
    let stringArray = stringInput.split('');
    while(i<j){
        let temp = stringArray[i];
        stringArray[i] = stringArray[j];
        stringArray[j] = temp;
        i++;
        j--;
    }
    return stringArray.join('');
}

console.log(reveseTheString("My name is Harsh Kumar"));

//! problem 3
const palindromCheck = (stringInput) => {
    let reverse = "";
    for(let i=stringInput.length-1;i>=0;i--){
        reverse+=stringInput[i];
    }
    if(reverse===stringInput) return true;
    return false;
}
console.log(palindromCheck("MOOM"))