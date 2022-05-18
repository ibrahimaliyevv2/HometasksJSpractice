let circle = document.querySelector(".circle");
let windowBox = document.querySelector(".window-box");

windowBox.addEventListener("click", e=>{
    circle.style.left = e.clientX - (circle.offsetWidth/2) + "px";
    circle.style.top = e.clientY - (circle.offsetHeight/2) + "px";
})
