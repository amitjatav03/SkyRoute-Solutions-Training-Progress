console.log("Rohan is a hecker")
console.log("Harry is a hacker")

// this function will run after all other lines of code will be executed
// this is the asynchronous nature of the javascript
setTimeout(() => {
    console.log("I am inside settimeout")
}, 3000)
setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000)

console.log("The End")



// Callback functions 
// A callback funtion is a function passed into another function as an argument, which is then involved inside the outer function to complete an action.

const fn = (args) => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
} 

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harry", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)