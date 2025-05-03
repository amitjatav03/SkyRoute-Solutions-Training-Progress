// Arrow Function

const func1 = (x) => {
    console.log("I am an arrow function", x);
}

func1(34);
func1(66);
func1(84);


const sum = (a, b) => {
    let c = a + b;
    return c;
}

let y = sum(1,3);
console.log(y);