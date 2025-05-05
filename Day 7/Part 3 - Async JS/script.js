// setTimeout(callback, timeinms)
// callback jab bhi likha ho to uski jagah function aata hai


// console.log("hey");
// setTimeout(function(){
//     console.log("hey3");
// }, 2000)
// console.log("hey2");




// setTimeout(function(){
//     // the function is called callback function
//     // isko ham callback kyun kehte hain?
//     // kyunki yeh turant nahi chal raha hai, yeh dusri jagah betha hua hai aur 12s baad fir ise callback kiya jayga

//     // callback functions humesha async code mein answer aane par chalta hai
// },12000)







// console.log("hey"); // 1 (sync)
// console.log("hey2"); // 2 (sync)
// setTimeout(function(){
//     console.log("hey3"); // 4 (sync)
// }, 0);
// console.log("hey4"); // 3 (sync)


/*
main stack
-----------
    hey     (X)
    hey2    (X)
    hey4    (X)
    then event loop side stack se puchega kya tumhara kaam complete ho gaya hai

    hey3    (X)

side stack 
-----------
    hey3    (X)
    hey3 bola haa kab ka ho gaya, then hey3 moves to main stack

*/









// var ans = fetch(`https://www.facebook.com`);
// console.log(ans); // jab se line chali iska answer aaya hi nahi that
// kyunki request gayi it, it may take time



// fetch(`https://www.facebook.com`) // hamne facebook.com par request bheji apne system se








// promise

// var ans = new Promise((res, rej) => {
//     if(true) {
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolve hogaya tha");
// })
// .catch(function(){
//     console.log("reject hua tha !");
// })




// user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject
// var ans = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if(n<5) {
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log("below");
// })
// .catch(function(){
//     console.log("above");
// })





// sabse pahle ghar par aao
// gate kholo aur gate lagao
// khana pakao khana khao
// incognito mode chalao
// sojao kyuki tum tak gaye ho
// these all tasks are asynchronous tasks
// inko order mein kese rakhenge

// promise chaining

// var ans = new Promise(function(res, rej){
//     return res("sabse pahle ghar par aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("gate kholo aur gate lagao");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana pakao khaana khaao")
//     })
// })

// p3.then(function(data){
//     console.log(data);
// })







// async await


// without using async await
// function abcd() {
//     // fetch matlab tumne kisi url par request bheji
//     // fetch data laayega
//     // par wo raw format mein aayga
//     // to hame use convert karna padta hai
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd();


// using async await
async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}

// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyunki humein nahi pata uska answer kab aayega
abcd();