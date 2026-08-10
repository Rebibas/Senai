const btn = document.querySelector("button")
const titulo = document.querySelector("h1")

btn.addEventListener("click", function(){
    titulo.textContent=("Título Modificado com Sucesso!")
})