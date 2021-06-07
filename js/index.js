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

// // 6) resize event
// window.addEventListener("resize", event => {
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
//     alert(`Width:${w} Height: ${h}`);

// });

// 7) scroll event


// const arrowTop = document.createElement("div");
// arrowTop.onclick = function () {
//     window.scrollTo(pageXOffset, 0);
// };

// //css components of arrow div
// arrowTop.style.height = "9px";
// arrowTop.style.width = "14px";
// arrowTop.style.color = "green";
// arrowTop.style.position = "fixed";
// arrowTop.style.top = "10px";
// arrowTop.style.left = "10px";
// arrowTop.style.cursor = "pointer";
// arrowTop.textContent = '▲';

// document.querySelector("body").prepend(arrowTop);

// window.addEventListener('scroll', function () {
//     arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
// });

// console.log(arrowTop)

// 8) select event
let inputButton = document.createElement("input");
inputButton.value = "this is nice";
let inputPara = document.createElement("p");
const textContentDiv = document.querySelector(".text-content");
textContentDiv.prepend(inputButton, inputPara)

document.querySelector("input").addEventListener("select", event => {
    console.log(event);
    const selectedItems = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    inputButton.value = selectedItems;
    inputButton.style.color = "orange"
});


// 9) dbl click event
const doubleHeader = document.querySelector("h2");
//console.log(doubleHeader)
doubleHeader.addEventListener("dblclick", event => {
    doubleHeader.style.color = "orange"
});




