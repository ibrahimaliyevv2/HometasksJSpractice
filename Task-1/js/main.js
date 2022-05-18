let circle = document.querySelector(".circle");
let windowBox = document.querySelector("window-box");

windowBox.addEventListener("click",getClickPosition, false);

function getClickPosition(e){
    circle.offsetLeft = e.clientX - (circle.offsetWidth/2);
    circle.offsetTop = e.clientY - (circle.offsetHeight/2);

    let translate = "translate3d(" + offsetLeft + "px," + offsetTop + "px, 0)";
    circle.style.transform = translate;
}
