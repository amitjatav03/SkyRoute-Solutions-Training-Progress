// alert
alert("Hello world");

// console.log
console.log("Code is running...");
console.log("Code is also running...");
console.log("Code is running like a wow...");

// prompt
var a = prompt("Enter your number");
console.log("Your number is " + a);

// confirm
var isTrue = confirm("Are you sure you want to leave this page and blast your computer");
if(isTrue) {
    console.log("Computer is blasting");
}
else {
    console.log("Computer is not blasting");
}

// We change styles also using JS
document.title = "Hey I am good";

document.body.style.backgroundColor = "red";
// above code add inline css to an element


/* 
Check using:-
node --version
npm --version

What is Node JS?
Node JS is a V8 engine of JavaScript which is used by Chrome.

We can use JS in two ways:-
1. In Backend we use Nodejs
2. In Frontend we use script file and link with our HTML or by using <script> tag.

npm - Node package manager
which is used to install packages in nodejs

*/