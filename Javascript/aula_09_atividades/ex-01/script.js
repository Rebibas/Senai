let display=document.querySelector(".display");
let resultado=document.querySelector("#resultado");
let btnShow=document.querySelector(".btnShow");

btnShow.addEventListener("click", function(){
    resultado.textContent = display.textContent;
})