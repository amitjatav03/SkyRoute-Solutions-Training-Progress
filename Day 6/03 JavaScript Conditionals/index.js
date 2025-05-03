console.log("Hello I am Conditional Tutorial");

let age = 1;
// let grace = 2;

// age += grace;
// console.log(age);

// // Arithmetic Operators
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if(age == 18) {
    console.log("You can drive");
}
else if(age == 0) {
    console.log("Are you kidding?");
}
else if(age == 1) {
    console.log("Are you again kidding?");
}
else {
    console.log("You cannot drive");
}


// Ternary Operator
let a = 6;
let b = 8; 
let c = a>b ? (a-b): (b-a);
/*
translates to:
if(a>b) {
    let c = a-b;
}
else {
    let c = b-a;
}
*/

console.log(c);


/*
REPL -> Read Evaluate Print Loop

== :- compares only value, it doesn't compare its type
=== :- compares value as well as its type
!=
!==


*/


// Comments:-
// This is Single Line Comment 
/*
This is a 
Multi Line 
Comment
*/