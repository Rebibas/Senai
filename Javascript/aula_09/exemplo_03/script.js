const titulo=document.querySelector(".titulo");
const btnAdicionar=document.querySelector(".btnAdicionar")
const Lista=document.querySelector(".Lista")

btnAdicionar.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent="O farmador de aura adicionou mais um item"
    Lista.appendChild(li)
})