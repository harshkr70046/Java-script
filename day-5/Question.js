//! calculate the sum of number from 1 to 10 using for loop
function sumOneToN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let totalSum = sumOneToN(10);
console.log(totalSum);
//! check for prime number
function primeCheck(num){
    if(num<=1) return false;
    if(num===2 || num===3) return true;
    if(num%2===0 || num%3===0) return false;
    for(let i=5;i*i<=num;i+=6){
        if((num%i===0) || (num%(i+2)==0)) return false;
    }
    return true;
}
console.log(primeCheck(67))

//! program to check the leap year
function isLeapYear(Year){
    if(((Year%4==0) && (Year%100!=0)) || (Year%400==0)){
        return true;
    }
    return false;
}
let check = isLeapYear(2004)
if(check){
    console.log("Yes it is a leap year.")
}
else{
    console.log("No,it is not a leap year.")
}

//! draw the pattern
// * 
// * *
// * * *
function patternPrinting(num){
    for(let i=0;i<num;i++){
        let s = "";
        for(let j=0;j<=i;j++){
            s = s+'*'+' ';
        }
        console.log(s);
    }
}
patternPrinting(5);
