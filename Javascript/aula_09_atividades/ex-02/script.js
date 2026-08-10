let importante= document.querySelector(".importante");
let btnDestacar=document.querySelector(".btnDestacar");
let destaque=document.querySelector("#destaque");

btnDestacar.addEventListener("click", function(){
    destaque.textContent = importante.textContent;
})