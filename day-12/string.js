//! problem 1
//! write a program that prints from a to z
let print = (() => {
    for(let i=97;i<123;i++){
        console.log(String.fromCharCode(i));
    }
})
//*print();
//! probelm 2
//! write a program that count vouble in string
let countVouble = ((str) => {
    let cnt = 0;
    for(let c of str){
        if(c==='A' || c==='E' || c==='I' || c==='O' || c==='U'
          || c==='a' || c==='e' || c==='i' || c==='o' || c==='u'
        ) cnt++;
    }
    return cnt;
})
let totalCount = countVouble("bcdbcd");
//*console.log(totalCount);

//! problem 3
let isStringAllCharIsVowel = ((s) => {
    for (let c of s) {
        if (
            c !== 'A' && c !== 'E' && c !== 'I' && c !== 'O' && c !== 'U' &&
            c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u'
        ) return false;
    }
    return true;
});
//*console.log(isStringAllCharIsVowel("aaaaa")); // Output: true
//*console.log(isStringAllCharIsVowel("abcde")); // Output: false

let allVoubleInString = ((s) => {
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    for(let c of s){
        if(c==='a' || c==='A') a++;
        else if(c==='e' || c==='E') e++;
        else if(c==='i' || c==='I') i++;
        else if(c==='o' || c==='O') o++;
        else if(c==='u' || c==='U') u++;
    }
    if(a>0 && e>0 && i>0 && o>0 && u>0) return true;

    return false;
})
//*console.log(allVoubleInString("abcbcdeeioddu"))

//! readble code
let checkAllVowelsAreAvailable = ((s) => {
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    // Count occurrences of vowels in the string
    for (let c of s.toLowerCase()) {
        if (vowels.hasOwnProperty(c)) {
            vowels[c]++;
        }
    }

    // Check if all vowels are present at least once
    for (let v in vowels) {
        if (vowels[v] === 0) {
            return false;
        }
    }

    return true;

});

console.log(checkAllVowelsAreAvailable("aeiou"));         // true
console.log(checkAllVowelsAreAvailable("AEIOUxyz"));      // true
console.log(checkAllVowelsAreAvailable("aeio"));          // false
console.log(checkAllVowelsAreAvailable("quick brown fox")); // true
console.log(checkAllVowelsAreAvailable("abcdefg"));       // false
