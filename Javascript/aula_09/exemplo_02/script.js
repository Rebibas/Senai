let titulo = document.querySelector("h1")
let btnATIVAR = document.querySelector(".btnATIVAR")
let btnDESATIVAR = document.querySelector(".btnDESATIVAR")

btnATIVAR.addEventListener("click", function(){
    titulo.classList.add("is-Active")
})
btnDESATIVAR.addEventListener("click", function(){
    titulo.classList.remove("is-Active")
})