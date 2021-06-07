// Your code goes here

// 1) mouseover event
const mouseSite = document.querySelector("h1");
//console.log(mouseSite)
mouseSite.addEventListener("mouseover", function (event) {
    event.target.style.color = "orange";
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// 2) keydown event
const intro = document.querySelector(".intro p");
console.log(intro);
document.addEventListener("keydown", event => {
    intro.textContent += event.key;
    console.log(event)
});

// 3) wheel event

//console.log(busWheel)

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    busWheel.style.transform = `scale(${scale})`;
}
let scale = 1;
const busWheel = document.querySelector(".intro img");
busWheel.addEventListener("wheel", zoom);

// 4) load event
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// 5) focus event
const homeFocus = document.querySelector("nav a");
//console.log(homeFocus)
homeFocus.addEventListener("focus", event => {
    event.target.style.background = "orange"
});

// 6) resize event



