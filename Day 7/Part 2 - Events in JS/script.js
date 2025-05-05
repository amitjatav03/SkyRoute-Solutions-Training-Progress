let button = document.getElementById("btn")

// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by Right click Please");
})


// List of all keyboard events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events
// keydown, keypress, keyup

button.addEventListener("keydown", (e)=>{
    console.log(e)
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

button2 = document.getElementById("btn2")
console.log(button2)
button2.onclick = function(){
    console.log("I am Button number 2");
}