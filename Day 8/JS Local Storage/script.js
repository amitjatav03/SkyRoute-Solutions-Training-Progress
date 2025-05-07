let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

// set item (key, value) pairs in the localStorage
localStorage.setItem(key, value);

// get value at particular key
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key == "red" || key == "blue") {
    localStorage.removeItem(key)
    // agar key ko "red" ya "blue" set krenge toh woh key-value pair remove ho jaayega
}

if(key == 0) {
    localStorage.clear();
    // agar user key ko 0 set karega toh localStorage clear ho jaayega
}


// get length of items stored at localStorage
console.log(localStorage.length);


// indexing 
console.log(localStorage.key(2));
