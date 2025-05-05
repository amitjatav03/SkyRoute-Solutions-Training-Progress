var timer = 30;
var score = 0;
var hitrn = 0;

// Event bubbling
// jispe click karoge wo elementpar event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega, waha bhi naa milne par event parent ke parent ke parent par listener dhundega

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function setNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for(var i=1; i<=102; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `
            <h1>Game Over</h1>
            <h2>Your Score is ${score}</h2>
            `
        }
    }, 1000)
}


document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickednum = dets.target.textContent;
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        setNewHit();
    }

})


makeBubble();
runTimer();
setNewHit();