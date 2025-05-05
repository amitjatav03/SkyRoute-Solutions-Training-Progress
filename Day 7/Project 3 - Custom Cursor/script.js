var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
    // console.log(dets); 
    // console.log(dets.x); 
    // console.log(dets.y); 
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
})