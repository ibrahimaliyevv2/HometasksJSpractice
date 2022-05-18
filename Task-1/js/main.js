let circle = document.querySelector(".circle");
let windowBox = document.querySelector("window-box");

windowBox.addEventListener("click",getClickPosition, false);

function getClickPosition(e){
    let xPosition = e.clientX - (circle.offsetWidth/2);
    let yPosition = e.clientY - (circle.offsetHeight/2);

    let translate = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    circle.style.transform = translate;
}