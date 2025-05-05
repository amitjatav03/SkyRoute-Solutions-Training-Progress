let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let currImage = document.querySelector(".img");


let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"];

let ptr = 0;
currImage.src = `${images[ptr]}`


leftBtn.addEventListener("click", () => {
    if(ptr>0) {
        ptr--;
        currImage.src = `${images[ptr]}`
    }
    else if(ptr == 0) {
        ptr = images.length-1;
        currImage.src = `${images[ptr]}`
    }
})
rightBtn.addEventListener("click", () => {
    if(ptr<images.length-1) {
        ptr++;
        currImage.src = `${images[ptr]}`
    }
    else if(ptr == images.length-1) {
        ptr = 0;
        currImage.src = `${images[ptr]}`
    }
})


