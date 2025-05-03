// using normal function
let n = 5;
let fact = 1;
for(let i=2; i<=n; i++) {
    fact = fact * i;
};
console.log(fact);

// using arrow function
let m = 7;
const factorial = (num) => {
    let f = 1;
    for(let i=2; i<=num; i++) {
        f = f * i;
    };
    return f;
}

console.log(factorial(m));