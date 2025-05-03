console.log("Hey this is tutorial 55");

let a = 5; 
// a = a + 1;
var b = 6; 
let c = "Harry"; // string - collection of characters
let _a = "Shubham"; // valid
// var 55a = "Rohan"; // not valid 

// console.log(a+b+8);

// to check the datatype of a variable
// console.log(typeof a, typeof b, typeof c);

const a1 = 6;
// a1 = a1 + 1; // -> we cannot change the value of a constant variable

{
    let a = 66;
    var b = 77;
    console.log("value of c: " + c);
    console.log("value of a inside block: " + a);
    console.log("value of b inside block: " + b);
}
console.log("value of a outside block: " + a);
console.log("value of b outside block: " + b);

// const constantB; // not allowed


/*
Rules for choosing variable name:-
- Letters, digits, underscore and $ sign allowed
- Must begin with $, _ or letters
- JS reserved words cannot be used as a variable name
- Harry & haRRy are different variables (case sensitive)

var vs let in JS:-
1. var is globally scoped while let & const are block scoped
2. var can be updated & re-declared within its scope
3. let can be updated but not re-declared
4. const can neither be updated nor be re-declared
5. var variables are intitialized with undefined whereas let and const variables are not initialized
6. const must be initialized during declaration unlike let and var

*/